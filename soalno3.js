// 3. Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini

function searchKalimat(){
  //ambil value inputan
  let kalimat = document.getElementById("kalimatsch").value;
  // console.log(kalimat);
  let TampilHasil3 = document.querySelector("#tampil3");
  // console.log(TampilHasil2);
  
  //buat validasi regex
  let schKalimat = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
  
  if (schKalimat.test(kalimat)) {
    console.log(`Inputan user: ${kalimat}`);
    TampilHasil3.innerHTML = `<b>Hasil pencarian:<br></b> ${kalimat}`;
    
  } else {
    console.log(`Inputan user: ${kalimat} hasil pencarian tidak ditemukan`);
    TampilHasil3.innerHTML = `hasil pencarian tidak ditemukan`;
  }
  document.getElementById("tampil3").value = "";
}

// let kalimat = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
// console.log(kalimat.test("Bagaimana cara memulai usaha bisnis"));
// console.log(kalimat.test("Bootcamp impact byte"));
// console.log(kalimat.test("Status covid hari ini"));
