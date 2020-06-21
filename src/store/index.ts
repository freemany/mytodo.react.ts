import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/todoReducer';
import initialTodo from './initial';

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	// console.log('ski days', store.getState().allSkiDays.length)
	result = next(action)

    console.log(store.getState());
	// let { allSkiDays, goal, errors, resortNames } = store.getState()

	// console.log(`

	// 	ski days: ${allSkiDays.length}
	// 	goal: ${goal}
	// 	fetching: ${resortNames.fetching}
	// 	suggestions: ${resortNames.suggestions}
	// 	errors: ${errors.length}

	// `)

	console.groupEnd()

	return result
}

// const store = createStore(reducer, initialTodo);
const store = applyMiddleware(consoleMessages)(createStore)(reducer, initialTodo)

export default store;


