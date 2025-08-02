import styles from './AzzureAoud.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const AzzureAoud = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top notes: saffron, passion fruit, rose<br/>
                        Heart notes: oud, benzoin, patchouli.<br/>
                        Background notes: leather, woody notes, vanilla<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p className={styles.lastp}>
                        Azzure Aoud is a deep and intense nectar that will dress you elegantly.
                        It's a blend of explosively hot and exquisite ingredients .
                        This way, you'll be put in the spotlight, with a distinctive sophistication and a delicate
                        sensuality.
                        It's also the ultimate unisex fragrance. It sublimates everyone with subtlety and class.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"AzzureAoud.png"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}> Azzure Aoud </h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1490 E.P</h2>
                    <br/>
                    <div className={styles.Icons}>
                        <button className={styles.Button} onClick={() => window.open("https://instagram.com/mwatinimasr/")}>Order now!</button>
                    </div>
                    <br/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
