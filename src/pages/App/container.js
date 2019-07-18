import { connect } from 'react-redux'
import { uiSelectPage } from '../../store/ui/actions'
import { getSelectedPage } from '../../store/ui/selectors'

const mapStateToProps = (state, props) => {
  const page = getSelectedPage(state)
  
  return {
    page
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handlePageSelect: (page) => {
      dispatch(uiSelectPage(page))
    }
  }
}

export default (PageComponent) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageComponent)
}