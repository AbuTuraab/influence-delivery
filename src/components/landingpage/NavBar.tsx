import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  VStack,
  Button,
  useDisclosure,
  Drawer,
  Portal,
  CloseButton,
  Icon,

} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";



  const Logo = () => {
  return (
    <Box>
    
      {/* Or use an actual image */}
      {/* <Image src="/logo.png" alt="Logo" height="40px" /> */}
       <Image src="src/assets/logo-influence-delivery.png" />
    </Box>
  );
};


const MenuLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
     <Button
       
        color="white"
        size="sm"
        
        px={6}
        _hover={{
          transform: "translateY(-2px)",
          shadow: "lg",
        }}
        transition="all 0.2s ease"

         w="130px"
                h="43px"
                bg="black"
                border="0.2px solid #636363"
                borderRadius="14px"
                display="flex"
                justifyContent="center"
                alignItems="center"
      >
        Se connecter
      </Button>

      <Button
    
        color="white"
        size="sm"
        
        px={6}
        _hover={{
          transform: "translateY(-2px)",
          shadow: "lg",
        }}
        transition="all 0.2s ease"

         w="130px"
                h="43px"
                bg="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
                border="0.2px solid #9C41C0"
                borderRadius="14px"
                display="flex"
                justifyContent="center"
                alignItems="center"
      >
        Se connecter
      </Button>
    </LinkComponent>
  );
};



const MobileDrawer = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Drawer.Root open={open} onOpenChange={onToggle} size="full">
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm"  py={5}>
          <Icon color="#7344E4">
            <Menu />
          </Icon>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <Logo />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <MenuLinks isMobile />
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="md" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
export default function Navbar() {
  return (
    <>
      <Box
        position="fixed" // <-- sticky based on scroll
        top="20px" // <-- distance away from top
        zIndex="999"
        w="97%"
         maxW={{ base: "full", xl: "1440px" }}
        mx="auto"
        
        bg="#1A1A1A"
        color="white"
        height="66px"
        borderRadius="20px"
         as="nav"
         py={3}
         left={{ base: "8px", lg: "15px" }}
          px={{ base: 6, lg: 12 }}
           gap={{ base: 8, lg: 16 }}
           
     
         
      >
        <Flex  align="center" justify="space-between">
    

          <Flex justifyContent="left" gap="10">
           <Logo />
            <HStack gap="10" display={{ base: "none", md: "flex" }}>
              <Text color="white" width="">
                Influenceurs
              </Text>
              <Text color="white">Produits</Text>
            </HStack>
          </Flex>

       
          <Flex
            align="center"
            gap={{ base: 4, md: 10 }}
            display={{ base: "none", md: "flex" }}
          >
            <HStack gap={{ base: 4, md: 8 }}>
              <CiHeart />
              <TbMoneybag />
            </HStack>

            <HStack display={{ base: "flex" }} gap="10">
              <Text
                w="130px"
                h="43px"
                bg="black"
                border="0.2px solid #636363"
                borderRadius="14px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                S’inscrire
              </Text>

              <Text
                w="130px"
                h="43px"
                bg="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
                border="0.2px solid #9C41C0"
                borderRadius="14px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Se connecter
              </Text>
            </HStack>
          </Flex>
          <Box display={{ base:"block", md: "none" }}  >
        <MobileDrawer />
      </Box>
        </Flex>  
        
      </Box>
     
    </>
  );
}

















  //   const { isOpen, onOpen, onClose } = useDisclosure();

//   const Logo = () => {
//   return (
//     <Box>
    
//       {/* Or use an actual image */}
//       {/* <Image src="/logo.png" alt="Logo" height="40px" /> */}
//        <Image src="src/assets/logo-influence-delivery.png" />
//     </Box>
//   );
// };
// const links = [
//   { name: " S’inscrire", href: "#S’inscrire" },
//   // { name: "Se connecter", href: "#Se connecter" },
// ];

// const MenuLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
//   const LinkComponent = isMobile ? VStack : HStack;

//   return (
//     <LinkComponent gap={isMobile ? 4 : 8} align="center">
//       {links.map((link) => (
//         <Link
//           key={link.name}
//           href={link.href}
//           fontWeight="medium"
//           color="blue.600"
//           _hover={{
//             color: "blue.500",
//             textDecoration: "underline",
//           }}
//           transition="color 0.2s ease"
//         >
//           {link.name}
//         </Link>
//       ))}

//       <Button
//         bg="blue.600"
//         color="white"
//         size="sm"
//         borderRadius="full"
//         px={6}
//         _hover={{
//           transform: "translateY(-2px)",
//           shadow: "lg",
//         }}
//         transition="all 0.2s ease"

//         w="130px"
//       h="43px"
//       background="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
//       border="0.2px solid #9C41C0"
    
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       mt="10px"
//       mb="10px"
//       >
//         Se connecter
//       </Button>
//     </LinkComponent>
//   );
// };

// const MobileDrawer = () => {
//   const { open, onToggle } = useDisclosure();

//   return (
//     <Drawer.Root open={open} onOpenChange={onToggle} size="full">
//       <Drawer.Trigger asChild>
//         <Button variant="outline" size="sm">
//           <Icon color="blue.600">
//             <Menu />
//           </Icon>
//         </Button>
//       </Drawer.Trigger>
//       <Portal>
//         <Drawer.Backdrop />
//         <Drawer.Positioner>
//           <Drawer.Content>
//             <Drawer.Header>
//               <Drawer.Title>
//                 <Logo />
//               </Drawer.Title>
//             </Drawer.Header>
//             <Drawer.Body>
//               <MenuLinks isMobile />
//             </Drawer.Body>
//             <Drawer.CloseTrigger asChild>
//               <CloseButton size="md" />
//             </Drawer.CloseTrigger>
//           </Drawer.Content>
//         </Drawer.Positioner>
//       </Portal>
//     </Drawer.Root>
//   );
// };

// export default function Nabar() {
//   return (
//     <>






//  <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       gap={{ base: 8, lg: 16 }}
//       px={{ base: 6, lg: 12 }}
//       py={3}
//       maxW={{ base: "full", xl: "1440px" }}
//       mx="auto"
// bg="#1A1A1A"
//        position="fixed"
//       top="20px"
//        left={{ base: "5px", lg: "20px" }}
//       w="97%"
//       zIndex="999"
//       borderRadius="20px"
      
//     >
//       <Logo />

//             <HStack gap="10">
//               <Text color="white" width="">
//                 Influenceurs
//               </Text>
//               <Text color="white">Produits</Text>
//             </HStack>

//       <Box display={{ base: "none", md: "block" }}>
     


//          <HStack gap="10">
//               <Text color="white"  w="130px"
//       h="43px"
//       background="black"
//       border= "0.20000000298023224px solid #636363"
//       borderRadius="14px"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       mt="10px"
//       mb="10px">
//               S’inscrire
//               </Text>
//               <Text color="white"  w="130px"
//       h="43px"
//       background="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
//       border="0.2px solid #9C41C0"
//       borderRadius="14px"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       mt="10px"
//       mb="10px"
//       >Se connecter</Text>
//             </HStack>
//       </Box>

//       <Box display={{ base: "block", md: "none" }}>
//         <MobileDrawer />
//       </Box>
//     </Flex>
    

      
//     </>
//   );
// }





