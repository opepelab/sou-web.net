import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: 'sou',
  apiKey: process.env.API_KEY,
});

export default client;