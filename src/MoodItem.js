import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.p`
  font-size: 6em;
`

const Label = styled.p`
  font-size: 1.6em;
`

const MoodItem = props => (
  <Container>
    <Icon>{props.icon}</Icon>
    <Label>{props.label}</Label>
  </Container>
)

export default MoodItem
