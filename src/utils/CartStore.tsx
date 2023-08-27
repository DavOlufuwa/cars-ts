import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CarList } from "./CarListStore";
import { closeSnackbar, enqueueSnackbar } from "notistack";

interface QuantityInterface {
  quantity: number;
}
export interface CartInterface extends CarList, QuantityInterface{}

const action = (snackBarId: string | number) => (
  <button onClick={() => closeSnackbar(snackBarId)} className='click-button'>&#10005;</button>
)





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

      enqueueSnackbar(`Toyota ${car.name} ${car.year} is already in your cart`, {
        variant: 'info',
        autoHideDuration: 3000,
      })
      return {
        cartItems: state.cartItems.map((item) => item.id === car.id ? 
        {...item, quantity: item.quantity + 1} : item
        )
      }
    }

    enqueueSnackbar(`Toyota ${car.name} ${car.year} has been added to your cart`, {
      variant: 'info',
      autoHideDuration: 3000,
    })

    return {
      cartItems: [...state.cartItems, {...car, quantity: 1}]
    }
  }),
  removeCartItem: (car: CarList) => set((state) => {
    
    enqueueSnackbar(`Toyota ${car.name} ${car.year} has been removed from your cart`, {
      variant: 'info',
      autoHideDuration: 3000,
    })

    return {
      cartItems: state.cartItems.filter((item) => item.id !== car.id)
    }  
  }),
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


