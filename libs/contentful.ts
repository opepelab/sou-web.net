import { createClient } from 'contentful';

const client = createClient({
  space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN),
});

export default client;
