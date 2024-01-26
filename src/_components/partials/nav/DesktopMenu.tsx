import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons"
import { links } from './links';

import React from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../../types/Menu';

import { listStyle, listMenuStyle, beforeStyle, subListStyle, linkStyle } from './style';
import { t } from 'i18next';


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

    /* desktop menu */
    return (
        <nav className='flex w-full gap-12 pl-8 h-[3.8em] items-center justify-between border-green-950 border-[.15em] rounded-full mb-3 bg-white z-10'>
            {/* logo */}
            <Link to={'/'} className="text-green-950 font-['pt-serif-bold'] text-3xl">
                helios
            </Link>

            <ul className='flex text-md gap-4 items-center justify-between w-full max-lg:hidden'>
                {links.map((link, index:number) => {
                    return (
                        <li key={index} 
                            className={link.sublinks? listMenuStyle: listStyle}
                            onMouseEnter={onMouseEnterHandler}
                            data-menu={link.name}
                            style={(link.sublinks && menuDisplay[link.name] !== 'hidden')? {
                                'backgroundImage': 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(181,244,212,1) 65%)'
                            }:{}}
                        >
                            <Link 
                                to={link.path} 
                                className={link.sublinks ? beforeStyle : ''}
                            >
                                {t('menu.'+index)}

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
                                        {link.sublinks.map((sublink, index2) => {
                                            return (
                                                <li key={index2} className={subListStyle}>
                                                    <Link to={sublink.path} className='' >
                                                        {t(`sublinks${index}.${index2}`)}
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
                    <span>{t('menu.5')}</span>
                </Link>
                <Link to={'/ouvrir-un-compte'} className={'bg-green-200 rounded-r-full max-2xl:h-11 ' + linkStyle}>
                    <span>{t('menu.6')}</span>
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