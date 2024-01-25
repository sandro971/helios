import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { burgerLinks } from './links';

import React from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../../types/Menu';


import { subListMenuBurgerStyle } from './style';


const BurgerMenu: React.FC<MenuProps> = ({
    menuDisplay, 
    setMenuDisplay, 
    burgerMenuDisplay, 
    setBurgerMenuDisplay,
    burgerMenuSwitchButton, 
    setBurgerMenuSwitchButton
}) => {
    const onClickLiBurgerMenuHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const menu = e.currentTarget.dataset.menu as string
        setBurgerMenuDisplay({
            ...burgerMenuDisplay,
            [menu]: burgerMenuDisplay[menu] === 'hidden' ? 'block' : 'hidden'
        })
    }


    return <>
        {burgerMenuSwitchButton && ( 
            <nav className={`
                bg-orange-50
                top-0
                pt-32
                absolute
                w-full
                flex
                flex-col
                rounded-[2em]
                gap-y-10
                shadow-lg
                shadow-gray-200
            `}>
                <ul className='flex flex-col px-8 '>
                    {burgerLinks.map((link, index) => {
                        return (
                            <li key={index} 
                                className={"flex justify-center items-center h-[4em] border-t-2 last:border-b-2 border-black"}
                                onClick={onClickLiBurgerMenuHandler}
                                data-menu={link.name}
                            >
                                <div 
                                    className={"cursor-pointer h-full text-gray-600 flex gap-2 items-center"}
                                >
                                    {link.name}

                                    {link.sublinks && (
                                        <FontAwesomeIcon 
                                            icon={faChevronDown} 
                                            className='text-[.6em] text-gray-800'
                                        />
                                    )}
                                </div>

                                {link.sublinks && (
                                    <menu className={
                                        '' +
                                        burgerMenuDisplay[link.name]
                                    }
                                        data-menu={link.name}
                                    >
                                        <ul className={'flex flex-col gap-6 text-sm items-center justify-center '}>
                                            {link.sublinks.map((sublink, index) => {
                                                return (
                                                    <li key={index} >
                                                        <Link to={sublink.path} className='text-gray-500' >
                                                            {sublink.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </menu>
                                )}
                            </li>
                        )
                    })}
                </ul>

                <div className='flex flex-col items-center h-full gap-3 px-6 py-5'>
                    <Link to={'/connexion'} className={'border-2 border-black ' + subListMenuBurgerStyle}>
                        <span>ESPACE CLIENT</span>
                    </Link>
                    <Link to={'/ouvrir-un-compte'} className={'bg-green-200  ' + subListMenuBurgerStyle}>
                        <span>OUVRIR UN COMPTE</span>
                    </Link>
                </div>
            </nav>
        )}
    </>
}

export default BurgerMenu