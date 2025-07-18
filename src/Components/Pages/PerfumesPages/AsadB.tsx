import styles from './AsadB.module.css';
import {NavigationBar} from "../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../Footer/Footer.tsx";

export const AsadB = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Notes: Pink Pepper, Lavender, Mirabelle Plum<br/>
                        Middle Notes: Cacao, Davana, Nutmeg<br/>
                        Base Notes: Vetiver, Vanilla Bourbon,Amber<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Eau de Parfum spray is a unisex fragrance that embodies a perfect blend of elegance and sophistication.
                        It opens with vibrant top notes of pink pepper, soothing lavender, and juicy mirabelle,
                        creating an inviting and dynamic start. The heart reveals a warm and intriguing combination
                        of nutmeg, davana, and rich cacao, adding depth and allure. Finally, the base notes of vetiver,
                        amber, and bourbon vanilla provide a luxurious and long-lasting finish. This versatile scent is
                        ideal
                        for anyone seeking a balance of boldness and refinement, making it perfect for any occasion.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"AsadB.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Asad Bourboun</h1>
                    <h3>Size:100ml | Unisex </h3>
                    <br/>
                    <br/>
                    <h2>1550 E.P</h2>
                    <br/>
                    <div className={styles.Icons}>
                        <img className={styles.insta} src={"insta.png"}/>
                        <img  className={styles.whatsapp} src={"Whatsapp.png"}/>
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
