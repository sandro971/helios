import React, { useState } from 'react';
import Layout from '../../_components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const section1List = [
    {
        title: 'Des offres simples, utiles, transparentes et complètes',
        icon: faCheckCircle
    },
    {
        title: 'Des comptes engagés au service de la transition écologique',
        icon: faCheckCircle
    },
    {
        title: 'Une inscription rapide et sécurisée, toujours sans engagement',
        icon: faCheckCircle
    },
    {
        title: 'Des clients satisfaits et fiers d\'être chez Helios',
        icon: faCheckCircle
    }
]


const witnessList = [
    {
        alt: 'Moralscore',
        img: 'https://www.helios.do/assets/images/Moralscore.svg',
        text: 'n°1/24'
    },
    {
        alt: 'Trustpilot',
        img: 'https://www.helios.do/assets/images/Trustpilot.svg',
        text: '4,4/5'
    },
    {
        alt: 'Intercom',
        img: 'https://www.helios.do/assets/images/Intercom.svg',
        text: 'noté 97,4%'
    
    }
]


const Index: React.FC<any> = (props) => {
      
    return (
        <Layout>
            <section className='flex h-[100vh] justify-center items-center'>
                <div className='flex w-[70%] h-full justify-center items-center'>
                    <div className='flex flex-col max-w-[35em] w-full text-center gap-y-3'>
                        <h1 className='text-4xl'>Engagez-vous au quotidien 
                            <span className='font-bold'
                                style={{
                                    'backgroundImage': 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(181,244,212,1) 65%)'
                                }}> avec nos comptes éthiques 
                            </span>
                        </h1>

                        <ul className='flex flex-col gap-5 p-5'>
                            {section1List.map((i:any)=><li className="flex gap-3 items-center">
                                <img 
                                    src="https://www.helios.do/assets/images/Check.svg" alt="" 
                                    className='w-7 h-7'
                                />
                                <span>{i.title}</span>
                            </li>)}
                        </ul>

                        <form action="">
                            <div className='p-2 border-2 border-black rounded-full flex'>
                                <input type="text" 
                                    placeholder='Votre email'
                                    className='border-none outline-none w-full pl-5'
                                />
                                <button
                                    className='bg-green-200 text-gray-950 rounded-full px-7 py-2 flex-wrap whitespace-nowrap'
                                >OUVRIR UN COMPTE</button>
                            </div>
                        </form>

                        <div className='py-10 px-10'>
                            <ul className='flex gap-5 justify-between'>
                                {witnessList.map((i)=><li className='flex flex-col gap-2'>
                                    <img src={i.img} 
                                        alt={i.alt}
                                        className=' h-7'
                                    />
                                    <span>{i.text}</span>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='max-w-[30%] h-full w-full'>
                    <img src="https://www.helios.do/assets/images/carte_cafe_2504.webp" alt="" 
                        className='w-full h-full object-cover object-center '
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Index