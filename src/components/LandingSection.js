import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from '../images/profile_pic.jpg';

const greeting = "Hello, I am Ali!";
const bio1 = "Full Stack JS Software Engineer";
const bio2 = "specialised in React.js, Next.js, Node.js, SQL and Solidity";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    <Avatar size="2xl" name="Ali" src={profilePic} />
    <Heading as="h1" size="m" color="white" textAlign="center">Hello World, Ali there!</Heading>
    <Heading as="h1" size="xl" color="white" textAlign="center">Web3 Full Stack JS Engineer</Heading>
    <Heading as="h1" size="xl" color="white" textAlign="center">specialised React.js, Next.js, Node.js, SQL and Solidity</Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
