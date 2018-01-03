<template>
  <ul v-if="items">
    <li v-for="item in items">
        {{item.title}}
        <NestedSetsItems v-if="item.subitems" :items="item.subitems"></NestedSetsItems>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NestedSetsItems',
    props: ['items']
    // ,data () {
    //   return {
    //     items: this.items
    //   }
    // }
  }
</script>