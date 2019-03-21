import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import { fetchMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
    console.log('------------------------');
    console.log(this.props.fetchMessages(this.props.selectedChannel));
    console.log('------------------------');
  }

  render() {
    return (
      <div className="message-list">
        { this.props.messages.map((message) => {
          return (
            <Message key={message.content} author={message.author}
                     content={message.content} created_at={message.created_at}/>
          );
        })}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMessages: fetchMessages}, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
