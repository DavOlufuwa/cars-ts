import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Garage from './pages/Garage';
import Vehicle from './pages/Vehicle';
import Cart from './pages/Cart';
import ScheduleDrive from './pages/ScheduleDrive';
import { useCartStore } from './utils/CartStore';
import { SnackbarProvider } from 'notistack';




function App() {


  const cartItems = useCartStore((state) => state.cartItems)

  return (
    <>
    <SnackbarProvider
      maxSnack={2}
      preventDuplicate
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      style={{
        fontSize: '15px',
        padding: '1rem 1.25rem',
        backgroundColor: '#4854ff',
        fontWeight : '500',
        color: '#f2f2f2'
      }}
    >
      <RouterProvider router={
        createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path='cart' element={<Cart />} />
              <Route path='garage' element={<Garage/>} />
              <Route path='garage/:id/:vehicle/:year' element={<Vehicle/>} /> 
              {
                cartItems.length > 0 &&
                <Route path='scheduledrive' element={<ScheduleDrive/>} />
              }
            </Route>
          )
        )        
      } />
    </SnackbarProvider>
    </>
  );
}

export default App;
