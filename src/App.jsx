import { RouterProvider,createBrowserRouter, useSearchParams } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { useContext,createContext, useState } from "react";
import Layout from "./Components/Layouts/Layout"
import Login  from "./Pages/login";
import AuthProvider from "./Context/AuthContext";
import Accessories from "./Pages/Products/Accessories"
import Item from "./Components/Common/Table/Table";
import Monitor from "./Pages/Products/Monitor";
import Printer from "./Pages/Products/Printer";
import CCTV from "./Pages/Products/CCTV";
import Ups from "./Pages/Products/Ups";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Computer from "./Pages/Products/Computer";
import FixeAssetTable from "./Pages/StockActivity/FixeAssetForm/FixeAssetTable";
import ItemModal from "./Components/Common/Modal/ItemModal";
import FixeAssetForm from "./Components/Common/Forms/FixedAssetForm";
import UserList from "./Pages/Users/UserList";


const AppContext = createContext();
export function useApp(){
  return useContext(AppContext);
}
export const queryClient = new QueryClient();
const router = createBrowserRouter([
   {
    path: "/",
    element: <Login />,
  },
 {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/printer",
            element: <Printer />,
          },
          {
            path: "/cctv",
            element: <CCTV />,
          },
          {
            path: "/item",
            element: <Item />,
          },
          {
            path: "/ups",
            element: <Ups />,
          },
          {
            path: "/accessories",
            element: <Accessories/>
          },
          {
            path: "/assignmenttable",
            element : <FixeAssetTable/>
          },
          {
            path : "/assignmentform",
            element: <FixeAssetForm/>
          },
          {
            path: "/computer",
            element : <Computer/>
          },
          {
            path: "/monitor",
            element: <Monitor />,
          },
          {
            path : "users",
            element : <UserList/>
          }
        ],
      },
      
    ],
  },
 
 
])

export default function App(){
  const [mode,setMode]=useState(false);
  const [pagename,setPageName]=useState();
  const [pagesize,setPageSize]=useState({page : 0,size : 20});
  return (
    <AuthProvider>
          <AppContext.Provider value={{mode,setMode,pagesize,setPageSize,pagename,setPageName}}>
            <QueryClientProvider client={queryClient}>
                          <RouterProvider router={router}/>
            </QueryClientProvider>
            <ItemModal/>
         </AppContext.Provider>
        
    </AuthProvider>
  )

}