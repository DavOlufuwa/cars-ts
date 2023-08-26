import { Link } from "react-router-dom"
import { CarList } from "../utils/CarListStore"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useCartStore } from "../utils/CartStore";

type CarCardPropsType = {
  cars: CarList
}

const CarCard = ({cars}: CarCardPropsType) => {
  
  const addCartItem  = useCartStore((store)=> store.addCartItem)

  useEffect(
    () => {
      AOS.init()
    }
  ,[])

  const {id,images, name, year, price} = cars
  return (
    <div data-aos="fade-up" className="flex flex-col gap-7 shadow-lg shadow-slate-200 rounded-3xl p-6 duration-300 hover:shadow-xl hover:shadow-indigo-200">
      <Link
        to={`/garage/${id}/${name.toLowerCase()}/${year}`}
      >
        <div className="relative h-64 flex items-center">
          <div className="bg-gray-card h-full w-full rounded-3xl">
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 ">
            <img className="" src={images[0].url} alt={`An Image of Toyota ${name} ${year}`} />
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-4">
        <div className="font-extrabold text-2xl">
          <p className="">
            &#8358; {(price * 550).toLocaleString()}
          </p>
        </div>
        <div className="font-medium text-xl text-gray-800">
          <p>
            {`Toyota ${name} ${year}`}
          </p>
        </div>
        <div>
          <div 
            onClick={() => addCartItem(cars)}
            className="button-filled-two" 
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard