import {render} from 'preact';
import {App} from './app';
import './app.css';
import '@akrc/fish/fish.css';

const container = document.getElementById('app')!;

render(<App />, container);
