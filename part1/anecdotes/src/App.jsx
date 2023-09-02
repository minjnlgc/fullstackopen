import { useState } from 'react'

const Anecdote = ({anecdote, votesNumber}) => {
  return (
    <div>
      {anecdote} 
      <p>has {votesNumber} votes</p>
    </div>
  )
}

const Popular = ({anecdotes, voteNumbers}) => {
  const maxVotesNum = Math.max(...voteNumbers)
  const popularIndex = voteNumbers.indexOf(maxVotesNum)

  if (maxVotesNum === 0) {
    return (
      <p>No vote yet</p>
    )
  }
  
  return (
    <Anecdote anecdote={anecdotes[popularIndex]} votesNumber={maxVotesNum}/>
  )

}

const Button = ({clickHandler, text}) => 
  <button onClick={clickHandler}> {text} </button>


const App = () => {

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

  const [selected, setSeleted] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))


  const handleRandomAnecdote = () => {
    setSeleted(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteForAnecdote = () => {
    const newVote = [...vote]
    newVote[selected]+=1
    setVote(newVote)
  }

  return (
    <div>

      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votesNumber={vote[selected]}/>

      <Button clickHandler={handleVoteForAnecdote} text='vote'/>
      <Button clickHandler={handleRandomAnecdote} text='next anecdote'/>

      <h1>Anecdote with most votes</h1>
      <Popular anecdotes={anecdotes} voteNumbers={vote}/>
      
    </div>
  )

}

export default App
