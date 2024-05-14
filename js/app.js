window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

AOS.init({
    duration:800,
});

//-----------------------------------------------------------------------------------------------------
// --1--
// kurang
function kurangiJumlah() {
    var jumlahInput = document.getElementById('jumlahProduk');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah() {
    var jumlahInput = document.getElementById('jumlahProduk');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang() {
    var jumlah = parseInt(document.getElementById('jumlahProduk').value);
    alert('added ' + jumlah + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --1 end--

// --2--
// kurang
function kurangiJumlah2() {
    var jumlahInput = document.getElementById('jumlahProduk2');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah2() {
    var jumlahInput = document.getElementById('jumlahProduk2');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang2() {
    var jumlah2 = parseInt(document.getElementById('jumlahProduk2').value);
    alert('added ' + jumlah2 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --2 end--

// --3--
// kurang
function kurangiJumlah3() {
    var jumlahInput = document.getElementById('jumlahProduk3');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah3() {
    var jumlahInput = document.getElementById('jumlahProduk3');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang3() {
    var jumlah3 = parseInt(document.getElementById('jumlahProduk3').value);
    alert('added ' + jumlah3 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --3 end--

// --4--
// kurang
function kurangiJumlah4() {
    var jumlahInput = document.getElementById('jumlahProduk4');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah4() {
    var jumlahInput = document.getElementById('jumlahProduk4');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang4() {
    var jumlah4 = parseInt(document.getElementById('jumlahProduk4').value);
    alert('added ' + jumlah4 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --4 end--

// --5--
// kurang
function kurangiJumlah5() {
    var jumlahInput = document.getElementById('jumlahProduk5');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah5() {
    var jumlahInput = document.getElementById('jumlahProduk5');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang5() {
    var jumlah5 = parseInt(document.getElementById('jumlahProduk5').value);
    alert('added ' + jumlah5 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --5 end--


// --6--
// kurang
function kurangiJumlah6() {
    var jumlahInput = document.getElementById('jumlahProduk6');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah6() {
    var jumlahInput = document.getElementById('jumlahProduk6');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang6() {
    var jumlah6 = parseInt(document.getElementById('jumlahProduk6').value);
    alert('added ' + jumlah6 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --6 end--


// --7--
// kurang
function kurangiJumlah7() {
    var jumlahInput = document.getElementById('jumlahProduk7');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah7() {
    var jumlahInput = document.getElementById('jumlahProduk7');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang7() {
    var jumlah7 = parseInt(document.getElementById('jumlahProduk7').value);
    alert('added ' + jumlah7 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --7 end--

// --8--
// kurang
function kurangiJumlah8() {
    var jumlahInput = document.getElementById('jumlahProduk8');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah8() {
    var jumlahInput = document.getElementById('jumlahProduk8');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang8() {
    var jumlah8 = parseInt(document.getElementById('jumlahProduk8').value);
    alert('added ' + jumlah8 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// --8 end--

//-----------------------------------------------------------------------------------------------------

// ----------------------11 --
// kurang
function kurangiJumlah11() {
    var jumlahInput = document.getElementById('jumlahProduk11');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah11() {
    var jumlahInput = document.getElementById('jumlahProduk11');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang11() {
    var jumlah11 = parseInt(document.getElementById('jumlahProduk11').value);
    alert('added ' + jumlah11 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------11 end--

// ----------------------12 --
// kurang
function kurangiJumlah12() {
    var jumlahInput = document.getElementById('jumlahProduk12');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah12() {
    var jumlahInput = document.getElementById('jumlahProduk12');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang12() {
    var jumlah12 = parseInt(document.getElementById('jumlahProduk12').value);
    alert('added ' + jumlah12 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------12 end--

// ----------------------13 --
// kurang
function kurangiJumlah13() {
    var jumlahInput = document.getElementById('jumlahProduk13');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah13() {
    var jumlahInput = document.getElementById('jumlahProduk13');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang13() {
    var jumlah13 = parseInt(document.getElementById('jumlahProduk13').value);
    alert('added ' + jumlah13 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------13 end--

// ----------------------14 --
// kurang
function kurangiJumlah14() {
    var jumlahInput = document.getElementById('jumlahProduk14');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah14() {
    var jumlahInput = document.getElementById('jumlahProduk14');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang14() {
    var jumlah14 = parseInt(document.getElementById('jumlahProduk14').value);
    alert('added ' + jumlah14 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------14 end--

// ----------------------15 --
// kurang
function kurangiJumlah15() {
    var jumlahInput = document.getElementById('jumlahProduk15');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah15() {
    var jumlahInput = document.getElementById('jumlahProduk15');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang15() {
    var jumlah15 = parseInt(document.getElementById('jumlahProduk115').value);
    alert('added ' + jumlah15 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------15 end--

// ----------------------16 --
// kurang
function kurangiJumlah16() {
    var jumlahInput = document.getElementById('jumlahProduk16');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah16() {
    var jumlahInput = document.getElementById('jumlahProduk16');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang16() {
    var jumlah16 = parseInt(document.getElementById('jumlahProduk16').value);
    alert('added ' + jumlah16 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------16 end--

// ----------------------17 --
// kurang
function kurangiJumlah17() {
    var jumlahInput = document.getElementById('jumlahProduk17');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah17() {
    var jumlahInput = document.getElementById('jumlahProduk17');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang17() {
    var jumlah17 = parseInt(document.getElementById('jumlahProduk17').value);
    alert('added ' + jumlah17 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------17 end--

// ----------------------18 --
// kurang
function kurangiJumlah18() {
    var jumlahInput = document.getElementById('jumlahProduk18');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah18() {
    var jumlahInput = document.getElementById('jumlahProduk18');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang18() {
    var jumlah18 = parseInt(document.getElementById('jumlahProduk18').value);
    alert('added ' + jumlah18 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------18 end--

//-----------------------------------------------------------------------------------------------------

// ----------------------21 --
// kurang
function kurangiJumlah21() {
    var jumlahInput = document.getElementById('jumlahProduk21');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah21() {
    var jumlahInput = document.getElementById('jumlahProduk21');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang21() {
    var jumlah21 = parseInt(document.getElementById('jumlahProduk21').value);
    alert('added ' + jumlah21 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------21 end--

// ----------------------22 --
// kurang
function kurangiJumlah22() {
    var jumlahInput = document.getElementById('jumlahProduk22');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah22() {
    var jumlahInput = document.getElementById('jumlahProduk22');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang22() {
    var jumlah22 = parseInt(document.getElementById('jumlahProduk22').value);
    alert('added ' + jumlah22 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------22 end--

// ----------------------23 --
// kurang
function kurangiJumlah23() {
    var jumlahInput = document.getElementById('jumlahProduk23');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah23() {
    var jumlahInput = document.getElementById('jumlahProduk23');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang23() {
    var jumlah23 = parseInt(document.getElementById('jumlahProduk23').value);
    alert('added ' + jumlah23 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------23 end--

// ----------------------24 --
// kurang
function kurangiJumlah24() {
    var jumlahInput = document.getElementById('jumlahProduk24');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah24() {
    var jumlahInput = document.getElementById('jumlahProduk24');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang24() {
    var jumlah24 = parseInt(document.getElementById('jumlahProduk24').value);
    alert('added ' + jumlah24 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------24 end--

// ----------------------25 --
// kurang
function kurangiJumlah25() {
    var jumlahInput = document.getElementById('jumlahProduk25');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah25() {
    var jumlahInput = document.getElementById('jumlahProduk25');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang25() {
    var jumlah25 = parseInt(document.getElementById('jumlahProduk25').value);
    alert('added ' + jumlah25 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------25 end--

// ----------------------26 --
// kurang
function kurangiJumlah126() {
    var jumlahInput = document.getElementById('jumlahProduk26');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah26() {
    var jumlahInput = document.getElementById('jumlahProduk26');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang26() {
    var jumlah26 = parseInt(document.getElementById('jumlahProduk26').value);
    alert('added ' + jumlah26 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------26 end--

// ----------------------27 --
// kurang
function kurangiJumlah27() {
    var jumlahInput = document.getElementById('jumlahProduk27');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah27() {
    var jumlahInput = document.getElementById('jumlahProduk27');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang27() {
    var jumlah27 = parseInt(document.getElementById('jumlahProduk27').value);
    alert('added ' + jumlah27 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------27 end--

// ----------------------28 --
// kurang
function kurangiJumlah28() {
    var jumlahInput = document.getElementById('jumlahProduk28');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah28() {
    var jumlahInput = document.getElementById('jumlahProduk28');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang28() {
    var jumlah28 = parseInt(document.getElementById('jumlahProduk28').value);
    alert('added ' + jumlah28 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------28 end--


//-----------------------------------------------------------------------------------------------------

// ----------------------31 --
// kurang
function kurangiJumlah31() {
    var jumlahInput = document.getElementById('jumlahProduk31');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah31() {
    var jumlahInput = document.getElementById('jumlahProduk31');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang31() {
    var jumlah31 = parseInt(document.getElementById('jumlahProduk31').value);
    alert('added ' + jumlah31 + ' To Cart');
    $('#tambahKeKeranjangModal').modal('hide');
}
// ----------------------31 end--

// ----------------------32 --
// kurang
function kurangiJumlah32() {
    var jumlahInput = document.getElementById('jumlahProduk32');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah32() {
    var jumlahInput = document.getElementById('jumlahProduk32');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang32() {
    var jumlah32 = parseInt(document.getElementById('jumlahProduk32').value);
    alert('added ' + jumlah32 + ' To Cart');
    $('#tambahKeKeranjangModal32').modal('hide');
}
// ----------------------32 end --

// ----------------------33 --
// kurang
function kurangiJumlah33() {
    var jumlahInput = document.getElementById('jumlahProduk33');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah33() {
    var jumlahInput = document.getElementById('jumlahProduk33');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang33() {
    var jumlah33 = parseInt(document.getElementById('jumlahProduk33').value);
    alert('added ' + jumlah33 + ' To Cart');
    $('#tambahKeKeranjangModal33').modal('hide');
}
// ----------------------33 end --

// ----------------------34 --
// kurang
function kurangiJumlah34() {
    var jumlahInput = document.getElementById('jumlahProduk34');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah34() {
    var jumlahInput = document.getElementById('jumlahProduk34');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang34() {
    var jumlah34 = parseInt(document.getElementById('jumlahProduk34').value);
    alert('added ' + jumlah34 + ' To Cart');
    $('#tambahKeKeranjangModal34').modal('hide');
}
// ----------------------34 end --

// ----------------------35 --
// kurang
function kurangiJumlah35() {
    var jumlahInput = document.getElementById('jumlahProduk35');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah35() {
    var jumlahInput = document.getElementById('jumlahProduk35');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang35() {
    var jumlah35 = parseInt(document.getElementById('jumlahProduk35').value);
    alert('added ' + jumlah35 + ' To Cart');
    $('#tambahKeKeranjangModal35').modal('hide');
}
// ----------------------35 end --

// ----------------------36 --
// kurang
function kurangiJumlah36() {
    var jumlahInput = document.getElementById('jumlahProduk36');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah36() {
    var jumlahInput = document.getElementById('jumlahProduk36');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang36() {
    var jumlah36 = parseInt(document.getElementById('jumlahProduk36').value);
    alert('added ' + jumlah36 + ' To Cart');
    $('#tambahKeKeranjangModal36').modal('hide');
}
// ----------------------36 end --

// ----------------------37 --
// kurang
function kurangiJumlah37() {
    var jumlahInput = document.getElementById('jumlahProduk37');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah37() {
    var jumlahInput = document.getElementById('jumlahProduk37');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang37() {
    var jumlah37 = parseInt(document.getElementById('jumlahProduk37').value);
    alert('added ' + jumlah37 + ' To Cart');
    $('#tambahKeKeranjangModal37').modal('hide');
}
// ----------------------37 end --

// ----------------------38 --
// kurang
function kurangiJumlah38() {
    var jumlahInput = document.getElementById('jumlahProduk38');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    if (jumlahSaatIni > 1) {
        jumlahInput.value = jumlahSaatIni - 1;
    }
}

// tambah
function tambahJumlah38() {
    var jumlahInput = document.getElementById('jumlahProduk38');
    var jumlahSaatIni = parseInt(jumlahInput.value);
    jumlahInput.value = jumlahSaatIni + 1;
}

// tambah produk
function tambahKeKeranjang38() {
    var jumlah38 = parseInt(document.getElementById('jumlahProduk38').value);
    alert('added ' + jumlah38 + ' To Cart');
    $('#tambahKeKeranjangModal38').modal('hide');
}
// ----------------------38 end --
