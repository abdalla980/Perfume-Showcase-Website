import styles from './BlueIconic.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const BlueIconic = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Grapefruit, Lemon, Mint, Pink Pepper, Coriander<br/>
                        Middle Notes: Ginger, Nutmeg, Jasmine and Melon<br/>
                        Base Notes: Incense, Amber, Cedar, Sandalwood, Patchouli, Labdanum, Woody<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Armaf's Club de Nuit Blue Iconic is a sophisticated and fresh fragrance that combines
                        citrusy top notes with spicy and woody undertones.
                        It's designed for the modern man who appreciates a blend of freshness and depth in his scent.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"BlueIconic.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Club De Nuit Iconic </h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1799 E.P</h2>
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
