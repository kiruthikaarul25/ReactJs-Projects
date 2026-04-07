import React, { useState } from 'react'
import "./App.css";

const App = () => {
 
    const Data=[
  {id:1,name:"Bertie Yates",age:"29 Years",img:"https://i.pravatar.cc/50?img=1"},
  {id:2,name:"Hester Hogan",age:"32 Years",img:"https://i.pravatar.cc/50?img=2"},
  {id:3,name:"Larry Little",age:"36 Years",img:"https://i.pravatar.cc/50?img=3"},
  {id:4,name:"Sean Waish",age:"34 Years",img:"https://i.pravatar.cc/50?img=4"},
  {id:5,name:"Lola Gardner",age:"29 Years",img:"https://i.pravatar.cc/50?img=5"},
  {id:6,name:"Sudesh Gowda",age:"26 Years",img:"https://i.pravatar.cc/50?img=6"},
]

const[data,setData]=useState(Data)

function clear(){
    setData([])
}
    
  return (
    <div className='start'>
        <h1>{data.length} birthday today</h1>
        {
            data.map((item,index)=>{
                return(
                    <div className='end'>
                    <img src={item.img} />

                    <div>
                        <p>{item.name}</p>
                        <p>{item.age}</p>
                    </div>
                    </div>
                )
            })
        }
      <button onClick={clear}>Clear All</button>
    </div>
  )
}

export default App

