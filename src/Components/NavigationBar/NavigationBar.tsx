import styles from './NavigationBar.module.css';
import {useLocation} from "wouter";
import {RamzLattafaAR} from "../Pages/PerfumesPages/RamzLattafaAR.tsx";

export const NavigationBar = () => {
    const [,setLocation]=useLocation()
    function GoToHP(){
        setLocation("/")
    }

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
    function GoToFrenchT(){
        setLocation('/FrenchTobacco')
    }
    function GoToGreekT(){
        setLocation('/GreekTobacco')
    }
    function GoToSpanishT(){
        setLocation('/SpanishTobacco')
    }
    function GoToClubDeNuit(){
        setLocation('/ClubDeNuit')
    }
    function GoToClubDeNuitUntold(){
        setLocation('/ClubDeNuitUntold')
    }
    function GoToBlueIconic(){
        setLocation('/BlueIconic')
    }
    function GoToLiquidBrun(){
        setLocation('/LiquidBrun')
    }
    function GoToAzzureAoud(){
        setLocation('/AzzureAoud')
    }
    function GoToAether(){
        setLocation('/Aether')
    }
    function GoToRMZL(){
        setLocation('/RamzLataffaAirRefreshner')
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
                                <li onClick={GoToFrenchT}>French Tobacco</li>
                                <li onClick={GoToGreekT}>Greek Tobacco</li>
                                <li onClick={GoToSpanishT}>Spanish Tobacco</li>
                            </ul>


                            <ul className={styles.pList3}>
                                <li onClick={GoToClubDeNuit}>Club De Nuit</li>
                                <li onClick={GoToClubDeNuitUntold}>Untold</li>
                                <li onClick={GoToBlueIconic}>Blue Iconic</li>
                            </ul>
                            <ul className={styles.pList4}>
                                <li onClick={GoToLiquidBrun}>Liquid burn</li>
                                <li onClick={GoToAzzureAoud}>Azzure Aoud</li>
                                <li onClick={GoToAether}>Aether</li>
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
                                <li onClick={GoToRMZL}>Ramz Lataffa Air Refresher</li>
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
                                <li onClick={GoToKD}>Khamrah Dukhan</li>
                                <li onClick={GoToMashrabya}>Mashrabya</li>
                            </ul>

                            <ul className={styles.pList2}>
                                <li onClick={GoToFrenchT}>French Tobacco</li>
                                <li onClick={GoToGreekT}>Greek Tobacco</li>
                                <li onClick={GoToSpanishT}>Spanish Tobacco</li>
                            </ul>


                            <ul className={styles.pList3}>
                                <li onClick={GoToClubDeNuitUntold}>Untold</li>
                                <li onClick={GoToBlueIconic}>Blue Iconic</li>
                            </ul>
                            <ul className={styles.pList4}>
                                <li onClick={GoToLiquidBrun}>Liquid burn</li>
                                <li onClick={GoToAzzureAoud}>Azzure Aoud</li>
                                <li onClick={GoToAether}>Aether</li>
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
                                <li onClick={GoToK}>Khamrah</li>
                            </ul>

                            <ul className={styles.pList1}>
                                <li onClick={GoTo9pm}>9pm</li>
                                <li onClick={GotoTurathiBlue}>Turathi Blue</li>
                            </ul>

                            <ul className={styles.pList2}>
                                <li onClick={GoToFrenchT}>French Tobacco</li>
                            </ul>


                            <ul className={styles.pList3}>
                                <li onClick={GoToClubDeNuit}>Club De Nuit</li>

                            </ul>
                            <ul className={styles.pList4}>
                                <li onClick={GoToLiquidBrun}>Liquid burn</li>
                                <li onClick={GoToAzzureAoud}>Azzure Aoud</li>
                                </ul>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};
