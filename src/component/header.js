import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Form } from './form/form'





export default function Header() {

  const [open, setOpen] = useState(false)

  return (
    <header className=''>
        <div className='flex justify-between'>
            <span className='logo'>ИП Назаров</span>
            <ul className='flex items-center gap-3 text-[20px]'>
              <Link to="/">Каталог</Link>
              <Link to="/contakts">Контакты</Link>
              <Link to="/delivery">Доставка</Link>
              <button onClick={() => setOpen(true)} >Корзина</button>

              <dialog open={open} className=' absolute top-[100px] border p-5 rounded-lg left-[1040px] z-10'>
                <div className='flex flex-col flex-wrap'>
                  <div className='flex flex-wrap items-center justify-center' >
                    <Form/>
                  </div>
                  Мы проконсультируем вас о наличии желаемых товаров
                </div>
                <button className=' border-[black] p-1 rounded-lg border-[3px]' onClick={() => {setOpen(false)}}>Закрыть</button>
              </dialog>

            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
