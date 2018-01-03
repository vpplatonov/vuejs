<template>
    <v-nestedsetsitem :items="items"></v-nestedsetsitem>
</template>

<script>
  import NestedSetsItems from './NestedSetsItems'
  const items = [
    {
      title: 'Одежда',
      left: 1,
      right: 22
    },
    {
      title: 'Мужская',
      left: 2,
      right: 9
    },
    {
      title: 'Женская',
      left: 10,
      right: 21
    },
    {
      title: 'Костюмы',
      left: 3,
      right: 8
    },
    {
      title: 'Платья',
      left: 11,
      right: 16
    },
    {
      title: 'Юбки',
      left: 17,
      right: 18
    },
    {
      title: 'Блузы',
      left: 19,
      right: 20
    },
    {
      title: 'Брюки',
      left: 4,
      right: 5
    },
    {
      title: 'Жакеты',
      left: 6,
      right: 7
    },
    {
      title: 'Вечерние',
      left: 12,
      right: 13
    },
    {
      title: 'Летние',
      left: 14,
      right: 15
    }
  ]

  const nesteditems = [
    {
      title: 'Сlothes',
      left: 1,
      right: 22,
      subitems: [
        {
          title: 'For men',
          left: 2,
          right: 9,
          subitems: [
            {
              title: 'Suits',
              left: 3,
              right: 8,
              subitems: [
                {
                  title: 'Pants',
                  left: 4,
                  right: 5
                },
                {
                  title: 'Jackets',
                  left: 6,
                  right: 7
                }
              ]
            }
          ]
        },
        {
          title: 'For women',
          left: 10,
          right: 21,
          subitems: [
            {
              title: 'Dresses',
              left: 11,
              right: 16,
              subitems: [
                {
                  title: 'Evening',
                  left: 12,
                  right: 13
                },
                {
                  title: 'Summer',
                  left: 14,
                  right: 15
                }
              ]
            },
            {
              title: 'Skirts',
              left: 17,
              right: 18
            },
            {
              title: 'Blouses',
              left: 19,
              right: 20
            }
          ]
        }
      ]
    }
  ]

  export default {
    components: {
      'v-nestedsetsitem': NestedSetsItems
    },
    name: 'NestedSetsItems',
    methods: {
      convertItemsStructure (items) {
        return nesteditems
      }
    },
    data () {
      return {
        items: this.convertItemsStructure(items)
      }
    }
  }
</script>