import React from 'react'
import { useEffect, useState } from 'react'
import supabase from '../SupabaseClient';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../styles/Home.css'
import { Link } from 'react-router-dom';

function Home() {

          const [products, setProducts] = useState(null);
          const [fetchError, setFetchError] = useState(null);

          useEffect(() => {
                    const fetchsupabase = async () => {
                              const { data, error } = await supabase
                                        .from("products")
                                        .select()
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
          }, [])
          return (
                    <Container fluid className='home-container'>
                              <Row>
                                        <Col style={{marginLeft:'35px', marginTop: '10px'}}>
                                                  <Link to='/create'>new product</Link>
                                        </Col>
                              </Row>
                              <Row className='home-row'>
                                        {products &&
                                                  products.map(product => (
                                                            <Col key={product.id} className='home-col' sm={6} md={6} lg={4} xl={3}>
                                                                      <Product {...product} />
                                                            </Col>
                                                  ))
                                        }
                              </Row>
                    </Container>
          )
}
export default Home