import { createContext, useReducer } from "react";

export const QuoteContext = createContext();

export const quoteReducer = (state,action)=>{
    //console.log(action);
    switch (action.type) {
        case 'NEW_QUOTE':
            return action.payload
    
        default:
            return state
    }
}

export const QuoteContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(quoteReducer,null   )

    return (
        <QuoteContext.Provider value={{state,dispatch}}>
            {children}
        </QuoteContext.Provider>
    )
}