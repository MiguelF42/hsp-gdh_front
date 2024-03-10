import { useForm } from 'react-hook-form';
import { useState } from 'react';
// import process from 'process';
import { post } from '../../../modules/fetchManager.js';

function Register() {
    const [error, setError] = useState(null);
    const { register, handleSubmit} = useForm();
    const onSubmit = (e) => {
        if(e.password !== e.confirm_pass){
            setError("Les mots de passe ne correspondent pas");
            return;
        }
        post('users/register', e)
            .then(data => {
                if(data.error){
                    setError(data.error);
                }
                console.log(data);
            });
    }

    return (
        <div className="bg-hero w-screen h-screen object-fit bg-cover flex justify-center items-center">
            <div className="w-screen h-screen flex justify-center items-center bg-shdw">
                <form action="" onSubmit={handleSubmit(onSubmit)} method="post" className="flex flex-col bg-white px-5 py-4 w-2/3 2xl:w-3/12 gap-8 rounded-lg">
                    <div className="text-2xl text-center">
                        <h2>Inscription</h2>
                    </div>
                    <div className='flex justify-center items-center'>
                        {error ? <p className="text-red-600 my-4">{error}</p> : null}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-between w-1/3">
                            <label className="py-1" htmlFor="username">Nom d'utilisateur</label>
                            <label className="py-1" htmlFor="first_name">Prénom</label>
                            <label className="py-1" htmlFor="last_name">Nom de famille</label>
                            <label className="py-1" htmlFor="email">Email</label>
                            <label className="py-1" htmlFor="phone">Téléphone</label>
                            <label className="py-1" htmlFor="password">Mot de passe</label>
                            <label className="py-1" htmlFor="confirm_pass">Confirmation</label>
                        </div>
                        <div className="flex flex-col w-2/3 gap-4">
                            <input {...register("username", {required: true})} id="username" className="border-b-2 border-cyan-800 focus:outline-none" />
                            <input {...register("first_name", {required: true})} id="first_name" className="border-b-2 border-cyan-800 focus:outline-none"/>
                            <input {...register("last_name", {required: true})} id="last_name" className="border-b-2 border-cyan-800 focus:outline-none"/>
                            <input type="email" {...register("email", {required: true})} id="email" className="border-b-2 border-cyan-800 focus:outline-none"/>
                            <input type="tel" {...register("phone")} id="phone" className="border-b-2 border-cyan-800 focus:outline-none" />
                            <input type="password" {...register("password", {required: true})} id="password" className="border-b-2 border-cyan-800 focus:outline-none"/>
                            <input type="password" {...register("confirm_pass", {required: true})} id="confirm_pass" className="border-b-2 border-cyan-800 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button type="submit" className="bg-cyan-800 px-4 py-3 rounded-lg text-white">Connexion</button>
                        <p>Vous avez déjà un compte, <a href="login" className="text-blue-900">connectez-vous</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;