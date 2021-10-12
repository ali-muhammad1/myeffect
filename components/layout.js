import React from 'react'
import style from "../styles/Home.module.css"
import Header from '../components/header'
import { Grid } from '@mui/material'

export default function layout({children}) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header></Header>
            </Grid>
            <Grid item xs={12}>
                <div className={style.container}>
                    <main className={style.main}>
                        {children}
                    </main>
                </div>
            </Grid>
        </Grid>
    )
}
