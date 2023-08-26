import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import AOS from 'aos'
import 'aos/dist/aos.css';

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
        <div className='text-center my-6 font-black uppercase text-3xl md:text-5xl'> 
          Schedule <span data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="700" className='uppercase font-black text-purple italic tracking-tighter'>Test Drive</span>
        </div>
      </div>
      <section className='min-h-screen mb-12 pt-10 px-6 sm:px-10 xl:px-24 md:flex '>
        <div>
          <div className='min-w-max mb-12'>
            Please choose a day you will be available for a test drive
          </div>
          <div className='border max-w-max rounded-xl'>
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
          <div>
            {dayInfo && `Your selected date is: ${dayInfo}`}
          </div>
        </div>
        <div>
          <form>
            <div className='form-control'>
              <label htmlFor='name' className='label'>Name</label>
              <input type='text'  className='input'/>
            </div>
            <div className='form-control'>
              <label htmlFor='email' className='label'>Email</label>
              <input type='email' className='input'/>
            </div>
            <div className='form-control'>
              <label htmlFor='phone' className='label'>Phone</label>
              <input type='tel' className='input'/>
            </div>
            <div className='form-control'>
              <label htmlFor='' className='label'>Chosen Date</label>
              <input type='text' value={dayInfo}  className='input'/>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section>
        
    </div>
  )
}

export default ScheduleDrive