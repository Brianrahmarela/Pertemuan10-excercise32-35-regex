//2. Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit karakter

let noHp = /^\d{10,12}$/;

if (noHp.test(123456789012)){

  console.log("Format sesuai")
} else {
  console.log("Format tidak sesuai")
}