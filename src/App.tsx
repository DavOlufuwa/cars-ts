import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import Garage from './pages/Garage';
import Vehicle from './pages/Vehicle';
import Cart from './pages/Cart';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='garage' element={<Garage/>} />
      <Route path='garage/:id/:vehicle/:year' element={<Vehicle/>} />
    </Route>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
