import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Color from './Components/Color'
import SelectedColor from './Components/SelectedColor'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userName: null,
      selectedColor: null
    }
  }

  handleInput = (event) => {
    console.log('Update name ran')
    this.setState({
      userName: event.target.value.toLowerCase()
    })
  }

  selectColor = (data) => {
    this.setState({
      selectedColor: data
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput}/>

        {this.state.userName
          ?
            <div>
              <Header userName={this.state.userName}/>
              <div className="ColorSelector">
                <div className='Colors'>
                  <Color backgroundColor={'#3AFFF5'} method={this.selectColor}/>
                  <Color backgroundColor={'#00F8EB'} method={this.selectColor}/>
                  <Color backgroundColor={'#00D2F8'} method={this.selectColor}/>
                  <Color backgroundColor={'#00B0F8'} method={this.selectColor}/>
                  <Color backgroundColor={'#0085F8'} method={this.selectColor}/>
                  <Color backgroundColor={'#005BF8'} method={this.selectColor}/>
                </div>
                <div className="SelectecColor">
                  <SelectedColor pageColor={this.state.selectedColor}/>
                </div>
              </div>
            </div>
          :
          <div>
            <h2>Please enter a Username</h2>
          </div>
        }

      </div>
    );
  }
}

export default App;
