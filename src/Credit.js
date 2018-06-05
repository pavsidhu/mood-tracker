import React from 'react'
import styled from 'styled-components'

const Container = styled.h6`
  font-size: 1.6em;
  text-align: center;
  font-weight: normal;
  margin: 16px 0;
`

const Credit = props => (
  <Container>
    Made with{' '}
    <span role="img" aria-label="heart">
      ❤️
    </span>{' '}
    by Pav Sidhu
  </Container>
)

export default Credit
