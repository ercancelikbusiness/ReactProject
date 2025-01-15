import React, { useEffect, useState } from "react"; 
import {
  Card,
  Button,
  Image,
} from 'semantic-ui-react';
import { useParams } from "react-router-dom";
import ProductService from '../services/productService';

export default function ProductDetail() {
  //let { id } = useParams(); //useParams hook'u, URL'deki ( dashborad buraya gönderiyor) parametreleri bir nesne olarak döndürür. Örneğin, URL şu şekildeyse: http://localhost:3000/products/5 useParams şu nesneyi döndürür: { id: "5" } tabi let içinde categoryId ' de olabilirdi ( let {id , categoryId} = useParams()) onuda alır ayrıca urlde 2  ayrı id varsa onlarıda alır
  let { name } = useParams(); // name ve id gibi bilgiler productService'deki api  bağlantısından geliyor

    const [product, setProduct] = useState({})
  
    useEffect(() => {
      let productService = new ProductService()
      productService.getByProductName(name).then(result => setProduct(result.data.data))
    }, [])


  return (
    <div>
      {/*  { name }  bu metin gibi sayfanın en üstünde name değişkeni yazar */}
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header> {/* ürüne tıklandığında başlıkta productname yazması için apiden getbyproductnameyi aldık*/}
            <Card.Meta>{product.category.categoryName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
