import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [mostPopular, setMostPopular] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  )

  const chooseRandomAnecdote = () => {
    const randomElement = (Math.floor(Math.random() * anecdotes.length))
    // console.log((randomElement))
    setSelected(randomElement)
  }

  const incrementVote = () => {
    const updatedVotesArray = [...votes]
    updatedVotesArray[selected] += 1
    console.log(updatedVotesArray)

    setVotes(updatedVotesArray)

    for (let i = 0; i < votes.length; i++) {
      if (updatedVotesArray[i] > votes[mostPopular]) {
        setMostPopular(i)
      }
    }
  }

  console.log('current anecdote ', selected)

  const HighValue = () => {
    if (votes[mostPopular] > 0)
      return <div><p>{anecdotes[mostPopular]}</p>
        <p>has {votes[mostPopular]} votes</p></div>
    // return <div><p>no votes have been cast</p></div>
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={incrementVote} text={'vote'} />
      <Button handleClick={chooseRandomAnecdote} text={'next anecdote'} />
      <h1>Anecdote with most votes</h1>
      <HighValue />

    </div>
  )
}

export default App