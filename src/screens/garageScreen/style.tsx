
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#3f3f44ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraBox:{
    position: "relative",
    width: 350, height:'90%', 
    borderWidth: 2, overflow: 'hidden',
    borderColor: '#fff', borderRadius: 10,
  },
  triangleCorner:{position:'absolute', width: 0, height:0,
     borderTopWidth:20, borderStyle: 'solid', borderTopColor:'#fff',
     borderRightWidth: 20, borderRightColor:'tranparent'
  },
  topRight:{ top: 0, right:0, transform:[{ rotate:'90deg'}]
  },
  Right:{ top: 0, right:0, transform:[{ rotate:'90deg'}]
  },
  bottomLeft:{ bottom: 0, left:0, transform:[{ rotate:'-90deg'}]
  },
  bottomRight:{ bottom: 0, right:0, transform:[{ rotate:'180deg'}]
},
});