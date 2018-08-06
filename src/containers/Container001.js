import { connect } from 'react-redux'
import Component001 from '../components/Component001';
import { deleteNumber } from '../actions';

// import { setVisibilityFilter } from '../actions'

//We will get the necessary info from state
const stateFilter = (stateInput) =>{
    return stateInput.rawData.filter(t => t % 1 === 0)
}

const mapStateToProps = (state) => ({
  containerState001ToProps: stateFilter(state)
})

//deleteNumber is actionMsg generate
const mapDispatchToProps = (dispatch) => ({
  onClickDis: (index) => dispatch(deleteNumber(index))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component001)
