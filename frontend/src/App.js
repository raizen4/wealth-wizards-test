import React from 'react';
import logo from './logo.svg';
import { Card, Button } from 'react-bootstrap';
import { updateGrossIncomeAction, asyncGetDifferenceInContribution } from './actions/allActions'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';

function App() {
  const currentIncome = useSelector(state => state.currentState.grossIncome)
  const niPaidin2019=useSelector(state =>state.currentState.niPaidIn2019)
  const niPaidIn2018=useSelector(state =>state.currentState.niPaidIn2018)
  const difference = useSelector(state => state.currentState.difference)
  const dispatch = useDispatch()
  const updateValue = (event) => dispatch(updateGrossIncomeAction(event.target.value))

  return (
    <div className="App">
      <header className="App-header">
        <div className="row"><h2><p>React-redux NI difference contribution calculator for 2018/2019 and 2019/2020</p></h2></div>
        <div className="row">
        <Card style={{ width: '77vh', color: 'black' }}>
          <Card.Body>
            <Card.Text>
              <p>Please tell us your gross income per month</p>
              <p>Income:<input placeholder='Insert gross income here' value={currentIncome} onChange={(e) => updateValue(e)} ></input></p>
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch(asyncGetDifferenceInContribution(currentIncome))} >Calculate NI contribution differnece</Button>
          </Card.Body>
        </Card>
          {difference !== -1 ? <p>You paid in 2018/2019 £{niPaidIn2018} whilst in 2019/2020 you will pay £{niPaidin2019}. 
          This means that the difference is £{difference} pounds </p> : '' } 
          </div>
      </header>
    </div>
  );
}

export default App;
