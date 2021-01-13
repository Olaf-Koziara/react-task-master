import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { StyledButton, StyledField } from "../../styled_components";
import * as Yup from "yup";
import { connect } from "react-redux";
import axios from "axios";
import { setCartItemsAction } from "../../actions";
const OrderForm = ({ cartItems, setCartItems }) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const {
    handleSubmit,
    errors,
    values,
    handleChange,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      city: "",
      postcode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Podaj imię"),
      surname: Yup.string().required("Podaj nazwisko"),
      city: Yup.string().required("Podaj miasto"),
      postcode: Yup.string()
        .required("Podaj kod pocztowy")
        .matches(/[0-9]{2}-[0-9]{3}/, "podaj poprawny kod xx-xxx"),
    }),
    onSubmit(values) {
      const order = cartItems.map((item) => ({
        id: item.id,
        quantity: item.productQuantity,
      }));
      const jsonOrder = {
        order: order,
        first_name: values.firstName,
        last_name: values.surname,
        city: values.city,
        zip_code: values.postcode,
      };

      axios.post("http://localhost:3001/api/order", jsonOrder);
      resetForm();
      setIsOrdered(true);
      setCartItems([]);
    },
  });
  return (
    <>
      {!isOrdered ? (
        <>
          <h3>Podaj dane</h3>
          <form onSubmit={handleSubmit}>
            <StyledField
              placeholder={
                errors.firstName && touched.firstName
                  ? errors.firstName
                  : "Imie"
              }
              warning={errors.firstName && touched.firstName}
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <StyledField
              placeholder={
                errors.surname && touched.surname ? errors.surname : "Nazwisko"
              }
              warning={errors.surname && touched.surname}
              id="surname"
              name="surname"
              value={values.surname}
              onChange={handleChange}
            />
            <StyledField
              placeholder={errors.city && touched.city ? errors.city : "Miasto"}
              warning={errors.city && touched.city}
              id="city"
              name="city"
              value={errors.city && touched.city ? "" : values.city}
              onChange={handleChange}
            />
            <StyledField
              placeholder="Kod pocztowy XX-XXX"
              id="postcode"
              name="postcode"
              value={values.postcode}
              onChange={handleChange}
            />
            {errors.postcode && touched.postcode ? (
              <div className="my-5 text-red"> {errors.postcode}</div>
            ) : null}
            <StyledButton type="submit">ZAMAWIAM I PŁACĘ</StyledButton>{" "}
          </form>
        </>
      ) : (
        <h2>Dziękujemy za złożenie zamówienia</h2>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  setCartItems: (items) => dispatch(setCartItemsAction(items)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
