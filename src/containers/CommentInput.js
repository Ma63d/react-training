/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */

import React, { Component } from 'react'
import Input from '../components/CommentInput.js'
import { connect } from 'react-redux'
import * as actions from '../actions/index'


const mapStateToProps = (state, ownProps) => ({
    username: state.user.username
})

@connect(mapStateToProps)
export default class CommentInput extends Component {
    handleUsernameChange = (username) => {
        this.props.dispatch(actions.changeUsername(username))
    }
    handleSubmit = (content) => {
        const { username } = this.props
        this.props.dispatch(actions.addComment(username, content))
    }
    render () {
        const { username } = this.props
        return <div>
            <Input onUsernameChange={this.handleUsernameChange} onSubmit={this.handleSubmit} username={username} />
        </div>
    }
}