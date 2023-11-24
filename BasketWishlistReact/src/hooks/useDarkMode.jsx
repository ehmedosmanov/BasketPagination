import { useEffect } from "react";
import { useState } from "react";
;

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setTheme(!theme)
  };

  useEffect(() => {
    document.body.classList.toggle('dark', theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  
  return [theme, changeTheme]
};

export default useDarkMode;
