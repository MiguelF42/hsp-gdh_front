function Layout({children}) {
    return(
        <main className="fixed top-0 right-0 min-h-full w-5/6 p-4">
            {children}
        </main>
    )
}

export default Layout;