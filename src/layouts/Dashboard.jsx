import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { GridRow, GridColumn, Grid, } from 'semantic-ui-react'
import { Route } from 'react-router-dom'


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
           <Route>
             
           </Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}
