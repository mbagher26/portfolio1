import React from 'react'
import { useEffect, useState } from 'react'
import supabase from '../SupabaseClient';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../styles/Home.css'

function Home() {

          const [products, setProducts] = useState(null);
          const [fetchError, setFetchError] = useState(null);
          const [orderBy, setOrderBy] = useState('created_at');

          const deleteHandler = (id) => {

                    let newProducts = products.filter(product => product.id !== id)
                    setProducts(newProducts)
          }

          useEffect(() => {
                    const fetchsupabase = async () => {
                              const { data, error } = await supabase
                                        .from("products")
                                        .select()
                                        .order(orderBy, { ascending: false })
                              if (error) {
                                        setFetchError(error)
                                        setProducts(null)
                              }
                              if (data) {
                                        setProducts(data)
                                        setFetchError(null)
                              }
                    }

                    fetchsupabase()
          }, [orderBy])
          return (
                    <Container fluid className='home-container'>
                              <Row className='orderby'>
                                        <Col>
                                                  <button onClick={() => setOrderBy('name')} >Name</button>
                                                  <button onClick={() => setOrderBy('price')} >Price</button>
                                                  <button onClick={() => setOrderBy('created_at')} >Create-at</button>
                                                  <p>{orderBy}</p>
                                        </Col>
                              </Row>
                              <Row className='home-row'>
                                        {products &&
                                                  products.map(product => (
                                                            <Col key={product.id} className='home-col' sm={6} md={6} lg={4} xl={3}>
                                                                      <Product {...product} onRemove={deleteHandler} />
                                                            </Col>
                                                  ))
                                        }
                              </Row>
                    </Container>
          )
}
export default Home