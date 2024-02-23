import styles from "@/app/ui/login/login.module.css";


const LoginPage = () => {
    return (
        <div className={styles.container}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </form>

        </div>
    );
}

export default LoginPage;