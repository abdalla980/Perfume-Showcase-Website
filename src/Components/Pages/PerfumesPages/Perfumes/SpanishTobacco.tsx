import styles from './SpanichT.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const SpanishTobacco = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top notes: watery notes, saffron, tonka beans<br/>
                        Heart notes: cocoa, amber, Spanish tobacco<br/>
                        Base notes: iris, woods<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p className={styles.lastp}>
                        From the moment the Spanish Tobacco fragrance takes flight,
                        its distinctive scent spreads, enveloped in notes of saffron and tonka,
                        delicately blended with amber and tobacco,
                        and finally delicately embraced by jasmine flowers and woods to create a wonderful aromatic
                        trail.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"SpanishTobacco.avif"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}> Spanish Tobacco</h1>
                    <h3>Size:200ml | Men </h3>
                    <br/>
                    <br/>
                    <h2>3999 E.P</h2>
                    <br/>
                    <div className={styles.Icons}>
                        <button
                            className={styles.Button}
                            onClick={() => window.open("https://instagram.com/mwatinimasr/")}
                        >
                            Order now!
                        </button>
                    </div>
                    <br/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
