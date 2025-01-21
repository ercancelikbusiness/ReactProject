import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Button, Grid } from 'semantic-ui-react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd.jsx'







export default function Dashboard() {

  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/product/add");
  };

  return (
    <div>
      <ToastContainer position="bottom-right"/> 
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
          <Button
              color="blue"
              onClick={handleAddProduct}
              style={{ marginBottom: '20px' }}
            >
              Ürün Ekle
            </Button>
            <Routes> {/*//eskiden bu route imiş güncelleme ile routes olmuş*/}
             {/*// Route path="/" // sadece / varsa tarayıcı url alanında devamında  ne olursa olsun;  mesela productlisti açsın demek
             // örn: http://localhost:3000/products/asdwadsadawdasd
             //aşağıda exact kullanmaya aslında gerek yok yeni güncelleme ile bu gereklilik kalktı ayrıca aslında Component yerine element yazılmalı*/}
               
             <Route exact path="/" Component={ProductList}/>
             <Route exact path="/products" Component={ProductList}/>
             {/*<Route path="/products/:id" Component={ProductDetail}/>*/}
             {/*//burdaki :id ise products/ dan sonra 12 232 213123 gibi numara verirsen url ye onu acıcak demek . ayrıca :id dinamik bir ifadedirYani, URL'de /products/5 gibi bir adres olursa, id parametresi 5 olacak şekilde çalışır. ve bu  url yoluna gelen isteklerin productDetail bileşenine yönlendirilir*/}
             <Route path="/products/:name" Component={ProductDetail}/>
             <Route  path="/cart" Component={CartDetail}/>
             <Route  path="/product/add" Component={ProductAdd}/>
             

            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div> 
  )
}

