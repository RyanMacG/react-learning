import React from 'react'
import {storiesOf} from '@storybook/react'

import TextBlock from './'

storiesOf('Text Block').add('default', () =>
  <TextBlock text='sample text is good' />
)