import Card from 'react-bootstrap/Card';
import React from 'react'
import './../styles/Product.css'
import { Link } from 'react-router-dom';
import { BsPen } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import supabase from '../SupabaseClient';

const Product = (props) => {

  

    const fetchdDelete = async () => {
      const { data, error } = await supabase
      
      .from("products")
      .delete()
      .eq('id', props.id)
      
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
      }
      props.onRemove(props.id)
    }
    
  

  return (
    <Card className='product-card' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Link to={`/update/${props.id}`}>
          <BsPen />updateing
        </Link>
        <div className='btn-delete' onClick={fetchdDelete}>
          <MdOutlineDeleteOutline />delete
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product