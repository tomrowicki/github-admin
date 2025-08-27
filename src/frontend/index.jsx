import React, {useEffect, useState} from 'react';
import ForgeReconciler, {Text} from '@forge/react';
import {invoke} from '@forge/bridge';
import TokenModal from "./components/TokenModal";

const App = () => {
    // const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    const [reposData, setReposData] = useState(null);

    // useEffect(() => {
    //     invoke('getText', {example: 'my-invoke-variable'}).then(setData);
    // }, []);

    // const saveToken = (token) => {
    //     setToken({token});
    // }

    useEffect(() => {
        invoke('getRepos', {'token': token}).then(setReposData);
    }, []);

    return (
        <>
            {/*<Text>Hello world!</Text>*/}
            <TokenModal saveToken={setToken}/>
            {/*<Text>{data ? data : 'Loading...'}</Text>*/}
            {token && (
                <Text>Token: {token.substring(0, 3)}</Text>
            )}
            <Text>{reposData ? JSON.stringify(reposData) : 'Loading data...'}</Text>
        </>
    );
};
ForgeReconciler.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
