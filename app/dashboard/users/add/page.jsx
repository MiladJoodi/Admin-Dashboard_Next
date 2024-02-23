import styles from "@/app/ui/dashboard/users/AddUser/addUser.module.css";


const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="passwrord" required />
                <input type="text" placeholder="phone" name="passwrord" />
                
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <select name="isActive" id="isActive">
                    <option value={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea name="address" id="address" rows="16" placeholder="Adress"></textarea>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export default AddUserPage;