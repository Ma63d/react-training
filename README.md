# react-todo-apps

### 一个简单的评论应用

我一开始上来就用的是 dva 和 antd，对于 react 和 redux 的使用相当不熟练，很多 api 都没用过，用法也不太清楚。所以还是用这个小项目来练手。

而且虽然只是一个简单的评论应用，能探索的点有很多，包括 

- smart、dumb 分层的练习
- redo、undo 的实验
- 生命周期钩子的练习
- pure render、HOC 的练习，评论的楼中楼模式的递归组件练习
- 再往复杂探索，简单加个数据 mock 功能，也就能探索异步事件的管理，试验 redux-thunk、redux-saga

总之就是可以探索的点很多，慢慢把这个东西做复杂起来，尝试和学习各种写法和思想。希望 @愚指导 能一起探讨。

### v0.0.1 存在的问题，

今晚刚刚将基本功能实现， 但是功能上来还没做 redo、undo，已经预留接口，想在0.x 版本做完基于 localstorage 的数据持久化。

自我感觉代码存在的问题：
- actions 里面的 action creator 比较重复，可以更简洁一点，可以试试 redux-actions 和 redux 的 bindActionCreator
- 没有写 propTypes，不好一眼看出一个组件需要什么 props，明天仔细读读 propTypes 然后加上
- css modules 好难用，多个 class 的写法好恶心： ``` className={`${basicStyle['basic-button']} ${basicStyle['spacing']}\`} ```


