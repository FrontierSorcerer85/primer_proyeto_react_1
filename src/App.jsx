import { Component } from 'react'
import Contador from './componentes/Contador'
import './App.css'

export default class App extends Component {

  render () {
    return (
      <div className='ListaContadores'>
        <Contador>A</Contador>
        <Contador>B</Contador>
        <Contador>C</Contador>
        <Contador>D</Contador>
        <Contador>E</Contador>
        <Contador>F</Contador>
      </div>
    )
  }
}