import { useContext, useState } from "react";
import ThemeContext from './ThemeContext'


export default function ThemeButton({changeTheme}){
    const theme = useContext(ThemeContext);
    return(
        <button onClick={changeTheme}>{theme}</button>
    )

}