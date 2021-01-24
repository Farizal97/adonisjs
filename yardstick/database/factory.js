'use strict'
const moment = require('moment');

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('buku', (faker) => {
 return {
   judul: faker.name(),
   tahun_terbit:faker.year({min:2000,max:2020}),
   deskripsi:faker.paragraph(),
   created_at:moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at:moment().format('YYYY-MM-DD HH:mm:ss')
 }
})
