import React from 'react'
import TestRenderer from 'react-test-renderer'

import { FunctionalComponent } from '../index'

describe('FunctionComponent.tsx', () => {
  it('should render `Functional Component`', done => {
    const testComponent = TestRenderer.create(<FunctionalComponent />)
    const instance = testComponent.root.find(node => node.type === 'h1')
    expect(instance.children[0]).toBe('Functional Component')
    done()
  })
})
