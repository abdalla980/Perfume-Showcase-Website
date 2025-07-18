import styles from  './KhamrahD.module.css';
import {NavigationBar} from "../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../Footer/Footer.tsx";

export const KhamrahDukhan = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Mandarin, Pimento, Smoked Spices<br/>
                        Heart: Cistus, Orange Flower, Incense, Patchouli<br/>
                        Base: Tobacco, Amber, Tonka Bean, Benzoin, Praline<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Dukhan, meaning "smoke," is deeply rooted in Middle Eastern heritage and the ritual of burning perfume.
                        Ethereal and hypnotic, Khamrah Dukhan captures the allure of rising smoke with its mesmerizing movement,
                        sophisticated depth, and complex sillage.
                        It transforms tradition into a modern olfactive statement of power and allure.
                        The burning composition of pimento, tobacco, and amber creates a fragrance that exudes raw energy
                        , boldness, and addictive allure. While Khamrah Dukhan remains a unisex fragrance,
                        this edition takes on a masculine angle, embracing the strength and intensity that resonate with masculinity.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"KhamrahDukhan.jpg"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Khamrah Dukhan</h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1900 E.P</h2>
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
