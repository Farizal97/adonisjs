'use strict'
const {validateAll} = use ('Validator');
const Buku = use ('App/Models/Buku');

class BukuController {
    index({view}) {
        return view.render('welcome');
    }

    async daftarBuku({view}) {
        const buku = await Buku.all();
        return view.render('daftar-buku',{buku:buku.rows});
    }
    inputBuku({view}) {
        return view.render('input-buku');
    }

    async editBuku({view,params}) {
        const id = params.id;
        const buku = await Buku.find(id);
        return view.render('edit-buku',{buku});
    }

    async update({request,response,params,session}) {
        const id = params.id;
        const data =  request.post();
        const buku = await Buku.find(id);
        
        const rules = {
            judul: 'required|string',
            tahun_terbit: 'required|integer',
            deskripsi: 'string'
        }

        

        const validation = await validateAll(data,rules);
        if(validation.fails()) {
            session
            .withErrors(validation.messages())
            .flashAll();

            return response.redirect('back');
        }

        buku.judul = data.judul;
        buku.tahun_terbit = data.tahun_terbit;
        buku.deskripsi = data.deskripsi;
        await buku.save();

        session.flash({notification: 'data Berhasil Diupdate ke Database'});
        return response.redirect('back');
    }

    async store({request,response,session}) {
        const rules = {
            judul: 'required|string',
            tahun_terbit: 'required|integer',
            deskripsi: 'string'
        }

        const data = request.post();

        const validation = await validateAll(data,rules);
        if(validation.fails()) {
            session
            .withErrors(validation.messages())
            .flashAll();

            return response.redirect('back');
        }

        const buku = new Buku();

        buku.judul = data.judul;
        buku.tahun_terbit = data.tahun_terbit;
        buku.deskripsi = data.deskripsi;
        await buku.save();

        session.flash({notification: 'data Berhasil Disimpan ke Database'});
        return response.redirect('back');
    }

    async delete({response,params,session}) {
        const id = params.id;
        const buku = await Buku.find(id);

        await buku.delete();
        session.flash({notification: 'data Berhasil Dihapus Pada Database'});
        return response.redirect('back');
    }
}

module.exports = BukuController
