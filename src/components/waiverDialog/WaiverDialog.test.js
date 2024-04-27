import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import WaiverDialog from './WaiverDialog'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render waiver dialog', () => {
    render(<WaiverDialog />)

    // const textElement = screen.getByLabelText('Approved By');
    // expect(textElement).toBeInTheDocument();
});

describe('Testing buttons', () => {

    test('Fullscreen Button', () => {
        render(<WaiverDialog />)
        const FullBtn = screen.getByRole('button', {name: 'FULLSCREEN'});
        expect(FullBtn).toBeInTheDocument();
    })
    
    test('Cancel Button', () => {
        render(<WaiverDialog />)
        const cancelBtn = screen.getByRole('button', {name: 'Cancel'});
        expect(cancelBtn).toBeInTheDocument();
    })

    test('Add Itemization correctly',()=>{
        render(<WaiverDialog/>)
        const AddBtn = screen.getByRole('button', {name:'ADD ITEMIZATION'});
        expect(AddBtn).toBeInTheDocument();
    })

    test('Remove Button', () => {
        render(<WaiverDialog />)
        const remBtn = screen.getByText('REMOVE')
        expect(remBtn).toBeInTheDocument();
    })

    test('Save changes button', () => {
        render(<WaiverDialog />);
        const saveBtn = screen.getByRole('button', {name: 'Save changes'})
        expect(saveBtn).toBeInTheDocument()
    })
    

})