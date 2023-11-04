import { CartInterface, useCartStore } from "../utils/CartStore"


type CartCarInfo = {
  cartCarInfo : CartInterface
}

const CartCard = ({cartCarInfo}: CartCarInfo) => {
  
  const {name, year, price, images, quantity} = cartCarInfo
  const removeCartItem = useCartStore((state) => state.removeCartItem)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const reduceQuantity = useCartStore((state) => state.reduceQuantity)

  return (
    <div className="flex gap-2 justify-between items-center rounded-2xl shadow-md pt-2 pl-2"> 
      <div className="bg-gray-card w-28 sm:w-32 lg:w-40 rounded-lg">
        <img 
          src={images[0].url}
          alt={`An Image of Toyota ${name} ${year}`}
        />
      </div>
      <div className="font-medium text-sm sm:text-lg text-center w-32 sm:w-60">
        <div className="mb-3">{year} Toyota {name} </div>
        <div className="font-semibold">&#8358; {((price * 550) * quantity).toLocaleString()}</div>
      </div>
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between ">
        <div onClick={() => increaseQuantity(cartCarInfo)} className="cursor-pointer md:rotate-90 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="2.5rem" viewBox="0 0 24 24"><path fill="none" stroke={"#808080"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/></svg>
        </div>
        <div className={`text-lg sm:text-base md:text-lg font-medium md:w-12 text-center`}>{quantity}</div>
        <div onClick={() => reduceQuantity(cartCarInfo)} className={`cursor-pointer rotate-180 md:-rotate-90 ${quantity === 1 && "cursor-not-allowed"}`} >
          <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="2.5rem" viewBox="0 0 24 24"><path fill="none" stroke={"#808080"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/></svg>
        </div>        
      </div>
      <div className=" cursor-pointer self-start ">
        <div onClick={() => removeCartItem(cartCarInfo)} className="bg-none text-gray-700 font-black text-3xl py-10 px-4 rounded-tr-2xl rounded-br-2xl duration-200 hover:bg-purple hover:text-white">
          &#10005;
        </div>
      </div>
    </div>
  )
}

export default CartCard
