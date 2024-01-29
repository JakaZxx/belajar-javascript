var x = "25";
var y = "3.14";

 var toNum = parseInt(x);
 var toFloat = parseFloat(y);
 console.log( toNum + toNum);
var toString = toNum.toString();
console.log(toString + toString);

///funsi deklarasi
function jumlah(a,b){
    return a + b;
}

///fungsi ekspresi
var kurang = function jumlah(a,b){
    return a - b;
};

alert(jumlah(5, 20));
alert(jumlah(25, 5));