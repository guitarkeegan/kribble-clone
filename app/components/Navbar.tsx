import DribbbleIcon from "./DribbleIcon";
import HamburgerMenu from "./HamburgerMenu";
import Magnifier from "./MagnifyingGlass";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between py-6 px-6 items-center">
            <div className="flex gap-4 items-center">
                <div>
                    <HamburgerMenu />
                </div>
                <DribbbleIcon />
            </div>
            <div className="flex gap-4 items-center">
                <Magnifier />
                <button className="bg-black py-4 px-6 rounded-3xl text-sm text-white">Sign Up</button>
            </div>
        </nav>
    )
}