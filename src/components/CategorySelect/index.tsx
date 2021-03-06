import React from 'react'
import { ScrollView } from 'react-native'

import { Category } from '../Category'
import { categories } from '../../utils/categories'
import { styles } from './styles'

type Props = {
  categorySelected: string
  hasCheckBox?: boolean
  setCategory: (categoryId: string) => void
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  )
}
