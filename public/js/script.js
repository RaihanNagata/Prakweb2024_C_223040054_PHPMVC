$(function () {
  // Ketika tombol dengan kelas .tombolTambahData diklik
  $('.tombolTambahData').on('click', function () {
    $('#formModalLabel').html('Tambah Data Mahasiswa'); // Mengubah judul modal
    $('.modal-footer button[type="submit"]').html('Tambah Data'); // Mengubah teks tombol
    $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/tambah'); // Ubah action form ke 'tambah'

    // Kosongkan semua input form
    $('#nama').val('');
    $('#nrp').val('');
    $('#email').val('');
    $('#jurusan').val('');
    $('#id').val(''); // Pastikan input hidden ID juga dikosongkan
  });

  // Ketika tombol dengan kelas .tampilModalUbah diklik
  $('.tampilModalUbah').on('click', function () {
    $('#formModalLabel').html('Ubah Data Mahasiswa'); // Mengubah judul modal
    $('.modal-footer button[type="submit"]').html('Ubah Data'); // Mengubah teks tombol
    $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah'); // Ubah action form ke 'ubah'

    const id = $(this).data('id');

    // Kirim permintaan AJAX untuk mendapatkan data mahasiswa berdasarkan ID
    $.ajax({
      url: 'http://localhost/phpmvc/public/mahasiswa/getubah', // URL endpoint
      data: { id: id }, // Data yang dikirimkan
      method: 'post',
      dataType: 'json',
      success: function (data) {
        // Isi form dengan data yang diterima dari server
        $('#nama').val(data.nama);
        $('#nrp').val(data.nrp);
        $('#email').val(data.email);
        $('#jurusan').val(data.jurusan);
        $('#id').val(data.id); // Masukkan ID ke input hidden
      },
    });
  });
});
