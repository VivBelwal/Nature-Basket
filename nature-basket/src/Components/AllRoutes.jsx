import {Routes,Route} from "react-router-dom";
import FruitsAndVege from "../Pages/FruitsAndVege";
import Home from "../Pages/Home";

export default function AllRoutes(){


    return <Routes>
        <Route path='/fruitsAndVege' element={<FruitsAndVege />} ></Route>
        <Route path='/' element={<Home />}></Route>
    </Routes>
}