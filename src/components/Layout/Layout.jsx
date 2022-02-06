import React from "react";
import s from "./Layout.module.css"


const links = [
    {name: "Home", link:''},
    {name: "Messages", link:''},
    {name: "Profile", link:''},
    {name: "Settings", link:''},
    {name: "Resources", link:''}
]

const Layout = ({children})=>{
    return(
        <div className={s.container}>
            <ul className={s.menu_list}>
                {links.map((link, key)=>
                    <li key={key}>
                        <a href="#">{link.name}</a>
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