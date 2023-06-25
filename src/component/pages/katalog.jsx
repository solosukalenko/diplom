import React from "react";
import Items from "../Items";
import { Slider } from "../slider/slider";


class Katalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Пшеница озимая',
                    img: 'pshenoozima.jpg',
                    desc: 'Колос веретеновидный, средней плотности, белый, ости прямые, длиной 6–7 см.',
                    category: 'zerno',
                    price: '14000'
                },
                {
                    id: 2,
                    title: 'Ячмень',
                    img: 'yachmen.jpg',
                    desc: 'Полый колос соломиная высотой до 135см, лист более широкий, чем у других злаковых культур',
                    category: 'zerno',
                    price: '10000'

                },
                {
                    id: 3,
                    title: 'Пшеница яровая',
                    img: 'phenoyarova.jpg',
                    desc: 'Сорт пшеницы твердой яровой, среднеспелый, макаронные качества хорошие.',
                    category: 'zerno',
                    price: '12000'
                },
                {
                    id: 4,
                    title: 'Кукуруза',
                    img: 'kykyryza.jpg',
                    desc: 'Засухостойчивая и отлично адаптируется к разным условиям вегетации',
                    category: 'zerno',
                    price: '10000'
                },
                {
                    id: 5,
                    title: 'Фасоль спаржевая',
                    img: 'fasol.jpg',
                    desc: 'Среднеспелая, вьящаяся спаржевая фасоль.',
                    category: 'bobi',
                    price: '20000'
                },
                {
                    id: 6,
                    title: 'Горох Фокор',
                    img: 'gorfokor.jpg',
                    desc: 'Сорт среднеспелый, высота стебля 60-90см.',
                    category: 'bobi',
                    price: '25000'
                },
                {
                    id: 7,
                    title: 'Горох Донской кормовой',
                    img: 'gordon.jpg',
                    desc: 'Сорт кормового назначения, высота стебля 60-110см',
                    category: 'bobi',
                    price: '18000'
                },
            ]
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="">
                    <Slider />
                </div>
                <Items items={this.state.items} />
            </div>
        );
    }
}

export default Katalog;