import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <p>{this.props.author} - {this.props.created_at}</p>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Message;
