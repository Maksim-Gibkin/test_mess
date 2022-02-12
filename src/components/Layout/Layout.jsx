import React from "react";
import s from "./Layout.module.css"
import NavLogo from "./NavLogo/NavLogo";


const links = [
    {name: "Home", link:'', logo:'home'},
    {name: "Messages", link:'', logo:'messages'},
    {name: "Profile", link:'', logo:'profile'},
    {name: "Settings", link:'', logo:'setting'},
    {name: "Resources", link:'', logo:'resources'}
]

const Layout = ({children})=>{

    return(
        <div className={s.container}>
            <ul className={s.menu_list}>
                {links.map((link, key)=>
                    <li key={key} >
                        <NavLogo id={link.logo} />
                        <a href="#" className={s.menu_list_link}>{link.name}</a>
                    </li>
                )}
            </ul>
            <div className={s.content_layout}>
                {children}
            </div>
        </div>
    )
}



export default Layout