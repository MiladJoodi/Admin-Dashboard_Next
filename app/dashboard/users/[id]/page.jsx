import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async () => {

    const user = fetchUser();

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgCotainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="John Doe" />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="johnDoen@gmail.com" />

                    <label>Password</label>
                    <input type="password" name="password" />

                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder="+123456" />

                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="New York" />

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}

export default SingleUserPage;