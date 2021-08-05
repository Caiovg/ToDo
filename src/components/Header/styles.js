import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center',

    },
    header2:{
        width: '100%',
        backgroundColor: '#20295F',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
        
    }, 
    logo: {
        width: 100,
        height: 30
    },
    notification:{
        position: 'absolute',
        right: 20,
    },
    notificationImage:{
        width: 30,
        height: 30
    },
    notificationText:{
        fontWeight: 'bold',
        color: '#EE6B26'
    },
    circle:{
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 18, 
        bottom: 13,
    },
    leftIcon:{
        position: 'absolute',
        left: 20,
        
    },
    leftIconImage:{
        width: 30,
        height: 30
    }
});

export default styles;