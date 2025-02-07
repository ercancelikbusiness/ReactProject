import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormField } from "semantic-ui-react";
import * as Yup from "yup";
import ErcanTextInput from "../utilities/customFormControls/ErcanTextInput";

export default function ProducttAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı Zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <ErcanTextInput name="productName" placeholder="Ürün Adı"/>
          <ErcanTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

