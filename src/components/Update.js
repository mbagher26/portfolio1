import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import supabase from '../SupabaseClient';
import './../styles/Form.css'

function Update() {

          const [name, setName] = useState('');
          const [price, setPrice] = useState('');
          const [formError, setFormError] = useState(null);
          const { id } = useParams()
          const navigate = useNavigate()
         
          const submitHandler = (e) => {
                    e.preventDefault()
                    if (!name || !price) {
                              setFormError('fill all field')
                              return
                    }

                   const updating = async () => {
                              const { data, errore } = await supabase
                                        .from("products")
                                        .update([{ name, price }])
                                        .eq('id', id)
                              if (errore) {
                                        console.log(errore);
                              }
                              if (data) {
                                        console.log(data);
                              }
                             navigate('/home', {replace: true})
                   }
                    updating()

          }

          useEffect( () => {
                    const fetchdata = async() => {
                              const { data, error } = await supabase
                                        .from("products")
                                        .select()
                                        .eq('id', id)
                              if (data) {
                                        setName(data[0].name)
                                        setPrice(data[0].price)
                              }
                              if (error) {
                                        console.log(error)
                              }
                    }
                    fetchdata()
          },[])

          return (
                    <div className='container'>
                              <form className='form' onSubmit={submitHandler}>
                                        <h1>Update product{id }</h1>
                                        <label htmlFor="inputName">Name</label>
                                        <input id='inputName' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
                                        <label htmlFor="inputPrice">Price</label>
                                        <input id='inputPrice' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
                                        <input type='submit' value="Update" />
                              </form>
                              {formError && <p>{formError}</p>}
                    </div>
          )
}

export default Update