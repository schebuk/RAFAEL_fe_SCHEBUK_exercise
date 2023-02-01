import React, {useState} from 'react';
import {ListItem, Teams as TeamsList} from 'types';
import Search from 'components/Search';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';


var MapT = (teams: TeamsList[]) => {
    return teams.map(team => {
        var columns = [
            {
                key: 'Name',
                value: team.name,
            },
        ];
        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        } as ListItem;
    });
};

const Teams = () => {
    const [teams, setTeams] = React.useState<any>([]);
    const [teamsFiltered, setTeamsFiltered] =  useState<any>();
    const [isLoading, setIsLoading] = React.useState<any>(true);

    React.useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };
        getTeams();
    }, []);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <Search items={teams} filterItems={setTeamsFiltered} />
            <List items={teamsFiltered?MapT(teamsFiltered):MapT(teams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
