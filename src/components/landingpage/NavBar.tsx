import {
  Box,
  Flex,
  HStack,
  
  Text,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { Image } from "@chakra-ui/react";
import { TbMoneybag } from "react-icons/tb";


export default function Navbar() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#1A1A1A"
        color="white"
        px="20px"
        position="fixed"
        height="66px"
        width="1315px"
        top="24px"
        left="24px"
        bgRepeat="no-repeat"
        bgPos="0% 0%"
        bgClip="padding-box"
        zIndex={2}
        borderRadius="20px"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Brand */}
          <Flex justifyContent="left" gap="10">
            <Image src="src/assets/logo-influence-delivery.png" />
            <HStack gap="10">
              <Text color="white" width="">
                Influenceurs
              </Text>
              <Text color="white">Produits</Text>
            </HStack>
          </Flex>
          {/* Desktop Links */}
          
           <Flex justifyContent="right" gap="10">
           
            <HStack gap="10">
              
              <CiHeart />
             <TbMoneybag />
            </HStack>
         
          <HStack
            display={{ base: "none", md: "flex" }}
            color="white"
          
          >
            
           <HStack gap="10">
              <Text color="white"  w="130px"
      h="43px"
      background="black"
      border= "0.20000000298023224px solid #636363"
      borderRadius="14px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="10px"
      mb="10px">
              S’inscrire
              </Text>
              <Text color="white"  w="130px"
      h="43px"
      background="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
      border="0.2px solid #9C41C0"
      borderRadius="14px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="10px"
      mb="10px"
      >Se connecter</Text>
            </HStack>
         

              
          </HStack>
 </Flex>
          {/* Mobile Menu Button */}
          {/* <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
        </Flex>

        {/* Mobile Menu */}
        {/* (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav">
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Button colorScheme="blue" w="full">
                Get Started
              </Button>
            </Stack>
          </Box>
        )  */}
      </Box>
    </>
  );
}



// export default function Navbar() {
//   return (
//     <>
//       <Box
//         bg="#1A1A1A"
//         color="white"
        
//         w="100%"
//         maxW="1315px"
//         mx="auto" // center the navbar
//         px={{ base: "12px", md: "24px" }}
//         position="fixed"
//         top="24px"
//         left="50%"
//         transform="translateX(-50%)"

//         height="66px"
//         zIndex={2}
//         borderRadius="20px"
//       >
//         <Flex h={16} alignItems="center" justifyContent="space-between">
//           {/* Brand */}
//           <Flex justifyContent="left" gap={{ base: 4, md: 10 }}>
//             <Image src="src/assets/logo-influence-delivery.png" boxSize={{ base: "30px", md: "40px" }} />
//             <HStack gap={{ base: 4, md: 10 }} display={{ base: "none", md: "flex" }}>
//               <Text>Influenceurs</Text>
//               <Text>Produits</Text>
//             </HStack>
//           </Flex>

//           {/* right side */}
//           <Flex gap={{ base: 4, md: 10 }} alignItems="center">
//             <HStack gap={{ base: 4, md: 10 }}>
//               <CiHeart />
//               <TbMoneybag />
//             </HStack>

//             {/* Desktop only links */}
//             <HStack
//               display={{ base: "none", md: "flex" }}
//               color="white"
//               bg="black"
//               px={3}
//               py={2}
//               rounded="md"
//             >
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }
