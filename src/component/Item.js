import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/"+ this.props.item.img}/>   
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p> 
        <b className=' flex justify-center items-center text-[25px]'>{this.props.item.price}₽</b>  
      </div>
    )
  }
}

export default Item