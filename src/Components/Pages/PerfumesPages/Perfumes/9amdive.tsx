import styles from './9am.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const nineAm = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>

                        Top Notes:Lemon, Pink Pepper, Mint and Black Currant<br/>
                        Middle Notes:Apple, Incense and Cedar<br/>
                        Base Notes:Patchouli, Jasmine, Ginger and Sandalwood<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        An invigorating and fresh fragrance that captures the essence of a brisk morning plunge into crystal-clear waters.
                        This dynamic scent opens with lively citrus notes that awaken the senses,
                        reminiscent of the first rays of sunlight on a serene morning. As it evolves,
                        a blend of aquatic and ozonic accords takes center stage, creating a refreshing and revitalizing experience.
                        #CraftedByAfnan
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"9AM-Dive.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>9am Dive</h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1550 E.P</h2>
                    <br/>
                    <div className={styles.Icons}>
                        <img className={styles.insta} src={"insta.png"}/>
                        <img  className={styles.whatsapp} src={"Whatsapp.png"}/>
                    </div>
                    <br/>
                    <p>To order please send us <br/>a message on <br/>whatsapp/instagram!</p>
                    <img src={"5 stars.png"}/>
                    <br/>
                    <p>3 Reviews</p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

