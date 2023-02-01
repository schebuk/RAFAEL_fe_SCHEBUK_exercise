import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Search from '..';


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Search', () => {
    it('should render search component', () => {
        const items = [
            {
                id: '1',
                name: 'columnValue1',
                columns: [
                    {
                        key: 'columnKey1',
                        value: 'columnValue1',
                    },
                ],
            },
        ];    
        let itemsFiltered = []    
        const setItemsFiltered = (value) => {
            itemsFiltered = value
        }
        render(<Search items={items} filterItems={setItemsFiltered} />);
        expect(screen.getByTestId('search')).toBeInTheDocument();
    })
})
