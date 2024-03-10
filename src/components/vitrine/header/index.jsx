import Navbarre from "../navbarre";
import Hero from "../hero";

function Header() {
    return (
        <div className="h-screen flex">
            <Navbarre />
            <Hero />
        </div>
    )
}

export default Header;