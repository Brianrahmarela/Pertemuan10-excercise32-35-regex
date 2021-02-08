// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

function validation(){
  //ambil value inputan
  let inputanUser = document.getElementById("cekhrfpertama").value;
  // console.log(inputanUser);
  let TampilHasil = document.querySelector("#tampil");
  
  //buat validasi regex
  let karakterRegex = /^[A-Z]/;
  
  if (karakterRegex.test(inputanUser)) {
    console.log(`Huruf pertama ${inputanUser} adalah huruf Besar`);
    TampilHasil.innerHTML = `Huruf pertama <b>${inputanUser}</b> adalah huruf <b>Besar</b>`;
    
  } else {
    console.log(`Huruf pertama ${inputanUser} adalah huruf Kecil`);
    TampilHasil.innerHTML = `Huruf pertama <b>${inputanUser}</b> adalah huruf <b>Kecil</b>`;
  }
  document.getElementById("cekhrfpertama").value = "";
  
}