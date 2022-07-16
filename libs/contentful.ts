import { createClient } from 'contentful';

const client = createClient({
  space: <string>process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: <string>process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
});

export default client;
