import React, {useEffect, useState} from 'react';
import {useFetch} from "../../hooks/useFetch";
import {useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const RepoPage = () => {
    const user = useSelector(state => state.auth.login);
    const url = useSelector(state => state.auth.urls.emails_url)

    const [{data, loading}, getData] = useFetch({
        instant: false,
        url: 'https://api.github.com/users/ShapDenis/repos',
        method: 'GET',
    })

    useEffect(() => {
        getData();
    }, [])

    console.log(data)

    return (
        <>
            <Link to="login"><Button>Login</Button></Link><br/>

            <Button onClick={() => {
            }}>send</Button>
        </>
    );
};

export default RepoPage;