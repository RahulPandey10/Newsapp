import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './Component/News'
import Footer from './Component/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default class App extends Component {
  c = 'John'
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={15} country="in" category="general" />} />
            <Route exact path='/business' element={<News key="business" pageSize={15} country="in" category="business" />}></Route>
            <Route exact path='/sports' element={<News key="sports" pageSize={15} country="in" category="sports" />}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={15} country="in" category="entertainment" />}></Route>
            <Route exact path='/science' element={<News key="science" pageSize={15} country="in" category="science" />}></Route>
            <Route exact path='/sports' element={<News key="sports" pageSize={15} country="in" category="sports" />}></Route>
            <Route exact path='/technology' element={<News key="technology" pageSize={15} country="in" category="technology" />}></Route>
            <Route exact path='/health' element={<News key="health" pageSize={15} country="in" category="health" />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
