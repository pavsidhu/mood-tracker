import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 62.5%;
    background: repeating-linear-gradient(
      -45deg,
      #fefefe,
      #fefefe 10px,
      #fcfcfc 10px,
      #fcfcfc 20px
    );
}
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
