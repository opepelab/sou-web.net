  
# Install dependencies only when needed
FROM gcr.io/inductive-gift-351105/sou-web-net
ARG _CONTENTFUL_SPACE_ID
ARG _CONTENTFUL_DELIVERY_TOKEN
ARG _NEXT_PUBLIC_GA_ID
ARG _MAIL_USER
ARG _MAIL_PASS
ARG _MAIL_TO

FROM node:lts-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./ 
RUN npm ci

# Rebuild the source code only when needed
FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
# Production image, copy all the files and run next
FROM node:alpine AS runner

ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID="${_CONTENTFUL_SPACE_ID}"
ENV NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN="${_CONTENTFUL_DELIVERY_TOKEN}"
ENV NEXT_PUBLIC_NEXT_PUBLIC_GA_ID="${_NEXT_PUBLIC_GA_ID}"
ENV NEXT_PUBLIC_MAIL_USER="${_MAIL_USER}"
ENV NEXT_PUBLIC_MAIL_PASS="${_MAIL_PASS}"
ENV NEXT_PUBLIC_MAIL_TO="${_MAIL_TO}"
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]