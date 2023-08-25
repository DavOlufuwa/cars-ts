import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"
import { Link, useParams } from "react-router-dom"
import { useCarList } from "../utils/CarListStore"
import CarCard from "../components/CarCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import { Autoplay , Controller, Navigation} from "swiper/modules"
import { useState } from "react";


type AccordionItemProps = {
  header: string
  children: React.ReactNode
}

const Vehicle = () => {

  const [showing, setShowing] = useState<boolean>(false)

  const AccordionItem = ({ header, ...rest }:AccordionItemProps) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          <div className="my-auto font-medium">
            {header}
          </div>          
          <div className={`h-12 ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="2.5rem" viewBox="0 0 24 24"><path fill="none" stroke={ isEnter ? "#3b46f1" : "#808080"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/></svg>
          </div>
        </>
      )}
      className="border-b border-indigo-200"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left hover:bg-slate-100 ${
            isEnter && "bg-slate-200"
          }`
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out font-bold"
      }}
      panelProps={{ className: "p-4" }}
    />
  )
  

  const bodyElem = document.querySelector('body')
  const { id } = useParams()
  const { allCars } = useCarList()
  const currentVehicle = allCars.find((car) => car.id.toString() === id)
  const otherSmoothRides = allCars.filter((car) => car.id.toString() !== id).slice(0, 4)
  const {
    name, year, bodyStyle, seatingCapacity, door, price, images, combinedMPGMilesPerGallon, driveTrain, engine, tankCapacity, interior, saftey
  } = currentVehicle!



  return (
    <div>
      <div className="min-h-[65vh] px-6 sm:px-10 lg:px-32">
        <div className='text-left text-gray-800 my-6 font-bold text-3xl md:text-5xl'> Toyota {name}
           <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="700" className='uppercase font-bold text-purple italic tracking-tighter'> {year}
           </span>
        </div>
        <p className="font-medium text-xl md:text-2xl">
            &#8358; {(price * 550).toLocaleString()}
        </p>
        <div className="grid place-content-center relative my-10 bg-gray-card rounded-3xl">
          <img src={images[0].url} alt={images[0].alt} />
          <div 
            className="text-right font-semibold text-white bg-purple px-3 py-1 absolute bottom-0 right-0 cursor-pointer rounded-3xl rounded-tr-none rounded-bl-none"
            onClick={() => {
              setShowing(true)
              bodyElem?.classList.add('overflow-y-hidden')
            }}
          >
            Gallery <span className="font-black text-xl ">&#8594;</span>
          </div>
        </div>
        <div className="grid place-content-center">
          <Link to={"Cart"} className="button-filled-two text-lg w-48 py-3" >
            Add to Cart
          </Link>
        </div>
      </div>
      <section className="min-h-screen px-6 sm:px-24 xl:px-32 mb-20">
        <div className="flex justify-between items-center mb-8">
          <p className="text-2xl font-medium ">Specifications</p>
        </div>
        <Accordion>
          <AccordionItem header="Seating Capacity">
            {seatingCapacity}
          </AccordionItem>
          <AccordionItem header="Body Style">
            {door} {bodyStyle}
          </AccordionItem>
          <AccordionItem header="Engine">
            {engine}
          </AccordionItem>
          <AccordionItem header="Drive Train">
            {driveTrain}
          </AccordionItem>
          <AccordionItem header="Tank Capacity">
            {`${tankCapacity} Litres`} 
          </AccordionItem>
          <AccordionItem header="Combined Miles Per Gallon">
            {`${combinedMPGMilesPerGallon.toString()} Litres`} 
          </AccordionItem>
          <AccordionItem header="Vehicle Interior">
            {
              interior.map((line, index)=> <p key={index} className="mb-1"><span className='inline font-extrabold text-2xl mr-2 my-auto text-purple'>&#x2022;</span> {line}</p>)
            }
          </AccordionItem>
          <AccordionItem header="Vehicle Saftey">
            {
              saftey.map((line, index)=> <p key={index} className="mb-1"><span className='inline font-extrabold text-2xl mr-2 my-auto text-purple'>&#x2022;</span> {line}</p>)
            }
          </AccordionItem>
        </Accordion>
      </section>
      <section className="px-6 sm:px-10 mb-12">
        <div className="font-medium mb-5 text-2xl">
          Check out other smooth rides
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            otherSmoothRides.map((car) => <CarCard cars={car} key={car.id}/>)
          }
        </div>
      </section>
      <div className={`${showing ? 'block' : 'hidden'} fixed top-0 h-full w-full bg-gray-300 z-50  `}>
        <div 
          className="text-gray-700 max-w-max ml-auto font-black text-3xl text-right my-4 cursor-pointer mx-4"
          onClick={() => {
            setShowing(false)
            bodyElem?.classList.remove('overflow-y-hidden')
          }}
        >&#10005;</div>
          <div className="my-auto">
            <div className="text-center mb-16 text-gray-700 font-medium text-2xl">
              Gallery
            </div>
            <div className="px-5">
              <Swiper    
                autoplay={{
                  delay: 4000
                }}      
                breakpoints={{
                  680: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1600: {
                    slidesPerView: 5,
                  }
                }}
                spaceBetween={30}
                loop={true}
                modules={[
                  Autoplay,
                  Controller,
                  Navigation,
                ]}
                navigation={true}           
                grabCursor={true}

              >
                {
                  images.map((image, index)=>(
                    <SwiperSlide key={index}
                      className="bg-white p-2 rounded-2xl"
                    >
                      <div className="w-full duration-300 hover:scale-125">
                        <img className="h-96 w-96 object-contain " src={image.url} alt={image.alt} />
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Vehicle