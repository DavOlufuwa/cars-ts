import CarCard from '../components/CarCard'
import { useCarList } from '../utils/CarListStore'

const Garage = () => {
  const allCars = useCarList((state) => state.allCars)

  
  return (
    // Displaying all the cars from the CarListStore
    <div>
      <div>
        <div className='text-center my-6 font-black uppercase text-3xl md:text-5xl'> 
          Our <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="700" className='uppercase font-black text-purple italic tracking-tighter'>Fleet</span>
        </div>
      </div>
      <div className='min-h-screen mb-12 pt-10 px-6 sm:px-10 xl:px-24'>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            allCars.map((car) => <CarCard cars={car} key={car.id}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Garage