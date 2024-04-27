import { render, screen } from '@testing-library/react';
import Header from './header.components';

test('should render header element',()=>{
    render(<Header/>);
    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfbh8qB7dxDj8YxcpL1xFmdiOyUUFcUKl2w&usqp=CAU")
    expect(image).toHaveAttribute('alt', 'logo');
})

test('should render correct text',()=>{
    render(<Header/>);
    const text=screen.getByText('Loan Process');
    expect(text).toBeInTheDocument();
})
test('should render correct header',()=>{
    render(<Header/>)
    const heading=screen.getByRole('heading',{level:4})
    expect(heading).toBeInTheDocument();
})