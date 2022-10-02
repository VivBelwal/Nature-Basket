
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import ShopByCategory from './Components/ShopByCategory';
import AllRoutes from './Components/AllRoutes';
import {useEffect} from "react"
import {NumVeri,SignUpPro} from "./Pages/SignUp"

function App() {
  const getD = async()=>{
    let res = await fetch(`https://yielding-tongue-8280-viv-project.onrender.com/users`);
    let data = await res.json();
    console.log(data);
 }

  return (
    <div className="App">
     <Navbar />
    
    

     <NumVeri />
     <SignUpPro />
      
     <AllRoutes />
    
   
    </div>
  );
}

export default App;
//#83B74C