import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faRemove, faUser } from "@fortawesome/free-solid-svg-icons"


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'Nous connaître',
        path: '/'
    },
    {
        name: 'Nos offres',
        path: '/nos-offres',
        sublinks: [
            {
                name: 'Toutes nos offres',
                path: '/nos-offres'
            },
            {
                name: 'Le compte courant',
                path: '/compte-courant'
            },
            {
                name: 'Le compte commun',
                path: '/compte-commun'
            },
            {
                name: 'L\'Assurance-vie éthique',
                path: '/assurance-vie'
            },
            {
                name: 'Le compte pour épargner',
                path: '/livret-compte-epargner'
            },
            {
                name: 'Programme de fidélité éthique',
                path: '/programme-fidelite-ethique'
            }
        ]
    },
    {
        name: 'Avis clients',
        path: '/avis-clients'
    },
    {
        name: 'Notre impact',
        path: '/notre-impact',
        sublinks: [
            {
                name: 'Simulateur d\'empreinte carbone',
                path: '/simulateur-empreinte-carbone'
            },
            {
                name: 'Les projets financés',
                path: '/projets-finances'
            }
        ]
    },
    {
        name: 'Ressources',
        path: '/ressources',
        sublinks: [
            {
                name: 'Blog "Le Billet vert"',
                path: '/blog'
            },
            {
                name: 'Foire aux Questions',
                path: '/faq'
            },
            {
                name: 'Banque éthique',
                path: '/banque-ethique'
            },
            {
                name: 'Lexique',
                path: '/lexique'
            },
            {
                name: 'Calcul de l\'empreinte carbone',
                path: '/calcul-empreinte-carbone'
            }
        ]
    }
]

// on hover, before is full width and height .1em and color green-300
const beforeStyle = `
flex
items-center
hover:[&>*:last-child]:height-[.5em]
[&>*:last-child]:flex
[&>*:last-child]:width-full
[&>*:last-child]:ease-in-out
[&>*:last-child]:bg-green-300
[&>*:last-child]:absolute
[&>*:last-child]:bottom-[-.1em]
[&>*:last-child]:duration-1000`

const linkStyle = `flex
text-green-950
text-sm
items-center
gap-2
font-arial
font-sans-serif
wrap
whitespace-nowrap
px-5
border-l-[.15em]
max-2xl:border-none
max-2xl:rounded-full
border-green-950
h-full`

const listStyle = `flex
text-center
items-center
justify-center
wrap
whitespace-wrap
relative
font-arial
font-sans-serif
text-green-950`

const listMenuStyle = listStyle + `
hover:before:content-['']
before:content-[none]
transition-all
before:h-[0em]
before:w-full
before:bg-green-300
before:opacity-50
transition 
    ease-in-out 
    duration-300
hover:before:h-[.3em]
before:absolute
before:bottom-1
before:left-0`

const subListStyle = listStyle + `
text-sm
hover:text-gray-500
transition-all
transition-[.5s]`

const subListMenuBurgerStyle = `
flex
w-full
items-center
justify-center
py-3
rounded-full
`

const BurgerMenu = () => {
    const [burgerMenuDisplay, setBurgerMenuDisplay] = useState<Record<string, string>>({
        'Nos offres': 'hidden',
        'Notre impact': 'hidden',
        'Ressources': 'hidden'
    })

    const onClickLiBurgerMenuHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const menu = e.currentTarget.dataset.menu as string
        setBurgerMenuDisplay({
            ...burgerMenuDisplay,
            [menu]: burgerMenuDisplay[menu] === 'hidden' ? 'block' : 'hidden'
        })
    }


    return <nav className='bg-orange-50 top-0 pt-36 absolute w-full flex flex-col rounded-[2em] gap-y-10'>
        <ul className='flex flex-col px-8 '>
            {links.map((link, index) => {
                return (
                    <li key={index} 
                        className={"flex justify-center items-center h-16 border-t-2 last:border-b-2 border-black"}
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
}



const Nav: React.FC<any> = (props) => {
    const [menuDisplay, setMenuDisplay] = useState<Record<string, string>>({
        'Nos offres': 'hidden',
        'Notre impact': 'hidden',
        'Ressources': 'hidden'
    })

    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)

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

      
    return (
        <menu className='w-full flex justify-center p-4 fixed'>
            <div className='flex flex-col justify-center relative w-full'>
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
                            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                        >
                            {!showBurgerMenu && (
                                <img src="https://www.helios.do/assets/images/Open-Menu.svg" loading="lazy" alt='' style={{width: '2em'}} />
                            )}
                            {showBurgerMenu && (
                                <img src="https://www.helios.do/assets/images/Close-Menu.svg" loading="lazy" alt='' style={{width: '2em'}} />
                            )}
                        </button>
                    </div>
                </nav>
                {/* burger menu */}
                {showBurgerMenu && <BurgerMenu />}
            </div>
        </menu>
    )
}

export default Nav