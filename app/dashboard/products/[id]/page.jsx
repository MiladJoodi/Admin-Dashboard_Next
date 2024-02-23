import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgCotainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                IPhone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="John Doe" />

                    <label>Price</label>
                    <input type="number" name="price" placeholder="johnDoen@gmail.com" />

                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="23" />

                    <label>Color</label>
                    <input type="phone" name="color" placeholder="red" />

                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="size" />

                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>

                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>

                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}

export default SingleProductPage;