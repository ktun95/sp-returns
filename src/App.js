import React, { useState, useEffect } from 'react';
import Row from './row'
import RangeSlider from './rangeSlider';
import { Container } from './container';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [range, setRange] = useState([])
  
  useEffect(() => {
    const history = require('./history.json')
    const ascending = history.slice().reverse();
    setData(ascending)
    setRange([ascending[0].year, ascending[ascending.length - 1].year])
  }, [])

  const handleSliderChange = (e) => {
    setRange(e)
  }
  
  let cumulativeReturn = 0;
  
  return (
    <section id="main">
      <h1> S&P Returns </h1>
      <Container>
        {
          range.length &&
          <RangeSlider 
            min={data && data[0].year}
            max={data && data[data.length - 1].year}
            defaultValue={range}
            handleSliderChange={handleSliderChange}
          />
        }
      </Container>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Return</th>
            <th>Cumulative Returns</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((datum, i) => {
            if (datum.year >= range[0] &&  datum.year <= range[1]) {
              cumulativeReturn =  parseFloat(datum.totalReturn) + cumulativeReturn
              let nextRow = (<Row key={i} year={datum.year} totalReturn={datum.totalReturn} cumulativeReturn={cumulativeReturn.toFixed(2)} />) 
              return(nextRow)
            }
          })}
        </tbody>
      </table>
    </section>
  );
}

export default App;
