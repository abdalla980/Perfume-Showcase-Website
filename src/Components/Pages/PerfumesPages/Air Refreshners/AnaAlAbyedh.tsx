import styles from './AnaAlAbyedh.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const AnaAlAbyedh = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Bergamot, Orange<br/>
                        Middle Notes: Vanilla, Pear<br/>
                        Base Notes: Musk, Amber<br/>

                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Lattafa Ana Abiyedh opens with a zesty blend of bergamot and orange, leading
                        into a creamy heart of vanilla and pear. The base reveals a warm combination of
                        musk and amber, creating a soft and elegant trail. This fragrance is versatile, suitable for
                        both day and evening wear,
                        and is especially appreciated during the warmer months for its fresh and inviting character.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"AnaAlAbyedh.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Ana Al Abyedh Air Refreshner </h1>
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