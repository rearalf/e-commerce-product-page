// Utilities
import { defineStore } from 'pinia'

interface CartItem {
  id: number;
  img: string;
  title: string;
  price: number;
  amount: number;
}

export const useAppStore = defineStore('app', () => {
  const cart = ref<CartItem[]>([])
  const lastId = ref<number>(0)

  const addToCart = (item: CartItem) => {
    lastId.value++
    cart.value.push({ ...item, id: lastId.value })
  }

  const removeFromCart = (itemId: number) => {
    cart.value = cart.value.filter(item => item.id !== itemId)
    lastId.value--
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  }
})

/*
{
  state: () => ({
    cart: [] as CartItem[],
    lastId: 0 as number,
  }),
  actions: {
    addToCart (item: CartItem) {
      this.lastId++
      this.cart.push({ ...item, id: this.lastId })
    },
    removeFromCart (itemId: number) {
      this.cart = []
      this.lastId--
      console.log(this.cart.filter(item => item.id !== itemId))
    },
  },
}
*/
