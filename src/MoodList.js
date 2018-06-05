import React from 'react'
import styled from 'styled-components'
import MoodItem from './MoodItem'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

const MoodList = ({ addMood }) => (
  <Container>
    <MoodItem icon="😭" label="Upset" onClick={() => addMood('upset')} />
    <MoodItem icon="😠" label="Angry" onClick={() => addMood('angry')} />
    <MoodItem icon="🙁" label="Sad" onClick={() => addMood('sad')} />
    <MoodItem icon="😐" label="Unsure" onClick={() => addMood('unsure')} />
    <MoodItem icon="😄" label="Happy" onClick={() => addMood('happy')} />
    <MoodItem icon="😁" label="Amazing" onClick={() => addMood('amazing')} />
  </Container>
)

export default MoodList
