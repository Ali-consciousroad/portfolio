import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack
        border={5}
        backgroundColor="white"
        textColor="black"
        borderRadius={10}
        boxShadow="lg"
        align="start"
      >
        <Image src={imageSrc} borderTopRadius={10} />
        <Heading px={5}>{title}</Heading>
        <Text px={5}>{description}</Text>
        <HStack px={5} pb={3}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack> 
  );
};

export default Card;
