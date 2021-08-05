import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity, 
  Image, 
  TextInput,  
  Alert
} from 'react-native';
 
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
 
import styles from './styles';
 
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';
 
 
export default function DateTimeInputIOS({ type, save}){
  const [dateTime, setDateTime] = useState(new Date);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const  onChange  =  ( event ,  selectedDate )  =>  { 
    const  currentDate  =  selectedDate  ||  data ; 
    setShow ( Platform . OS  ===  'ios' ) ; 
    setDate ( currentDate ) ; 
  };
 
  const newTime = (event, value) => {
    const currentDate = value || dateTime;
    if (type == 'date') {
      setShow(false);
      setDateTime(format(new Date(currentDate),'dd/MM/yyyy'));
      save(format(new Date(date), 'yyyy-MM-dd'));
    } else {
      setShow(false);
      setDateTime(format(new Date(currentDate),'HH:mm'));
      save(format(new Date(hour), 'HH:mm:ss'));
    }
  };
 
  /*useEffect(() => {
    if(type === 'date' && date){
     
     setDateTime(format(new Date(date),'dd/MM/yyyy'));
     save(format(new Date(date), 'yyyy-MM-dd'));
      
   }   
    if(!type  && hour){
     
     setDateTime(format(new Date(hour),'HH:mm'));
     save(format(new Date(hour), 'HH:mm:ss'));
   
   } 
 })*/

  async function selectDataOrHour(){
    if(type == 'date'){
      setShow(true);
      setMode('date');
                
    }else{
      setShow(true);
      setMode('time');
    }
  }
 
  return(
    <TouchableOpacity onPress={selectDataOrHour}>
      <TextInput 
      style={styles.input} 
      placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...' }
      editable={false}
      value={dateTime}
      />
      {
        show && 
        <DateTimePicker
          value={new Date}
          mode={mode}
          is24Hour={true}
          display={"default"}
          onChange={newTime}
        />
      }
    
 
      <Image 
      style={styles.iconTextInput} 
      source={type == 'date' ? iconCalendar : iconClock} />
    </TouchableOpacity>
  )
 
}