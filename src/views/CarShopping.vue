<template>
  <b-container class="py-4">
    <b-row class="pt-4">
      <b-col cols="6">
        <h2><b>Carrito</b></h2>
        <b-table
        :items="totalProducts"
        :fields="fields"
        v-if="totalProducts.length > 0"
        >
          <template v-slot:cell(price)="row">
            {{convertToCountry(row.item.price)}}
          </template>
          <template v-slot:cell(actions)="row">
            <b-button v-if="row.item.stock > 0" @click="add(row.item)" size="sm" variant="primary" class="mr-2">
              <v-icon scale="0.8" name="plus"></v-icon>
            </b-button>
            <b-button disabled v-else variant="outline-primary" size="sm" class="mr-2">
              <v-icon scale="0.8" name="plus"></v-icon>
            </b-button>
            <b-button size="sm" @click="remove(row.item.id)" variant="danger">
              <v-icon scale="0.8" name="minus"></v-icon>
            </b-button>
          </template>
          <template v-slot:cell(priceTotal)="row">
            {{convertToCountry(row.item.priceTotal)}}
          </template>
        </b-table>
        <b-row v-else>
          <b-col cols="12">
            <h2>El carrito se encuentra vacío :(</h2>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="pt-5 mt-5" v-if="totalProducts.length > 0">
        <b-row>
          <b-col>
            <h2><b>TOTAL: {{total}}</b></h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button @click="setShowModalCheckOut(true)" block variant="primary" :disabled="total <= 0">
              <b>Pagar</b>
            </b-button>
          </b-col>
        </b-row>

      </b-col>
    </b-row>
    <show-modal-check-out></show-modal-check-out>
  </b-container>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import showModalCheckOut from '@/components/modals/modalCheckOut'

const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('shoppingCarStore')
export default {
  components: {
    showModalCheckOut
  },
  computed: {
    ...mapState(['products', 'productsStock', 'showModalCheckOut']),
    ...mapGetters(['totalProducts', 'total'])
  },
  data () {
    return {
      fields: [
        {
          key: 'product',
          label: 'Producto'
        },
        {
          key: 'price',
          label: 'Precio'
        },
        {
          key: 'count',
          label: 'Cantidad'
        },
        {
          key: 'priceTotal',
          label: 'Precio total'
        },
        {
          key: 'price',
          label: 'Precio'
        },
        {
          key: 'actions',
          label: 'Acciones'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['plusStock', 'minusStockId', 'setShowModalCheckOut']),
    convertToCountry (number) {
      return Number(number).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })
    },
    add (item) {
      this.products.push(item)
      this.minusStockId(item.id)
    },
    remove (id) {
      this.products.splice(this.products.findIndex(item => Number(item.id) === Number(id)), 1)
      this.plusStock(id)
    }
  }
}
</script>2
