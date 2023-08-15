'use client'
import { useMediaQuery } from "react-responsive"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

export default function NavbarContainer(){

    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' }) 
    
    return(
        <>
            {isSmallScreen ? <MobileNavbar/> : <Navbar/>}
        </>
    )
}