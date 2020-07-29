import {API_URL} from '../apiUrl';

export function setStation(station) {
  return {
    type: 'SET_STATION',
    station
  }
} 

export function titleSearch(data, url=`${API_URL}search/`) {
  return dispatch => { 
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(response){
        return response.json();
    }).then(function(json){
      dispatch({
        type: 'TITLE_FILTER',
        filterStations: json.data,
        nextStations: json.next,
        filter: true
      })
    })
  }
}

export function countrySearch(id, url=`${API_URL}country/${id}/stations/`, name) {
  return dispatch => { 
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function(response){
        return response.json();
    }).then(function(json){
      dispatch({
        type: 'COUNTRY_FILTER',
        filterStations: json.results,
        nextStations: json.next,
        country: name,
        filter: true
      })
    })
  }
}
