import React, {useEffect, useState} from 'react';
import ForgeReconciler, {Text} from '@forge/react';
import {invoke} from '@forge/bridge';
import TokenModal from "./components/TokenModal";
import ReposTable from "./components/ReposTable";

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
            {reposData && token && <ReposTable reposData={reposData.data}/>}
        </>
    );
};
ForgeReconciler.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
