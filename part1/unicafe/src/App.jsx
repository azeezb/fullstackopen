import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setAll] = useState(0)
  const [positive, setPositive] = useState(0)


  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  )

  console.log("array length: ", total.length)
  console.log(total)
  console.log(positive)

  const handleGoodClick = () => {
    console.log('good click')
    const newGood = good + 1
    const newPositive = positive + 1
    const newFeedback = total + 1
    setAll(newFeedback)
    setPositive(newPositive)
    setGood(newGood)
  }

  const handleNeutralClick = () => {
    console.log('neutral click')
    const newNeutral = neutral + 1
    setAll(total + 0)
    setNeutral(newNeutral)
  }

  const handleBadClick = () => {
    console.log('bad click')
    const newBad = bad + 1
    setAll(total - 1)
    setBad(newBad)
  }

  const Statistics = () => {
    if ((good + neutral + bad) === 0)
      return <div>
        <h1>statistics</h1>
        No feedback given</div>
    return <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + neutral + bad} />
          <StatisticLine text='average' value={(total / (good + neutral + bad)).toFixed(1)} />
          <StatisticLine text='positive' value={((positive / (good + neutral + bad) * 100)).toFixed(1)} />
        </tbody>
      </table>
    </div>
  }

  const StatisticLine = ({ text, value }) => {
    if (text === 'positive') {
      return <tr><td>{text}</td><td>{value}%</td></tr>
    }
    return <tr><td>{text}</td><td>{value}</td></tr>
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} positive={positive} />
    </div>
  )
}

export default App