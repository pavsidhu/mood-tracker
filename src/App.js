import React, { Component } from 'react'
import styled from 'styled-components'
import { Persist } from 'react-persist'
import MoodList from './MoodList'
import Stats from './Stats'

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.2em;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Button = styled.div`
  border-radius: 4px;
  background-color: #f1f1f1;
  font-size: 1.6em;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  margin: 32px 0;
  transition: transform 140ms;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: scale(0.95) translateY(2px);
  }
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moods: {
        upset: 0,
        angry: 0,
        sad: 0,
        unsure: 0,
        happy: 0,
        amazing: 0
      },
      isViewingStats: false
    }

    this.addMood = this.addMood.bind(this)
  }

  addMood(m) {
    const mood = m.toLowerCase()

    this.setState(state => ({
      ...state,
      moods: {
        ...state.moods,
        [mood]: state.moods[mood] + 1
      }
    }))

    this.toggleStateView()
  }

  toggleStateView() {
    this.setState(state => ({
      ...state,
      isViewingStats: !state.isViewingStats
    }))
  }

  render() {
    const { isViewingStats, moods } = this.state

    return (
      <Container>
        <Persist
          name="state"
          data={this.state}
          debounce={0}
          onMount={data => data !== null && this.setState(data)}
        />

        <Header>
          <Title>How are you feeling?</Title>
        </Header>

        <Contents>
          {isViewingStats ? (
            <Stats moods={moods} />
          ) : (
            <MoodList addMood={this.addMood} />
          )}

          <Button onClick={() => this.toggleStateView()}>
            {isViewingStats ? 'Hide Stats' : 'View Stats'}
          </Button>
        </Contents>
      </Container>
    )
  }
}

export default App
