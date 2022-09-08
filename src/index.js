import React from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import "./styles.css";
import * as Yup from 'yup';


 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
//  ESTO SE REEMPLAZA POR YUP
// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'El nombre no puede estar vacio';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }
  
//     if (!values.lastName) {
//       errors.lastName = 'El apellido no puede estar vacio';
//     } else if (values.lastName.length > 20) {
//       errors.lastName = 'Must be 20 characters or less';
//     }
  
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };

const validation = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const SignupForm = () => {
       // Note that we have to initialize ALL of fields with values. These
   // could come from props, but since we don’t want to prefill this form,
   // we just use an empty string. If we don’t do this, React will yell
   // at us.
  // const formik = useFormik({
  //   initialValues: { 
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //   },
  //   validationSchema: validation,
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   }
  // });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: ''}}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          
          <label htmlFor="firstName">Nombre</label>
          <input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
          {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}


          <label htmlFor="lastName">Apellido</label>
          <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
          {formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}


          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...formik.getFieldProps('email')} />
          {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
