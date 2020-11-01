import { connect } from 'react-redux';

import Filter from '../components/Filter.js';

import * as actions from '../store/actions/actions.js'


const mapStateToProps = (state) => {
    return {
        filter: state.contactsState.filter
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        filter: (search) => {
            dispatch( actions.filter(search) );
        }    
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer;