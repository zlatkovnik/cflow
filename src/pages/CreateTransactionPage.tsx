import React, { SyntheticEvent, useState } from 'react'
import { FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, makeStyles, Switch, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50vw',
        width: '500px',
        margin: '100px auto',
        padding: '10px 50px 10px 50px',
        borderRadius: '5px',
        border: 'solid 1px #dedede'
    }
 }));

function CreateTransactionPage() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [typeIn, setTypeIn] = useState(false);

    const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

    }
    return (
        <div>
            <form>
                <FormGroup row className={classes.form}>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input />
                        <FormHelperText>Short description</FormHelperText>
                    </FormControl>
                    <FormControlLabel control={
                        <Switch
                            checked={typeIn}
                            onChange={() => setTypeIn(!typeIn)}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Type in?" />
                    <FormControl>
                        <TextField label="Description" multiline />
                        <FormHelperText>Short description</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" onClick={submit}>Submit</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default CreateTransactionPage
