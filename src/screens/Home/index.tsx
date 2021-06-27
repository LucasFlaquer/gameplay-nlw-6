import React, { useCallback, useEffect, useState } from 'react'
import { BackHandler, Dimensions, FlatList, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Appointment, AppointmentProps } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Loading } from '../../components/Loading'
import { Profile } from '../../components/Profile'
import { ModalView } from '../../components/ModalView'

import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { Exit } from '../Exit'
import { styles } from './styles'

export function Home() {
  const windowHeight = Dimensions.get('window').height
  const navigation = useNavigation()
  const [openExitModal, setOpenExitModal] = useState(false)
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleApointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }
  function handleApointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []
    if (category) {
      setAppointments(storage.filter((item) => item.category === category))
    } else {
      setAppointments(storage)
    }
    setLoading(false)
  }
  function handleCloseExitModal() {
    setOpenExitModal(false)
  }

  const backAction = () => {
    setOpenExitModal(true)

    return true
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction)

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction)
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadAppointments()
    }, [category]),
  )

  return (
    <>
      <Background>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleApointmentCreate} />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        {loading ? (
          <Loading />
        ) : (
          <>
            <ListHeader
              title='Partidas Agendadas'
              subtitle={`Total ${appointments.length}`}
            />
            <FlatList
              data={appointments}
              keyExtractor={(item) => item.id}
              style={styles.matches}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={ListDivider}
              contentContainerStyle={{ paddingBottom: 69 }}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleApointmentDetails(item)}
                />
              )}
            />
          </>
        )}
      </Background>
      <ModalView
        visible={openExitModal}
        closeModal={handleCloseExitModal}
        height={windowHeight - 150}
      >
        <Exit closeModal={handleCloseExitModal} />
      </ModalView>
    </>
  )
}
