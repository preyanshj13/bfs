import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('should render home component', () =>{
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    const textElement = screen.getByRole('textbox', {name: 'Search'});
    expect(textElement).toBeInTheDocument();

    const placeholder=screen.getByPlaceholderText('Loan # | Pool Name | Pool ID | Client Name | Property Address')
    expect(placeholder).toBeInTheDocument();

    const iconBtn = screen.getByText('SEARCH')
    expect(iconBtn).toBeInTheDocument();

    const headElement = screen.getByRole('heading');
    expect(headElement).toBeInTheDocument();
})