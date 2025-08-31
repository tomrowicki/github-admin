import React from 'react';
import {List, ListItem, Text, LinkButton, Heading} from "@forge/react";

export default function Repos({reposData}) {

    return (
        <>
            <List type='unordered'>
                {reposData.map(repo => (
                    <ListItem key={repo.id}>
                        <Heading as="h3">{repo.name}</Heading>
                        <Text>{repo.description}</Text>
                        <LinkButton spacing="compact" appearance="primary" href={repo.html_url}>{repo.html_url}</LinkButton>
                        <Text />
                    </ListItem>
                ))}
            </List>
        </>
    )
}