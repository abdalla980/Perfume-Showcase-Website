import styles from './FrenchT.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const FrenchT = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top notes: blood orange, green apple, mandarin<br/>
                        Heart notes: French tobacco, orange blossom, cinnamon, ginger<br/>
                        Base notes: guaiac wood, lemon, frankincense, iris<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        French Tobacco combines the scent of citrus and vintage French tobacco,
                        intertwined with warm, captivating woody notes. The fragrant scent of iris flows between
                        these ingredients like a gentle breeze, elegant and distinctive.
                        It is the embodiment of luxury and timeless French elegance, captivating hearts and carrying
                        the soul on an enchanting journey from ancient elegance to stunning modernity.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"FrenchTobacco.png"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}> French Tobacco</h1>
                    <h3>Size:200ml | Men </h3>
                    <br/>
                    <br/>
                    <h2>3999 E.P</h2>
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
