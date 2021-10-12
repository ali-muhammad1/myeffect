import React from 'react'
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import styled from 'styled-components'
import { margin } from '@mui/system';
import Container from "@mui/material/Container";

const HeaderContainer = styled.div`
display: flex;
padding: 2rem 1rem ;
align-items: center;
height: 10vh;
marginBottom: 10px;
background-color: white;
width: 100%;
`
export default function header() {
    return (
       
        <div>
            <div>
                <HeaderContainer>
                    <img src="/logo_label.png"></img>
                </HeaderContainer>
            </div>
        </div>
      
    )
}
