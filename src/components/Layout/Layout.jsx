import React from "react";
import s from "styled-components";

const Container = s.div`
  display: flex;
`

const AsideContainer = s.ul`
  background-color: #6c6161;
  color:white;
  display: flex;
  flex-direction: column;
  width: 200px;
`

const Content = s.div`
background-color: red
`

const links = [
    {name: "Home", link:''},
    {name: "Messages", link:''},
    {name: "Profile", link:''},
    {name: "Settings", link:''},
    {name: "Resources", link:''}
]

const Layout = ({children})=>{
    return(
        <Container>
            <AsideContainer>
                {links.map((link, key)=>
                    <li key={key}>
                        <a href="#">{link.name}</a>
                    </li>
                )}
            </AsideContainer>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Layout