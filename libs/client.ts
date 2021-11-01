import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: 'sou',
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export default client;