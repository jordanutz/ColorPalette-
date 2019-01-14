import React, {Component} from 'react'

class Color extends Component {
  render () {
    console.log(this.props)
    return (
      <div
        style={{height: '75px',
        width: '75px',
        background: this.props.backgroundColor,
        border: '1px solid white',
        cursor: 'pointer'}}

        onClick={() => this.props.method(this.props.backgroundColor)}


        >


      </div>
    )
  }
}

export default Color
