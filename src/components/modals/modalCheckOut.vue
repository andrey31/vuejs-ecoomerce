<template>
  <b-modal v-model="showModalCheckOutC" hide-footer hide-header centered>
    <b-container class="p-4">
      <b-row>
        <b-col cols="12" class="pb-3">
          <b-button variant="primary" block>
            <b>Ya tengo una cuenta</b>
          </b-button>
        </b-col>
        <b-col cols="12">
          <b-button @click="$router.push('checkout')" variant="secondary" block>
            <b>Continuar como invitado</b>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('shoppingCarStore')
export default {
  computed: {
    ...mapState(['showModalCheckOut']),
    showModalCheckOutC: {
      get () {
        return this.showModalCheckOut
      },
      set (e) {
        this.setShowModalCheckOut(e)
      }
    }
  },
  methods: {
    ...mapMutations(['setShowModalCheckOut'])
  }
}
</script>
