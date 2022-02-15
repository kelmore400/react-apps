import React from 'react';
class Example_2 extends React.Component {
    render () {
      return <div>{this.props.text || 'default class text'}</div>
    }
  }
  export default Example_2;