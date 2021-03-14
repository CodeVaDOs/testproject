import {useCallback, useEffect, useState} from "react";
import api from 'axios';
import {getToken} from "../utils/tokens";

export const useFetch = ({
    instant = true,
    initData = null,
    onCompleted = (data) => data,
    dataTransformer = (data) => data,
    onError = (err) => err,
    ...axios
}) => {
    const [data, setData] = useState(initData);
    const [loading, setLoading] = useState(false);

    const fetcher = useCallback((options) => {
        const fetchOptions = {...axios, ...options}
        if (fetchOptions.paramsStringify) {
            fetchOptions.url = `${fetchOptions.url}?${JSON.stringify(fetchOptions.paramsStringify)}`;
        }

        const token = getToken();

        if (token) {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                Authorization: 'token 1f5493688aa137c3a2cb4ffadadec250dc0ea49a',
                Accept: 'application/vnd.github.inertia-preview+json'
            };
            console.log("OPTIONS", fetchOptions)
        }


        setLoading(true);

        return api(fetchOptions)
            .then(dataTransformer)
            .then(res => {
                setData(res);
                onCompleted(res, options);
                return res;
            })
            .catch(onError)
            .finally(() => {
                setLoading(false);
            });
    }, [dataTransformer, onCompleted])

    useEffect(() => {
        if (instant) {
            fetcher(axios);
        }
    }, [])

    return [
        {
            data,
            loading,
            modifyData: setData
        },
        fetcher
    ]
}