import React, {createContext, useContext, useState} from 'react';

const RegisterVisibilityContext = createContext();


export default function RegisterVisibilityProvider({ children }){
    const [registerVisibility, setRegisterVisibility] = useState(false)
    return (<RegisterVisibilityContext.Provider value={
        {registerVisibility,
            setRegisterVisibility}
    }>{ children }</RegisterVisibilityContext.Provider>
    )
}

export function useRegisterVisibility(){
    const context = useContext(RegisterVisibilityContext);
    const {registerVisibility, setRegisterVisibility} = context;
    return {registerVisibility, setRegisterVisibility}
}