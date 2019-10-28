import React from 'react';
import logo from './logo.svg';
import { Card, Button } from 'react-bootstrap';
import { updateGrossIncomeAction, asyncGetDifferenceInContribution } from './actions/allActions'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';

function App() {
  const currentIncome = useSelector(state => state.currentState.grossIncome)
  const difference = useSelector(state => state.currentState.difference)
  const dispatch = useDispatch()
  const updateValue = (event) => dispatch(updateGrossIncomeAction(event.target.value))

  return (
    <div className="App">
      <header className="App-header">
        <h2><p>React-redux NI difference contribution calculator for 2018/2019 and 2019/2020</p></h2>
        <Card style={{ width: '77vh', color: 'black' }}>
          <Card.Body>
            <Card.Text>
              <p>Please tell us your gross income per year</p>
              <p>Income:<input placeholder='Insert gross income here' value={currentIncome} onChange={(e) => updateValue(e)} ></input></p>
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch(asyncGetDifferenceInContribution(currentIncome))} >Calculate NI contribution differnece</Button>
          </Card.Body>
        </Card>

      </header>
    </div>
  );
}

export default App;
