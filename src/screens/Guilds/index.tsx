import {FlatList, Text, View} from 'react-native'
import { Guild, GuildProps } from '../../components/Guild';

import { ListDivider } from '../../components/ListDivider';
import React from 'react';
import {styles} from './styles'

type Props = {
  handleGuildsSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildsSelected}:Props) {
  const guilds = [
    {id: '1', name: 'lendârios', icon: 'image.png', owner:true},
    {id: '2', name: 'Galera do Game', icon: 'image.png', owner:true},
    {id: '3', name: 'Só os Top', icon: 'image.png', owner:true},

  ]

  return( 
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id} 
        renderItem={({item})=> (
          <Guild data={item} onPress={()=>handleGuildsSelected(item)} />
        )}
        ItemSeparatorComponent={()=> <ListDivider/>}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
   )
}