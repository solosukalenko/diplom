import Kont from '../../img/kont.jpg'
import { Form } from '../form/form'



export const Contakts = () => {


    return (
        <div className=' flex flex-col mb-5'> 
            <div>
                <img src={Kont} alt='photo' className='h-[800px] w-[1480px]'/>
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <div  className=' flex justify-center'>
                    Наш юридический адрес: Россия, Константиновский район, х.Почтовый, ул.Молодежная дом 31 

                </div>

                <div  className=' flex justify-center'>
                    Напишите нам в <a className=" text-xl text-[green] ml-2" href="https://api.whatsapp.com/send/?phone=79064206796" target = "_blank" without rel="noreferrer" >WhatsApp</a>:
                </div>
            </div>
        </div>
    )
}