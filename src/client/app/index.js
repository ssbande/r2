import React from 'react';
import {render} from 'react-dom';
import Component from './component.js';

class App extends React.Component {
  render () {
    return (
        <div>
            <p> Hello Bande!</p>
            <Component />
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
