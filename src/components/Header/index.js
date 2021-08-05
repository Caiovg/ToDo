import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

//icones
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcode from '../../assets/qrcode.png';
import back from '../../assets/back.png'

export default function Header({ showNotification, ShowBack, pressNotification, late, onPress }){
    return(
        <View style={styles.header}>
            <View style={styles.header2}>

                {
                    // o showBack limita o que deve ou nao aparecer na tela vc pode ver o exemplo la no index da home
                    // dependendo da tela ele fica true ou false assim mostrando uma coisa ou outra na tela
                ShowBack ?//mesma coisa que um if
                    <TouchableOpacity style={styles.leftIcon} onPress={onPress}>  
                        <Image source={back} style={styles.leftIconImage}/>
                    </TouchableOpacity>
                :// e um else
                    <TouchableOpacity style={styles.leftIcon}>  
                        <Image source={qrcode} style={styles.leftIconImage}/>
                    </TouchableOpacity>
                }

                <Image source={logo} style={styles.logo}/>
                
                { showNotification && late > 0 &&
                <TouchableOpacity style={styles.notification} onPress={pressNotification}>
                    <Image source={bell} style={styles.notificationImage}/>
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                </TouchableOpacity>
                }
            </View>
        </View>
    )
}