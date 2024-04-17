import React from 'react'
import { useEffect, useState } from 'react'
import './../styles/Create.css'
import supabase from '../SupabaseClient';

function Create() {

          const [name, setName] = useState('');
          const [price, setPrice] = useState('');
          const [formError, setFormError] = useState(null);

          useEffect(() => {
                    
          })
          const submitHandler = (e) => {
                    e.preventDefault();

                    if (!name || !price) {
                              setFormError("Fill all the fields.")
                    }

                    const fetchSupabase = async () => {
                              const { data, error } = await supabase
                                        .from("products")
                                        .insert([{name, price}])

                              if (error) {
                                        console.log({error});
                              }
                              if (data) {
                                        console.log(data);
                                        setFormError(null)
                              }
                    }
                    fetchSupabase()
          }


          return (
                    <div className='create-container'>
                              <form className='create-form' onSubmit={submitHandler}>
                                        <h1>Create new product</h1>
                                        <label htmlFor="inputName">Name</label>
                                        <input id='inputName' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
                                        <label htmlFor="inputPrice">Price</label>
                                        <input id='inputPrice' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
                                        <input type='submit' value="Submit"/>
                              </form>
                              {formError && <p>{ formError }</p>}

                    </div>
          )
}

export default Create