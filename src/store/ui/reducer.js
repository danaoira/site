import { UI_SELECT_PAGE } from './actions'

const initialState = {
  page: null
}

export default (state = initialState, action) => {
  switch (type) {
    case UI_SELECT_PAGE:
      return {
        ...state,
        page: action.payload
      }
  }
}