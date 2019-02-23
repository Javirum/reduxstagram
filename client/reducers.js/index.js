import { combineReducers } from 'redux'
import { routerReducers } from 'react-router-reducers'

import posts from './posts'
import comments from './comments'

const rootReducers = combineReducers({ posts, comments, routing: routerReducers })

export default rootReducers