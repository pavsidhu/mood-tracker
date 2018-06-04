import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`

const Icon = styled.span`
  user-select: none;
  font-size: 6em;
`

const Label = styled.p`
  font-size: 1.6em;
`

const MoodItem = props => (
  <Container onClick={props.onClick}>
    <Icon role="img" aria-label={props.label}>
      {props.icon}
    </Icon>
    <Label>{props.label}</Label>
  </Container>
)

export default MoodItem
