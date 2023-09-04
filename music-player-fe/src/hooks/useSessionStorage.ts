import { useEffect, useState } from "react";


const useSessionStorage = (key: string) => {
    const storedValue = sessionStorage.getItem(key);
    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : undefined);

    const getSessionValue = () => {
        if (storedValue)
            return JSON.parse(storedValue)
    }

    const setSessionValue = (newValue: any) => {
        sessionStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    const removeSessionValue = () => {
        sessionStorage.removeItem(key);
        setValue(null);
    };

    return { value, setSessionValue, removeSessionValue, getSessionValue }
}

export default useSessionStorage;