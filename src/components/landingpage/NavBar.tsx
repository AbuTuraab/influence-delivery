import {
  Box,
  Text,
  HStack,
  VStack,
  Link,
  Button,
  useDisclosure,
  Drawer,
  Portal,
  CloseButton,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { Image } from "@chakra-ui/react";
import { TbMoneybag } from "react-icons/tb";


  //   const { isOpen, onOpen, onClose } = useDisclosure();

  const Logo = () => {
  return (
    <Box>
    
      {/* Or use an actual image */}
      {/* <Image src="/logo.png" alt="Logo" height="40px" /> */}
       <Image src="src/assets/logo-influence-delivery.png" />
    </Box>
  );
};
const links = [
  { name: " S’inscrire", href: "#S’inscrire" },
  // { name: "Se connecter", href: "#Se connecter" },
];

const MenuLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          fontWeight="medium"
          color="blue.600"
          _hover={{
            color: "blue.500",
            textDecoration: "underline",
          }}
          transition="color 0.2s ease"
        >
          {link.name}
        </Link>
      ))}

      <Button
        bg="blue.600"
        color="white"
        size="sm"
        borderRadius="full"
        px={6}
        _hover={{
          transform: "translateY(-2px)",
          shadow: "lg",
        }}
        transition="all 0.2s ease"

        w="130px"
      h="43px"
      background="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
      border="0.2px solid #9C41C0"
    
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="10px"
      mb="10px"
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
        <Button variant="outline" size="sm">
          <Icon color="blue.600">
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






 <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      gap={{ base: 8, lg: 16 }}
      px={{ base: 6, lg: 12 }}
      py={3}
      maxW={{ base: "full", xl: "1440px" }}
      mx="auto"
bg="#1A1A1A"
       position="fixed"
      top="20px"
       left={{ base: "5px", lg: "20px" }}
      w="97%"
      zIndex="999"
      borderRadius="20px"
      
    >
      <Logo />

            <HStack gap="10">
              <Text color="white" width="">
                Influenceurs
              </Text>
              <Text color="white">Produits</Text>
            </HStack>

      {/* Desktop Menu */}
      <Box display={{ base: "none", md: "block" }}>
        {/* <MenuLinks /> */}


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
      </Box>

      {/* Mobile Drawer */}
      <Box display={{ base: "block", md: "none" }}>
        <MobileDrawer />
      </Box>
    </Flex>
      {/* <Box */}
        {/*  */}
        {/* color="white"
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
        borderRadius="20px" */}
      {/* > */}
        {/* <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Brand */}
          {/* <Flex justifyContent="left" gap="10">
     
          </Flex> */}
          {/* Desktop Links */}
          
           {/* <Flex justifyContent="right" gap="10">
           
          
         
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
 </Flex> */}
          {/* Mobile Menu Button */}
          {/* <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
        {/* </Flex> */} 

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
      {/* </Box> */}

      
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
//            
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
