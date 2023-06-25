import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateEmail() || !validatePhone()) {
            return;
        }

        emailjs
            .sendForm(
                "service_hxulprv",
                "template_bfj08kl",
                form.current,
                "64FAZZKb-EvsdX7Ui"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    form.current.reset(); // Сбросить значения полей формы
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const validateEmail = () => {
        const emailInput = form.current.querySelector("input[name='user_email']");
        const email = emailInput.value.trim();

        if (!email) {
            // Email не введен
            alert("Введите корректный email");
            return false;
        }

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            // Некорректный формат email
            alert("Введите корректный email");
            return false;
        }

        return true;
    };

    const validatePhone = () => {
        const phoneInput = form.current.querySelector("input[name='user_phone']");
        const phone = phoneInput.value.trim();

        if (!phone) {
            // Телефон не введен
            alert("Введите корректный номер телефона");
            return false;
        }

        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phone)) {
            // Некорректный формат номера телефона
            alert("Введите корректный номер телефона");
            return false;
        }

        return true;
    };

    return (
        <div className=" flex flex-col max-w-[320px] flex-wrap">
            <form ref={form} onSubmit={sendEmail}>

                <div className=" flex justify-between">
                    <label>Имя:</label>
                    <input type="text" name="user_name" required className="border px-3 rounded-lg mx-1"/>
                </div>

                <div className=" flex justify-between mt-2">
                    <label>Почта:</label>
                    <input type="email" name="user_email" required className="border px-3 rounded-lg mx-1" />
                </div>

                <div className=" flex justify-between mt-2">
                    <label>Ваш телефон:</label>
                    <input type="phone" name="user_phone" required className="border px-3 rounded-lg mx-1" />
                </div>

                <div className="flex items-center justify-between mt-2">
                    <label>Укажите желаемые товары:</label>
                    <textarea name="message" required className="border px-3 rounded-lg mx-1" />
                </div>

                <div className="flex items-center justify-center mt-2">
                    <input type="submit" value="Отправить" className="border cursor-pointer p-3 rounded-lg" />
                </div>

            </form>
        </div>
    );
};