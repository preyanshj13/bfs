import { render, screen } from '@testing-library/react';
import Home,{fetchData,API_URL} from './home.components';
import {BrowserRouter as Router} from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

const mockedUsedNavigate = jest.fn();
console.log(mockedUsedNavigate);
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

//jest.mock(...) is used to automatically mock the axios 
// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');

// test('render correct api data',async()=>{

//   const mockFakeItem = {
//       "borrower": "Aaron,Paul",
//       "address": "123 Lorem epsum Street",
//       "city": "Brokylnn",
//       "country": "NY",
//       "amount": "300,000",
//       "type": "Refinance",
//       "product": "MLF 5 Year H....",
//       "status": "Approved",
//       "days": 13,
//       "approver": "P",
//       "reason": "test123",
//       "id": 345878870
//   }
//   axios.get.mockResolvedValueOnce(mockFakeItem)
//   const result =await fetchData();
//   console.log(result);
//   // expect(mockAxios.get).toHaveBeenCalledWith(API_URL)
//   // expect(result).toEqual(mockFakeItem)

// })

test('should render correct placeholder',()=>{
    render(<Home/>);
    const placeholder=screen.getByPlaceholderText('Loan# | Pool Name | Pool ID | Client Name | Property Address')
    expect(placeholder).toBeInTheDocument();
})

