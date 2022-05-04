import React, {createContext, useContext, useState} from 'react';

const LoginVisibilityContext = createContext();


export default function LoginVisibilityProvider({ children }){
    const [loginVisibility, setLoginVisibility] = useState(false)
    return (<LoginVisibilityContext.Provider value={
        {loginVisibility,
            setLoginVisibility}
    }>{ children }</LoginVisibilityContext.Provider>
    )
}

export function useLoginVisibility(){
    const context = useContext(LoginVisibilityContext);
    const {loginVisibility, setLoginVisibility} = context;
    return {loginVisibility, setLoginVisibility}
}