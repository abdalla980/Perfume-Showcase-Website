import styles from './9pm.module.css';
import { NavigationBar } from "../../../NavigationBar/NavigationBar.tsx";
import { Footer } from "../../../Footer/Footer.tsx";

export const Ninepm = () => {
    return (
        <div>
            <NavigationBar />
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br />
                    <p>
                        Top Notes:Bergamot, Lavandin, Cinnamon and Apple<br />
                        Middle Notes:Muguet and Orange Blossom<br />
                        Base Notes:Patchouli, Amber, Vanilla and Tonka Bean<br />
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br />
                    <p className={styles.lastp}>
                        A bold and provocative fragrance that exudes masculinity and sensuality.
                        It opens with a burst of freshness, featuring top notes of bergamot and pear,
                        which provide a crisp and invigorating introduction. As the scent develops,
                        it reveals its heart notes of mint, lavender, and cinnamon, adding depth and complexity to the composition.
                        Overall, 9PM Black is a fragrance that is both powerful and refined,
                        making it perfect for the modern man who wants to make a bold statement.
                        Its distinctive blend of fresh and spicy notes ensures that it stands out from the crowd,
                        making it a timeless classic in the world of men's fragrances.
                        #CraftedByAfnan
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"9pm.png"} />
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>9pm</h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br />
                    <h2>1599 E.P</h2>
                    <br />
                    <div className={styles.Icons}>
                        <button className={styles.Button} onClick={() => window.open("https://instagram.com/mwatinimasr/")}>
                            Order now!
                        </button>
                    </div>
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    );
};
