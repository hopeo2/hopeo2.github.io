import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/assets/images/channels4_profile.jpg" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Hope O2</h1>
        </div>
        <p className={styles.desc}>
          made with ❤️️
        </p>
        <div className={styles.icons}>
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
                <Link target="_blank" href="https://t.me/thisis_avatar">
                    <Image
                        src="/assets/icons/tele-pn.png"
                        alt="tiktok"
                        width={29}
                        height={25}
                    />
                </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">yoo</Link>
          <Link href="/">and Yoo</Link>
          <Link href="/">and yoo</Link>
          <Link href="/">and Yoo</Link>
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://t.me/pooffmm">telegram</Link>
          <Link href="https://www.instagram.com/user_null__/">Instagram</Link>
          <Link href="https://twitter.com/user_nnnn">X</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
