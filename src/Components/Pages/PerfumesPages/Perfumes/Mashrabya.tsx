import styles from './Mashrabya.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const Mashrabya = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Apple Shisha Accord, Pepper Pink.<br/>
                        Middle Notes: Cinnamon, Dates, Tobacco.<br/>
                        Base Notes: Vanilla, Caramel, Patchouli.<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        From the house of Lattafa comes Mashrabya,
                        a unisex fragrance that effortlessly blends modern sophistication with
                        timeless tradition. It opens with the vibrant allure of apple shisha accord and
                        a spicy hint of pink pepper, setting a bold yet inviting tone. At its heart, warm
                        cinnamon, luscious dates, and smoky tobacco create a rich and opulent core.
                        The journey concludes with the indulgent sweetness of vanilla and caramel,
                        balanced by the earthy depth of patchouli, leaving a luxurious and unforgettable
                        impression for all who wear it.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"Mashrabya.png"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Mashrabya</h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>2200 E.P</h2>
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
