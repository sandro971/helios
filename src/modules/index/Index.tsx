import React, { useState } from 'react';
import Layout from '../../_components/layout/Layout';
import Form from './Form';
import { section1List, witnessList } from './lists';
import { t } from 'i18next';


const Index: React.FC<any> = (props) => {
    const _witnessList = witnessList.map((i:any, index: number)=>({
        ...i,
        value : ['1/24', '4.4/5', '97.4'][index]
    }))
      
    return (
        <Layout>
            <section className='flex h-[100vh] min-h-[48em] justify-center items-center max-lg:flex-col max-lg:h-[auto]'>
                <div className='flex w-[70%] h-full justify-center items-center max-lg:w-full'>
                    <div className='flex flex-col max-w-[36em] w-full text-center gap-y-3'>
                        <h1 className='text-[2.4em] font-[pt-serif-regular] tracking-wide
                        '>{t('index.section1.title')}
                            <span className='font-bold'
                                style={{
                                    'backgroundImage': 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(181,244,212,1) 65%)'
                                }}> {t('index.section1.title-part2')}
                            </span>
                        </h1>

                        <ul className='flex flex-col gap-5 p-5'>
                            {section1List.map((i:any, index:number)=><li className="flex gap-3 items-center">
                                <img 
                                    src="https://www.helios.do/assets/images/Check.svg" alt="" 
                                    className='w-7 h-7'
                                />
                                <span>{t('index.section1.list1.'+index)}</span>
                            </li>)}
                        </ul>

                        <Form />

                        <div className='py-10 px-10'>
                            <ul className='flex gap-5 justify-between'>
                                {_witnessList.map((i)=><li className='flex flex-col gap-2'>
                                    <img src={i.img} 
                                        alt={i.alt}
                                        className=' h-7'
                                    />
                                    <span>{t('index.section1.list2.'+ i.alt, {value: i.value})}</span>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='max-w-[30%] h-full w-full max-lg:max-w-full max-lg:h-[30em]'>
                    <img src="https://www.helios.do/assets/images/carte_cafe_2504.webp" alt="" 
                        className='w-full h-full object-cover object-center '
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Index