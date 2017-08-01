/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */

import React, { Component } from 'react'
import CommentItem from './CommentItem'

export default function ({ comments, onDelete, onHide }) {
    console.log(comments)
    return <div>
        {comments.map(comment => {
            console.log(comment)
            return (
                <CommentItem key={comment.id} {...comment} onDelete={onDelete} onHide={onHide}/>
            )
        })}
    </div>
}