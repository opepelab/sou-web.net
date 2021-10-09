import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'sou',
  apiKey: process.env.API_KEY,
});