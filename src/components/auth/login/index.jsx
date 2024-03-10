function Login() {
    return (
        <div className="bg-hero w-screen h-screen object-fit bg-cover flex justify-center items-center">
            <div className="w-screen h-screen flex justify-center items-center bg-shdw">
                <form action="" method="post" className="flex flex-col bg-white px-5 py-4 w-2/3 2xl:w-3/12 gap-8 rounded-lg">
                    <div className="text-2xl text-center">
                        <h2>Connexion</h2>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col w-1/3 gap-4">
                            <label htmlFor="email">Email</label>
                            <br />
                            <label htmlFor="password">Mot de passe</label>
                        </div>
                        <div className="flex flex-col w-2/3 gap-4">
                            <input type="email" name="email" id="email" className="border-b-2 border-cyan-800"/>
                            <input type="password" name="password" id="password" className="border-b-2 border-cyan-800 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button type="submit" className="bg-cyan-800 px-4 py-3 rounded-lg text-white">Connexion</button>
                        <p>Si vous n'avez pas de compte, <a href="register" className="text-blue-900">créez en un</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;