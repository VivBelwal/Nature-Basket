import { createContext, useState } from "react";

export const CartHover = createContext();

function CartHoverProvider ({children}){
    const [hover, setHover] = useState(false);
    const [cart , setCart] = useState([]);
    const [process , setProcess] = useState(false)
    const [sign , setSign] = useState(false)
    const [login , setLogin] = useState(true);
    const [enter, setEnter] = useState(false);
    const [name , setName] = useState('Login/Register')

    return <CartHover.Provider value={{hover , setHover,cart, setCart,process,setProcess,sign,setSign,login,setLogin,enter,setEnter,name,setName}}>{children}</CartHover.Provider>
}
export default CartHoverProvider