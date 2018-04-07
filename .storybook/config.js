import { configure } from '@storybook/react';
import '../src/styles/typography.css'

function loadStories () {
  const requireStories = require.context('../src', true, /stories\.js$/)
  const children = requireStories.keys()

  children.forEach(requireStories)
}

configure(loadStories, module)
