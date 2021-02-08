// 3. Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini

let kalimat = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
console.log(kalimat.test("Bagaimana cara memulai usaha bisnis"));
console.log(kalimat.test("Bootcamp impact byte"));
console.log(kalimat.test("Status covid hari ini"));
