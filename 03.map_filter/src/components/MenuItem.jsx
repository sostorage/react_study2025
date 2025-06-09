import React, { useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MenuItem = ({menu}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={menu.img} />
      <Card.Body>
        <Card.Title>{menu.name}</Card.Title>
        <Card.Text>
          {menu.price}
        </Card.Text>
        <Button variant="primary">주문하기</Button>
      </Card.Body>
    </Card>
  )
}

export default MenuItem