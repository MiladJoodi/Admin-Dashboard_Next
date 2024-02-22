import Image from "next/image";
import styles from "./rightbar.module.css";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className="bgContainer">
                    <Image src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3>how to use the new version of the admin dashboard</h3>
                    <span>Takes 4 minutes to learn</span>
                    <p>lorem</p>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;