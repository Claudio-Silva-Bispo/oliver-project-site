'use client'

import { useState } from 'react';

interface FormData {
    nome: string;
    email: string;
    nota: number;
    mensagem: string;
}

export default function FormFeedback() {
    const [formulario, setFormulario] = useState<FormData>({
        nome: '',
        email: '',
        nota: 0,
        mensagem: ''
    });

    const handleSetRating = (index: number) => {
        setFormulario({ ...formulario, nota: index + 1 });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Enviando formulário:', formulario);

        try {
            const response = await fetch('https://olivercleaningservice.com/api/criarFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formulario),
            });

            if (response.ok) {
                alert('Feedback sent successfully');
                setFormulario({
                    nome: '',
                    email: '',
                    nota: 0,
                    mensagem: ''
                });
            } else {
                alert('Error sending feedback.');
            }
        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Error sending feedback.');
        }
    };

    type StarIconProps = {
        filled: boolean;
        onClick: () => void;
    };

    const StarIcon = ({ filled, onClick }: StarIconProps) => (
        <svg
            onClick={onClick}
            className={`h-[50px] w-[80px] cursor-pointer ${filled ? 'text-yellow-500' : 'text-[#D5E0B5]'}`}
            fill={filled ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.36h6.704c.969 0 1.371 1.24.588 1.81l-5.396 3.928 2.073 6.36c.3.921-.755 1.683-1.54 1.193l-5.396-3.928-5.396 3.928c-.785.49-1.84-.272-1.54-1.193l2.073-6.36-5.396-3.928c-.783-.57-.38-1.81.588-1.81h6.704l2.073-6.36z"
            />
        </svg>
    );

    return (
        <div className="bg-cinzadois min-h-full md:flex md:justify-center pb-10" id="FormFeedback">
            <div className="w-[100%] md:pl-10 flex flex-col justify-center gap-10 p-6 md:p-10">
                <h1 className="text-6xl font-orelega tracking-tight text-[#47667B] uppercase mt-20 md:mt-0">Your Opinion Matters to Us!</h1>
                <h2 className="mt-2 text-lg md:text-2xl leading-8 font-manrope">Our survey is designed to improve our services, ensuring your home is more comfortable and secure.</h2>
                <p className="mt-2 text-lg md:text-2xl leading-8 font-manrope">To participate in our survey, please fill out the form. Your input will help us better understand how much you value the care of your home.</p>
                <p className="mt-2 text-lg md:text-2xl leading-8 font-manrope">We look forward to receiving your feedback.</p>
            </div>

            <div className="w-[100%] p-4 md:p-10 pb-20 md:pb-0">
                <form
                    name="form-feedback-oliver"
                    method="post"
                    data-netlify="false"
                    className="w-[100%] md:w-[80%] mx-auto bg-[#47667B] rounded-lg p-10 grid-cols-* md:mt-20"
                    id="form-feedback-oliver"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-feedback-oliver" value="feedback" />

                    <div>
                        <label className="block mb-2 text-xl font-manrope text-white" htmlFor="nome">Name</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                            autoComplete="nome"
                            value={formulario.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mx-auto mt-10">
                        <label className="block mb-2 text-xl font-manrope text-white" htmlFor="email">Your email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@gmail.com"
                            autoComplete="email"
                            value={formulario.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="rating flex justify-center content-center mt-10">
                        <input
                            className=""
                            type="number"
                            name="nota"
                            value={formulario.nota}
                            hidden
                            required
                            readOnly
                        />
                        {[...Array(5)].map((_, index) => (
                            <StarIcon key={index} filled={index < formulario.nota} onClick={() => handleSetRating(index)} />
                        ))}
                    </div>

                    <div className="mx-auto mt-20">
                        <label className="block mb-2 text-xl font-manrope text-white" htmlFor="mensagem">Your message</label>
                        <textarea
                            name="mensagem"
                            id="mensagem"   
                            rows={8}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Leave a comment..."
                            value={formulario.mensagem}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="flex justify-center text-center mt-10">
                        <div>
                            <button
                                className="rounded-md bg-cinzadois px-3.5 py-2.5 text-xl font-sen text-black shadow-sm hover:bg-cinzatres hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[100%] md:w-[100%]"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
