<template>
  <b-container class="pt-4">
    <b-row>
      <b-col cols="4">
        <b-input-group>
          <b-input-group-text slot="prepend">Busqueda</b-input-group-text>
          <b-form-input v-model="search"></b-form-input>
          <!-- <b-form-input :state="(filters.gramaje) > 0 ? true : null" v-model="filters.gramaje"></b-form-input> -->
        </b-input-group>
        <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Busqueda"></b-form-input>
        <b-button variant="secondary" size="sm" class="my-2 my-sm-0" type="submit"  @click.prevent="">Buscar</b-button> -->
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2><b>COMPUTADORAS</b></h2>
      </b-col>
    </b-row>
    <b-row>

      <b-col v-for="(it, k) in productsC" :key="k" cols="3" class="pb-4">
        <b-card
          :title="it.product"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <template slot="header">
            <img :src="it.image" alt="Image" class="card-img-top" >
          </template>
          <b-card-text>
            <b-row>
              <b-col cols="12">
                {{it.texto}}
                <b>Stock: {{it.stock}}</b>
              </b-col>

              <b-col cols="12">
                {{it.description}}
              </b-col>
            </b-row>
          </b-card-text>

          <template v-slot:footer>
            <p class="badge custombadge badge-pill badge-primary">{{convertToCountry(it.price)}}</p>
            <b-col>
              <a class="mr-4" href="" @click.prevent="" variant="outline-danger"><v-icon scale="1.5" class="text-danger" name="heart"></v-icon></a>
              <a href="" @click.prevent="modalSelect(it)"><v-icon scale="1.5" class="text-primary" name="shopping-cart"></v-icon></a>
              <!-- <b-button variant="primary">Agregar al carrito</b-button> -->
            </b-col>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <modal-add-car></modal-add-car>
  </b-container>
</template>
<script>
import modalAddCar from '@/components/modals/modalAddCar'
import productService from '@/services/productService'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('shoppingCarStore')

export default {
  computed: {
    ...mapState(['productsStock']),
    productsC () {
      let copyProducts = this.productsStock.slice()
      return copyProducts.filter(e => {
        return Number(e.stock > 0) && (e.product).toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
  components: {
    modalAddCar
  },
  mounted () {
    this.loadProducts()
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapMutations([ 'setProductsStock', 'addProduct', 'setShowModalAddCar', 'setProductSelect' ]),
    modalSelect (product) {
      this.setProductSelect(product)
      this.setShowModalAddCar(true)
    },
    loadProducts () {
      if (this.productsStock.length <= 0) {
        productService.findByCategory(1).then(resp => {
          this.setProductsStock(resp.data)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    convertToCountry (number) {
      return Number(number).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })
    }
  }
}
</script>
<style>
.custombadge{

    /* top | right | bottom | left */
    /* padding: 10px 10px 10px 40px; */
    font-size: 15px;

}
</style>
