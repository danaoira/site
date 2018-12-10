import uiReducer from './ui/reducer'

const combinedReducer = (state = { ui: null }, action) => {
  return {
    ui: uiReducer(state.ui, action)
  }
}

export default combinedReducer