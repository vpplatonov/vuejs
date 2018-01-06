import Vue from 'vue'
import NestedSetsPage from '@/components/NestedSetsPage'

describe('NestedSetsPage.vue', () => {
  let Constructor, vm
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

  beforeEach(() => {
    Constructor = Vue.extend(NestedSetsPage)
    vm = new Constructor().$mount()
  })
  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot()
  })
  it('Calls method convertItemsStructure', () => {
    expect(vm.convertItemsStructure([items])[0]).toBeInstanceOf(Object)
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('ul > li').textContent.trim())
      .toMatch(/^Сlothes?./)
  })
})
