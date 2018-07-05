import React from  'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'

ReactDOM.render(
  // <Component value="show!"/>
  <div>
    <Primeiro/>
    <Segundo/>
  </div>
, document.getElementById('app'))
