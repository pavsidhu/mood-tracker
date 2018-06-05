import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
  max-height: 20vh;
  width: 95%;
  max-width: 400px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

const Item = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 48px;
  font-size: 2em;
  padding: 4px 0 2px;
  box-sizing: content-box;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${props =>
    props.percentage &&
    css`
      height: calc(100% * ${props.percentage});
    `};

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`

const Stats = ({ moods }) => {
  const total = Object.values(moods).reduce((total, value) => total + value)

  return (
    <Container>
      <Item
        label="Upset"
        percentage={moods.upset / total}
        backgroundColor="#c9f7ff"
      >
        <span role="img" aria-label="upset">
          😭
        </span>
      </Item>
      <Item
        label="Angry"
        percentage={moods.angry / total}
        backgroundColor="#ff8c8c"
      >
        <span role="img" aria-label="angry">
          😠
        </span>
      </Item>
      <Item
        label="Sad"
        percentage={moods.sad / total}
        backgroundColor="#e2a5e8"
      >
        <span role="img" aria-label="sad">
          🙁
        </span>
      </Item>
      <Item
        label="Unsure"
        percentage={moods.unsure / total}
        backgroundColor="#f9ed91"
      >
        <span role="img" aria-label="unsure">
          😐
        </span>
      </Item>
      <Item
        label="Happy"
        percentage={moods.happy / total}
        backgroundColor="#ffc07c"
      >
        <span role="img" aria-label="happy">
          😄
        </span>
      </Item>
      <Item
        label="Amazing"
        percentage={moods.amazing / total}
        backgroundColor="#bcffa7"
      >
        <span role="img" aria-label="amazing">
          😁
        </span>
      </Item>
    </Container>
  )
}

export default Stats
