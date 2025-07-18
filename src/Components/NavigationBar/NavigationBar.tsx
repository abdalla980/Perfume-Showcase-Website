import styles from './NavigationBar.module.css';
import {useLocation} from "wouter";

export const NavigationBar = () => {
    const [,setLocation]=useLocation()
    function GoToK(){
setLocation("/Khamrah")
    }
    function GoToKD(){
        setLocation("/KhamrahDukhan")
    }
    function GoToAsad(){
        setLocation("/AsadBourboun")
    }
    function GoToMashrabya(){
        setLocation('/Mashrabya')
    }
    function GoTo9amDive(){
        setLocation('/9amDive')
    }
    function GoTo9pm(){
        setLocation('/9pm')
    }
    function GotoTurathiBlue(){
        setLocation('/TurathiBlue')
    }
    function GoToHP(){
        setLocation("/")
    }

    return (
        <div className={styles.everything}>
            <div className={styles.Logo}>
                <img onClick={GoToHP} src={"Logo.png"} alt="Logo" />
            </div>

            <div className={styles.content}>

                <div className={styles.menuItem}>
                    <p className={styles.Perfumes}>Perfumes</p>

                    <div className={styles.dropdown}>
                        <div className={styles.brands}>
                            <p className={styles.Lattafa}>Lattafa</p>
                            <p className={styles.Afnan}>Afnan</p>
                            <p className={styles.Iaq}>Ibrahim al Qurashi</p>
                            <p className={styles.Armaf}>Armaf</p>
                            <p className={styles.FA}>French Avenue</p>
                        </div>

                        <div className={styles.pListContainer}>
                            <ul className={styles.pList}>
                                <li onClick={GoToK} >Khamrah</li>
                                <li onClick={GoToKD}>Khamrah Dukhan</li>
                                <li onClick={GoToAsad}>Asad Bourboun</li>
                                <li onClick={GoToMashrabya}>Mashrabya</li>
                            </ul>

                            <ul className={styles.pList1}>
                                <li onClick={GoTo9pm}>9pm</li>
                                <li onClick={GoTo9amDive}>9pm dive</li>
                                <li onClick={GotoTurathiBlue}>Turathi Blue</li>
                            </ul>

                            <ul className={styles.pList2}>
                                <li>French Tobacco</li>
                                <li>Greek Tobacco</li>
                                <li>Spanish Tobacco</li>
                            </ul>


                            <ul className={styles.pList3}>
                                <li>Club De Nuit</li>
                                <li>Untold</li>
                                <li>Blue Iconic</li>
                            </ul>
                            <ul className={styles.pList4}>
                                <li>Liquid burn</li>
                                <li>Azzure Aoud</li>
                                <li>Aether</li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className={styles.menuItem}>
                    <p className={styles.AirR}>Air Refreshers</p>

                    <div className={styles.dropdown}>
                            <h1 className={styles.titleAR}> Air Refreshers</h1>

                        <div className={styles.pListContainer}>
                            <ul className={styles.ARL}>
                                <li>Ramz lataffa Air Refresher</li>
                                <br/>
                                <li>Maahir black Air Refresher</li>
                                <br/>
                                <li>Fakhar women Air Refresher</li>
                            </ul>


                            <ul className={styles.ARR}>
                                <li>Ana Al Abyedh Air Refresher</li>
                                <br/>
                                <li>Fakhar Lattafa Air Refresher</li>
                                <br/>
                                <li>Maahir Air Refresher</li>

                            </ul>
                        </div>


                    </div>
                </div>
                <div className={styles.menuItem}>
                    <p className={styles.New}>New arrivals</p>

                    <div className={styles.dropdown}>
                        <div className={styles.brands}>
                            <p className={styles.Lattafa}>Lattafa</p>
                            <p className={styles.Iaq}>Ibrahim al Qurashi</p>
                            <p className={styles.Armaf}>Armaf</p>
                            <p className={styles.FA}>French Avenue</p>
                        </div>

                        <div className={styles.pListContainer}>
                            <ul className={styles.pList}>
                                <li>Khamrah Dukhan</li>
                                <li>Mashrabya</li>
                            </ul>

                            <ul className={styles.pList2}>
                                <li>French Tobacco</li>
                                <li>Greek Tobacco</li>
                                <li>Spanish Tobacco</li>
                            </ul>


                            <ul className={styles.pList3}>
                                    <li>Untold</li>
                                <li>Blue Iconic</li>
                            </ul>
                            <ul className={styles.pList4}>
                                <li>Liquid burn</li>
                                <li>Azzure Aoud</li>
                                <li>Aether</li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className={styles.menuItem}>
                    <p className={styles.BS}>Best Sellers</p>

                    <div className={styles.dropdown}>
                        <div className={styles.brands}>
                            <p className={styles.Lattafa}>Lattafa</p>
                            <p className={styles.Afnan}>Afnan</p>
                            <p className={styles.Iaq}>Ibrahim al Qurashi</p>
                            <p className={styles.Armaf}>Armaf</p>
                            <p className={styles.FA}>French Avenue</p>
                        </div>

                        <div className={styles.pListContainer}>
                            <ul className={styles.pList}>
                                <li>Khamrah</li>
                            </ul>

                            <ul className={styles.pList1}>
                                <li>9pm</li>
                                <li>Turathi Blue</li>
                            </ul>

                            <ul className={styles.pList2}>
                                <li>French Tobacco</li>
                            </ul>


                            <ul className={styles.pList3}>
                                <li>Club De Nuit</li>

                            </ul>
                            <ul className={styles.pList4}>
                                <li>Liquid burn</li>
                                <li>Azzure Aoud</li>
                                </ul>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};
