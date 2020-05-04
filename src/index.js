import { HelloWorld } from './js/hello_world'

const greeting = document.createElement('h1')
greeting.textContent = HelloWorld()

const app = document.querySelector('#root')
app.append(greeting)