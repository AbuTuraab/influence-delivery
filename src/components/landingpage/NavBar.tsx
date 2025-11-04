




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
    <Box >
    
      {/* Or use an actual image */}
      {/* <Image src="/logo.png" alt="Logo" height="40px" /> */}
       <Image src="/logo-influence-delivery.png" />
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
                // border="0.2px solid #636363"
                borderRadius="14px"
                display="flex"
                justifyContent="center"
                alignItems="center"
      >
        Influenceurs
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
                bg="black"
                // border="0.2px solid #636363"
                 borderRadius="14px"
                display="flex"
                justifyContent="center"
                alignItems="center"
      >
        Produits
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
              <CloseButton size="md" top={5} />
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
        position="sticky" // <-- sticky based on scroll
        top="20px" // <-- distance away from top
        zIndex="999"
        w="96%"
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









