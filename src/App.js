import React, { Component } from 'react'
import loremIpsum from 'lorem-ipsum'
import './App.css'
import './styles/typography.css'
import Footer from './components/Footer/index'
import Header from './components/Header/index'

function lorem() {
  const output = loremIpsum({
    count: 5,
    units: 'paragraphs',
    format: 'html'
  })

  return { __html: output }
}

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="content">
          <div dangerouslySetInnerHTML={lorem()} className="text-content" />
        </main>
        <Footer />
      </div>
    )
  }
}
