import { Hono } from 'hono';

type Bindings = {
  JWT_SECRET: string;
  DB: D1Database;
};

export class HonoApp extends Hono<{ Bindings: Bindings }> {}
