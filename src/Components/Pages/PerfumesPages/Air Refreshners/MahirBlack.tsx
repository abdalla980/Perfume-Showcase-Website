import styles from './MahirBlack.module.css';
import {NavigationBar} from "../../../NavigationBar/NavigationBar.tsx";
import {Footer} from "../../../Footer/Footer.tsx";

export const MahirBlack = () => {
    return (
        <div>
            <NavigationBar />
            <div className={styles.MainContent}>
                <div className={styles.LContent}>
                    <h2 className={styles.FN}>Fragrance Notes:</h2> <br />
                    <p className={styles.lastp}>
                        Top Notes: Black Pepper, Pink Pepper, Saffron<br />
                        Middle Notes: Labdanum, Juniper Oil, Gurjan Balsam, Rhubarb<br />
                        Base Notes: Leather, Cedarwood, Guaiac Wood, Patchouli, Musk, Oak Moss<br />
                    </p>
                    <h2 className={styles.PI}>Product Information:</h2> <br />
                    <p className={styles.lastp}>
                        Maahir black is a unisex fragrance launched in 2019 by Lattafa Perfumes.
                        Renowned for its dark, smoky, and resinous character,
                        it offers a complex blend of spicy, woody, and leathery notes,
                        making it a standout choice for those who appreciate bold and
                        distinctive scents.
                    </p>
                </div>

                <div className={styles.ImageContainer}>
                    <img className={styles.image} src={"MahirBlack.png"} />
                </div>

                <div className={styles.RContent}>
                    <h1 className={styles.Name}>Mahir Black Air Refreshner</h1>
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
