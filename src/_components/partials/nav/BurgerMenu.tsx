import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { burgerLinks } from './links';

import React, { useEffect } from 'react';
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
    const [sublinks, setSublinks] = React.useState<any>([])
    const [selectedMenu, setSelectedMenu] = React.useState('')

    const onClickLiBurgerMenuHandler = (e: React.MouseEvent<HTMLDivElement>, link: any) => {
        if(!link.sublinks) return
        
        if(sublinks.length === 0) {
            setSelectedMenu(link.name)
            setSublinks(
                link.sublinks
            )
        }
        else{
            setSelectedMenu('')
            setSublinks([])
        }
    }


    useEffect(() => {
        let link = burgerLinks.find(link => link.name === selectedMenu)

        if(link){
            setSublinks(
                link.sublinks
            )
        }
    }, [selectedMenu])

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
                <ul className='flex flex-col px-8'>
                    {burgerLinks
                        .filter((link:any) => {
                            return (
                                selectedMenu === '' || 
                                selectedMenu === link.name
                            )
                        })
                        .map((link, index) => {
                            return (
                                <li key={index} 
                                    className="flex justify-center items-center h-[4em] border-t-2 last:border-b-2 border-black"
                                    data-menu={link.name}
                                >
                                    <div 
                                        className="cursor-pointer h-full text-gray-600 flex gap-2 items-center"
                                        onClick={e => onClickLiBurgerMenuHandler(e, link)}
                                    >
                                        {link.name}

                                        {link.sublinks && (
                                            <FontAwesomeIcon 
                                                icon={faChevronDown} 
                                                className='text-[.6em] text-gray-800'
                                            />
                                        )}
                                    </div>
                                </li>
                            )
                        })
                    }

                    {sublinks.map((sublink: any, index: number) => {
                        return (
                            <li key={index}
                                className="flex justify-center items-center h-[4em] border-t-2 last:border-b-2 border-black" >
                                <div 
                                    className="cursor-pointer h-full text-gray-600 flex gap-2 items-center"
                                >
                                    <Link to={sublink.path} className='text-gray-500' >
                                        {sublink.name}
                                    </Link>
                                </div>
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