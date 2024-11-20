import React, { useEffect, useState } from 'react'

export default function RecipessCard() {
    const [api,setapi]=useState([])
    const fetchApi=async()=>{

        const response = await fetch("https://raw.githubusercontent.com/Harshal260204/harshalApi/refs/heads/main/db.json")
      const apidata = response.json()
      setapi(apidata)
      console.log(apidata);
    
    
    
    
      }
    
      useEffect(()=>{
        fetchApi()
      },[])
    
    
  return (
    <div>{

        api.map(({img,id,price,dsc,name})=>{
            return(
                <div className="card m-2" style={{ width: "18rem" }} key={id}>
                <img
                  src={img}
                  className="card-img-top"
                  alt={name}
                />
                <div className="card-body">
                  <h5 className="RecipeName">{name}</h5>
                  <h6 className="RecipeType">{price}</h6>
                  <p className="card-text">{dsc}</p>
                  <a href="#" className="btn btn-primary" >
                    View Detailed Recipe
                  </a>
                </div>
                </div>
              )
        })
    }
    </div>
  )
}
