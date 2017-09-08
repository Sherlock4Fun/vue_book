import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('检查name', () => {
    const defaultData = Home.data()
    expect(defaultData.msg).to.be.equal('Home Message')
  })
})
