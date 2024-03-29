import { parse } from 'csv-parse';
import fs from 'fs'

const habitablePlanets = []

const isHabitable = planet =>
  planet['koi_disposition'] === 'CONFIRMED' &&
  planet['koi_insol'] > 0.36 &&
  planet['koi_insol'] < 1.11 &&
  planet['koi_prad'] < 1.6

fs
  .createReadStream('kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true
  }))
  .on('data', data => {
    if (isHabitable(data))
      habitablePlanets.push(data)
  })
  .on('error', error => console.error(error))
  .on('end', _ => {
    console.log(habitablePlanets.map(planet => planet['kepler_name']))
    console.log(habitablePlanets.length, 'done')
  })