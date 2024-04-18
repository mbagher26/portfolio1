import Card from 'react-bootstrap/Card';
import React from 'react'
import './../styles/Product.css'
import { Link } from 'react-router-dom';
import { BsPen } from "react-icons/bs";

const Product = (props) => {
  return (
    <Card className='product-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{ props.name }</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Link to={`/update/${props.id}`}>
         <BsPen/>updateing
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product