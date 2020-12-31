import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

//icones
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';

export default function Header({ showNotification, ShowBack }){
    return(
        <View style={styles.header}>
            <View style={styles.header2}>
                <TouchableOpacity style={styles.leftIcon}>  
                    <Image source={qrcode} style={styles.leftIconImage}/>
                </TouchableOpacity>

                <Image source={logo} style={styles.logo}/>
                
                { showNotification && 
                <TouchableOpacity style={styles.notification}>
                    <Image source={bell} style={styles.notificationImage}/>
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>3</Text>
                    </View>
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}