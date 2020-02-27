<template>
  <b-modal v-model="showModalAddCarC" header-bg-variant="light">
    <template slot="modal-header">
      <b-container>
        <b-row>
          <b-col class="text-center">
            <h2>Agregar a carrito</h2>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <b-container fluid>
      <b-form id="formCountProduct" @submit="onSubmit" class="row justify-content-center">

        <b-col cols="12" class="text-center">
          <b>Producto: {{productSelect.product}}</b>
        </b-col>
        <b-col cols="12" class="text-center">
          <b>Precio por unidad: {{convertToCountry(productSelect.price)}}</b>
        </b-col>
        <b-col cols="12" class="text-center">
          <b>Subtotal: {{convertToCountry(subTotal)}} </b>
        </b-col>
        <b-form-group class="col col-6 text-center pt-4">
          <b>Seleccione la cantidad</b>
          <b-form-input :state="validation" class="mt-2" type="number" v-model="count" :min="1" :max="productSelect.stock"></b-form-input>
           <b-form-invalid-feedback :state="validation">
              Cantidad máxima de este producto: <b>{{productSelect.stock}}</b>
            </b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </b-container>
    <template slot="modal-footer">
      <b-button variant="danger" class="mr-2" @click="setShowModalAddCar(false)">Cancelar</b-button>
      <b-button type="submit" form="formCountProduct" variant="primary">Agregar al carrito</b-button>
    </template>
  </b-modal>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('shoppingCarStore')
export default {
  computed: {
    ...mapState(['productsStock', 'showModalAddCar', 'productSelect']),
    showModalAddCarC: {
      get () {
        return this.showModalAddCar
      },
      set (e) {
        this.setShowModalAddCar(e)
      }
    },
    subTotal () {
      let sub = 0
      if (Number(this.count) > Number(0) && Number(this.count) <= this.productSelect.stock) {
        sub = this.productSelect.price * this.count
      }
      return sub
    },
    validation () {
      return Number(this.count) > Number(0) && Number(this.count) <= (this.productSelect.stock)
    }
  },
  data () {
    return {
      count: 1
    }
  },
  methods: {
    ...mapMutations(['setShowModalAddCar', 'addProduct', 'minusStock']),
    onSubmit (evt) {
      evt.preventDefault()
      this.addProductToCar()
    },
    convertToCountry (number) {
      return Number(number).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })
    },
    addProductToCar () {
      for (let i = 0; i < this.count; i++) {
        this.addProduct(this.productSelect)
      }
      this.minusStock(this.count)
      this.count = 1
      this.setShowModalAddCar(false)
    }
  }
}
</script>
