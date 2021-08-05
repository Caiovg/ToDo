import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 65,
        backgroundColor: '#20295F',
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: '#EE6B26',
        alignItems: 'center'
    },
    button: {
        position: 'relative',
        top: -40
    },
    image: {
        width: 70,
        height: 70
    },
    text:{
        position: 'relative',
        top: -35,
        color: '#FFF'
    }
});

export default styles;