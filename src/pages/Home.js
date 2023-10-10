
import { Button, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeProvider2 } from '..';


export default function Home( {myclr2} ) {
    const theme = useTheme();
    const theme2 = useContext(ThemeProvider2)
    console.log(theme2)
    return (
        <>
            <div>Home</div>
            <Button style={{ color: myclr2 }}>Oklabs1 Using prop drilling</Button> <br/>
            <Button style={{ color: theme2 }}>Oklabs2 Using use context Hook react</Button> <br/>
            <Button style={{ color:theme.palette.primary.main }}>Oklabs3</Button>
        </>

    )
}
