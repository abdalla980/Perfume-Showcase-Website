import styles from './Aether.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const Aether = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top notes: Green apple, mandarin, orange, bergamot<br/>
                        Heart notes: Petitgrain, cashmere, cedar, violet<br/>
                        Background notes: Oakmoss, musk, amber wood<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Aether is one of the great fragrances that transforms the life of the wearer.
                        Its fresh, powerful scent has the power to seduce.
                        This will double your charisma, And you will shine.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"aether.png"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}> Aether </h1>
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
