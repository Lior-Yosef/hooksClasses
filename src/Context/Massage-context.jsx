import React, { useReducer } from "react";
import  MassageReducer  from "../Reducer/massage-reducer";


export const MassageContext = React.createContext()

export default function MassageProvider({ children }) {
    const [massage, dispatch] = useReducer(MassageReducer, {msg:"my massage",isOpen:false});

    return (
        <MassageContext.Provider value={{massage,dispatch}}>
            {children}
        </MassageContext.Provider>
    );
};