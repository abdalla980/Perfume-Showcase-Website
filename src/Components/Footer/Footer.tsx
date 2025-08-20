import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.newcode}>
        <div className={styles.all}>

            <div className={styles.left}>
                <p className={styles.contact}>Terms & Conditions <br/>
                    Privacy Policy<br/>
                    Data Protection<br/>
                </p>
            </div>

            <div className={styles.right}>
                <p className={styles.BottomText}>
                    Follow us!
                </p>
                <div className={styles.images}>
                    <img className={styles.insta} onClick={()=>window.open("https://www.instagram.com/mwatinimasr/")} src={"insta.png"}/>
                    <img className={styles.whatsapp} src={"Whatsapp.png"}/>
                    <img className={styles.tiktok} src={"tiktok.png"}/>
                </div>

            </div>

        </div>
        </div>
    )
}
