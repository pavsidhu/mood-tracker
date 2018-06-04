import React, { Component } from 'react'
import styled from 'styled-components'
import { Persist } from 'react-persist'
import MoodItem from './MoodItem'

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.2em;
`

const MoodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const MoodList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

const Credit = styled.h6`
  font-size: 1.6em;
  text-align: center;
  font-weight: normal;
  margin-bottom: 16px;
`

class App extends Component {
  state = {
    upset: 0,
    angry: 0,
    sad: 0,
    unsure: 0,
    happy: 0,
    amazing: 0
  }

  addMood(mood) {
    this.setState(state => ({
      [mood]: state[mood] + 1
    }))
  }

  render() {
    return (
      <Container>
        <Persist
          name="state"
          data={this.state}
          debounce={0}
          onMount={data => this.setState(data)}
        />

        <Header>
          <Title>How are you feeling?</Title>
        </Header>

        <MoodContainer>
          <MoodList>
            <MoodItem
              icon="😭"
              label="Upset"
              onClick={() => this.addMood('upset')}
            />
            <MoodItem
              icon="😠"
              label="Angry"
              onClick={() => this.addMood('angry')}
            />
            <MoodItem
              icon="🙁"
              label="Sad"
              onClick={() => this.addMood('sad')}
            />
            <MoodItem
              icon="😐"
              label="Unsure"
              onClick={() => this.addMood('unsure')}
            />
            <MoodItem
              icon="😄"
              label="Happy"
              onClick={() => this.addMood('happy')}
            />
            <MoodItem
              icon="😁"
              label="Amazing"
              onClick={() => this.addMood('amazing')}
            />
          </MoodList>
        </MoodContainer>

        <Credit>
          Made With{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by Pav Sidhu
        </Credit>
      </Container>
    )
  }
}

export default App
