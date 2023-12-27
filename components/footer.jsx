import Link from "next/link"
import Container from "./container"
import { Logo } from "./Icons/logo"
import { GithubIcon } from "./icons/Github.jsx";
import { SlackIcon } from "./icons/Slack.jsx";
import { TwitterIcon } from "./icons/Twitter.jsx";
const footerlink = [
    {
        title: "Product",
        links: [
            { title: 'Features', href: '/' },
            { title: 'Integrations', href: '/' },
            { title: 'Pricing', href: '/' },
            { title: 'Changelog', href: '/' },
            { title: 'Docs', href: '/' },
            { title: 'Linear Method', href: '/' },
            { title: 'Download', href: '/' },
        ],
    },
    {
        title: "Company",
        links: [
            { title: 'About us', href: '/' },
            { title: 'Blog', href: '/' },
            { title: 'Careers', href: '/' },
            { title: 'Customer', href: '/' },
            { title: 'Brand', href: '/' },
        ],
    },
    {
        title: "Resources",
        links: [
            { title: 'Community', href: '/' },
            { title: 'Contact', href: '/' },
            { title: 'DPA', href: '/' },
            { title: 'Terms of service', href: '/' },
        ],
    },
    {
        title: "Developers",
        links: [
            { title: 'API', href: '/' },
            { title: 'Status', href: '/' },
            { title: 'Github', href: '/' },
        ],
    },

]
const Footer = () => {
    return (
        <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
            <Container className="flex flex-col justify-between lg:flex-row">
                <div className="flex h-full flex-row justify-between lg:flex-col">
                    <div className="flex items-center text-grey">
                        <Logo className="mr-4 h-4 w-4" /> Linear-Designed worldwide
                    </div>
                    <div className="mt-auto flex space-x-4 text-grey">
                        <TwitterIcon />
                        <GithubIcon />
                        <SlackIcon />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {footerlink.map(column => (
                        <div key={column.title} className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]">
                            <h3 className="font-medium mb-3">{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.title} className="[&_a]:last:mb-0">
                                        <Link className="mb-3 block text-grey transition-colors hover:text-white" href={link.href}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </footer>
    )
}

export default Footer