import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Personal blog ",
    description:
      "A personal blog built using Next.js",
    getImageSrc: () => require("../images/photo1.jpg"),
    projectLink:"https://next-jsblog-five.vercel.app"
  },
  {
    title: "React Portolio",
    description:
      "A React portfolio using React last technology",
    getImageSrc: () => require("../images/photo2.jpg"),
    projectLink:"https://portfolio-five-lime-23.vercel.app/"
  },
  {
    title: "Consciousroad",
    description:
      "A next geneneration freelance marketplace dao",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Financial Dashboard",
    description:
      "A financial dashboard to track your last expenses",
    getImageSrc: () => require("../images/photo4.jpg"),
    projectLink:"https://nextjs-dashboard-sooty-nu-93.vercel.app/"
  },
];

const ProjectsSection = () => {
  // Logic
  const cardItems = projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            projectLink={project.projectLink} // Pass the projectLink prop
          />
        ))
  // Test 
  console.log(cardItems);
  // View (JSX structure)
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid" // 2D layout 
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {cardItems}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
