'use client'
import {FaWhatsappSquare} from 'react-icons/fa'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import styles from './styles.module.css'

export default function Contact(){
    
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState(['My email contact has been copied to the clipboard. ', 'Now email me so we can start talking.']);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText('danielflorenciodev@gmail.com');
            setShowMessage(true);
        } catch (err) {
            console.log('Failed to copy text: ', err);
            setMessage(["Couldn't copy the email to the clipboard.", 'Talk to me at danielflorenciodev@gmail.com so we can chat :)'])
            setShowMessage(true);
        }
    };
    
    return(
        <section className={styles.section} id='contact'>
            <div className={styles.titleAndSubtitle}>
                <h1 className={styles.title}>You are just a few clicks away from finding your team's newest software engineer.</h1>
                <h2 className={styles.subtitle}>Click either one of the icons in the first row to get in touch right now.</h2>
            </div>
            <div className={styles.rows}>
                <div className={styles.firstRow}>
                    <div>
                        <a id='whatsapp'  href='https://wa.me/55084996509076' target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{size: '3.5rem', color: 'rgb(20, 28, 58)'}}>
                                <FaWhatsappSquare/>
                            </IconContext.Provider>
                        </a>
                    </div>
                    <div>
                        <a id='linkedin' href='https://www.linkedin.com/in/danolliver/' target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{size: '3.5rem', color: 'rgb(20, 28, 58)'}}>
                                <AiFillLinkedin/>
                            </IconContext.Provider>
                        </a>
                    </div> 
                    <div className='flex items-center'>
                        <div id='email' className={styles.emailIcon} aria-label='email' onClick={handleClick}>
                            <IconContext.Provider value={{size: '3.5rem', color: 'rgb(20, 28, 58)'}}>
                                <SiGmail />
                            </IconContext.Provider>
                        </div>
                        
                    </div>
                </div>
                <div>
                {showMessage && (
                    <div aria-label='message-container' data-testid='message-container-test' className={styles.messageContainer}>
                    {message[0]}<br/> {message[1]}
                    </div>
                )}
                </div>
                <div className='mt-8 mb-20'>
                    <a href='https://github.com/danielflorencio' target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{size: '3.5rem', color: 'rgb(20, 28, 58)'}}>
                            <AiFillGithub/>
                        </IconContext.Provider>
                    </a>
                </div>
            </div> 
        </section>      
    )
}