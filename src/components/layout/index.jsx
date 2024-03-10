import Header from "../vitrine/header";
import Footer from "../vitrine/footer";

function Layout({children}) {
    return (
        <div className="min-h-screen">
        <Header />
        {children}
        <Footer />
        </div>
    )
}

export default Layout;