import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import AOS from 'aos'
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm';

const ScheduleDrive = () => {

  const [selected, setSelected] = useState<Date>();

  const [dayInfo, setDayInfo] = useState<string>("")


  const handleDayClick = (day: Date) => {
    setSelected(day);
    setDayInfo(format(day, 'PPPP'));
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <div>
        <div className='text-center my-6 mb-0 font-black uppercase text-3xl md:text-5xl'> 
          Schedule <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="700" className='uppercase font-black text-purple italic tracking-tighter'>Test Drive</span>
        </div>
      </div>
      <div className='mt-5 sm:mb-12 text-center text-lg font-semibold mx-10'>
        {
          selected ? "Kindly fill the contact information form"
          : "Please choose a day you will be available for a test drive"
        }
      </div>
      <section className='flex flex-col gap-8 min-h-screen mb-8 pt-10 px-10 lg:px-36  md:flex-row xl:gap-32 xl:justify-center'>
        <div>
          <div className='border-2 border-[#a2a7f4] rounded-xl p-5 flex justify-center'>
            
            <DayPicker 
              mode="single"
              selected={selected}
              onDayClick={handleDayClick}
              modifiersStyles={{
                selected: {
                  backgroundColor: '#3b46f1',
                  color: 'white',
                  fontWeight: 'bold'
                }
              }}
            />
          </div>
          <div className='my-3 text-sm font-semibold'>
            {dayInfo ? `Your selected date is: ${dayInfo}` : `Please select a day`}
          </div>
        </div>
        <div className='w-full xl:w-1/2'>
          <ContactForm dayInfo={dayInfo}/>
        </div>
      </section>
    </div>
  )
}

export default ScheduleDrive