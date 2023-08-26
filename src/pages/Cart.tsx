
import { useMemo, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import CartCard from '../components/CartCard'
import { useCartStore } from '../utils/CartStore'

const Cart = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  
  const cartItems = useCartStore((state) => state.cartItems)
  
  const totalCost = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
  }, [cartItems])

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
  }, [cartItems])

  return (
    <div className='min-h-screen'>
      <div>
        <div className='text-center my-6 mb-12  font-black uppercase text-3xl md:text-5xl'> 
          Your <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="700" className='uppercase  text-purple italic tracking-tighter'>CART</span>
        {
          cartItems.length === 0 &&
          <div data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-delay="300" data-aos-duration="800">
          <span className='italic text-purple'>is</span> Empty
          </div>
        }
        </div>
      </div>
      <div className='px-4 sm:px-10 lg:px-32 xl:px-64 flex flex-col gap-3'>
      <div className='font-semibold border-b pb-3 mb-2 flex justify-between items-center'>
        <p className="w-24 text-center ">Vehicle</p>
        <p className='w-32 sm:w-60  text-center'>Name & Price</p>
        <p className='hidden sm:block  w-20 text-right md:'>Quantity</p>
        <p className='block sm:hidden  w-10 text-right'>Qty</p>
        <p className=' w-[4.5rem] md:w-[4.75rem] text-right'>Remove</p>
      </div>
        {
          cartItems.map((item, index) => 
            <CartCard key={index} cartCarInfo={item} />
          )
        }
      <div className='flex justify-between items-center font-bold text-2xl border-y py-4 mt-4'>
        <div className='font-medium text-xl'>
          {totalQuantity} Vehicle{totalQuantity > 1 && "s"}
        </div>        
        <div> &#8358; {(totalCost * 550).toLocaleString()}</div>
      </div>
      </div>
    </div>
  )
}

export default Cart