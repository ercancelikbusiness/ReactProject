import React from 'react'  //rfc yazıp tab diyerek bu import ve fonksiyon şablonu gelmektedir.
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
   let {id} = useParams() // useParams hook'u, URL'deki parametreleri bir nesne olarak döndürür. Örneğin, URL şu şekildeyse: http://localhost:3000/products/5 useParams şu nesneyi döndürür: { id: "5" } tabi let içinde categoryId ' de olabilir onuda alır ayrıca urlde 2  ayrı id varsa onlarıda alır
 
  return (
    <div>
       Ürün : {id}
    </div>
  )
}
