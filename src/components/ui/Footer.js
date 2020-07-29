import React, { Component } from 'react';
import raf from 'raf';
import { connect } from 'react-redux';
import ReactHowler from '../howler/ReactHowler';
import { setStation } from '../../actions/';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      volume: 1.0,
      play: false,
      stationDetails: {}
    };
  }

  componentDidMount() {
    this.setState({ stationDetails: this.props.stations.stationDetails })
  }

  static getDerivedStateFromProps(props, state) {
    if(props.stations.stationDetails !== state.stationDetails){
      return { stationDetails: props.stations.stationDetails }
    }
    return null;
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
    })
  }

  handleOnEnd() {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  handleOnPlay() {
    this.setState({ play: !this.state.play}, () => this.props.setStation({ ...this.state.stationDetails, isPlaying: this.state.play }))
  }

  renderSeekPos () {
    this.setState({
      seek: this.player.seek()
    })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF () {
    raf.cancel(this._raf)
  }

  componentWillUnmount () {
    this.clearRAF()
  }

  getColor(color) {
    return window.location.pathname === color ? '#fff' : '#d2d9ec'
  }

  render() {
    const { stationDetails } = this.state;
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6 col-sm-12">
                  <div className="footer_player ">
                    <div className="inline-flex">
                      <div className="radio_item">
                        <div className="play">
                        {this.state.play &&
                          <span onClick={() => this.handleOnPlay()}><i className="fas fa-pause"></i></span>
                        }
                        {!this.state.play &&
                          <span onClick={() => this.handleOnPlay()}><i className="fas fa-play"></i></span>
                        }
                      </div>
                      <div className="content">
                        <p>{stationDetails && (stationDetails.stationName)}
                          <span className="country">{stationDetails && (stationDetails.country)}</span>
                        </p>
                      </div>
                        {stationDetails.url &&
                          <ReactHowler
                            src={stationDetails.url}
                            preload={true}
                            playing={this.state.play}
                            onPlay={() => this.handleOnPlay}
                            volume={this.state.volume/100}
                            onLoad={this.handleOnLoad.bind(this)}
                            html5={true}
                            format={['mp3', 'ogg']}
                            onEnd={this.handleOnEnd.bind(this)}
                            ref={(ref) => (this.player = ref)}
                            onLoadError={(e) => this.setState({ play: false}, () => this.props.setStation({ ...this.state.stationDetails, isPlaying: false }))}
                          />
                        }
                      </div>
                    </div>
                    <div className="inline-flex volume_block">
                      <span className="volume"><i className="fas fa-volume-off"></i></span>
                      <input 
                        type="range" 
                        min='0' 
                        max='100' 
                        value={this.state.volume}
                        onChange={e => this.setState({volume: parseFloat(e.target.value)})} 
                      />
                      <span className="volume high"><i className="fas fa-volume-up"></i></span>
                    </div>
                    <div className="inline-flex">
                      <ul className="social_icons">
                        <li><a target="_blank" rel="noopener noreferrer" href={'http://www.facebook.com/sharer/sharer.php?u=http://radiostring.com/'+this.state.stationDetails.slug+'&quote=I am listening '+stationDetails.stationName+' in RadioString.'} className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={'https://plus.google.com/share?url=http://radiostring.com/'+this.state.stationDetails.slug+'&text=I am listening '+stationDetails.stationName+' in RadioString.'} className="google"><i className="fab fa-google"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={'https://twitter.com/share?url=http://radiostring.com/'+this.state.stationDetails.slug+'&text=I am listening '+stationDetails.stationName+' in RadioString.'} className="twitter"><i className="fab fa-twitter"></i></a></li>
                      </ul>
                   </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="footer_links">
                    <ul>
                      <li style={{ color: this.getColor('/') }}><a onClick={() => this.props.history.push('/')}>Home</a></li>
                      <li style={{ color: this.getColor('/about-us/') }}><a onClick={() => this.props.history.push('/about-us/')}>About Us</a></li>
                      <li style={{ color: this.getColor('/privacy-policy/') }}><a onClick={() => this.props.history.push('/privacy-policy/')}>Privacy Policy</a></li>
                      <li style={{ color: this.getColor('/terms-and-conditions/') }}><a onClick={() => this.props.history.push('/terms-and-conditions/')}>Terms & Conditions</a></li>
                      <li>Copyright Reserved &copy; 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {setStation})(Footer);
