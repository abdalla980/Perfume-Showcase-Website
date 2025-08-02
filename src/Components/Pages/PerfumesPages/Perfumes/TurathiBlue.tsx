import styles from './TurathiBlue.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const TurathiBlue = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Bergamot and Mandarin<br/>
                        Middle Notes: Amber and Woody<br/>
                        Base Notes: Musk, Patchouli and Fresh Spicy<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p className={styles.lastp}>
                        Turathi Blue Pour Homme exudes masculine sophistication and vitality.
                        Opening with a refreshing blend of bergamot and mandarin,
                        it energizes the senses like a brisk breeze. As it develops,
                        notes of amber and woody accords emerge, adding depth and warmth to the composition.
                        The fragrance settles into a base of musk, patchouli, and fresh spice,
                        leaving a lingering trail of strength and refinement.
                        Embrace the essence of masculine charm with Turathi Blue.
                        #CraftedByAfnan
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"TurathiBlue.png"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Turathi Blue</h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1889 E.P</h2>
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
