<template>
  <b-container>
    <b-row class="pt-4">
      <b-col class="text-left">
        <h2><b>INGRESE SU INFORMACIÓN</b></h2>
      </b-col>
    </b-row>
    <b-row class="py-4">
      <b-col cols="4">
        <b-form-input placeholder="Nombre" focus></b-form-input>
      </b-col>
      <b-col cols="4">
        <b-form-input placeholder="Apellido 1"></b-form-input>
      </b-col>
      <b-col cols="4">
        <b-form-input placeholder="Apellido 2"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input placeholder="Provincia"></b-form-input>
      </b-col>
      <b-col>
        <b-form-input placeholder="Cantón"></b-form-input>
      </b-col>
      <b-col>
        <b-form-input placeholder="Distrito"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="py-4">
      <b-col>
        <b-form-input placeholder="Direccion detallada">

        </b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input type="email" placeholder="Correo electronico">

        </b-form-input>
      </b-col>
    </b-row>
    <b-row class="pt-4">
      <b-col class="text-left">
        <h2><b>PAGA CON</b></h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-tabs pills card vertical content-class="mt-3">
        <b-tab title="PAYPAL" active>
         <b-row>
           <b-col class="text-left" cols="12">
              <b>PAGA CON PAYPAL</b>
            </b-col>
           <b-col cols="6">
            <b-form-input type="email" placeholder="Ingrese su correo de paypal">
            </b-form-input>
           </b-col>
         </b-row>
        </b-tab>
        <b-tab title="MASTERCARD">
          <b-row>
            <b-col class="text-left" cols="12">
              <b>PAGA CON MASTERCARD</b>
            </b-col>
            <b-col class="text-left pt-2" cols="12">
              <b>Datos de tarjeta</b>
            </b-col>
            <b-col cols="6">
              <b-form-input type="text" placeholder="Ingrese numero de tarjeta">
              </b-form-input>
            </b-col>
            <b-col cols="4">
              <b-form-input type="text" placeholder="Ingrese codigo de seguridad">
              </b-form-input>
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col class="text-left" cols="12">
              <b>Fecha de vencimiento</b>
            </b-col>
            <b-col cols="2">
              <b-form-input type="text" placeholder="mm">
              </b-form-input>
            </b-col>
            <b-col cols="2">
              <b-form-input type="text" placeholder="yy">
              </b-form-input>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="VISA">
          <b-row>
            <b-col class="text-left" cols="12">
              <b>PAGA CON VISA</b>
            </b-col>
            <b-col class="text-left pt-2" cols="12">
              <b>Datos de tarjeta</b>
            </b-col>
            <b-col cols="6">
              <b-form-input type="text" placeholder="Ingrese numero de tarjeta">
              </b-form-input>
            </b-col>
            <b-col cols="4">
              <b-form-input type="text" placeholder="Ingrese codigo de seguridad">
              </b-form-input>
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col class="text-left" cols="12">
              <b>Fecha de vencimiento</b>
            </b-col>
            <b-col cols="2">
              <b-form-input type="text" placeholder="mm">
              </b-form-input>
            </b-col>
            <b-col cols="2">
              <b-form-input type="text" placeholder="yy">
              </b-form-input>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
      </b-col>
    </b-row>
    <b-row class="py-4">
      <b-col>
        <b-button variant="primary">Confirmar y pagar</b-button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {

}
</script>
