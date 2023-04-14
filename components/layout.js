import React from "react";
import Header from "./header";
import { Container } from "semantic-ui-react";

export default function Layout({ children }) {
    return (
       <Container style={{marginTop:'10px'}}>
         <div className="layout">
            <Header/>
            <div className="content">{children}</div>
            <h1>I am a footer</h1>
        </div>
       </Container>
    );
}