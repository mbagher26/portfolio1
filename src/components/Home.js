import React from 'react'
import { useEffect, useState } from 'react'
import supabase from '../SupabaseClient';
import Product from './Product';


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
                    <>
                              {fetchError && <p>{fetchError}</p>}
                              {products && <div>
                                        {products.map(product => (
                                                  <Product key={product.id} {...product} />
                                        ))}
                              </div>}
                    </>
          )
}
export default Home