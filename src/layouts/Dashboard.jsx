import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes> //eskiden bu route imiş güncelleme ile routes olmuş
             // Route path="/" // sadece / varsa tarayıcı url alanında devamında  ne olursa olsun  mesela productlisti açsın demek
             // örn: http://localhost:3000/products/asdwadsadawdasd
             //aşağıda exact kullanmaya aslında gerek yok yeni güncelleme ile bu gereklilik kalktı aslında Component yerine element yazılmalı

             <Route exact path="/" Component={ProductList}/>
             <Route exact path="/products" Component={ProductList}/>
             <Route path="/products/:id" Component={ProductDetail}/>
             //burdaki :id ise products/ dan sonra 12 232 213123 gibi numara verirsen url ye onu acıcak demek
             <Route exact path="/cart" Component={CartDetail}/>

            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div> 
  )
}

