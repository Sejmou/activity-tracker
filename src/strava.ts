// don't have to import env vars as strava package will use the environment variables from the runtime environment automatically
import strava from 'strava-v3';

export async function getAthlete() {
  return strava.athlete.get({});
}
