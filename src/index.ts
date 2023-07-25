import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { jwt } from 'hono/jwt';
import { HonoAppApp } from './types';
import router from './routes';

const app = new HonoAppApp();

// Allow cors for all paths
app.use('*', cors());

// 404 handler
app.notFound((c) => c.text('You are lost!', 404));

// Apply authentication to all the routes prefixed with 'auth'
app.use('/auth/*', async (c, next) => {
  const auth = jwt({
    secret: c.env.JWT_SECRET,
  });

  return auth(c, next);
});

// Register all the routes
router(app);

// Handle caught/uncaught errors
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    // Get the custom response
    console.log('status', err.status);
    console.log(JSON.stringify((err as HTTPException).getResponse()));
    return (err as HTTPException).getResponse();
  }

  console.error(err);

  return c.text(err.message);
});

export default app;
