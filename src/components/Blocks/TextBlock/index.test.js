import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'

import TextBlock from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TextBlock text='foo bar'/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the text prop', () => {
  const textBlock =shallow(
    <TextBlock text='sample text innit' />
  )

  expect(textBlock.contains('sample text innit')).toEqual(true)
})
