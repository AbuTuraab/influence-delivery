
import {
    Box, VStack,
    Flex,
    Image,
    Text,
    Link,
    HStack,
    Icon,
} from "@chakra-ui/react"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
// import { FaPlus } from "react-icons/fa6";

export default function Footer() {
    return(
        <>
           <Box
             maxW="1392px"
             w="97%"
             bg="white"
             borderRadius="32px"
             py={{ base: 10, md: 14 }}
             px={{ base: 6, md: 100 }}
             mx="auto"
             mt={{ base: 12, md: 20 }} // this creates spacing below previous section
           >
             <Flex
               direction={{ base: "column", md: "row" }}
               align="center"
               justify="space-between"
               gap={10}
             >
               {/* RIGHT SIDE IMAGE */}
               <Box textAlign="left">
                 <VStack align="flex-start">
                   {/* Logo */}
                   <Image
                     src="/Group30795.png"
                     alt="Footer Logo"
                     w="388px"
                   
                   />
   
                   {/* Gradient Button */}
                   <Box
                     w="130px"
                     h="43px"
                     background="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
                     border="0.2px solid #9C41C0"
                     borderRadius="14px"
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                     mt="20px"
                     mb="10px"
                   >
                     <Text
                       fontSize="16px"
                       lineHeight="19px"
                       fontWeight="bold"
                       color="white"
                       whiteSpace="nowrap"
                     >
                       Connexion
                     </Text>
                   </Box>
   
                   {/* Social Icons */}
                   <HStack gap={10} justify="space-between">
                     <Icon color="black" w="32px" h="32px">
                       <FaFacebookF />
                     </Icon>
                     <Icon color="black" w="32px" h="32px">
                       <FaXTwitter />
                     </Icon>
                     <Icon color="black" w="32px" h="32px">
                       <FaInstagram />
                     </Icon>
                     <Icon color="black" w="32px" h="32px">
                       <FaTiktok />
                     </Icon>
                   </HStack>
                 </VStack>
               </Box>
   
               {/* LEFT SIDE */}
               <Flex
                 direction={{ base: "column", sm: "row" }}
                 gap={{ base: 10, md: 16 }}
               >
                 <VStack align="flex-start">
                   <Text fontWeight="bold" fontSize="lg" color="black">
                     Navigation
                   </Text>
                   <Link
                     fontFamily="Helvetica Neue"
                     fontSize="16px"
                     lineHeight="16px"
                     fontWeight="normal"
                     letterSpacing="0.27px"
                     color="#636363"
                     textAlign="left"
                     opacity={1}
                     href="#"
                   >
                     Influenceurs
                   </Link>
                   <Link
                     fontFamily="Helvetica Neue"
                     fontSize="16px"
                     lineHeight="16px"
                     fontWeight="normal"
                     letterSpacing="0.27px"
                     color="#636363"
                     textAlign="left"
                     opacity={1}
                     href="#"
                   >
                     Produits
                   </Link>
                   <Link
                     fontFamily="Helvetica Neue"
                     fontSize="16px"
                     lineHeight="16px"
                     fontWeight="normal"
                     letterSpacing="0.27px"
                     color="#636363"
                     textAlign="left"
                     opacity={1}
                     href="#"
                   >
                     FAQ
                   </Link>
                 </VStack>
   
                 <VStack align="flex-start">
                   <Text fontWeight="bold" fontSize="lg" color="black">
                     Legal
                   </Text>
                   <Link
                     fontFamily="Helvetica Neue"
                     fontSize="16px"
                     lineHeight="16px"
                     fontWeight="normal"
                     letterSpacing="0.27px"
                     color="#636363"
                     textAlign="left"
                     opacity={1}
                     href="#"
                   >
                     CGU/CGV
                   </Link>
                   <Link
                     fontFamily="Helvetica Neue"
                     fontSize="16px"
                     lineHeight="16px"
                     fontWeight="normal"
                     letterSpacing="0.27px"
                     color="#636363"
                     textAlign="left"
                     opacity={1}
                     href="#"
                   >
                     Politique de confidentialité
                   </Link>
                   <Link
                     fontFamily="Helvetica Neue"
                     fontSize="16px"
                     lineHeight="16px"
                     fontWeight="normal"
                     letterSpacing="0.27px"
                     color="#636363"
                     textAlign="left"
                     opacity={1}
                     href="#"
                   >
                     Mentions légales
                   </Link>
                 </VStack>
               </Flex>
             </Flex>
   
             <Text
               mt={10}
               h="16px"
               fontFamily="Helvetica Neue"
               fontSize="14px"
               lineHeight="16px"
               fontWeight="normal"
               letterSpacing="0.24px"
               color="#636363"
               textAlign="center"
               opacity={1}
             >
               © {new Date().getFullYear()} Tendance et influence — Tous droits
               réservés.
             </Text>
           </Box>
        </>
    )
}