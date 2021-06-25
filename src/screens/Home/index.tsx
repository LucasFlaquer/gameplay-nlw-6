import { Appointment, AppointmentProps } from '../../components/Appointment';
import {FlatList, Text, View} from 'react-native'
import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Loading } from '../../components/Loading';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleApointmentDetails(guildSelected: AppointmentProps) {

    navigation.navigate('AppointmentDetails', { guildSelected })
  }
  function handleApointmentCreate() {
    navigation.navigate("AppointmentCreate")
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []
    if(category) {
      setAppointments(storage.filter(item=>item.category === category))
    } else {
      setAppointments(storage)
    }
    setLoading(false)
  }
   
  useFocusEffect(useCallback(()=> {
    loadAppointments()
  }, [category]))

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleApointmentCreate} />
      </View>
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {
        loading ? <Loading /> :
        <>
          <ListHeader title="Partidas Agendadas" subtitle={`Total ${appointments.length}`}/>
          <FlatList  
            data={appointments}
            keyExtractor={item => item.id}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ListDivider}
            contentContainerStyle={{paddingBottom: 69}}
            renderItem={({item}) => (
              <Appointment 
                data={item} 
                onPress={()=> handleApointmentDetails(item)}
              />
            )}
          />
        </>
      }
    </Background>
  )
}