import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product.jsx'

function App() {
 return (
    <>
    <Product name="asmita" city="mumbai" item1="milk" item2="oats" item3="bread"/>
    <Product name="samu" city="pune" item1="peanut butter" item2="oranges" item3="french bread"/>
    <Product name="titu" city="mumbai" item1="chocolate peanut butter" item2="bananas"/>
    </>
 )
}

export default App
