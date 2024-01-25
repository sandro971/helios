import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faRemove, faUser } from "@fortawesome/free-solid-svg-icons"
import { links, burgerLinks } from './links';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../../types/Menu';

import { listStyle, listMenuStyle, beforeStyle, subListStyle, linkStyle } from './style';


const DesktopMenu: React.FC<MenuProps> = ({
    menuDisplay, 
    setMenuDisplay, 
    burgerMenuSwitchButton,
    setBurgerMenuSwitchButton
}) => {
    const onMouseEnterHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const menu = e.currentTarget.dataset.menu as string
        setMenuDisplay({
            ...menuDisplay,
            [menu]: 'block'
        })
    }

    const onMouseLeaveHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const menu = e.currentTarget.dataset.menu as string
        setMenuDisplay({
            ...menuDisplay,
            [menu]: 'hidden'
        })
    }

      
    {/* desktop menu */}
    return (
        <nav className='flex w-full gap-12 pl-8 h-16 items-center justify-between border-green-950 border-[.15em] rounded-full mb-3 shadow-lg shadow-gray-200 box-shadow-[0 4px 8px 0 rgba(0, 0, 0, 0.08)] z-10 bg-white'>
            {/* logo */}
            <Link to={'/'} className="text-green-950 font-['pt-serif-bold'] text-3xl">
                helios
            </Link>

            <ul className='flex text-md gap-4 items-center justify-between w-full max-lg:hidden'>
                {links.map((link, index) => {
                    return (
                        <li key={index} 
                            className={link.sublinks? listMenuStyle: listStyle}
                            onMouseEnter={onMouseEnterHandler}
                            data-menu={link.name}
                        >
                            <Link 
                                to={link.path} 
                                className={link.sublinks ? beforeStyle : ''}
                            >
                                {link.name}

                                {link.sublinks && (
                                    <FontAwesomeIcon 
                                        icon={faChevronDown} 
                                        className='ml-2 text-[.6em]'
                                    />
                                )}

                                <span className=''></span>
                            </Link>

                            {link.sublinks && (
                                <menu className={
                                    'flex mt-[1.1em] min-w-52 absolute top-full border-[.1em] rounded-b-3xl rounded-t-none border-green-950 bg-white p-4 px-7 rounded-lg shadow-lg z-10 left-1/2 transform -translate-x-1/2 ' +
                                    menuDisplay[link.name]
                                }
                                    onMouseLeave={onMouseLeaveHandler}
                                    data-menu={link.name}
                                >
                                    <ul className={'flex flex-col gap-6 text-sm items-center justify-center '}>
                                        {link.sublinks.map((sublink, index) => {
                                            return (
                                                <li key={index} className={subListStyle}>
                                                    <Link to={sublink.path} className='' >
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

            <div className='flex items-center h-full'>
                <Link to={'/connexion'} className={'bg-yellow-50 max-2xl:hidden ' + linkStyle}>
                    <FontAwesomeIcon icon={faUser} className='mr-2' />
                    <span>ESPACE CLIENT</span>
                </Link>
                <Link to={'/ouvrir-un-compte'} className={'bg-green-200 rounded-r-full max-2xl:h-11 ' + linkStyle}>
                    <span>OUVRIR UN COMPTE</span>
                </Link>

                {/* burger menu */}
                <button className='flex justify-center items-center w-16 2xl:hidden'
                    onClick={() => setBurgerMenuSwitchButton(!burgerMenuSwitchButton)}
                >
                    {!burgerMenuSwitchButton && (
                        <img src="https://www.helios.do/assets/images/Open-Menu.svg" loading="lazy" alt='' style={{width: '2em'}} />
                    )}
                    {burgerMenuSwitchButton && (
                        <img src="https://www.helios.do/assets/images/Close-Menu.svg" loading="lazy" alt='' style={{width: '2em'}} />
                    )}
                </button>
            </div>
        </nav>
    )
}

export default DesktopMenu