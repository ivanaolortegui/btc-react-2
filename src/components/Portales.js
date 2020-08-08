import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {
  const styles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'linear-gradient(to top right, #667eea, #764ba2',
    opacity: '0.9',
    color: '#FFF'
  }
  return ReactDom.createPortal((
    <div style={styles}>
      Hola desde un portal
      <button onClick={props.visible}>ocultar</button>
    </div>
  ), document.getElementById('modal-root'))

}

export default class Portal extends React.Component {
  state = {
    visible: false
  }
  mostrar = () => {
    this.setState({
      visible: true
    })
  }
  ocultar = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.mostrar}> Mostrar</button>
        {this.state.visible && <Modal visible={this.ocultar} />}

      </div>
    )
  }
}