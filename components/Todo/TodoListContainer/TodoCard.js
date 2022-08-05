import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"


const TodoCard = ({todo}) => {
    return (
        <View style = {cardStyles.card}>
            <View style = {cardStyles.cardtext__container}>
                <Text style = {cardStyles.todotext}>{todo}</Text>
            </View>
            <View style = {cardStyles.cardbuttons__container}>
               <TouchableOpacity style = {cardStyles.checkbutton}>
                    <Text>Check</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {cardStyles.deletebutton}>
                    <Text>Delete</Text>
               </TouchableOpacity>
            </View> 
        </View>
    )
}

const cardStyles = StyleSheet.create({
    card: {
        height: 65,
        backgroundColor:'orange',
        marginTop:20,
        borderRadius: 12,
        flexDirection:'row',
        
    },
    cardbuttons__container:{
        flex:0.7 ,
        borderRadius: 12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        marginRight: 10
    
        
    },
    cardtext__container:{
        flex:1.5,
        justifyContent: 'center'

    },
    todotext: {
        marginLeft:25,
        fontSize:18
    },

    checkbutton: {
        width:'45%',
        height: 40,
        backgroundColor:'gray',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
    },
    deletebutton: {
        width:'40%',
        height: 40,
        backgroundColor: 'gray',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
        
    }
})

export default TodoCard;