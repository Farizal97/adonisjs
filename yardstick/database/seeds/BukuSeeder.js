'use strict'
const moment = require('moment');
/*
|--------------------------------------------------------------------------
| BukuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class BukuSeeder {
  async run () {
   await Factory.get('buku').createMany(5);
  }
}

module.exports = BukuSeeder
