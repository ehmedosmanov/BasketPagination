import { useState,useEffect } from 'react'

const useLocaleStorage = (key) => {
    const [locale, setLocale] = useState(JSON.parse(localStorage.getItem(key)) || [])
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(locale))
    }, [locale])

    const handleData = (data) => {
        setLocale([...data])
    } 
    return [locale, handleData]
}

export default useLocaleStorage