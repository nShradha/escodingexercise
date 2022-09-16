import React, { useEffect, useState } from "react";
import { apiGetAllDogBreeds, apiGetRandomImage } from "../../api/api";
import './styles.css'

export const DogList = () => {

const [dogs, setDogs] = useState([]);

  useEffect(() => {
    apiGetAllDogBreeds().then((rsp) => {
      let pushPuppies = [];
      let randomTen = Object.keys(rsp.data.message);
      randomTen.map((entry, index) => {
        
        return apiGetRandomImage(entry).then((imageRsp) => {
            pushPuppies.push({
              firstName: "",
              breed: entry,
              image: imageRsp.data.message
            });
            if (index === randomTen.length - 1) {
              setDogs(pushPuppies.sort(() => Math.random() - Math.random()).slice(0, 10));
            }
          });
          
      })
    });
  }, []);

    return (
        <div className="grid">
            {
                dogs.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    dogs.map((dog) => {
                      return  <div key={`${dog.image}-key`} className="grid-entry"> 
                        <img src={dog.image} alt={dog.image} width={200} height={200} />
                        {dog.breed}
                      </div>
                    })
                )
            }
        </div>
    );
};