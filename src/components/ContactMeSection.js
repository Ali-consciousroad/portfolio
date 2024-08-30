import React, {useEffect} from "react";
import { useFormik } from "formik";
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
// Import the custom hook to use the submit function
import useSubmit from "../hooks/useSubmit";
// Import the custom hook to use the context
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  // Desctructure the custom hook to get the isLoading, response and submit function
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {firstName: '', email: '', type: '', comment: ''},
    onSubmit: async (values) => {
      try {
        await submit('/api/submit', values); // Use submit from useSubmit
        // Use the response message as the content of the alert
        onOpen(response.type === 'success' ? 'All good' : 'Oops', response.message);
      } catch (error) {
        onOpen('Oops', 'An error occurred while submitting the form');
      }
    }, 
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

  // Destructure the formik object to get the errors object and avoid code repetition (formik.errors.firstName written errors.firstName instead)
  const { errors, touched } = formik;

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
          {/* Step 4.d Add the onSubmit handler */}
          {/* handleSubmit from Formik automatically prevents the default HTML submission behavior 
          to avoid slowing down the app by reloading the page */}
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4}>
              {/* Step 4.c - Group each field in a FormControl chakra UI component */}
              <FormControl isInvalid={touched.firstName && errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  // Add the necessary props to the input element
                  {...formik.getFieldProps('firstName')}
                />
                {/* Step 4.c - FormErrorMessage Chakra ui component should displayed the right error message
                when the isInvalid prop from the parent FormControl becomes true */}
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              {/* Step 4.c - Repeat the same for the other fields */}
              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>Required</FormErrorMessage>
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
              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  // Add the necessary props to the textarea element
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>Required</FormErrorMessage>
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
