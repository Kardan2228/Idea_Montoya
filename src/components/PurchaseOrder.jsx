import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { CartContext } from "../context/CartContext";

export default function PurchaseOrder() {
  const { cart, totalCart, emptyCart } = useContext(CartContext);
  const [formSend, setFormSend] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idOrder, setIdOrder] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  const [eventButton, setEventButton] = useState(true);

  function handleClic() {
    const orderPurchase = {
      buyer: { name, email, phone },
      item: cart,
      total: totalCart,
    };
    addDoc(orderCollection, orderPurchase).then(({ id }) => {
      setIdOrder(id);
      swal(
        <div>
          <h1>{id}</h1>
          <p>
            Este es el folio de tu orden de compra, !ahora puedes realizar el
            pago!
          </p>
        </div>
        // title: id,
        // text: "Este es el folio de tu orden de compra, !ahora puedes realizar el pago!",
        // icon: "success",
        // button: "Pagar",
      );
    });
    emptyCart();
    changeButton();
  }

  function changeButton() {
    setEventButton(false);
  }

  if (!formSend) {
    return (
      <>
        <h1>Orden de compra</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>1. Validación de cliente</h5>
              <div className="shadow-lg w-50 p-3 mb-5 mt-4 rounded">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                  }}
                  validate={(values) => {
                    let errorsForm = {};

                    //Validación del nombre
                    if (!values.name) {
                      errorsForm.name = "Debes ingresar tu nombre";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                      errorsForm.name =
                        "El nombre únicamente puede contener letras y espacios.";
                    }

                    //Validación del email
                    if (!values.email) {
                      errorsForm.email =
                        "Debes ingresar tu dirección de correo electrónico";
                    } else if (
                      !/^[a-zA-Z0-9_.+-]+@[a-zA -Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        values.email
                      )
                    ) {
                      errorsForm.email =
                        "El correo electrónico debe mantener esta estructura: correo@dominio.com";
                    }

                    //Validación del número telefónico
                    if (!values.phone) {
                      errorsForm.phone = "Debes ingresar tu número telefónico";
                    } else if (
                      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(
                        values.phone
                      )
                    ) {
                      errorsForm.phone =
                        "El número telefónico puede contener únicamente números y símbolos ()+-.";
                    }

                    return errorsForm;
                  }}
                  // onSubmit lo utilizamos para enviar la información del formulario
                  onSubmit={(values, { resetForm }) => {
                    setFormSend(true);
                    setName(values.name);
                    setEmail(values.email);
                    setPhone(values.phone);
                  }}
                >
                  {({ values, handleSubmit, errors, touched }) => (
                    <Form className="mb-3 p-3 h-50" onSubmit={handleSubmit}>
                      <div>
                        <label
                          style={{ marginTop: "10px", fontWeight: "bold" }}
                          className="form-label"
                          htmlFor="nombre"
                        >
                          <stoeng>Nombre</stoeng>
                        </label>
                        <Field
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          id="name"
                        />
                        <ErrorMessage
                          name="name"
                          component={() => (
                            <div className="alert alert-danger">
                              {errors.name}
                            </div>
                          )}
                        />
                      </div>
                      <div>
                        <label
                          style={{ marginTop: "10px", fontWeight: "bold" }}
                          className="form-label"
                          htmlFor="correo"
                        >
                          Correo
                        </label>
                        <Field
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="correo@dominio.com"
                          id="email"
                        />
                        <ErrorMessage
                          name="email"
                          component={() => (
                            <div className="alert alert-danger">
                              {errors.email}
                            </div>
                          )}
                        />
                      </div>
                      <div>
                        <label
                          style={{ marginTop: "10px", fontWeight: "bold" }}
                          className="form-label"
                          htmlFor="phone"
                        >
                          Teléfono
                        </label>
                        <Field
                          className="form-control"
                          type="tel"
                          name="phone"
                          placeholder="(555)-555-5555"
                          id="phone"
                        />
                        <ErrorMessage
                          name="phone"
                          component={() => (
                            <div className="alert alert-danger">
                              {errors.phone}
                            </div>
                          )}
                        />
                      </div>
                      <button
                        style={{ marginTop: "15px" }}
                        className="btn btn-success"
                        type="submit"
                      >
                        Enviar
                      </button>
                      {formSend && <p>¡Tu orden ha sido enviada con éxito!</p>}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {eventButton ? (
          <div className="container">
            <h1>Orden de compra</h1>
            <div>
              <h5>2. Verificación de datos y pedido</h5>
              <hr></hr>
              <div className="container">
                <div className="fw-semibold">
                  <p className="text-dark fs-6">
                    Orden de compra: <span className="fw-bold">{idOrder} </span>
                  </p>
                  <p className="text-dark fs-6">
                    Nombre: <span className="fw-bold">{name}</span>
                  </p>
                  <p className="text-dark fs-6">
                    Correo electrónico: <span className="fw-bold">{email}</span>
                  </p>
                  <p className="text-dark fs-6">
                    Número telefónico: <span className="fw-bold">{phone}</span>
                  </p>
                </div>
                {cart.map((itemCart, index) => (
                  <div className="row p-3 border" key={index}>
                    <div className="col-sm">
                      <h4 style={{ textAlign: "center" }}>
                        {itemCart.article}
                      </h4>
                      <span>{itemCart.description}</span>
                    </div>
                    <div style={{ textAlign: "center" }} className="col-sm">
                      <h4>Cantidad</h4>
                      <span>
                        <strong>{itemCart.cantidad}</strong>
                      </span>
                    </div>
                    <div className="col-sm">
                      <span>
                        <strong>Precio unitario:</strong> ${itemCart.price}.00
                      </span>
                      <h4 className="lh-lg">
                        Subtotal: ${itemCart.cantidad * itemCart.price}.00
                      </h4>
                    </div>
                  </div>
                ))}
                <hr></hr>
                <div className="text-end">
                  <h1>Total: ${totalCart}.00</h1>
                  <Link to={`/cart`}>
                    <button
                      style={{ marginRight: 10, marginTop: 20 }}
                      className={"btn btn-warning"}
                    >
                      Cancelar
                    </button>
                  </Link>
                  <button
                    className={"btn btn-success"}
                    style={{ marginTop: 20 }}
                    onClick={handleClic}
                  >
                    Enviar orden y pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={"d-flex flex-row justify-content-center"}>
            <button className={"btn btn-info"}>Realizar pago</button>
          </div>
        )}
      </>
    );
  }
}
