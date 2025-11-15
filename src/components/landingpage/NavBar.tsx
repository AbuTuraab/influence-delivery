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
 Link,

} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";




const Demo = () => {

  const cartItems = [
    {
      id: 1,
      name: "Adidas Continental 80",
      price: 69.0,
      image: "/shoe.png",
    },
    {
      id: 2,
      name: "Nettoyant doux",
      price: 69.0,
      image:  "/215.png",
    },
    {
      id: 3,
      name: "Gourde sport",
      price: 69.0,
      image:  "/bot.png",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const delivery = 5.99;
  const total = subtotal + delivery;

  return (
     
     
    <Drawer.Root  size={"sm"} >
      <Drawer.Trigger asChild >
        <TbMoneybag />
      </Drawer.Trigger>
      <Portal >
        <Drawer.Backdrop  />
        <Drawer.Positioner  >
          <Drawer.Content bgColor="white" color="black" borderRadius={"32px 0 0 32px"}>
            <Drawer.Header>
              <Drawer.Title>Panier</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body >
                     <Box>
            {cartItems.map((item) => (
              <Box key={item.id} pb={3} pt={3} borderBottom="1px solid #E5E5E5">
                  <HStack>
          <Image
            src={item.image}
            alt={item.name}
            h="80px"
            w="80px"
            borderRadius="12px"
            objectFit="cover"
          />
         <Box w="100%">
          
  <Flex justify="space-between">
    <Text
      fontSize="16px"
      fontWeight="medium"
      fontFamily="Helvetica Neue"
    >
      {item.name}
    </Text>

    <Text fontWeight="600">{item.price.toFixed(2)}€</Text>
  </Flex>

            <HStack>
              <HStack
                justify="space-around"
                align="center"
                h="32px"
                w="87px"
                bgColor="#F6F6F7"
                borderRadius="24px"
              >
                <Image src="/line-.svg" h="2px" w="10px" />
                <Text>1</Text>
                <Image src="/add.png" h="26px" w="26px" />
              </HStack>

              <Box
                bgColor="#F6F6F7"
                h="32px"
                w="32px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="20px"
              >
                <Image src="/trash.svg" h="13.38px" w="14.72px" />
              </Box>
            </HStack>
          </Box> 
         
        </HStack>
              </Box>
            ))}
          </Box>
 
          {/* Totals */}
          <Box mt={4}>
            <Flex justify="space-between">
              <Text>Sous-total</Text>
              <Text>{subtotal.toFixed(2)}€</Text>
            </Flex>

            <Flex justify="space-between">
              <Text>Frais de livraison</Text>
              <Text>{delivery.toFixed(2)}€</Text>
            </Flex>

          

            <Flex justify="space-between">
              <Text fontWeight="700">TOTAL</Text>
              <Text fontWeight="700">{total.toFixed(2)}€</Text>
            </Flex>
          </Box>
    

        

            </Drawer.Body>
            <Drawer.Footer flexDirection="column" gap={3}>
            <Link href="/cart" w="100%">
              <Button w="100%" borderRadius="14px" bg="white" border="1px solid #E5E5E5">
            Voir mon panier
          </Button></Link>
           
          <Button
            w="100%"
            borderRadius="14px"
            color="white"
             bg="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
          >
            Aller vers le paiement
          </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton   
      fontWeight="bold"
      fontFamily="Helvetica Neue" color="black"/>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>

     
  )
}

const Logo = () => {
  return (
    <Box>
      {/* Or use an actual image */}
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
        bgColor="black"
        //  border="0.2px solid #636363"
        borderRadius="14px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >

        <Link href="/influencers" variant={"plain"}>
         Influenceurs
        </Link>
       
       
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
        bgColor="black"
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
       
        bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200" 
       
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
        <Button variant="outline" size="sm" py={5} colorPalette="#7344E4">
          <Icon color="#7344E4" colorPalette="#7344E4">
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
        <Flex align="center" justify="space-between">
          <Flex justifyContent="left" gap="10">
           
            <Link href="/">
             <Logo />
            </Link>
            <HStack gap="10" display={{ base: "none", md: "flex" }}>
        <Link href="/influencers" variant={"plain"} color="white" >
         Influenceurs
        </Link>
              <Link href="/products" variant={"plain"} color="white" >
         Produits
        </Link>
            </HStack>
          </Flex>

          <Flex
            align="center"
            gap={{ base: 4, md: 10 }}
            display={{ base: "none", md: "flex" }}
          >
            <HStack gap={{ base: 4, md: 8 }}>
             
              <Link href="/favorites" variant={"plain"} color="white" >
          <CiHeart />
        </Link>
            

              <Demo />
            </HStack>

            <HStack display={{ base: "flex" }} gap="10">
             <Link href="/inscription">
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
             </Link>

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
          <Box display={{ base: "block", md: "none" }} bgColor="black">
            <MobileDrawer />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
