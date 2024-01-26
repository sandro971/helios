import { t } from 'i18next';
import React, { useState } from 'react';

const Form: React.FC<any> = (props) => {
    const [email, setEmail] = useState<string>('')

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email)
    }
      
    return (
        <form action="" onSubmit={onSubmitHandler}>
            <div className='p-2 border-2 border-black rounded-full flex'>
                <input 
                    type="email" 
                    placeholder={t('index.section1.form.emailInput')}
                    className='border-none outline-none w-full pl-5'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <button
                    className='bg-green-200 text-gray-950 rounded-full px-7 py-2 flex-wrap whitespace-nowrap'
                >{t('index.section1.form.button')}</button>
            </div>
        </form>
    )
}

export default Form