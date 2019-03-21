import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Sup baby: ' + this.state.value);
    // this.props.createMessage(this.props.selectedChannel, this.props.author, this.props.content);
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange}/>
        </label>
        <button type="submit" value="Submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
