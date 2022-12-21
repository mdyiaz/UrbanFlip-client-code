import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllServices from './Pages/AllServices/AllServices';
import SHowServices from './Pages/SHowServices/SHowServices';
import Blog from './Pages/Blog/Blog';
import ServiceDetails from './Shared/ServicesList/ServiceDetails';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';
import MyReviews from './Shared/PrivateRoute/MyReviews/MyReviews';
import AddService from './Pages/AllServices/AddService/AddService';
import toast, { Toaster } from 'react-hot-toast';


function App() {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/showservices',
          element:<SHowServices></SHowServices>
        },
        {
          path:'/servicedetails/:id',
          loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-mdyiaz.vercel.app/services/${params.id}`),
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:'/myreviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path:'/servicedetails/:id',
          loader:({ params }) => fetch(`https://b6a11-service-review-server-side-mdyiaz.vercel.app/reviews/${params.id}`),
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:'/addservice',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        }
        
        



      ]
    }

  ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />

    </div>
  );
}

export default App;
