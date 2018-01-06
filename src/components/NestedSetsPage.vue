<template>
    <v-nestedsetsitem :items="items"></v-nestedsetsitem>
</template>

<script>
  import NestedSetsItems from './NestedSetsItems'
  const items = [
    {
      title: 'Сlothes',
      left: 1,
      right: 22
    },
    {
      title: 'For men',
      left: 2,
      right: 9
    },
    {
      title: 'Женская',
      left: 10,
      right: 21
    },
    {
      title: 'Suits',
      left: 3,
      right: 8
    },
    {
      title: 'Dresses',
      left: 11,
      right: 16
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
    },
    {
      title: 'Pants',
      left: 4,
      right: 5
    },
    {
      title: 'Jackets',
      left: 6,
      right: 7
    },
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

  export default {
    components: {
      'v-nestedsetsitem': NestedSetsItems
    },
    name: 'NestedSetsItems',
    methods: {
      convertItemsStructure (items) {
        items.sort((a, b) => a.left - b.left)

        function findParent (el, idx, items) {
          while (--idx >= 0) {
            if (el.left > items[idx].left && el.right < items[idx].right) {
              return idx
            }
          }
          return -1
        }

        function addToParent (a, idx, el) {
          if (a[idx]) {
            if (!('subitems' in a[idx])) {
              a[idx].subitems = {}
            }
            a[idx].subitems[el.left] = el
          }
          else {
            for (const i in a) {
              if ('subitems' in a[i]) {
                // a[i].subitems=
                addToParent(a[i].subitems, idx, el)
              }
            }
          }

          return a
        }

        const result = items.reduce((a, v, i, items) => {
          const parent = findParent(v, i, items)
          if (parent === -1) {
            a[v.left] = v
          }
          else {
            a = addToParent(a, items[parent].left, v)
          }
          return a
        }, {})

        const nesteditems = []
        for (const k in result) nesteditems.push(result[k])
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