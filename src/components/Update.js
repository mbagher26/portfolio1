import React from 'react'
import { useState } from 'react'

function Update() {

          const [name, setName] = useState();
          const [price, setPrice] = useState();
          const [formError, setFormError] = useState();

         


          return (
                    <div className='updata-container'>
                              <form className='update-form' onSubmit={submitHandler}>
                                        <h1>Create new product</h1>
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