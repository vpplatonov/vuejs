import Vue from 'vue'
import NestedSetsPage from '@/components/NestedSetsPage'

describe('NestedSetsPage.vue', () => {
  let Constructor, vm

  beforeEach(() => {
    Constructor = Vue.extend(NestedSetsPage)
    vm = new Constructor().$mount()
  })
  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot()
  })
  it('Calls method convertItemsStructure', () => {
    expect(vm.convertItemsStructure([])[0]).toBeInstanceOf(Object)
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('ul > li').textContent.trim())
      .toMatch(/^Сlothes?./)
  })
})
