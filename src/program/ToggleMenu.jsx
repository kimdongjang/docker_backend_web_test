import React from 'react'
import { useState } from 'react'

import './Menu.css'

const ToggleMenu = () => {
    const [isOpen, setMenu] = useState(false)
    const toggleMenu = () => {
        console.log(isOpen);
        setMenu(isOpen => !isOpen) // on, off 개념
    }

    return (
        <div className='menu'>
            <ul >
                <li><button onClick={() => toggleMenu()}>테스트</button></li>
            </ul>
            <ul className={isOpen ? "show-menu" : "hide-menu"}> 
                <li >1</li>
                <li >2</li>
                <li >3</li>
                <li >4</li>
            </ul>
        </div>
    )
}

export default ToggleMenu;