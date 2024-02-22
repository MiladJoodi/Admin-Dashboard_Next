"use client"
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className={styles.container}>

            {/* TITLE */}
            <div className={styles.title}>{pathname.split("/").pop()}</div>

            {/* RIGHT MENU */}
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." className={styles.input} />
                </div>
                <div className={styles.icons}>
                        <MdNotifications size={20} />
                        <MdOutlineChat size={20} />
                        <MdPublic size={20} />
                </div>
            </div>

        </div>
    );
}

export default Navbar;