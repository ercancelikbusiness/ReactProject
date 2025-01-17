import React, { useState, useEffect } from 'react'
import {
  Table,
  Menu,
  Icon,
  Button,
} from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'


export default function ProductList() {

  const dispatch = useDispatch(

  )
  const [products, setProducts] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data.data))
  }, [])

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.productName} sepete eklendi!`)
    }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {products.map(product => (
            <Table.Row key={product.id}>
              {/*<Table.Cell><Link to={`/products/${product.id}`}>{product.productName}</Link></Table.Cell>*/} {/*//burdaki to ' dan sonraki yapıda localhost3000 yok ama sen web de bir ürüne tıkladığında örneğin sayfa url sinin http://localhost:3000/products/2 olma nedeni base url(localhost:3000 i kendi otomatik bilmesinden kaynaklı yani bunun devamını belirtiyorsun)*/}
              <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell> {/*// ayrıca yukardaki koddaki productName tüm productların ismini temsil ediyor +"adw" yapsan tüm ürün isimlerinden sonra adw yazar kısaca bu yukardaki kod ürün isimlerini productname ile aldğı ve onları tıklanabilir link olmasını sağlıyor ve tıklandığında url de yazacak şeyin ne olacağını ifade ediyor */}
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category.categoryName}</Table.Cell>
              <Table.Cell><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
