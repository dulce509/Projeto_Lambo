
import React, { useEffect, useState } from 'react';
import {View, Text, Button, Image} from 'react-native';
import { styles } from './style';
import Logo from '../../../assets/logomarca.png';
import Lambo from '../../../assets/lanborg.png';
import BuyButton from '../BuyButton/Button';
import { handleNextItem, handlePreviousItem, LoadCarData } from './actions';
import { CarModel } from './props';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';


export default function CardView() {
    const[carData, setCarData] = useState<CarModel | null> (null);

    useEffect(() =>{
        (async () => {
            await LoadCarData(3,setCarData);
            
        })();
    },[]);

   const renderLogoBox = () =>(
    <View style={styles.logoContainer}>
            <Image style={styles.imageLogo}  source={Logo}></Image>
    </View>       
   );
   
   const renderCarDetails =() => (
    <View style= {{alignItems: 'center'}}>
        <Text style={ styles.carBrand}>Lamborguini</Text>
        <Text style={ styles.carName}>{carData?.carName}</Text>
    </View>
    );
    const renderCarImage =()=>(
    <Image style={styles.image} source={Lambo}></Image>
    
    
    
   );
    const renderPriceControls =()=>(
        <View style = {styles.priceLabelContainer}>
            <Button title='<' color= {'#01A6B3'} onPress={()=>handlePreviousItem(carData,setCarData)}></Button>
                <Text style = {styles.priceLabel}>{ carData?.price}</Text>
            <Button title='>' color= {'#01A6B3'} onPress={()=> handleNextItem(carData, setCarData)}></Button>
        </View>
   );

    return ( <View style ={styles.imageContainer}>{renderLogoBox()}
    {renderCarDetails()}
    {renderCarImage()}
    <BuyButton></BuyButton>
    {renderPriceControls()}
    </View>
    )        
    
}
