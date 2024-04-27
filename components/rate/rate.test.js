import { render, screen } from '@testing-library/react';
import Rate from './rate.components';
import {BrowserRouter as Router} from 'react-router-dom';


test('renders react component', async () => {
  render(
    <Router>
      <Rate/>
    </Router>
  );
});

test("testing close button",()=>{
    render(<Rate/>);
    const button= screen.getByRole('button',{ name: 'Close' });
    //console.log(button);
    expect(button).toHaveTextContent('Close');

})
test("testing apply button",()=>{
    render(<Rate/>);
    const button= screen.getByRole('button',{ name: 'APPLY' });
    // console.log(button);
   expect(button).toHaveTextContent('APPLY'); 
   
})
test("testing cancel button",()=>{
    render(<Rate/>);
   const button= screen.getByRole('button',{name:'CANCEL'});
    //console.log(button);
   expect(button).toHaveTextContent('CANCEL');
})  