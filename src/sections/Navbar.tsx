import { useState, useEffect, useMemo } from "react";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { FaHome, FaCar, FaShoppingCart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import "../styles/_base.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeItem, setActiveItem] = useState("");
    const location = useLocation();

    const navItems = useMemo(
        () => [
            { id: "home", text: "Home", icon: <FaHome size={25} />, href: "/",},
            { id: "products", text: "Products", icon: <FaCar size={25} />, href: "/products", },
            { id: "cart", text: "Cart", icon: <FaShoppingCart size={25} />, href: "/cart", },
            { id: "login", text: "Login", icon: <IoLogIn size={25} />, href: "/login", },
        ],
        []
    );

    useEffect(() => {
        const currentPath = location.pathname;
        const matchingItem = navItems.find((item) => item.href === currentPath);
        setActiveItem(matchingItem ? matchingItem.id : "");
    }, [location.pathname, navItems]);

    return (
        <aside
            id="nav-wrapper"
            className={`h-screen bg-white block fixed ${
                isOpen ? "w-64" : "w-20"
            } transition-all`}
        >
            <nav className="h-full flex flex-col border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        id="nav-logo"
                        src="images/logo.jpeg"
                        className={`overflow-hidden transition-all ${
                            isOpen ? "w-20" : "w-0"
                        }`}
                        alt="Logo"
                    />
                    <button
                        onClick={() => setIsOpen((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {isOpen ? (
                            <LuChevronFirst size={24} />
                        ) : (
                            <LuChevronLast size={36} />
                        )}
                    </button>
                </div>
                <ul className="flex-1 px-3">
                    {navItems.map((item) => (
                        <NavbarItem
                            key={item.id}
                            icon={item.icon}
                            text={item.text}
                            href={item.href}
                            isActive={activeItem === item.id}
                            onClick={() => setActiveItem(item.id)}
                            isOpen={isOpen}
                        />
                    ))}
                </ul>
                <div className="border-t flex p-3 items-center">
                    <img
                        src="images/user.jpg"
                        className={`w-10 h-10 rounded-md transition-all ${
                            isOpen ? "ml-0" : "ml-2"
                        }`}
                        alt="User"
                    />
                    {isOpen && (
                        <div className="flex justify-between items-center ml-3 w-full">
                            <div className="leading-4">
                                <h4 className="font-semibold">Username</h4>
                            </div>
                            <MdMoreVert size={20} className="cursor-pointer" />
                        </div>
                    )}
                </div>
            </nav>
        </aside>
    );
};

export default Navbar;

export function NavbarItem({ icon, text, href, isActive, onClick, isOpen }) {
    return (
        <Link to={href}>
            <li
                onClick={onClick}
                className={`relative flex items-center p-2 rounded-md cursor-pointer transition-all my-2 mx-1 ${
                    isActive
                        ? "bg-gradient-to-tr from-orange-200 to-orange-100 text-orange-600 font-semibold"
                        : "hover:bg-orange-50 text-gray-600"
                }`}
            >
                <div
                    className={`ml-0.5 flex items-center justify-center ${
                        isOpen ? "block" : "block"
                    }`}
                >
                    {icon}
                </div>
                <span
                    className={`ml-3 transition-all truncate ${
                        isOpen ? "opacity-100" : "opacity-0 invisible"
                    }`}
                >
                    {text}
                </span>
            </li>
        </Link>
    );
}
