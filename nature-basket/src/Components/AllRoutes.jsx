import {Routes,Route} from "react-router-dom";
import FruitsAndVege from "../Pages/FruitsAndVege";
import Home from "../Pages/Home";
import { useEffect } from "react";
import Cart from "../Pages/Cart";
import { LoginPro } from "../Pages/Login";
export default function AllRoutes(){
 

    return <Routes>
        <Route path='/fruitsAndVege' element={<FruitsAndVege />} ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}> </Route>
        <Route path='/login' element={<LoginPro />}></Route>
    </Routes>
}