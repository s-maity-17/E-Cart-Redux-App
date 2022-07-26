import React from 'react'
import Layouts from '../Layouts'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Account from '../../pages/Account'
import Product from '../../pages/Product'

const Routes = () => {
  return (
   <>
   <Router>
    <Layouts/>
    
        <Routes>

      <Route exact path='/account' component={<Account/>}/>
      <Route exact path='/product' component={<Product/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default Routes