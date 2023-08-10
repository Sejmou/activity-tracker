// loads environment variables from .env file and validates them against a schema, exposing it as a type-safe object
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

export const env = createEnv({
  server: {
    STRAVA_CLIENT_ID: z
      .string()
      // transform to number
      .transform(s => parseInt(s, 10))
      // make sure transform worked
      .pipe(z.number()),
    STRAVA_CLIENT_SECRET: z.string().min(1),
    STRAVA_ACCESS_TOKEN: z.string().min(1),
    STRAVA_REDIRECT_URI: z.string().min(1),
    PORT: z.string().optional(),
  },
  runtimeEnv: process.env,
});
