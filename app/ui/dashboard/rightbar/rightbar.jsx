import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            {/* one */}
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill/>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available Now</span>

                    <h3 className={styles.title}>how to use the new version of the admin dashboard</h3>

                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur est</p>

                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            {/* tow */}
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>🚀 Coming Soon</span>

                    <h3 className={styles.title}>New server actions are available, partial pre-rendering os coming soon</h3>

                    <span className={styles.subtitle}>Boost your productivity</span>
                    
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur est</p>

                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;