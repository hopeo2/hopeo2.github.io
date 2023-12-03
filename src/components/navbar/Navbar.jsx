import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Link href="https://twitter.com/user_nnnn">
                    <Image
                        src="/assets/icons/twitter.png"
                        alt="twitter"
                        width={29}
                        height={25}
                    />
                </Link>
                <Link href="https://www.instagram.com/user_null__/">
                    <Image
                        src="/instagram.png"
                        alt="instagram"
                        width={29}
                        height={25}
                    />
                </Link>
                <Link target="_blank" href="https://t.me/pooffmm">
                    <Image
                        src="/assets/icons/tele-pn.png"
                        alt="tiktok"
                        width={29}
                        height={25}
                    />
                </Link>
            </div>
            <a href="/" className={styles.logo}>Hope O2</a>
            <div className={styles.links}>
                <ThemeToggle />
                
                <Link href="/contact" className={styles.link}>
                    تماس با من
                </Link>
                <Link href="/about" className={styles.link}>
                    درباره من
                </Link>
                <Link href="/" className={styles.link}>
                    خانه
                </Link>
                {/* <Link href="/" className={styles.link}>
                    About
                </Link> */}
                <AuthLinks />
            </div>
        </div>
    );
};

export default Navbar;
