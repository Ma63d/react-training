/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */

import React, { Component } from 'react'
import List from '../components/CommentList.js'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
    comments: state.comments
})

@connect(mapStateToProps)
export default class CommetList extends Component {
    handleDelete = (id) => {
        this.props.dispatch(actions.deleteComment(id))
    }
    handleHide = (id) => {
        this.props.dispatch(actions.hideComment(id))
    }

    render () {
        const { comments } = this.props
        console.log(comments)
        return (
            <div>
                <List comments={comments} onDelete={this.handleDelete} onHide={this.handleHide}/>
            </div>
        );
    }
}