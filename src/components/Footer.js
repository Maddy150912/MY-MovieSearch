import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        p={4}
        mt="auto"
        borderTop="1px solid"
        borderColor="gray.700"
        marginTop={2}
      >
        <Flex justify="space-between" align="center">
          <Text fontSize="sm" color="gray.500">
            &copy; 2023 MY-Movies by Maddy. All rights reserved.
          </Text>
          <Flex align="center" ml={4}>
            <a href={`https://instagram.com/mr.maddy150912?igshid=ZDdkNTZiNTM=`} rel="noreferrer" target="_blank">
              <Icon
                as={FaInstagram}
                boxSize={6}
                color="gray.500"
                cursor="pointer"
                mr={2}
              />
            </a>
            <a href={`https://github.com/Maddy150912`} rel="noreferrer" target="_blank">
            <Icon
              as={FaGithub}
              boxSize={6}
              color="gray.500"
              cursor="pointer"
              mr={2}
            />
            </a>
            <a href={`https://www.linkedin.com/in/mandar-yangal-a72098262`} rel="noreferrer" target="_blank">
            <Icon
              as={FaLinkedin}
              boxSize={6}
              color="gray.500"
              cursor="pointer"
              mr={2}
            />
            </a>
            <a href={`mailto:mr.maddy150912@gmail.com`} rel="noreferrer" target="_blank">
            <Icon
              as={FaEnvelope}
              boxSize={6}
              color="gray.500"
              cursor="pointer"
            />
            </a>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
