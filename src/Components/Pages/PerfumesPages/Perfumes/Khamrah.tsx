import styles from './Khamrah.module.css';
import { NavigationBar } from "../../../NavigationBar/NavigationBar.tsx";
import { Footer } from "../../../Footer/Footer.tsx";

export const Khamrah = () => {
    return (
        <div className={styles.pageWrapper}>
            <NavigationBar />

            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br />
                    <p>
                        Top: Bergamot, Cinnamon, Nutmeg<br />
                        Heart: Dates Accord, Lily Of The Valley, Praline, Tuberose<br />
                        Base: Roasted Tonka, Benzoin Laos, Myrrh, Akigalawood, Vanilla, Amber Wood<br />
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br />
                    <p>
                        Khamrah by Lattafa Perfumes is an Aromatic Spicy fragrance for women and men. This is a new
                        fragrance. Khamrah was launched in 2022. The top notes are Cinnamon, Nutmeg, and Bergamot; the
                        middle notes are Dates, Praline, Tuberose, and Mahonial; the base notes are Vanilla, Tonka Bean,
                        Amberwood, Myrrh, Benzoin, and Akigalawood.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"Khamrah.png"} />
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Khamrah</h1>
                    <h3>Size:100ml | Unisex</h3>
                    <br /><br />
                    <h2>1750 E.P</h2>
                    <br />
                    <div className={styles.Icons}>
                        <button className={styles.Button} onClick={() => window.open("https://instagram.com/mwatinimasr/")}>Order now!</button>
                    </div>
                    <br />
                </div>
            </div>

            <Footer />
        </div>
    );
};
