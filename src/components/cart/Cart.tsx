import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
// import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
// 

export default function CartPage() {
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
      image: "/215.png",
    },
    {
      id: 3,
      name: "Gourde sport",
      price: 69.0,
      image: "/bot.png",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 5.99;
  const total = subtotal + deliveryFee;

  return (
    <Box minH="100vh" mt="50px" color={"black"}  >
     <HStack fontSize="xl" fontWeight="500" mb={4} ml="100px">
        <Image src="/home-hashtag.png" w="12px" h="12px"/>
        <Text>/</Text>
         <Text >
        Mon panier
      </Text>
     </HStack>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap="6"
    mx="auto"
    align="center"
    justify={"center"}
  
      >
        {/* Left: Cart Items */}
     <Box
  bg="white"
  borderRadius="32px"
  boxShadow="0px 8px 16px #0000000F"
  w="703px"
  h="auto"
  p={4} // optional padding for breathing space inside the box
>
  <VStack align="stretch" w="679px" mx="auto">
    {cartItems.map((item) => (
      <Flex
        key={item.id}
        justify="space-between"
        align="center"
        borderBottom="1px solid #E5E5E5"
        pb={2} // reduced from 4 to 2
        _last={{ borderBottom: "none", pb: 0, mb: 0 }}
      >
        <HStack>
          <Image
            src={item.image}
            alt={item.name}
            h="80px"
            w="80px"
            borderRadius="12px"
            objectFit="cover"
          />
          <VStack align="start">
            <Text
              fontSize="16px"
              fontWeight="medium"
              fontFamily="Helvetica Neue"
            >
              {item.name}
            </Text>
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
          </VStack>
        </HStack>

        <Text fontWeight="500">{item.price.toFixed(2)}€</Text>
      </Flex>
    ))}
  </VStack>
</Box>



        {/* Right: Order Summary */}
        <Box
          w="287px"
          h="269px"
          bg="white"
          borderRadius="16px"
          boxShadow="0px 8px 16px #0000000F"
          p={6}
         
        >
          <Text fontSize="18px"
    borderBottom="1px solid #E5E5E5"
      fontWeight="bold"
      fontFamily="Helvetica Neue">
            Récapitulatif
          </Text>

          <VStack align="stretch"
          
          >

           <VStack
 
 // padding before the border
  align="stretch"
>
  <HStack justify="space-between" pt={4}>
    <Text
      fontSize="16px"
      fontWeight="normal"
      fontFamily="Helvetica Neue"
      textAlign="left"
    >
      Sous-total
    </Text>
    <Text
      fontSize="16px"
      fontWeight="normal"
      fontFamily="Helvetica Neue"
      textAlign="right"
    >
      {subtotal.toFixed(2)}€
    </Text>
  </HStack>

  <HStack justify="space-between"  borderBottom="1px solid #E5E5E5"
  pb={4} >
    <Text
      fontSize="16px"
      fontWeight="normal"
      fontFamily="Helvetica Neue"
      textAlign="left"
    >
      Frais de livraison
    </Text>
    <Text
      fontSize="16px"
      fontWeight="normal"
      fontFamily="Helvetica Neue"
      textAlign="right"
    >
      {deliveryFee.toFixed(2)}€
    </Text>
  </HStack>

  <HStack justify="space-between">
    <Text
      fontSize="16px"
      fontWeight="bold"
      fontFamily="Helvetica Neue"
      textAlign="left"
    >
      TOTAL
    </Text>
    <Text
      fontSize="16px"
      fontWeight="bold"
      fontFamily="Helvetica Neue"
      textAlign="right"
    >
      {total.toFixed(2)}€
    </Text>
  </HStack>
</VStack>

           

            <Button
              mt={4}
              // bgGradient="(to-r, #7344E4, #C33ACD)"
w="239px"
h="43px"
               bg="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
              color="white"
              borderRadius="14px"
             fontSize="16px"
    
      fontWeight="bold" textAlign={"left"}
      fontFamily="Helvetica Neue"
            >
              Commander
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
