import styles from './styles.module.css'
import Image from 'next/image'
// import logo from '../../../public/bg-branco.png'
import {FaBars} from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { useState } from 'react';
export default function MobileNavbar(){
    const [isClosed, setIsClosed] = useState<boolean>(true);

    const handleNavbarAction = () => {
        if(isClosed){
            setIsClosed(false);
        } else{
            setIsClosed(true)
        }
    }

    return(
        <div className={styles.navMobile}>
            <div className={styles.mobileNavHeader}>
                <Image src="/logo-orange-svg.svg" alt='logo' width={240} height={120} style={{marginTop: -45, marginBottom: -45, marginLeft: '-10%'}} priority/>
                <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                    <button className={styles.button}>Agende uma reunião</button>
                    {isClosed ? (<FaBars onClick={handleNavbarAction} className={styles.navIcon}/>) : <AiOutlineArrowUp onClick={handleNavbarAction} className={styles.navIcon}/>}
                </div>
            </div>
            {isClosed ? (<></>) : (
                <ul className={styles.mobileUl}>
                    <li className={styles.mobileLi}>Benefícios</li>
                    <li className={styles.mobileLi}>Serviços</li>
                    <li className={styles.mobileLi}>Perguntas Frequentes</li>
                </ul>
            )}
        </div>
    )
}