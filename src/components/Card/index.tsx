import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Teams, UserData} from 'types';
import Cards from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import {Container} from './styles';


interface Props {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams;
}

const Card = ({
    id,
    columns,
    url,
    hasNavigation = true,
    navigationProps = null,
}: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Cards
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: Event) => {
                if (hasNavigation) {
                    navigate(url, {
                        state: navigationProps,
                    });
                }
                e.preventDefault();
            }}
            bg = 'Dark'
            text = 'Dark'
            border="primary"
            className="text-center"
            
        >
                {columns.map(({key: columnKey, value}) => (
                
    <Stack direction="horizontal" gap={3}>
                        <Cards.Body>
                            <Cards.Title>{columnKey}</Cards.Title>
                            <Cards.Text>{value}</Cards.Text>
                        </Cards.Body>
                    </Stack>
                ))}
        </Cards>
    );
};

export default Card;
