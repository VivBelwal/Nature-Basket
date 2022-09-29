import { createContext, useState } from "react";

export const CartHover = createContext();

function CartHoverProvider ({children}){
    const [hover, setHover] = useState(false)

    return <CartHover.Provider value={{hover , setHover}}>{children}</CartHover.Provider>
}
export default CartHoverProvider