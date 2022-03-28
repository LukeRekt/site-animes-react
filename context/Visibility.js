import React, {createContext, useContext, useState} from 'react';

const VisibilityContext = createContext();


export default function VisibilityProvider({ children }){
    const [visibility, setVisibility] = useState(false)
    return (<VisibilityContext.Provider value={
        {visibility,
        setVisibility}
    }>{ children }</VisibilityContext.Provider>
    )
}

export function useVisibility(){
    const context = useContext(VisibilityContext);
    const {visibility, setVisibility} = context;
    return {visibility, setVisibility}
}