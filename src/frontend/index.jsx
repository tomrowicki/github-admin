import React, {useEffect, useState} from 'react';
import ForgeReconciler, {Text} from '@forge/react';
import {invoke} from '@forge/bridge';
import TokenModal from "./components/TokenModal";

const App = () => {
    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    useEffect(() => {
        invoke('getText', {example: 'my-invoke-variable'}).then(setData);
    }, []);

    // const saveToken = (token) => {
    //     setToken({token});
    // }

    return (
        <>
            {/*<Text>Hello world!</Text>*/}
            <TokenModal saveToken={setToken}/>
            <Text>{data ? data : 'Loading...'}</Text>
            {token && (
                    <Text>Token: {token.substring(0, 3)}</Text>
            )}
        </>
    );
};
ForgeReconciler.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
