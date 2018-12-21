import { combineReducers } from 'redux';
import generation from './generation.js';
import dragon from './dragon.js';
import account from './account';
import accountDragons from './accountDragons';

export default combineReducers({ account, dragon, generation, accountDragons });