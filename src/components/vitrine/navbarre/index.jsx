import { useState} from "react";
import NavListItem from "../nav-li";
import Logo from "../../logo";

function Navbarre() {

    const [isOpen, setIsOpen] = useState(false);
    const classList = "transition-all flex flex-col justify-between h-screen fixed bg-white md:top-0 md:left-0 md:right-0 md:flex-row md:justify-between md:h-24 items-center py-24 md:px-5 md:py-4 w-full text-3xl md:text-xl shadow-xl z-10";
    const classOpen = classList + " top-0";
    const classClose = classList + " top-mfull";
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="h-24 relative shadow-xl md:shadow-none">
            <div className="md:hidden fixed top-0 left-0 right-0 z-20 flex flex-row-reverse justify-between items-center h-24 px-5 bg-white">
                <button onClick={toggle}className="flex flex-col justify-around items-center gap-3 py-3">
                    <div className="h-1 w-12 bg-black rounded-full"></div>
                    <div className="h-1 w-12 bg-black rounded-full"></div>
                    <div className="h-1 w-12 bg-black rounded-full"></div>
                </button>
                <div className={isOpen ? "hidden" : ""}>
                    <div className="h-20 w-20 md:h-12 md:w-12 bg-black rounded-full"></div>
                </div>
            </div>
            <nav className={isOpen ? classOpen : classClose}>
                <Logo />
                <ul className="flex flex-col md:flex-row justify-between items-center list-none font-semibold w-full md:w-1/2">
                    <NavListItem><a href="./">Accueil</a></NavListItem>
                    <NavListItem><a href="./">A propos</a></NavListItem>
                    <NavListItem><a href="./">Services</a></NavListItem>
                    <NavListItem><a href="./">Contact</a></NavListItem>
                </ul>
                <div>
                    <a href="login">
                        <button className="px-4 py-3 bg-cyan-800 rounded-xl text-white">
                            Connexion
                        </button>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbarre;