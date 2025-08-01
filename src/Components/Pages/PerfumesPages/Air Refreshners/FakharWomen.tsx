import styles from './FakharWomen.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const FakharWomen = () => {
    return (
        <div>
            <NavigationBar />
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br />
                    <p className={styles.lastp}>
                        Top Notes: Aldehydes, Lily, Pomegranate, Fruity Notes<br />
                        Heart Notes: Rose, Jasmine, Honeysuckle, Tuberose, Ylang-Ylang, Peony, Gardenia<br />
                        Base Notes: Vanilla, Sandalwood, Ambroxan, White Musk<br />
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br />
                    <p className={styles.lastp}>
                        Fakhar Women opens with a fresh and slightly fruity bouquet,
                        leading into a rich heart of white florals that exude elegance and depth.
                        The base notes provide a warm and sensual finish, combining creamy vanilla
                        with soft musk and woody undertones. This composition results in a fragrance that
                        is both enchanting and versatile, suitable for various occasions
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"FakharWomen.png"} />
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Fakhar Women Air Refreshner</h1>
                    <h3>Size:300ml | Unisex</h3>
                    <br />
                    <br />
                    <h2>600 E.P</h2>
                    <br />
                    <div className={styles.Icons}>
                        <button className={styles.Button}
                                onClick={() => window.open("https://instagram.com/mwatinimasr/")}>
                            Order now!
                        </button>
                    </div>
                    <br />
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};
