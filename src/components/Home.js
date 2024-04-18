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
                              <Row className='home-row'>
                                        {products &&
                                                  products.map(product => (
                                                            <Col className='home-col' sm={6} md={6} lg={4} xl={3}>
                                                                      <Product key={product.id} {...product} />
                                                            </Col>
                                                  ))
                                        }
                              </Row>
                    </Container>
          )
}
export default Home