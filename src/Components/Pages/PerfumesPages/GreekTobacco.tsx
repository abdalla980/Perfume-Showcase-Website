import styles from './GreekT.module.css';
import {NavigationBar} from "../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../Footer/Footer.tsx";

export const GreekTobacco = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top notes: Narcissus, Lychee, Flowers<br/>
                        Heart notes: apricot, orange blossom, iris<br/>
                        Base notes: Greek tobacco, musk, peony<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        In the world of perfumery, Greek Tobacco shines as a masterpiece that blends the fragrance
                        of flowers with the mystery of luxurious Greek tobacco.
                        The scent of delicate peony wafts like a sweet breeze,
                        with deep musk notes that add a touch of mystery and elegance.
                        It is a fragrance that embodies beauty and luxury simultaneously,
                        shining with splendor and captivating hearts with its unique charm.
                        This luxurious scent takes you on a journey of sensations.
                        It is an exceptional experience that carries within it the beauty of nature and the elegance of art,
                        making it an irresistible fragrance.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"GreekTobacco.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}> Greek Tobacco</h1>
                    <h3>Size:100ml | Men </h3>
                    <br/>
                    <br/>
                    <h2>3999 E.P</h2>
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
