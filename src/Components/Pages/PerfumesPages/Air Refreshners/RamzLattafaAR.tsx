import styles from './RamzlataffaAr.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const RamzLattafaAR = () => {
    return (
        <div>
            <NavigationBar />
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br />
                    <p className={styles.lastp}>
                        Top Notes: Bergamot, Apple, Pineapple<br />
                        Middle Notes: Patchouli, Jasmine, Birch<br />
                        Base Notes: Musk, Vanilla, Ambergris<br />
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br />
                    <p className={styles.lastp}>
                        Ramz Silver opens with a fresh fruity burst—especially noticeable are apple
                        and pineapple (some compare it to Creed Aventus in the opening).
                        The heart adds an earthy-floral mix with patchouli and jasmine,
                        while the base is musky, sweet, and slightly woody, giving a clean but bold dry-down.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"Rmzl.png"} />
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Ramz Lattafa Air Refreshner</h1>
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
