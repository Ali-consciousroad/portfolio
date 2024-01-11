import React, {useEffect} from "react";
import { Field, Formik, useFormik, Form } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const RequiredErrorMessage = () => {
  return (
    <p className="FieldError">Required</p>
  );
};

const LandingSection = () => {
  // Desctructure the custom hook to get the isLoading, response and submit function
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  // The validationSchema is an object / a Yup schema that defines the validation rules for each field
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required(<RequiredErrorMessage />),
    email: Yup.string()
      .email('Invalid email address')
      .required(<RequiredErrorMessage />),
    type: Yup.string()
      .required(<RequiredErrorMessage />),
    comment: Yup.string()
      .min(5, 'Too Short!')
      .max(500, 'Too Long!')
      .required(<RequiredErrorMessage />),
  });

  // ValidationSchema to be completed (see https://formik.org/docs/guides/validation#validationschema-options-function)
  // const Signup = () => (
  //   <div>
  //     <h1>Signup</h1>
  //     <Formik
  //       initialValues={{ 
  //         firstName: '', 
  //         email: '', 
  //         type: '', 
  //         comment: '' }}
  //       validationSchema={validationSchema}
  //       onSubmit={values => {
  //         console.log(values);
  //       }}
  //     >
  //     {({ errors, touched }) => (
  //       <Form>
  //         <Field name="firstName" />
  //         {errors.firstName && touched.firstName ? (
  //           <div>{errors.firstName}</div>
  //         ) : null}
  //         <Field name="email" type="email" />
  //         {errors.email && touched.email ? (
  //           <div>{errors.email}</div>
  //         ) : null}
  //         <Field name="type" as="select">
  //           <option value="hireMe">Freelance project proposal</option>
  //           <option value="openSource">
  //             Open source consultancy session
  //           </option>
  //           <option value="other">Other</option>
  //         </Field>
  //         <Field name="comment" as="textarea" />
  //         <button type="submit">Submit</button>
  //       </Form>
  //     )}
  //     </Formik>
  //   </div>
  // );

  // Declare the formik function to handle the form submission
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {firstName: '', email: '', type: '', comment: ''},
    onSubmit: (values) => {}, 
    // Add the validation rules
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      type: Yup.string()
        .required('Required'),
      comment: Yup.string()
        .min(5, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    }),
  });

  // UI logic
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* Set formik's method handler when the form is submitted so the input's state is controlled by React via Formik (in a "controlled way"), not the DOM */}
          <form onSubmit={formik.handleSubmit}> {/* Add the onSubmit handler */}
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  // Add the necessary props to the input element
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  // Add the necessary props to the input element

                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}

                  // Add the necessary props automatically to the input element 
                  // by using formik instead of writing them manually 
                  // like the commented code above 
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                {/* Add the necessary props to the multiline text input textarea element */}
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
