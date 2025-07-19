import styles from './ClubDeNuitUntold.module.css';
import {NavigationBar} from "../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../Footer/Footer.tsx";

export const ClubDeNuitUntold = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Saffron and Jasmine<br/>
                        Middle Notes: Amberwood and Ambergris<br/>
                        Base Notes: Fir Resin and Cedar<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Club de Nuit Untold by Armaf is a bold and captivating fragrance that commands
                        attention with its rich, smoky allure and sophisticated depth.
                        A statement scent for those who defy convention,
                        Untold is a daring blend inspired by the mystery and intensity of modern luxury.
                        Crafted for fragrance enthusiasts who seek power and longevity,
                        this Eau de Parfum envelops the wearer in a trail of spice, woods, and amber,
                        evoking both elegance and strength.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"ClubDeNuitUntold.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Club De Nuit Untold </h1>
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
