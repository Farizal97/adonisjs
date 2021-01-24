'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Buku extends Model {
    static get table() {
        return 'buku';
    }
}

module.exports = Buku
