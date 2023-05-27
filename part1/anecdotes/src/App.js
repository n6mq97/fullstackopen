import { useState } from "react";

function Button({ handleClick, text }) {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

function Anecdote({ text, votes }) {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>    
  )
}

export default function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [mostPopular, setMostPopular] = useState(0)
  const [points, setPoinsts] = useState(Array(anecdotes.length).fill(0))

  function selectRandom() {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  function addPoint() {
    const nextPoints = [...points]
    nextPoints[selected]++
    if (nextPoints[selected] >= nextPoints[mostPopular]) {
      setMostPopular(selected)
    }
    setPoinsts(nextPoints)
  }

  return (
    <div>
      <h1>Anecdote of day</h1>
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={addPoint} text='vote'/>
      <Button handleClick={selectRandom} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <Anecdote text={anecdotes[mostPopular]} votes={points[mostPopular]} />
    </div>
  );
}
