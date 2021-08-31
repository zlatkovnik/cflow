import React, { SyntheticEvent, useState } from 'react'
import { FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, makeStyles, Switch, TextField, Button } from '@material-ui/core';
import TransactionsService from '../services/transactions.service';
import { ITransaction } from '../models/Transaction.model';

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
    const [transaction, setTransaction] = useState<ITransaction>({name: '', type: 'out'});
    const [typeIn, setTypeIn] = useState(false);

    const transactionsService = TransactionsService.get();

    const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); 
        transaction.type = typeIn ? 'in' : 'out';
        transactionsService.add(transaction as ITransaction).then(res => {
            console.log(res);
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let t = {...transaction};
        t[event.target.name as 'name' | 'description'] = event.target.value;
        setTransaction(t);
    }

    return (
        <div>
            <form>
                <FormGroup row className={classes.form}>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input name="name" onChange={handleChange} />
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
                        <TextField name="description" onChange={handleChange} label="Description" multiline />
                        <FormHelperText>Short description</FormHelperText>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" onClick={submit}>Submit</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default CreateTransactionPage
