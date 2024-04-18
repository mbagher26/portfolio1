import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import './../styles/Product.css'

const Product = (props) => {
  return (
    <Card className='product-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{ props.name }</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
  )
}

export default Product