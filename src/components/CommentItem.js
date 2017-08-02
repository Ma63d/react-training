/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */

import React, { Component } from 'react'
import style from './CommentItem.css';
import basicStyle from '../style/common.css'

export default function CommentItem({ id, username, date, content, onHide, onDelete }) {
    return <div className={style.message}>
        <div className={style['message-header']}>
            <span className={style.username}>{username}</span>
            <span>{date}</span>
        </div>
        <div className={style['message-body']}>
            {content}
        </div>
        <div className={basicStyle.line}>
            <button className={`${basicStyle['basic-button']} ${basicStyle['spacing']}`} onClick={() => {onHide(id)}}>隐藏</button>
            <button className={`${basicStyle['basic-button']} ${basicStyle['spacing']}`} onClick={() => {onDelete(id)}}>删除</button>
        </div>
    </div>
}