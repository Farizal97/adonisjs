'use strict'

class BelajarAdonisController {
    index({request,response}) {
       const data = request.get();
       console.log(data);
       return true;
    }
    create({request,response}) {
    //     const data = request.post();
    //    console.log(data);
    // const data =  request.only(['nama','jurusan']);
    // const data =  request.except(['nama','jurusan']);
    const nama = request.input('nama','angga risky');
    console.log(nama);
       return true;
    }
    update({request,response}) {
        return 'ini adalah method update';
    }
}

module.exports = BelajarAdonisController
