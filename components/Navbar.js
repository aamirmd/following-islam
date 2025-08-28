"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const itemSelectedBootstrap = "active fw-bold text-info";
    const itemDefaultBootstrap = "text-light";

    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
            data-bs-theme="dark"
        >
            <div
                className="container-fluid collapse navbar-collapse"
                // id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className={`nav-item mx-0 my-0`}>
                        <Link
                            className={`nav-link ${
                                pathname === "/"
                                    ? itemSelectedBootstrap
                                    : itemDefaultBootstrap
                            }`}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                pathname === "/janazah"
                                    ? itemSelectedBootstrap
                                    : itemDefaultBootstrap
                            }`}
                            href="/janazah"
                        >
                            My Final Place
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                pathname === "/hajj"
                                    ? itemSelectedBootstrap
                                    : itemDefaultBootstrap
                            }`}
                            href="/hajj"
                        >
                            Hajj
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
