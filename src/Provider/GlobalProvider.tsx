import { createContext, useContext, useState } from "react";

export interface GlobalContextType {
    product: any[];
    addProduct: (newProduct: any) => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}


export const GlobalContext = createContext({} as GlobalContextType);

export interface GlobalProviderProps {
    children: React.ReactNode;
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [product, setProduct] = useState<any[]>([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const addProduct = (newProduct: any) => {
        setProduct((prevProducts) => [...prevProducts, newProduct]);
    }
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return <GlobalContext.Provider value={{ product, setProduct, addProduct, isDarkMode, toggleDarkMode }}>{children}</GlobalContext.Provider>;
};
export default GlobalProvider;


export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    return context;
}