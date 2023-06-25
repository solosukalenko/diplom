import Del from "../../img/deliverypic.jpg"



export const Delivery = () => {


    return (
        <div className=" items-center max-w-[1280px] mb-5">
            <div className=" border mb-[50px]">
                <div className=" flex items-center justify-center">Информация о доставке</div>
                <div className="flex flex-col items-center justify-center flex-wrap gap-5 my-5">
                    <div>Доставка осуществляется  в пределах Константиновского района бесплатно.  </div>
                    <div>Стоимость доставки до 50км = 1500 рублей.</div>
                    <div>В пределах 50-100км=3000р.</div>
                    <div>В пределах 100-150км=5000р. </div>
                    <div>В пределах 150-200км=7000р. </div>
                    <div>В пределах 200-300 км 10000р. </div>
                    <div>Свыше 300км дополнительно оплачивается 10000+8р каждый километр.</div>
                </div>
            </div>
            <div className="">
                <img src={Del} alt="delivery" className=" w-full h-[600px]"/>
            </div>
        </div>
    )
}

// В пределах 100-150км=5000р
// В пределах 150-200км=7000р
// Свыше 300км дополнительно оплачивается 10000+8р каждый километр.