import { Text, StyleSheet, View } from "react-native"

const TodoCard = ({todo}) => {
    return (
        <View style = {cardStyles.card}>
            <Text>{todo}</Text>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    card: {
        height: 45,
        backgroundColor:'orange',
        marginTop:20
        
    }
})

export default TodoCard;