  
# Install dependencies only when needed
FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# If using npm with a `package-lock.json` comment out above and use below instead
COPY package.json package-lock.json ./ 
RUN npm i

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

FROM gcr.io/inductive-gift-351105/sou-web-net

ARG _CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID ${_CONTENTFUL_SPACE_ID}

ARG _CONTENTFUL_DELIVERY_TOKEN
ENV CONTENTFUL_DELIVERY_TOKEN ${_CONTENTFUL_DELIVERY_TOKEN}

ARG _NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GA_ID ${_NEXT_PUBLIC_GA_ID}

ARG _MAIL_USER
ENV MAIL_USER ${_MAIL_USER}

ARG _MAIL_PASS
ENV MAIL_PASS ${_MAIL_PASS}

ARG _MAIL_TO
ENV MAIL_TO ${_MAIL_TO}

# RUN yarn build

# If using npm comment out above and use below instead
RUN npm run build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]