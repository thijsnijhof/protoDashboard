import Dashboard from '../src/components/Dashboard.vue';
import Vuex from 'vuex';
import { shallow, createLocalVue } from 'vue-test-utils'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Dashboard', () => {
  describe('with a store', () => {
    let store
    let getters
    beforeEach(() => {
      getters = {
        getter_1: () => 'value_1',
        getter_2: () => (arg) => arg
      }
      store = new Vuex.Store({ getters })
    })
    it('renders a values from getters', () => {
      const wrapper = shallow(Dashboard, {
        store,
        localVue
      })
      expect(wrapper.find('.map-getters')
        .text().trim()).toEqual('value_1')
      expect(wrapper.find('.computed-getters')
        .text().trim()).toEqual('value_2')
    })
  })
})
