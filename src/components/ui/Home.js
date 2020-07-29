import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStation, countrySearch, titleSearch } from '../../actions/';
import { API_URL } from '../../apiUrl';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      nextStations: 0,
      countries: [],
      filterQuery: this.props.filterQuery,
      filterMoreStations: false,
      selectedCountry: '',
      selectedCountryName: '',
      initial: true
    };
  }

  componentDidMount() {
    this.getCountries()
    this.getStations(`${ API_URL }get-stations/`)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.stations.filterStations !== state.stations && props.stations.filter) {
      return {
        stations: state.filterMoreStations ? state.stations.concat(props.stations.filterStations) : props.stations.filterStations,
        nextStations: props.stations.nextStations,
        filterMoreStations: false
      };
    }
    return null;
  }

  getCountries() {
    fetch(`${ API_URL }get-countries/`, 
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
    .then((response) => response.json())
    .then((countries) => {
      this.setState({ 
        countries: countries.data,
      })
    })
  }

  getStations(url, next=false) {
    fetch(url, 
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
    .then((response) => response.json())
    .then((stations) => {
      if(!next) {
        this.props.setStation({ 
          url: stations.data[0].stream, 
          country: stations.data[0].country , 
          stationName: stations.data[0].title,
          slug: stations.data[0].slug,
          stationId: stations.data[0].id
        })
      }
      this.setState({ 
        stations: next ? this.state.stations.concat(stations.data) : stations.data,
        nextStations: stations.next,
        initial: false
      })
    })
  }

  onClickStation(station){
    this.props.setStation({ 
      ...this.props.stations.stationDetails, 
      url: station.stream, 
      country: station.country , 
      stationName: station.title,
      slug: station.slug,
      stationId: station.id
    })
  }

  onClickCountry(value, name) {
    this.setState({ selectedCountry: value, selectedCountryName: name })
    this.props.countrySearch(value, undefined)
    let title = document.getElementById('title')
    title.value = ''
  }

  onLoadMore() {
    if(this.state.selectedCountry) {
      this.props.countrySearch(null, this.state.nextStations, this.state.selectedCountryName)
      this.setState({ filterMoreStations: true })
    } else {
      this.getStations(this.state.nextStations, true)
    }
  }

  render() {
    return (
      <div className="main_container">
        <div className="container pad_5">
          <div className="row justify-content-center marl">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-2 col-lg-3 countries_block">
                  <button type="text" className="btn primary_btn filters_btn"><i className="fas fa-filter"></i> Filter By Country</button>
                  <ul className="countries">
                    {this.state.countries.length > 0 && this.state.countries.map((country, index) =>
                      <li className="country" key={index}>
                        <input 
                          type="radio" 
                          id={country.name} 
                          name="country" 
                          value={country.id} 
                          onChange={(e) => this.onClickCountry(e.target.value, country.name)} 
                        />
                        <label htmlFor={country.name}>{country.name}</label>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="col-xl-10 col-lg-9">
                  <div className="row radio_list">
                  {this.state.stations.length > 0 ? this.state.stations.map((station) =>
                    <div className="col-xl-4 col-lg-6 col-sm-6" key={station.id} onClick={() => this.onClickStation(station)}>
                      <div className={this.props.stations.stationDetails.stationId === station.id ? "radio_item active" : "radio_item"}>
                        <div className="content">
                          <p>{station.title}
                            <span className="country">{station.country}</span>
                          </p>
                        </div>
                        <div className="play">
                          {(this.props.stations.stationDetails.isPlaying && this.props.stations.stationDetails.stationName === station.title) ?
                            <span><i className="fas fa-pause"></i></span>
                          :
                            <span><i className="fas fa-play"></i></span>
                          }
                        </div>
                      </div>
                    </div>
                  )
                  :
                    <div>No Stations Found</div>
                  }
                  </div>
                  {this.state.nextStations &&
                    <div className="load_block text-center">
                      <button className="load_more" onClick={() => this.onLoadMore()}><i className="fas fa-spinner"></i> Load More Stations</button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {setStation, countrySearch, titleSearch})(Home)

