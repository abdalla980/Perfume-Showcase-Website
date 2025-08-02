import styles from './LiquidBrun.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const LiquidBrun = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top: Bergamot, Green Cardamom, Orange Blossoms, Cinnamon<br/>
                        Heart: Bourbon vanilla, elemi<br/>
                        Base : Ambrox, guaiac wood, musk, pralines<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p className={styles.lastp}>
                        Liquid Brun by French Avenue, launched in 2024,
                        is a sophisticated woody cologne for men that blends warm spices,
                        sensual sweetness, and deep woody notes. It opens with cinnamon, cardamom,
                        and bergamot, brightened by orange blossom. The heart features creamy Bourbon vanilla
                        and resinous elemi for a rich yet elegant touch. A base of toasted praline, ambroxan, guaiac
                        wood,
                        and musk adds depth, warmth, and long-lasting sensuality. Ideal for cooler days and evening
                        wear,
                        Liquid Brun suits the modern man seeking a charismatic, unforgettable scent.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"LiquidBrun.png"}/>
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Liquid Brun </h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1490 E.P</h2>
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
