'use client'
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
                <Image src="/green-purple-logo-no-bg.png" alt='logo' width={80} height={80} priority/>
                <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                    <button className={styles.button}>Agende uma reunião</button>
                    {isClosed ? (<FaBars onClick={handleNavbarAction} className={styles.navIcon}/>) : <AiOutlineArrowUp onClick={handleNavbarAction} className={styles.navIcon}/>}
                </div>
            </div>
            {isClosed ? (<></>) : (
                <div className={styles.mobileUlParent}>
                <ul className={styles.mobileUl}>
                    <li className={styles.mobileLi}>Benefícios</li>
                    <li className={styles.mobileLi}>Serviços</li>
                    <li className={styles.mobileLi}>Perguntas Frequentes</li>
                </ul>
                </div>
            )}
        </div>
    )
}