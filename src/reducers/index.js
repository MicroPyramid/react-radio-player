import { combineReducers } from 'redux';

const stationinitialState = {
  stationDetails: {},
  query: null,
  filterStations: [],
  nextCountryStations: '',
  nextTitleStations: '',
  country: '',
  filter: false
};

export function stations(state = stationinitialState, action) {
  switch (action.type) {
    case 'SET_STATION': 
      return Object.assign({}, state, { 
        stationDetails: action.station 
      }) 
    case 'TITLE_FILTER':
      return Object.assign({}, state, {
        filterStations: action.filterStations,
        nextTitleStations: action.nextStations,
        filter: action.filter
      }) 
    case 'COUNTRY_FILTER': 
      return Object.assign({}, state, {
        filterStations: action.filterStations,
        nextCountryStations: action.nextStations,
        country: action.country,
        filter: action.filter
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({ stations });

export default rootReducer;
