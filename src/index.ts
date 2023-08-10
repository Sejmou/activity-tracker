import express from 'express';
import { getAthlete } from './strava';
import { env } from 'env';

const port = env.PORT || 3000;

// defining the main function as async allows us to use await inside it, e.g. if our server needs to connect to a database
async function main() {
  console.log('Starting server...');
  const app = express();

  app.get('/', async (req, res) => {
    const athlete = await getAthlete();
    console.log(athlete);
    res.send('Hello Athlete!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
}

main();
