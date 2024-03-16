function sweetAlert() {
    Swal.fire({
      title: 'Login Successful',
      text: 'Berhasil login ke dalam sistem',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  function login() {
    sweetAlert();
  }
