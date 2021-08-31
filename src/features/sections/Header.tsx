import { Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();
    return (
        <div>
            <Toolbar className={classes.header}>
                <Typography>Cash Flow</Typography>
                <div className={classes.spacer}></div>
                <Button variant="contained" onClick={() => history.push("/transactions")}>Transactions</Button>
                <Button variant="contained" onClick={() => history.push("/create")} color="secondary">New Flow</Button>
            </Toolbar>
        </div>
    )
}

export default Header
