import React, {useEffect, useState} from 'react';
import ForgeReconciler, {Text} from '@forge/react';
import {invoke} from '@forge/bridge';
import TokenModal from "./components/TokenModal";
import Repos from "./components/Repos";

const App = () => {
    const [token, setToken] = useState(null);
    const [reposData, setReposData] = useState(null);

    useEffect(() => {
        invoke('getRepos', {'token': token}).then(setReposData);
    }, []);

    return (
        <>
            <TokenModal saveToken={setToken}/>
            {token && (
                <Text>Token: {token.substring(0, 3)}</Text>
            )}
            {reposData && token && <Repos reposData={reposData.data}></Repos>}
        </>
    );
};
ForgeReconciler.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
