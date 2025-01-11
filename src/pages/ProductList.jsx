import React, { useState, useEffect } from 'react'
import {
  Table,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Menu,
  Menu.Item,
  Icon,
} from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data.data))
  }, [])

  return (
    <div>
      <Table celled>
        <TableHeader>
          <Table.Row>
            <TableHeaderCell>Ürün Adı</TableHeaderCell>
            <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
            <TableHeaderCell>Stok Adeti</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
          </Table.Row>
        </TableHeader>

        <TableBody>
          {products.map(product => (
            <Table.Row key={product.id}>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.unitsInStock}</TableCell>
              <TableCell>{product.quantityPerUnit}</TableCell>
              <TableCell>{product.category.categoryName}</TableCell>
            </Table.Row>
          ))}
        </TableBody>

        <TableFooter>
          <Table.Row>
            <TableHeaderCell colSpan='5'>
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
            </TableHeaderCell>
          </Table.Row>
        </TableFooter>
      </Table>
    </div>
  )
}
