import { Hono } from 'hono';

type Bindings = {
  JWT_SECRET: string;
  DABABASE_HOST: string;
  DABABASE_USERNAME: string;
  DABABASE_PASSWORD: string;
  DABABASE_NAME: string;
  //   MY_BUCKET: R2Bucket
  //   PASSWORD: string
};

export class HonoAppApp extends Hono<{ Bindings: Bindings }> {}
