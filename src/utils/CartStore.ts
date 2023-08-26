import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CarList } from "./CarListStore";

interface QuantityInterface {
  quantity: number;
}

export interface CartInterface extends CarList, QuantityInterface{}

export const useCartStore = create<{
  cartItems: CartInterface[],
  addCartItem: (car: CarList) => void,
  removeCartItem: (car: CarList) => void,
  reduceQuantity: (car: CarList) => void,
  increaseQuantity: (car: CarList) => void,
  emptyCart: () => void,
 

}>()(persist((set) => (
  {
    cartItems: [],
    addCartItem: (car: CarList) => set((state)=> { 

    const existingCar = state.cartItems.find((item) => item.id === car.id)

    if (existingCar) {
      return {
        cartItems: state.cartItems.map((item) => item.id === car.id ? 
        {...item, quantity: item.quantity + 1} : item
        )
      }
    }
    return {
      cartItems: [...state.cartItems, {...car, quantity: 1}]
    }
  }),
  removeCartItem: (car: CarList) => set((state) => (
    {
      cartItems: state.cartItems.filter((item) => item.id !== car.id)
    })),
  reduceQuantity: (car: CarList) => set((state) => (
    {
      cartItems: state.cartItems.map((item) => item.id === car.id && item.quantity > 1 ? 
       {...item, quantity: item.quantity - 1} : item)
    })),
  increaseQuantity: (car: CarList) => set((state) => (
    {
      cartItems: state.cartItems.map((item) => item.id === car.id ? 
      {...item, quantity: item.quantity + 1} : item)
    }
  )),
  emptyCart: () => set({cartItems: []})
}),
  {
    name: "motorLuxeCart",
  }
))


