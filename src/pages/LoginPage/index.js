import React, {useState} from 'react';
import {Button, CircularProgress, FormGroup, makeStyles, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux/auth/action";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        width: '300px',
    }
})

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);

    const [formData, setFormData] = useState({
        token: '57f386bb5335b8e10f9e492f30b4dee8784cdd6d',
        login: 'test'
    })

    const {token, login} = formData;

    const onChangeHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmitHandler = () => {
        dispatch(authActions.login(login, token))
    }


    return (<>
        <Link to="repo"><Button>Repo</Button></Link>
        <FormGroup className={classes.root}>
            <TextField value={login} name="login" onChange={onChangeHandler}/>
            <TextField value={token} name="token" onChange={onChangeHandler}/>
            <Button type="submit" onClick={onSubmitHandler}>{isLoading ? (<CircularProgress size={20}/>) : "Submit!"}</Button>
        </FormGroup>
    </>);
};

export default LoginPage;