function Navbarre({setPage}) {
    const handleClick = (e) => {
        // e.preventDefault();
        setPage(e.target.getAttribute("id"));
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-1/6 bg-cyan-800 flex flex-col justify-between items-center">
            <div className="py-10 text-center text-3xl flex flex-col gap-5 text-white">
                <div className="h-36 w-36 bg-gray-400 rounded-full">

                </div>
                <div>
                    <h3 className="min-h-10">John Doe</h3>
                </div>
            </div>
            <div className="text-2xl text-white">
                <ul id="dash-nav">
                    <li className="relative my-4 hover:text-green-500 hover:cursor-pointer z-10" id="home" onClick={handleClick}>
                        <p className="transition-all duration-500" id="home">Accueil</p>
                        <div className="w-full h-1 bg-white mt-1" id="home"></div>
                        <div className="absolute h-1 w-0 bg-green-500 mt-1 z-10 bottom-0 left-0 transition-all duration-500" id="home"></div>
                    </li>
                    <li className="relative my-4 hover:text-green-500 hover:cursor-pointer" id="appointment" onClick={handleClick}>
                        <p className="transition duration-500" id="appointment">Rendez-vous</p>
                        <div className="w-full h-1 bg-white mt-1" id="appointment"></div>
                        <div className="absolute h-1 w-0 bg-green-500 mt-1 z-10 bottom-0 left-0 transition-all duration-500" id="appointment"></div>
                    </li>
                    <li className="relative my-4 hover:text-green-500 hover:cursor-pointer" id="prescription" onClick={handleClick}>
                        <p className="transition duration-500" id="prescription">Préscriptions</p>
                        <div className="w-full h-1 bg-white mt-1" id="prescription"></div>
                        <div className="absolute h-1 w-0 bg-green-500 mt-1 z-10 bottom-0 left-0 transition-all duration-500" id="prescription"></div>
                    </li>
                    <li className="relative my-4 hover:text-green-500 hover:cursor-pointer" id="medical-file" onClick={handleClick}>
                        <p className="transition duration-500" id="medical-file">Dossier Médical</p>
                        <div className="w-full h-1 bg-white mt-1" id="medical-file"></div>
                        <div className="absolute h-1 w-0 bg-green-500 mt-1 z-10 bottom-0 left-0 transition-all duration-500" id="medical-file"></div>
                    </li>
                </ul>
            </div>
            <div className="py-24">
                <button className="bg-red-500 text-white p-5 rounded-lg text-3xl">Déconnexion</button>
            </div>
        </aside>
    )
}

export default Navbarre;