let buah = {
    nama : "apple",
    harga : 20000,
    tersedia : true
};

console.log(buah.nama);
console.log(buah.harga);
console.log(buah["tersedia"]);

let buah2 = {
    nama : "melom",
    harga : 20000,
    tersedia : true,
    pemasok : {
        perusahaan : "buah segar",
        alamat :"jalan banteng",
        no_telp : "00000000"
    }
};

console.log(buah2.pemasok.perusahaan);
console.log(buah2.pemasok.no_telp);
console.log(buah2["pemasok"]["alamat"]);