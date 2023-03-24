import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          
          <a
            href="https://www.linkedin.com/in/amansingh3008/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ display: "inline" }} />
            @amansingh3008
          </a>
        </GridItem>
        <GridItem justifySelf="end">
          <a
            href="https://github.com/aman-s-20/chat-app"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ display: "inline" }} /> Source code
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}
