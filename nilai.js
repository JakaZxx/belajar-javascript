function hitungnilai(nilai) {
    if (nilai < 40) {
        return 'E';
    } else if (nilai < 65) {
        return 'D';
    } else if (nilai < 75) {
        return 'C';
    } else if (nilai < 85) {
        return 'B';
    } else if (nilai <= 100) {
        return 'A';
    } else {
        return 'Nilai tidak valid💀';
    }
}

function nilai() {
    var nilai = parseFloat(prompt("Masukkan nilai Anda: "));
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert("masukan nilai anda 😒");
    } else {
        var nilai = hitungnilai(nilai);
        alert("Nilai Anda adalah 😁: " + nilai);
    }
}

nilai();
