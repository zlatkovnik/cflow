import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#400CCC",
       color: "#ffffff",
       display: 'flex'
    },
    spacer: {
        flexGrow: 1
    }
 }));

function Header() {
    const classes = useStyles();
    return (
        <div>
            <Toolbar className={classes.header}>
                <Typography>Cash Flow</Typography>
                <div className={classes.spacer}></div>
                <Button variant="contained">Transactions</Button>
                <Button variant="contained" color="secondary">New Flow</Button>
            </Toolbar>
        </div>
    )
}

export default Header
