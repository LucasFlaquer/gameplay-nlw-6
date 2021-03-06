import React, { useEffect, useState } from 'react'
import {
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { GuildProps } from '../../components/Guild'
import { Guilds } from '../Guilds'
import { Header } from '../../components/Header'
import { ModalView } from '../../components/ModalView'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export function AppointmentCreate() {
  const navigation = useNavigation()
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }
  function handleCloseGuilds() {
    setOpenGuildsModal(false)
  }
  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected)
    setOpenGuildsModal(false)
  }
  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ??s ${hour}:${minute}h`,
      description,
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []
    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment]),
    )
    navigation.navigate('Home')
  }

  useEffect(() => {
    function handleGoBack() {
      navigation.goBack()
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', handleGoBack)

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleGoBack)
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title='Agendar Partida' />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 26, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ?? 'Selecione um servidor'}
                  </Text>
                </View>
                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e m??s
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descri????o</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <View>
              <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                onChangeText={setDescription}
              />

              <View style={styles.footer}>
                <Button title='Agendar' onPress={handleSave} />
              </View>
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildsSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
