import React, { Component } from 'react'
import styled from 'styled-components'
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
  render() {
    return (
      <Container>
        <Header>
          <Title>How are you feeling?</Title>
        </Header>

        <MoodContainer>
          <MoodList>
            <MoodItem icon="😭" label="Upset" />
            <MoodItem icon="😠" label="Angry" />
            <MoodItem icon="🙁" label="Sad" />
            <MoodItem icon="😐" label="Unsure" />
            <MoodItem icon="😄" label="Happy" />
            <MoodItem icon="😁" label="Amazing" />
          </MoodList>
        </MoodContainer>

        <Credit>Made With ❤️ by Pav Sidhu</Credit>
      </Container>
    )
  }
}

export default App
