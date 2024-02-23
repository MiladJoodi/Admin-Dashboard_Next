import Link from "next/link";
import Pagination from "../pagination/pagination";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";


const ProductsPage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <Search placeholder="Search for a user" />
                <Link href="/dashboard/user/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Create At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                                John Dev
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>13.01.2022</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>
                                    View
                                </button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>
                                Delete
                            </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}

export default ProductsPage;