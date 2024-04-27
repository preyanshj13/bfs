import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar'

test('should render responsive app bar component', () => {
    render(<ResponsiveAppBar />);

    
    const logoText = screen.getByText('LOGO |')
    expect(logoText).toBeInTheDocument();
})