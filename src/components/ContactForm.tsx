import { useState, useRef } from 'react'
import { closeSnackbar, enqueueSnackbar } from "notistack";
import emailjs from '@emailjs/browser';
import { useCartStore } from '../utils/CartStore';

type selectedDateProps = {
  dayInfo: string
}

const ContactForm = ({dayInfo}: selectedDateProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [senderName, setSenderName] = useState('')
  const [buttonLabel , setButtonLabel] = useState('Schedule Drive')
  const form = useRef<HTMLFormElement>(null) 

  const emptyCart = useCartStore((state) => state.emptyCart)

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!/^\d*$/.test(inputValue)) {
      setError('Please enter only numeric values');
    } else {
      setError('');
      setPhoneNumber(inputValue);
    }
  };

  const handleEmailCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|webmail)\.[a-zA-Z]{2,}$/i;

    if (!emailPattern.test(inputValue)) {
      setEmailError('Please enter a valid email');
    }
    else {
      setEmailError('');
      setEmail(inputValue);
    }
  }

  // Action to Close the Snackbar
  const action = (snackBarId: string | number) => (
    <button onClick={() => closeSnackbar(snackBarId)} className='text-white font-black text-2xl'>&#10005;</button>
  )

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
      setButtonLabel("Scheduling...")

      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
        form.current!, 
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
      .then(
        () => {
          enqueueSnackbar(`${senderName}, Scheduling Successful. kindly check your email for a confirmation`, {
            variant: 'info',
            persist: true,
            action,

          })
          setButtonLabel('Schedule Drive')

          form.current!.reset();
        },
        (error) => {
          enqueueSnackbar('Sorry, there was a little issue. Please try again', {
            variant: 'info',
            action,
          })
          setButtonLabel('Schedule Drive')
          emptyCart()
          console.log(error.text)
        }
      )
    }

    const cartItems = useCartStore((state) => state.cartItems)
    
    const userChoice = cartItems.map((item) => `Toyota ${item.name} ${item.year} `)


  return (
    <div className={`min-w-max  duration-200 ${dayInfo ? 'ring-2 ring-purple':'ring-1 ring-gray-400'} rounded-xl p-5 xl:px-16`}>
      <div className='text-center text-lg text-gray-700 font-bold my-5'>Contact Information</div>

      <form ref={form} onSubmit={sendEmail} id='contact_form' className='flex flex-col gap-6'>
        <div className='form-control'>
          <label htmlFor='' className='label'>Chosen Date</label>
          <input 
            type='text' value={dayInfo}
            id='date_selected'
            name='date_selected'
            className='input text-gray-500 ring-gray-200 cursor-not-allowed bg-gray-200' 
            readOnly  
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='name' className='label'>Name</label>
          <input type='text'
            id='user_name'
            name='user_name'
            className='input' 
            placeholder='John Did' 
            onChange={getName} 
            required
            />
        </div>
        <div className='form-control'>
          <label htmlFor='email' className='label'>Email</label>
          {emailError && <p className='text-xs font-medium text-red-700'>{emailError}</p>}
          <input 
            type='email' 
            id='user_email'
            name='user_email'
            className='input' 
            placeholder='johndid@example.com' 
            onChange={handleEmailCheck} 
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='phone' className='label'>Phone</label>
          {error && <p className='text-xs font-medium text-red-700'>{error}</p>}
          <input 
            type='tel' 
            className='input' 
            placeholder='08012345678' 
            name='user_phone'
            id='user_phone'
            required 
            onChange={handleInputChange} 
            maxLength={11}
          />
        </div>
        <div className='hidden'>
          <input 
            type='text'
            className=''
            name="user_choice"
            id="user_choice"
            value={userChoice}
          />
        </div>
        <div className='mt-5 mb-6 text-right'>
          <button className='button-filled-two ml-auto px-3 py-3 w-36'>
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm