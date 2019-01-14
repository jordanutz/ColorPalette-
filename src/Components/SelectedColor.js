import React, {Component} from 'react'

class SelectedColor extends Component {
  render () {
    console.log(this.props.pageColor)
    return (
      <div className="SelectedColorBox">
        <div style={{height: '300px', width: '500px',background: this.props.pageColor}}></div>
        <h2>{this.props.pageColor}</h2>
      </div>
    )
  }
}

export default SelectedColor
