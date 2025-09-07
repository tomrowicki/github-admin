import React from 'react';
import {DynamicTable, Icon, Link} from "@forge/react";

function contentForPrStatusCell(repo) {
    // TODO depend on whether or not there are open PRs
    return <Icon glyph="merge-success" color="color.text.success" />
}

function obtainPrDataForRepo(repo) {
    // TODO
    return undefined;
}

export default function ReposTable({reposData}) {

    // const createKey = (input) => {
    //     return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
    // };

    const rows = reposData.map((repo, index) => ({
        key: `row-${index}-${repo.id}`,
        cells: [
            {
                key: repo.name,
                content: <Link href={repo.html_url}>{repo.name}</Link>,
            },
            {
                key: repo.description,
                content: repo.description,
            },
            {
                key: repo.id,
                content: obtainPrDataForRepo(repo),
            },
            {
                key: repo.id + '-' + "prs",
                content: contentForPrStatusCell(repo)
            }
        ],
    }));

    const head = {
        cells: [
            {
                key: "name",
                content: "Name",
                isSortable: true,
            },
            {
                key: "description",
                content: "Description",
                shouldTruncate: true,
                isSortable: true,
            },
            {
                key: "prs",
                content: "Open PRs:",
                shouldTruncate: true,
                isSortable: true,
            },
            {
                key: "prstatus",
                content: "PR Status",
                shouldTruncate: true,
                isSortable: true,
            },
        ],
    };

    return (
        <DynamicTable caption="List of public repositories" head={head} rows={rows}/>
    )
}