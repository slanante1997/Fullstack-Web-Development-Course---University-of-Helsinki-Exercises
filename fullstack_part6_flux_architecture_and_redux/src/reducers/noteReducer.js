import { createStore } from 'redux'

const noteReducer = (state = [], action) => {
    if (action.type === 'NEW_NOTE') {
      return state.concat(action.payload)
    }
  
    return state
  }
  
  const store = createStore(noteReducer)