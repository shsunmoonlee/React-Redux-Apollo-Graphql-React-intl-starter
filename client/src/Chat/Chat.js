import React, { Component } from 'react'
import './Chat.css'
import axios from 'axios'
import Pusher from 'pusher-js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar';

const style = {
 margin: 15,
};
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            username: '',
            messages: [],
            expanded: false,
        };
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentWillMount() {
        this.setState({ username: localStorage.username });
        this.pusher = new Pusher('951e5928a6b9c91b622a', {
            authEndpoint: '/pusher/auth',
            cluster: 'eu',
            encrypted: true
        });
        this.chatRoom = this.pusher.subscribe('private-reactchat');
    }
    componentDidMount() {
        this.chatRoom.bind('messages', newmessage => {
            this.setState({messages: this.state.messages.concat(newmessage)})
        }, this);

    }
    sendMessage(event) {
        event.preventDefault();
        if (this.state.message !== '') {
            axios.post('/message/send', {
                username: this.state.username,
                message: this.state.message
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            this.setState({message: ''})
        }
        else {
            console.log('enter message')
        }
    }
    render() {
        const messages = this.state.messages;

        const message = messages.map(item => {
            return (
                <Card key ={item.id}>
                  <CardText>
                    {item.username} : {item.message}
                  </CardText>
                </Card>
            )
        })
        return (
          <div className="section-chat">
            <AppBar
               title="Chat"
             />
            {message}
            <h4 className="text-center">Welcome, {this.state.username}</h4>
            <h5 className="text-center">Begin chatting here.</h5>
            <form onSubmit={this.sendMessage}>
            <TextField
              type="message"
              className="form-message"
              ref={(message) => this.message = message}
              hintText="Enter message here"
              floatingLabelText="Message"
              onChange = {(event,newValue) => this.setState({message:newValue})}
            />
            <RaisedButton label="Send" type="submit" className="btn btn-primary" primary={true} style={style}/>
            </form>
          </div>
        )
    }
}

export default Chat;
