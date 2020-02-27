const state = {
  productsStock: [],
  products: [],
  showModalAddCar: false,
  productSelect: {},
  showModalCheckOut: false
}
const mutations = {
  setProductsStock: (state, e) => {
    state.productsStock = e
  },
  addProduct: (state, e) => state.products.push(e),
  setProductSelect: (state, e) => {
    state.productSelect = e
  },
  setShowModalAddCar: (state, e) => {
    state.showModalAddCar = e
  },
  minusStockId: (state, id) => {
    let index = state.productsStock.findIndex(item => Number(item.id) === Number(id))
    console.log(index)
    state.productsStock[index].stock = Number(state.productsStock[index].stock) - 1
  },
  minusStock: (state, count) => {
    let index = state.productsStock.findIndex(item => Number(item.id) === Number(state.productSelect.id))
    state.productsStock[index].stock = Number(state.productsStock[index].stock) - Number(count)
  },
  plusStock: (state, id) => {
    let index = state.productsStock.findIndex(item => Number(item.id) === Number(id))
    state.productsStock[index].stock = Number(state.productsStock[index].stock) + 1
  },
  setShowModalCheckOut: (state, e) => {
    state.showModalCheckOut = e
  }
}
const actions = {
}

const getters = {
  totalProducts: state => {
    let productsGroup = {}
    state.products.forEach(p => {
      productsGroup[p.id] = productsGroup[p.id] || []
      productsGroup[p.id].push(p)
    })

    let arr = []
    Object.keys(productsGroup).forEach(key => {
      let count = productsGroup[key].length
      let priceUni = productsGroup[key][0].price
      let priceTotal = priceUni * count

      let index = state.productsStock.findIndex(item => Number(item.id) === Number(key))
      arr.push({
        'id': key,
        'product': productsGroup[key][0].product,
        'count': count,
        'price': priceUni,
        'priceTotal': priceTotal,
        'stock': state.productsStock[index].stock
      })
    })
    return arr
  },
  total: state => {
    let t = 0
    state.products.forEach(e => {
      t += Number(e.price)
    })
    return t.toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
