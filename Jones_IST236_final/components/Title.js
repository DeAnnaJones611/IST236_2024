import {Text, StyleSheet} from "react-native";

import Colors from "../constants/colors";

function Title(props){
    return <Text style = {styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "copyduck",
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
    },
});