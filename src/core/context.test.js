import Context from './context'
import { expect } from 'chai'

describe('Test "Context" class', () => {
  it('assign', function() {
    let context = new Context()
    context.name = 'Jane'
    context.assign({ role: 'User' })
    expect(context.role).to.be.equal('User')
    expect(context.name).to.be.equal('Jane')
  })
})
