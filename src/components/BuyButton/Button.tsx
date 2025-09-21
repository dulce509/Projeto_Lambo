import{View, TouchableOpacity, Text} from 'react-native';
import { styles } from './styleButton';


export default function BuyButton(){
    return(
        <View style= {styles.container}>
            <TouchableOpacity style={styles.button}>
                
                <Text> 🛒Buy This!</Text>
            </TouchableOpacity>
        </View>
    )
}