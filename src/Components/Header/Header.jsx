import { Avatar } from "../Avatar/Avatar"
import { Logo } from "../Logo/Logo"
import { NavBar } from "../Navbar/NavBar"
import { Slogan } from "../Slogan/Slogan"


export const Header = () => {
    return (
        <header className="header-bg">
            <div className="header-content">
                <NavBar />
                <Logo />
                <Avatar />
            </div>
            <Slogan />
        </header>
    )
}
