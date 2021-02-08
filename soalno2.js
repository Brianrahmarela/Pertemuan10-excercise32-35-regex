//2. Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit karakter

// let noHp = /^\d{10,12}$/;

// if (noHp.test(123456789012)){

//   console.log("Format sesuai")
// } else {
//   console.log("Format tidak sesuai")
// }

function validationNohp(){
  //ambil value inputan
  let inputanNoHp = document.getElementById("nohp").value;
  console.log(inputanNoHp);
  let TampilHasil2 = document.querySelector("#tampil2");
  
  //buat validasi regex
  let noHp = /^\d{10,12}$/;
  
  if (noHp.test(inputanNoHp)) {
    console.log(`Inputan user: ${inputanNoHp} format sesuai`);
    TampilHasil2.innerHTML = `Inputan user: <b>${inputanNoHp}</b>, sebanyak <b>${inputanNoHp.length} digit, </b> format <b>sesuai</b>`;
    
  } else {
    console.log(`Inputan user: ${inputanNoHp} format tidak sesuai`);
    TampilHasil2.innerHTML = `Inputan user:<b>${inputanNoHp}</b>, sebanyak <b>${inputanNoHp.length} digit, </b> format <b>tidak sesuai</b>`;
  }
  document.getElementById("nohp").value = "";
  
}