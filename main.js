let inputHarga1 = document.getElementById('harga1');
let inputHarga2 = document.getElementById('harga2');
let inputHarga3 = document.getElementById('harga3');
let inputHarga4 = document.getElementById('harga4');
let inputHarga5 = document.getElementById('harga5');

let inputJumlah1 = document.getElementById('jumlah1');
let inputJumlah2 = document.getElementById('jumlah2');
let inputJumlah3 = document.getElementById('jumlah3');
let inputJumlah4 = document.getElementById('jumlah4');
let inputJumlah5 = document.getElementById('jumlah5');

let jumlahKembalian = document.getElementById('inputKembali');

let kmbl = document.getElementById('tampilanKembalian');

function hitung() {
  kmbl.classList.toggle('d-none');

  let h1 = inputHarga1.value;
  let h2 = inputHarga2.value;
  let h3 = inputHarga3.value;
  let h4 = inputHarga4.value;
  let h5 = inputHarga5.value;

  let j1 = inputJumlah1.value;
  let j2 = inputJumlah2.value;
  let j3 = inputJumlah3.value;
  let j4 = inputJumlah4.value;
  let j5 = inputJumlah5.value;

  let hasil = h1 * j1 + h2 * j2 + h3 * j3 + h4 * j4 + h5 * j5;

  document.getElementById('totalHarga').innerHTML = 'Rp. ' + hasil.toLocaleString('id');
}

function kembalian() {
  let h1 = inputHarga1.value;
  let h2 = inputHarga2.value;
  let h3 = inputHarga3.value;
  let h4 = inputHarga4.value;
  let h5 = inputHarga5.value;

  let j1 = inputJumlah1.value;
  let j2 = inputJumlah2.value;
  let j3 = inputJumlah3.value;
  let j4 = inputJumlah4.value;
  let j5 = inputJumlah5.value;

  let kb = jumlahKembalian.value;

  let hasil = h1 * j1 + h2 * j2 + h3 * j3 + h4 * j4 + h5 * j5;

  let uangKembalian = kb - hasil;

  document.getElementById('kembalian').innerHTML = 'Rp. ' + uangKembalian.toLocaleString('id');
}
