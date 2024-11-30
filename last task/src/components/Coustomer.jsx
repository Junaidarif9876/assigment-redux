import React from 'react'
import CustomerCard from './common/CoustomerCard.jsx'


const Customer = () => {
   const content =  [
        {
          name: "Aasha",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 16 , 2022",
        },
        {
          name: "Marry com",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2022",
        },
        {
          name: "Toom ",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 1 November , 2022",
        },
        {
          name: "David Convay",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 4 November , 2022",
        },
        {
          name: "Warner",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2022",
        },
        {
          name: "Jack linn",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod numquam ut soluta veritatis reiciendis aperiam, quis omnis dolorem eaque?",

          date: "August 20 , 2022",
        },
      ]
   
  return (
    <div className='max-w-[1200px] mx-auto'>
      <h1 className='font-bold text-[48px] text-center'>Our Happy Customer</h1>
      <div className=" mt-6 max-w-[1200px] flex flex-wrap gap-4">
        {
             content.map((item,index)=>{
                return (<CustomerCard key={index} data={item}/>)
             })
        }
      
      </div>
       
      
    </div>
  )
}

export default Customer