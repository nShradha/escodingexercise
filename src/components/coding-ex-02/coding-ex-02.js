import React, { Fragment, useState } from "react"
import { DogList } from "../dogList/dogList"
import styled from "styled-components"
import '../../App.css'

const Button = styled.button`
  background-color: #0A1F5F;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: -10px 50px ;
  cursor: pointer;
`;
// Usage


export const CodingExcercise02 = () => {  
  const [dogImg, setDogImg] = useState(null);
  
  const getRandomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      setDogImg(data.message)
    })
  }

  return (
    <Fragment>
        <div className="random-dog"> 
        
          <img src={dogImg} alt={dogImg} width={400} height={400}/> 
          <Button onClick={getRandomDog}>
            Get Random Dog
          </Button>
            
        </div>
          <DogList  />
    </Fragment>
  );
};

