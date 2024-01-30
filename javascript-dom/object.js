var siswa = new Object();
siswa.namaDepan = "jaka";
siswa.namaBelakang = "anwar";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this. namaDepan + " " +this. namaBelakang;
};

alert("Nama :" + siswa.namaLengkap());

// function namaLengkap(){}