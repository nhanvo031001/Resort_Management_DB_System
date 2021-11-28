<template>
  <section class="form-dark">
    <mdb-row>
      <mdb-col md="5">
        <mdb-card class="card-image" :style="{'backgroundImage': 'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)', 'width': '28rem'}">
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
            </div>
            <mdb-input label="Your email" type="text"/>
            <mdb-input label="Your password" type="password"/>
            <mdb-input class="my-5" type="checkbox" id="defaultCheck17" label="Accept the Terms and Conditions" />
            <mdb-row class="d-flex align-items-center mb-4">
              <div class="text-center mb-3 col-md-12">
                <mdb-btn color="success" rounded type="button" class="btn-block z-depth-1">Sign in</mdb-btn>
              </div>
            </mdb-row>
            <mdb-col md="12">
              <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a></p>
            </mdb-col>
          </div>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>


<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon
    }
  }
</script>
<style>
  .form-dark .font-small {
    font-size: 0.8rem; }

  .form-dark [type="radio"] + label,
  .form-dark [type="checkbox"] + label {
    font-size: 0.8rem; }

  .form-dark [type="checkbox"] + label:before {
    top: 2px;
    width: 15px;
    height: 15px; }

  .form-dark .md-form label {
    color: #fff; }

  .form-dark input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #00C851;
    -webkit-box-shadow: 0 1px 0 0 #00C851;
    box-shadow: 0 1px 0 0 #00C851; }

  .form-dark input[type=text]:focus:not([readonly]) + label {
    color: #fff; }

  .form-dark input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #00C851;
    -webkit-box-shadow: 0 1px 0 0 #00C851;
    box-shadow: 0 1px 0 0 #00C851; }

  .form-dark input[type=password]:focus:not([readonly]) + label {
   color: #fff; }

  .form-dark input[type="checkbox"] + label:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 17px;
    height: 17px;
    z-index: 0;
    border: 1.5px solid #fff;
    border-radius: 1px;
    margin-top: 2px;
    -webkit-transition: 0.2s;
    transition: 0.2s; }

  .form-dark input[type="checkbox"]:checked + label:before {
    top: -4px;
    left: -3px;
    width: 12px;
    height: 22px;
    border-style: solid;
    border-width: 2px;
    border-color: transparent #00c851 #00c851 transparent;
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    -webkit-backface-visibility: hidden;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%; }
</style>