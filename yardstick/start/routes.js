'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','BukuController.index');
Route.get('/daftar-buku','BukuController.daftarBuku');
Route.get('/input-buku','BukuController.inputBuku');
Route.get('/edit/:id','BukuController.editBuku');
Route.get('/delete/:id','BukuController.delete');

Route.post('/store','BukuController.store');
Route.post('/update/:id','BukuController.update');

// Route.on('/').render('welcome')

// Route.get('/adonis', 'BelajarAdonisController.index');
// Route.post('/adonis/create', 'BelajarAdonisController.create');
// Route.put('/adonis/update', 'BelajarAdonisController.update');

// Route.get('/testing',() => 'hello world').as('get.hellow');
// Route.route('/',() => 'ini adalah multiple method',['GET','POST','PUT']);
// Route:get('posts/:id?',({ params }) => {
//     return `post id ${params.id}`;
// });
