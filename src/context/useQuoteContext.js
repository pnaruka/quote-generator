import { QuoteContext } from "./QuoteContext";
import { useContext } from "react";

export const useQuoteContext = ()=>{
    const context = useContext(QuoteContext);

    if(!context)
    throw Error('useQuoteContext must be inside QuoteContextProvider');

    return context;
}