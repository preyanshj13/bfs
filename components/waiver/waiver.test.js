import { render, screen } from '@testing-library/react';
import Waiver from './waiver.components';
import {BrowserRouter as Router} from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('render buttons',()=>{

    test('fullscreen correctly',()=>{
        render(<Waiver/>)
        const button=screen.getByRole('button',{name:'FULLSCREEN'});
        expect(button).toBeInTheDocument()
    })

    
    test('additem correctly',()=>{
        render(<Waiver/>)
        const button=screen.getByRole('button',{name:'ADD ITEMIZATION'});
        expect(button).toBeInTheDocument()
    })

    test('addwaiver correctly',()=>{
    render(<Waiver/>)
        const button=screen.getByRole('button',{name:'ADD WAIVER'});
        expect(button).toBeInTheDocument()
    })

    test('Cancel correctly',()=>{
            render(<Waiver/>)
            const button=screen.getByRole('button',{name:'Cancel'});
            expect(button).toBeInTheDocument()
        })

    test('savechanges correctly',()=>{
        render(<Waiver/>)
        const button=screen.getByRole('button',{name:'Save changes'});
        expect(button).toBeInTheDocument()
    })  
    
    test('text correctly',()=>{
        render(<Waiver/>)
        const text= screen.getByText('Total Amount')
        expect(text).toBeInTheDocument()
    })
    test('waiver text correctly',()=>{
        render(<Waiver/>)
        const text= screen.getByText('Waivers')
        expect(text).toBeInTheDocument()
    })
})


