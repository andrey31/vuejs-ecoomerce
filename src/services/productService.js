import Axios from 'axios'

import { url } from './url'

class ProductService {
  constructor (axios) {
    this.axios = axios
    this.url = `${url}/products`
  }

  findByCategory (category) {
    return this.axios.get(`${this.url}?min_stock=1&category=${category}`)
  }
}

Axios.defaults.headers.common.Accept2 = 'application/json'

export default new ProductService(Axios)
