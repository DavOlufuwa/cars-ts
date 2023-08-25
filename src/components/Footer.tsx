import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-blacks rounded-3xl mb-5 mx-4 sm:mx-10" id="footer">
      <section className="p-6 pb-12 pt-10 sm:flex sm:justify-between border-b border-gray-500 sm:px-12 ">
        <div className="mb-6 sm:w-96">
          <p className="text-bg-grays text-center text-4xl sm:text-5xl sm:text-left sm:leading-snug leading-tight font-medium">
            What are you waiting for ? 
          </p>
        </div>
        <div className="text-center sm:text-right">
          <button className="button-outlined mb-6">Free Consultation</button><br/>
          <Link to="garage" className="button-filled">View Fleet</Link>
        </div>
      </section>
      <section className="text-gray-300 sm:text-sm  p-6 flex flex-col gap-10 sm:flex-row sm:justify-between sm:px-12 ">
        <div className="flex flex-col gap-4 text-sm sm:w-[30%] ">
          <div>
            <Link to="" className='flex tracking-tighter items-center min-w-max text-bg-grays font-[900] italic uppercase text-lg'>
              MotorLuxe
            </Link>
          </div>
          <div>
            Welcome to our car purchase service!
            We offer a <span>convenient</span> and <span>affordable</span> way to buy your next car.
          </div>
          <div>
            motorluxe@gmail.com
          </div>
          <div>
            (+234) 809 000 000
          </div>
        </div>
        <div className="flex flex-wrap gap-12 text-md  sm:flex-grow sm:justify-end  sm:gap-20 sm:items-center">
          <div className="max-w-[33%]">            
            <ul className="flex flex-col gap-4">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='garage'>Garage</Link>
              </li>
              <li>
                <Link to='cart'>Cart</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[33%]">            
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="https://www.linkedin.com/in/davidolufuwa" target="_blank">LinkedIn</Link>
              </li>
              <li>
                <Link to="https://twitter.com/d_lufuwa" target="_blank">Twitter</Link>
              </li>
              <li>
                <Link to="mailto:davolufuwa@gmail.com?subject=I%20am%20looking%20for%20a%20frontend%20developer%20" target="_blank">Gmail</Link>
              </li>
            </ul>
          </div>
          <div className="">            
            <ul className="flex flex-col gap-4 ">
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center py-4">
          <small className="text-gray-400  text-[10px]">
            Olufuwa did this © 2023
          </small>
        </div>
      </section>
    </footer>
  )
}

export default Footer