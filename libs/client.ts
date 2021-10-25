import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.NODE_ENV,
  apiKey: process.env.PUBLIC_URL,
});

export default client;