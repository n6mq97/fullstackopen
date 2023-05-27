import { useState } from 'react'

function Button ( {handleClick, text} ) {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

function StatisticLine ({text, value, isPercentage}) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{isPercentage ? ' %' : ''}</td>
    </tr>
  )
}

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} isPercentage={true}/>
        </tbody>
      </table>
    )
  }
  return (
    <p>No feedback given</p>
  )
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handelGood() {
    setGood(good + 1)
  }

  function handelNeutral() {
    setNeutral(neutral + 1)
  }

  function handelBad() {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handelGood} text='good' />
      <Button handleClick={handelNeutral} text='neutral' />
      <Button handleClick={handelBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}
