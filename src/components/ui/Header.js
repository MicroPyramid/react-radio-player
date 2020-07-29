import React, { Component } from 'react';
import { titleSearch }  from '../../actions/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  onSearch(value) {
    this.setState({ searchValue: value })
    this.props.titleSearch({ "title": value })
    let title = document.getElementById(this.props.stations.country)
    if(title && title.checked) {
      title.checked = false;
    }
    // var gender = document.querySelector('input[country][checked]');
  }

  render() {
    return (
      <header className="fixed-top">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <nav className="navbar navbar-expand-md">
                <div className="flex navbar-brand-box">
                  <Link to={'/'} className="navbar-brand">RadioString <small>Feel the vibe</small></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="flex mr-auto search_flex">
                    {window.location.pathname === '/' &&
                      <div className="top_search">
                        <div className="input-group ">
                          <input
                            id="title" 
                            type="text" 
                            className="form-control" 
                            placeholder="Search By Radio Station Name, Country..." 
                            aria-label="Search By Radio Station Name, Country..." 
                            aria-describedby="button-addon2" 
                            // value={this.state.searchValue}
                            onChange={(e) => this.onSearch(e.target.value)}
                          />
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                          </div>
                          <div className="search_results_block" style={{ display: 'none' }}>
                            <ul className="search_results">
                              <li className="search_item"><div>Radio Algérie ANNABA</div></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  <div className="flex">
                    <div className="download_app">
                      <p className="text-right">Download From <span>App Store</span></p>
                      <ul className="download_icons">
                        <li><a href="https://play.google.com/store/apps/details?id=com.radiostring&hl=en_IN"><img src="../img/google-play-store.svg" alt="" /></a></li>
                        <li><a nohref="true"><i className="fab fa-apple"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { titleSearch })(Header)
