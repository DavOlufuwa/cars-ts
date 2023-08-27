import { useState } from 'react'

type selectedDateProps = {
  dayInfo: string
}

const ContactForm = ({dayInfo}: selectedDateProps) => {

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

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
  
  return (
    <div className='min-w-max ring-1 ring-gray-400 rounded-xl p-5 xl:px-16'>
      <div className='text-center text-lg text-gray-700 font-bold my-5'>Contact Information</div>
      <form className='flex flex-col gap-6'>
        <div className='form-control'>
          <label htmlFor='' className='label'>Chosen Date</label>
          <input type='text' value={dayInfo}  className='input text-gray-500 ring-gray-200 cursor-not-allowed bg-gray-200' readOnly  required/>
        </div>
        <div className='form-control'>
          <label htmlFor='name' className='label'>Name</label>
          <input type='text' className='input' placeholder='John Did' required/>
        </div>
        <div className='form-control'>
          <label htmlFor='email' className='label'>Email</label>
          {emailError && <p className='text-xs font-medium text-red-700'>{emailError}</p>}
          <input type='email' className='input' placeholder='johndid@example.com' onChange={handleEmailCheck} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='phone' className='label'>Phone</label>
          {error && <p className='text-xs font-medium text-red-700'>{error}</p>}
          <input type='tel' className='input' placeholder='08012345678' required onChange={handleInputChange} maxLength={11}/>
        </div>
        <div className='mt-5 mb-6 text-right'>
          <button className='button-filled-two ml-auto px-3 py-3 w-36'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm