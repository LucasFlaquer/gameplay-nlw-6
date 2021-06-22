import {FlatList, Text, View} from 'react-native'
import React, { useState } from 'react';

import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')
  const appointments = [
    {
      id: '1', 
      guild: {
        id: '1', 
        name: 'Lendários', 
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos jogar juntos'
    },
    {
      id: '2', 
      guild: {
        id: '1', 
        name: 'Lendários', 
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos jogar juntos'
    },
    {
      id: '3', 
      guild: {
        id: '1', 
        name: 'Lendários', 
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos jogar juntos'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6"/>
        <FlatList  
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ListDivider}
          renderItem={({item}) => (
            <Appointment data={item} />
          )}
        />
      </View>
    </Background>
  )
}