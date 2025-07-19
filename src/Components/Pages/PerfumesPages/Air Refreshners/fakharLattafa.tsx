import styles from './FakharLattafa.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const fakharLattafa = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Apple, Ginger, Bergamot<br/>
                        Middle Notes: Sage, Lavender, Juniper Berries, Geranium<br/>
                        Base Notes: Amberwood, Tonka Bean, Cedar, Vetiver<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Fakhar for Men presents a fresh and aromatic blend,
                        with top notes of apple, ginger, and bergamot, a heart of sage,
                        lavender, juniper berries, and geranium, and a warm base of amberwood,
                        tonka bean, cedar, and vetiver. It's noted for its sophisticated and
                        masculine scent

                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"FakharLattafa.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Fakhar Lattafa Air Refreshner </h1>
                    <h3>Size:300ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>600 E.P</h2>
                    <br/>
                    <div className={styles.Icons}>
                        <img className={styles.insta} src={"insta.png"}/>
                        <img className={styles.whatsapp} src={"Whatsapp.png"}/>
                    </div>
                    <br/>
                    <p>To order please send us <br/>a message on <br/>whatsapp/instagram!</p>
                    <img src={"5 stars.png"}/>
                    <br/>
                    <p>3 Reviews</p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}