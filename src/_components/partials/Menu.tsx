import BurgerMenu from './nav/BurgerMenu';
import DesktopMenu from './nav/DesktopMenu';

import React, { useState } from 'react';


const Menu: React.FC<any> = (props) => {
    const [menuDisplay, setMenuDisplay] = useState<Record<string, string>>({
        'Nos offres': 'hidden',
        'Notre impact': 'hidden',
        'Ressources': 'hidden'
    })

    
    const [burgerMenuDisplay, setBurgerMenuDisplay] = useState<Record<string, string>>({
        'Nos offres': 'hidden',
        'Notre impact': 'hidden',
        'Ressources': 'hidden'
    })

    const [burgerMenuSwitchButton, setBurgerMenuSwitchButton] = useState<boolean>(false)

    const menuProps = {
        menuDisplay, 
        setMenuDisplay, 
        burgerMenuDisplay, 
        setBurgerMenuDisplay,

        burgerMenuSwitchButton, 
        setBurgerMenuSwitchButton
    }
      
    return (
        <menu className='w-full flex justify-center p-4 pt-3 fixed'>
            <div className='flex flex-col justify-center relative w-full max-w-[115em]'>
                {/* desktop menu */}
                <DesktopMenu {...menuProps} />
                {/* burger menu */}
                {burgerMenuDisplay && <BurgerMenu {...menuProps} />}
            </div>
        </menu>
    )
}

export default Menu