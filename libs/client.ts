import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export default client;