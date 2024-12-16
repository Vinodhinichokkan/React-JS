/*functional component*/

import React, { useState } from 'react'

const Binding = ()=>{
    const [wish, setWish] = useState("")

const handleWish = (msg) =>{
    setWish(msg)
}

return(
    <div>
        <h4>Event Binding Mehtod</h4>
        <h4>Hello,(wish)</h4>
        <button className='btn btn-info m-2' onclick={handleWish.bind(null,"Good Morning...!")}>GM</button>
        <button className='btn btn-Success m-2' onclick={handleWish.bind(null,"Good Afternoon...!")}>GF</button>
        <button className='btn btn-primary m-2' onclick={handleWish.bind(null,"Good Evening...!")}>GE</button>
        <button className='btn btn-danger m-2' onclick={handleWish.bind(null,"Good Night...!")}>GN</button>
    </div>
)
}

export default Binding



