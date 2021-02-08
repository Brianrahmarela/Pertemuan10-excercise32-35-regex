// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

// function validation(){

// var input = prompt("masukkan kata", "");
// // console.log(input);

// let cek = input;
// console.log(cek);

let karakter = /M/;
if (karakter.test("Monkeys")){

  // console.log(karakter.test("Monkeys"));
  console.log("Huruf pertama adalah huruf Besar")
} else {
  console.log("Huruf pertama adalah huruf kecil")
}

//   // let validasiAngka = /M/;
//   //ambil value
//   var hrfAwal = document.getElementById("cekhrfpertma").value;
//   console.log(hrfAwal);
  
//   // var validasiAngka = /^[0-9]+$/;
//   // if (hrfAwal.value.match(validasiAngka)) {
//   //   console.log("Huruf pertama adalah huruf Besar" );
//   //   // alert("Huruf pertama" + hrfAwal.value + "adalah huruf Besar" );
//   //   // console.log("Huruf pertama" + hrfAwal.value + "adalah huruf Besar" );
//   // } else {
//   //   // alert("Huruf pertama" + hrfAwal.value + "adalah huruf kecil!" );
//   //   console.log("Huruf pertama adalah huruf Kecil" );
//   //     // console.log("Huruf pertama" + hrfAwal.value + "adalah huruf kecil!" );
//   //     // hrfAwal.value="";
//   //     // hrfAwal.focus();
//   //     return false;
//   // }
// }


// var input = prompt("masukkan kata", "");
// // // console.log(input);

// let cek = input;
// console.log(cek);

// let karakter = /M/;
// if (karakter.test("monkeys")){

//   // console.log(karakter.test("Monkeys"));
//   console.log("Huruf pertama adalah huruf Besar")
// } else {
//   console.log("Huruf pertama adalah huruf kecil")
// }