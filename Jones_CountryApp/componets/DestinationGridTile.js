import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, StyleSheet, Platform,Text,ImageBackground } from "react-native";
import Colors from "../constants/colors";

function StateGridTile(props) {
    return(
        <View style = {styles.gridItem}>
             
            <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                pressed ? styles.buttonPressed :null,
                            ]}
                            android_ripple = {{color: props.color}}
                            onPress={props.onPress}
                            backgroundcolor = {props.color}
            >
                <LinearGradient
                    colors= {[Colors.accent300, Colors.primary500]}
                    style = {styles.innerConatiner}
                >
                    <Text style={styles.name}>{props.name}</Text>                    
                </LinearGradient>



            </Pressable>
       
        </View>
    );
}

export default StateGridTile;

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset :{width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.os ==="android" ? "hidden" : "visible",//Hides andriod ripple overflow on android only
    },
    button:{
        flex: 1, 
    },
    innerConatiner:{
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    name:{
        textAlign: "center",
        fontSize: 30,
        fontFamily: "mountain"
    }
})