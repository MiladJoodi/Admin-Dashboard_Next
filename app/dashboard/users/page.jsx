import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";


const UsersPage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <Search placeholder="Search for a user"/>
                <Link href="/dashboard/user/add">
                <button className={styles.addButton}>Add New</button>
                </Link>
            </div>

            <table className={styles.table}></table>
        </div>
    );
}

export default UsersPage;