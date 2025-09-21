import { fetchGetCarData } from "../../api/get.Cars";
import { CarModel } from "./props";

export const LoadCarData = async (
    id:number, 
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) =>{ 
    try{
        
         await fetchGetCarData(id, setCarData);    
      
    }catch(error){
        console.log('erro ao buscar na Api', error);
        setCarData(null);
    }

};

export const handlePreviousItem = async(carData: CarModel | null,
     setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) =>{ 
        if(carData && carData?.id > 1){
             await fetchGetCarData(carData.id -1, setCarData);
        }
};

export const handleNextItem = async(
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
)=> {
        if(carData && carData?.id < 10){
            await fetchGetCarData(carData.id +1, setCarData);
        }
     
};