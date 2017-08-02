/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */

import React, { Component } from 'react'
import style from './CommentInput.css';
import basicStyle from '../style/common.css'

export default class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            content: ''
        }
    }
    handleSubmit = () => {
        this.props.onSubmit && this.props.onSubmit(this.state.content)
    }
    handleUsernameChange = (event) => {
        this.props.onUsernameChange && this.props.onUsernameChange(event.target.value)
    }
    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    render () {
        const { content } = this.state
        const { username } = this.props
        return <form className={basicStyle.center}>
            <div className={basicStyle.line}>
                <label htmlFor="username">用户名</label>
                <input type="text" className={style.input} id="username" value={username} onChange={this.handleUsernameChange}/>
            </div>
            <div className={basicStyle.line}>
                <label htmlFor="content">内容</label>
                <input type="text" className={style.input} id="content" value={content} onChange={this.handleContentChange}/>
            </div>
            <div className={basicStyle.line}>
                <button className={basicStyle['basic-button']} onClick={this.handleSubmit} type="button">评论</button>
            </div>
        </form>
    }
}