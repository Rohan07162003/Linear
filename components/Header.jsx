"use client";
import Link from "next/link"
import { Logo } from "./Icons/logo"
import Container from "./container"
import Button from "./button"
import { HamburgerIcon } from "./Icons/hamburger"
import { useState, useEffect } from "react"
import classNames from "classnames";
const Header = () => {
    const [menuisopen, setMenuisopen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) html.classList.toggle("overflow-hidden", menuisopen);
    }, [menuisopen])
    useEffect(() => {
        const closehamburgernav = () => setMenuisopen(false);
        window.addEventListener('orientationchange', closehamburgernav);
        window.addEventListener('resize', closehamburgernav);
        return () => {
            window.removeEventListener('orientationchange', closehamburgernav);
            window.removeEventListener('resize', closehamburgernav);
        }
    }, [setMenuisopen]);

    return (
        <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
            <Container className="flex h-[var(--navigationheight)]">
                <Link className="flex items-center text-md" href={"/"}>
                    <Logo className={"h-[1.8rem] w-[1.8rem] mr-3"} /> Linear
                </Link>
                <div className={classNames("transition-[visibility] md:visible", menuisopen ? "visible bg-background" : "invisible delay-500")}>
                    <nav className={classNames("h-[calc(100vh_-_var(--navigationheight))] bg-background md:block overflow-auto fixed left-0 md:relative md:h-auto md:top-0 md:w-auto md:bg-transparent top-navigation-height w-full md:opacity-100 transition-opacity md:visible duration-500", menuisopen ? "opacity-100" : "opacity-0")}>
                        <ul className={classNames("ease-in flex flex-col md:flex-row md:items-center [&_li]:border-b [&_li]:border-grey-dark [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:transition-transform h-full [&_a]:text-md md:[&_a]:text-sm [&_li]:ml-6 md:[&_li]:border-none [&_a:hover]:text-grey [&_a]:transition-colors [&_a]:h-navigation-height [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:duration-300", menuisopen && "[&_a]:translate-y-0")}>
                            <li><Link href={"/"}>Features</Link></li>
                            <li><Link href={"/"}>Method</Link></li>
                            <li className="md:hidden lg:block"><Link href={"/"}>Customer</Link></li>
                            <li className="md:hidden lg:block"><Link href={"/"}>Changelog</Link></li>
                            <li className="md:hidden lg:block"><Link href={"/"}>Integrations</Link></li>
                            <li><Link href={"/"}>Pricing</Link></li>
                            <li><Link href={"/"}>Company</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="ml-auto h-full flex items-center">
                    <Link className="text-sm mr-6" href={"/"}>Log in</Link>
                    <Button href={"/"}>
                        <div className="text-sm">Sign up</div>
                    </Button>
                </div>
                <button className="ml-6 block md:hidden" onClick={() => setMenuisopen(open => !open)}>
                    <span className="sr-only">Toggle-menu</span>
                    <HamburgerIcon />
                </button>
            </Container>
        </header>
    )
}

export default Header