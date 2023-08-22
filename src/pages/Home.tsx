import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Countup from 'react-countup'

const Home = () => {
  

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <section className='px-4 sm:px-10 flex flex-col gap-10'>
        <div className='flex flex-col items-center md:flex-row md:justify-between md:pt-4 xl:gap-36'>
          <div data-aos="fade-down" data-aos-easing="ease" data-aos-duration="600" className='text-5xl md:text-6xl xl:text-7xl tracking-tighter leading-tight font-medium md:leading-snug xl:leading-normal'>
          <span className=''>Experience</span> the joy and beauty of smooth <span className='italic capitalize font-semibold'>Transportation</span> 
          </div>
          <div className='hidden text-xs text-gray-text leading-relaxed md:block md:text-justify md:self-baseline md:pt-4 md:max-w-[20%]'>
            Welcome to our car purchase service!
            We offer a <span>convenient</span> and <span>affordable</span> way to buy your next car.
            <small className='block text-right mt-4'>Established 2023</small> 
          </div>
        </div>
        <div className='bg-gray-card px-4 rounded-3xl relative h-[50vh] md:px-10 mt-6 sm:mt-0'>
          <div className='absolute -top-3 max-w-max '>
            <div className='bg-bg-grays px-3 pt-2 rounded-t-full h-11 rotate-180 '>
              <button className='button-filled rotate-180'>View Fleet</button>
            </div>
          </div>
          <div className='bg-[rgba(50,50,50,0.45)] backdrop-blur-sm text-sm leading-7 absolute top-20 z-10 text-bg-color p-6 max-w-xs rounded-3xl md:top-40'>
            Our fleet consists of Toyota SUVs made between 2021 and 2023. 
            All are brand new vehicles and come with a 2 year warranty.
          </div>
          <div className='absolute -bottom-[100px] -right-[280px] md:-right-[100px] md:h-[70vh] lg:h-[90vh] lg:-bottom-[150px] xl:h-[100vh] xl:-bottom-[180px]' data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="800">
            <img src='https://cdn.filestackcontent.com/w60tvmHXRmqqD6MOVrHi' alt='toyota corolla 2022' className='w-full h-full'/>
          </div>
        </div>
      </section>
      <section className='min-h-screen px-4 sm:px-10 pt-16 flex flex-col gap-10 xl:px-24'>
        <div data-aos="zoom-out-in" data-aos-easing="ease-in" data-aos-duration="600"  className='text-3xl leading-snug font-medium md:text-5xl md:leading-tight text-center md:mx-16'>
          We pride ourselves in providing quality and convenient transportation options and services to our customers with an emphasis on customer satisfaction.
        </div>
        <div className='md:flex md:flex-row xl:gap-10'>
          <div className='text-center text-gray-text px-6 leading-6 text-sm md:w-[40%] mb-10'>
            We provide a hassle-free and budget-friendly solution for purchasing your next vehicle
            <div className='mt-4'>
              <button className='button-filled'>
                Get in touch
              </button>
            </div>
          </div>
          <div className='md:w-[100%]'>
            <div className='grid gap-5 md:grid-cols-2 '>
              <div className='bg-gray-card rounded-3xl p-6 pb-4 text-center md:text-left' data-aos="">
                <p className=' text-6xl font-medium  md:text-7xl lg:text-8xl mb-10 '>
                  <Countup
                    start={45}
                    end={100}
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    scrollSpyDelay={100}
                    suffix='+'
                  />
                </p>
                <p>Vehicles Sold</p>
              </div>
              <div className='bg-gray-card rounded-3xl p-6 pb-4 text-center md:text-left' data-aos="">
                <p className='text-6xl font-medium  md:text-7xl lg:text-8xl mb-10 '>
                  <Countup
                    start={45}
                    end={100}
                    enableScrollSpy={true}
                    scrollSpyDelay={100}
                    scrollSpyOnce={true}
                    suffix='+'
                  />
                </p>
                <p>Offices in Nigeria</p>
              </div>
              <div className='bg-gray-card rounded-3xl p-6 pb-4 text-center md:text-left' data-aos="">
                <p className=' text-6xl font-medium  md:text-7xl lg:text-8xl mb-10 '>
                  <Countup
                    start={45}
                    end={100}
                    enableScrollSpy={true}
                    scrollSpyDelay={100}
                    scrollSpyOnce={true}
                    suffix='+'
                  />
                </p>
                <p>Happy Customers</p>
              </div>
              <div className='bg-gray-card rounded-3xl p-6 pb-4 text-center md:text-left' data-aos="">
                <p className=' text-6xl font-medium  md:text-7xl lg:text-8xl mb-10'>
                  <Countup
                    start={45}
                    end={100}
                    enableScrollSpy={true}
                    scrollSpyDelay={100}
                    scrollSpyOnce={true}
                    suffix='+'
                  />
                </p>
                <p>Franchises</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='min-h-screen px-4 sm:px-10 xl:px-24 pt-16 '>
        <div className="relative bg-blacks rounded-3xl py-6 md:p-12 h-[70vh] md:h-[100vh]">
          <div className='text-white absolute left-0  z-10 px-6 sm:px-10'>
            <p className='text-3xl pt-1 font-medium mb-8 md:text-5xl md:leading-tight xl:w-[75%] '>Purchase a vehicle today and become a part of our family of happy vehicle owners</p>
            <button className='button-outlined'>
              View Fleet
            </button>
          </div>
          <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1200" className='absolute -bottom-[90px] -rotate-[1deg] -right-[300px] sm:-right-[180px] md:-bottom-[120px]  md:-right-[200px] md:h-[80vh] lg:h-[90vh] lg:-bottom-[140px] lg:-right-[100px] 
          xl:-right-[30px] xl:h-[100vh]'>
            <img alt='toyota camry 2022' src='https://cdn.filestackcontent.com/s5jzZkqgTWCpFQRSQjTE'/>
          </div>
        </div>
      </section>
      <section className='min-h-screen px-4 sm:px-10 xl:px-24 pt-16 md:flex lg:gap-24 xl:justify-between xl:items-center'>
        <div className=' relative hidden bg-gray-card lg:block lg:w-[500px] lg:h-[520px]  rounded-[36px] '>
          <div className='absolute overflow-x-hidden h-full left-0'>
            <img className='imgurre' src='https://cdn.filestackcontent.com/rsDOuutXRxuhMrbBCMlx' alt='side view of a toyota Rav 4 2021 model'/>
          </div>
        </div>
        <div className='lg:w-[50%]'>
          <div className=''>
            Why Choose us ?
          </div>
          <div className='flex flex-col gap-10'>
            <div>
              <div className='point'>
                <p className='reason'><div className='inline'></div> Quality Rides</p>
                <p className='info'>We pride ourselves on offering high-quality cars that meet or exceed customer expectations. Our vehicles are carefully inspected and serviced to ensure that they are in excellent condition</p>
              </div>
            </div>
            <div>
              <div className='point'>
                <p className='reason'><div className='inline'></div> Exceptional Customer Service</p>
                <p className='info'>We prioritize customer satisfaction and strive to provide exceptional customer service at every touchpoint. Our dedicated team is always ready to assist you, answer your questions, and address any concerns promptly and professionally.</p>
              </div>
            </div>
            <div>
              <div className='point'>
                <p className='reason'><div className='inline'></div> Competitive Pricing</p>
                <p className='info'>We understand the value of your hard-earned money. That's why we offer competitive pricing options to ensure that you get the best value for your investment. We aim to provide affordable solutions without compromising on quality.</p>
              </div>
            </div>
            <div>
              <div className='point'>
                <p className='reason'><div className='inline'></div> Trust and Reliability</p>
                <p className='info'>Trust is the foundation of any successful business relationship. We have built a reputation for reliability and trustworthiness by consistently delivering on our promises. You can count on us to be dependable, transparent, and trustworthy throughout your journey with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home