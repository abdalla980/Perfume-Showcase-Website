import styles from './ClubDeNuit.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const ClubDeNuit = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br/>
                    <p>
                        Top Note: Apple, Bergamot, Blackcurrant, Pineapple, Lemon<br/>
                        Middle Note: Rose, Birch, Jasmine<br/>
                        Base Note: Musk, Ambergris, Patchouli, Vanilla<br/>
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br/>
                    <p>
                        Club de Nuit intense for man A provocative woody spicy masculine
                        scent that opens with fresh fruity notes of lemon,
                        apple and blackcurrant leading to an opulent floral heart of rose and jasmine spiced up
                        with birch to add a smoky leather nuance.
                        The base includes vanilla, ambergris, musk and patchouli.
                    </p>
                </div>


                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"ClubDeNuit.png"}/>
                </div>


                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Club De Nuit Intense </h1>
                    <h3>Size:100ml | Men </h3>
                    <br/>
                    <br/>
                    <h2>1799 E.P</h2>
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
