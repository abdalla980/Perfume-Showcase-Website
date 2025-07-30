import styles from './Mahir.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const Mahir = () => {
    return (
        <div>
            <NavigationBar />
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br />
                    <p className={styles.lastp}>
                        Top Notes: Red Berries, Peach, Bergamot<br />
                        Middle Notes: Jasmine, Peony, Red Lily<br />
                        Base Notes: Sandalwood, Vanilla Flower, Musk<br />
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br />
                    <p className={styles.lastp}>
                        This fragrance is characterized by its powdery, fruity, and floral accords,
                        with a velvety finish from the sandalwood, vanilla, and musk.
                        It's suitable for both day and evening wear, offering a charming and elegant aroma
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"Mahir.png"} />
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Mahir Air Refreshner</h1>
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
