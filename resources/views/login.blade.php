<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Resort</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow: hidden;
    }

    li {
      list-style: none;
    }

    .bg-image-vertical {
      position: relative;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: right center;
      background-size: auto 100%;
    }

    @media (min-width: 1025px) {
      .h-custom-2 {
        height: 100%;
      }
    }

    #logo {
      display: inline-block;
      height: 90px;
      /* margin-top: 20px; */
      /* position: absolute; */
      /* top: 30px; */
    }

    .form-outline {
      position: relative;
    }

    label {
      position: absolute;
      top: 0;
    }

    #login-image {
      position: relative;
    }

    #login-image img {
      z-index: -1;
    }

    #color-image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: inline-block;
      background-image: linear-gradient(to right, #010105cc, #1115275e);
    }

    button {
      background-image: linear-gradient(to right, #2e2b85, #26729f);
      transition: all 0.5s;
      width: 100%;
    }

    button:hover {
      background-image: linear-gradient(to right, #0b0963, #04507d);
    }

    input:focus {
      border: 1px solid #060687 !important;
    }

    h3 {
      font-weight: bold !important;
      color: #1f3487;
    }

    form {
      margin-top: 30px;
    }
    .form-outline{
      width: 100%;
    }
  </style>
</head>

<body>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">



          <div style="display: flex; flex-direction: column;align-items: center; justify-content: center" class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <!-- <div class="px-5 ms-xl-4"> -->
              <!-- <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i> -->

              <img src="/images/hcmut1.png" id="logo" alt="">
            <!-- </div> -->
            <form style="width: 23rem; display: flex; flex-direction: column; align-items: center " action="/admin/" method="post">
              @csrf
              <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Đăng nhập</h3>

              <div class="form-outline mb-4">
                <input type="text" id="form2Example18" class="form-control form-control-lg" name="username" / placeholder="Tên tài khoản">
                <!-- <label class="form-label" for="form2Example18">Tên tài khoản</label> -->
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form2Example28" class="form-control form-control-lg" name="password" placeholder="Mật khẩu" />
                <!-- <label class="form-label" for="form2Example28">Mật khẩu</label> -->
              </div>

              <div style="width: 80%" class="pt-1 mb-4">
                <button style="width: 100%" class="form-outline btn btn-info btn-lg btn-block" type="submit">Đăng nhập</button>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Quên mật khẩu?</a></p>
              <p>Bạn chưa có mật khẩu? <a href="#!" class="link-info">Đăng ký ở đây</a></p>

            </form>

          </div>

        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block" id="login-image">
          <img src="images/resort.jpg" alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
          <span id="color-image"></span>
        </div>
      </div>
    </div>
  </section>

  <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>