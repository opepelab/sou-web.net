declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly SERVICE_DOMAIN: string;
    readonly NEXT_PUBLIC_API_KEY: string;
  }
}