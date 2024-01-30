var siswa = new Object();
siswa.namaDepan = "jaka";
siswa.namaBelakang = "anwar";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this. namaDepan + " " +this. namaBelakang;
};

//object JSON
var siswa2 = {
    namaDepan : "yanto",
    namaBelakang : "bambang",
    alamat : "bandung",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    },
};

alert("Nama :" + siswa.namaLengkap());
alert("Nama :" + siswa2.namaLengkap());

// function namaLengkap(){}