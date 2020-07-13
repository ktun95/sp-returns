import React, { useState } from 'react';
import Row from './row'
import RangeSlider from './rangeSlider';
import { Container } from './container';
import './App.css';
const history = require('./history.json');
const ascending = history.slice().reverse();
ascending.forEach((item, idx, array) => {
  const prevCumulativeReturn = array[idx - 1] ? parseFloat(array[idx - 1].cumulativeReturn) : 0
  const totalReturn = parseFloat(item.totalReturn)

  item.cumulativeReturn = (totalReturn + prevCumulativeReturn).toFixed(2)
})

function App() {
  const [range, setRange] = useState([ascending[0].year, ascending[ascending.length - 1].year])

  const handleSliderChange = (e) => {
    setRange(e)
  }
  
  return (
    <section id="main">
      <Container>
        <RangeSlider 
          min={ascending[0].year}
          max={ascending[ascending.length -1].year}
          defaultValue={range}
          handleSliderChange={handleSliderChange}
        />
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
          {ascending.map((datum, i) => {
            if (datum.year >= range[0] &&  datum.year <= range[1]) return (<Row key={i} year={datum.year} totalReturn={datum.totalReturn} cumulativeReturn={datum.cumulativeReturn} />)
          })}
        </tbody>
      </table>
    </section>
  );
}

export default App;
