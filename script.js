// ini java script

function luassegitiga() {
    let panjang= parseInt(document.getElementById("panjang-alas").value);
    let tinggi= parseInt(document.getElementById("tinggi").value);

    //validasi input
    if (isNaN(panjang) || isNaN(tinggi)) {
        alert("Form Masih Kosong");
        return;
    }

    //hitung luas
    let luas= 0.5 * (panjang) * (tinggi);

    //tampilkan rincian perhitungan dan hasilnya
    let rincianL = `L= 1/2 x alas + tinggi <br>
                 = 0.5 x ${panjang} x ${tinggi} <br>;
                 = ${luas}`;
                 document.getElementById("rincianluas").innerHTML= rincianL;
                 document.getElementById("luas").textContent = `Luas segitiga adalah: ${luas};`
}

function resetluas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").textContent = "Hasil Perhitungan"
    document.getElementById("rincianluas").textContent = "";
}

function luasjajargenjang() {
    let panjang= parseInt(document.getElementById("alas").value);
    let tinggi= parseInt(document.getElementById("tinggi").value);

     // Validasi input
  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Form Masih Kosong");
    return;
  }
    //Hitung Luas 
    let luas = (alas) * (tinggi);

    //Tampilkan rincian perhitungan dan hasil
    let rincianL = `L= alas + tinggi <br>
                 = ${alas} x ${tinggi} <br>
                 = ${luas}`;
    document.getElementById("rincianluas").innerHTML = rincianL;
    document.getElementById("luas").textContent = `Luas jajargenjang adalah: ${luas};`

}


