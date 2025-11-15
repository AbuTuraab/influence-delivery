// import {
//     Box,
//     Text,
//     Flex,
//     HStack,
//     VStack,
//     Image,
//     Button,
//     Icon,
// } from "@chakra-ui/react";
// import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

// export default function ShoppingCartModal() {
//     // const { isCartOpen, cartItems, closeCart, updateQuantity, removeItem } = useCart();
//     const shippingFee = 5.99;

//     // const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//     // const total = subtotal + shippingFee;

//     // if (!isCartOpen) return null;

//     return (
//         <>
//             {/* Backdrop */}
//             <Box
//                 position="fixed"
//                 top="0"
//                 left="0"
//                 right="0"
//                 bottom="0"
//                 bg="rgba(0, 0, 0, 0.5)"
//                 zIndex="999"
//                 onClick={closeCart}
//             />

//             {/* Modal */}
//             <Box
//                 position="fixed"
//                 top="0"
//                 right="0"
//                 w={{ base: "100%", md: "400px" }}
//                 h="100vh"
//                 bg="white"
//                 zIndex="1000"
//                 boxShadow="-4px 0 20px rgba(0,0,0,0.1)"
//                 overflowY="auto"
//                 fontFamily="Helvetica Neue"
//             >
//                 {/* Header */}
//                 <Flex
//                     justify="space-between"
//                     align="center"
//                     p="20px"
//                     borderBottom="1px solid #E5E5E5"
//                 >
//                     <Text fontSize="24px" fontWeight="bold" color="#1A1A1A">
//                         Panier
//                     </Text>
//                     <Icon
//                         as={FaTimes}
//                         w="20px"
//                         h="20px"
//                         cursor="pointer"
//                         color="#1A1A1A"
//                         onClick={closeCart}
//                     />
//                 </Flex>

//                 {/* Cart Items */}
//                 <VStack p="20px" align="stretch">
//                     {cartItems.map((item) => (
//                         <Flex key={item.id} gap="15px" align="center">
//                             <Box
//                                 w="60px"
//                                 h="60px"
//                                 bg="#F5F5F5"
//                                 borderRadius="12px"
//                                 overflow="hidden"
//                                 flexShrink={0}
//                             >
//                                 <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     w="100%"
//                                     h="100%"
//                                     objectFit="cover"
//                                 />
//                             </Box>

//                             <Flex flex="1" direction="column" justify="space-between">
//                                 <Flex justify="space-between" align="start" mb="8px">
//                                     <Text fontSize="14px" fontWeight="500" color="#1A1A1A" flex="1">
//                                         {item.name}
//                                     </Text>
//                                     <Text fontSize="14px" fontWeight="600" color="#1A1A1A" ml="10px">
//                                         {item.price.toFixed(2)}€
//                                     </Text>
//                                 </Flex>

//                                 <Flex align="center" gap="12px">
//                                     <HStack>
//                                         <Button
//                                             size="sm"
//                                             w="28px"
//                                             h="28px"
//                                             minW="28px"
//                                             bg="#F5F5F5"
//                                             borderRadius="6px"
//                                             p={0}
//                                             onClick={() => updateQuantity(item.id, -1)}
//                                             _hover={{ bg: "#E5E5E5" }}
//                                         >
//                                             <Icon as={FaMinus} w="10px" h="10px" />
//                                         </Button>

//                                         <Text fontSize="14px" fontWeight="500" px="15px" color="#1A1A1A">
//                                             {item.quantity}
//                                         </Text>

//                                         <Button
//                                             size="sm"
//                                             w="28px"
//                                             h="28px"
//                                             minW="28px"
//                                             bg="#F5F5F5"
//                                             borderRadius="6px"
//                                             p={0}
//                                             onClick={() => updateQuantity(item.id, 1)}
//                                             _hover={{ bg: "#E5E5E5" }}
//                                         >
//                                             <Icon as={FaPlus} w="10px" h="10px" />
//                                         </Button>
//                                     </HStack>

//                                     <Button
//                                         size="sm"
//                                         w="28px"
//                                         h="28px"
//                                         minW="28px"
//                                         bg="#F5F5F5"
//                                         borderRadius="6px"
//                                         p={0}
//                                         onClick={() => removeItem(item.id)}
//                                         _hover={{ bg: "#FFE5E5" }}
//                                     >
//                                         <Icon as={FaTrash} w="12px" h="12px" color="#FF4444" />
//                                     </Button>
//                                 </Flex>
//                             </Flex>
//                         </Flex>
//                     ))}
//                 </VStack>

//                 <Box flex="1" minH="20px" />

//                 {/* Footer Summary */}
//                 <Box mt="auto" p="20px" borderTop="1px solid #E5E5E5" bg="white">
//                     <Flex justify="space-between" mb="10px">
//                         <Text fontSize="14px" color="#666">Sous-total</Text>
//                         <Text fontSize="14px" fontWeight="500" color="#1A1A1A">
//                             {subtotal.toFixed(2)}€
//                         </Text>
//                     </Flex>

//                     <Flex justify="space-between" mb="15px">
//                         <Text fontSize="14px" color="#666">Frais de livraison</Text>
//                         <Text fontSize="14px" fontWeight="500" color="#1A1A1A">
//                             {shippingFee.toFixed(2)}€
//                         </Text>
//                     </Flex>

//                     <Flex justify="space-between" mb="20px" pt="15px" borderTop="1px solid #E5E5E5">
//                         <Text fontSize="16px" fontWeight="bold" color="#1A1A1A">TOTAL</Text>
//                         <Text fontSize="16px" fontWeight="bold" color="#1A1A1A">
//                             {total.toFixed(2)}€
//                         </Text>
//                     </Flex>

//                     <Button
//                         w="100%"
//                         h="48px"
//                         bg="white"
//                         border="1px solid #1A1A1A"
//                         borderRadius="12px"
//                         fontSize="14px"
//                         fontWeight="600"
//                         color="#1A1A1A"
//                         mb="12px"
//                         _hover={{ bg: "#F5F5F5" }}
//                     >
//                         Voir mon panier
//                     </Button>

//                     <Button
//                         w="100%"
//                         h="48px"
//                         bg="linear-gradient(90deg, #7344E4 0%, #E344B8 100%)"
//                         borderRadius="12px"
//                         fontSize="14px"
//                         fontWeight="600"
//                         color="white"
//                         _hover={{ opacity: 0.9 }}
//                     >
//                         Aller vers le paiement
//                     </Button>
//                 </Box>
//             </Box>
//         </>
//     );
// }



// // import {
 
// //   Box,
// //   Flex,
// //   VStack,
// //   HStack,
// //   Text,
// //   Image,
// //   Button,
// //   IconButton,
 
// // } from "@chakra-ui/react";



// // export default function CartModal({ isOpen, onClose }) {


// //   return (
// //     <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
// //       <ModalOverlay />
// //       <ModalContent borderRadius="20px" p={2}>
// //         <ModalHeader fontWeight="700">Panier</ModalHeader>
// //         <ModalCloseButton />

// //         <ModalBody>

// //         </ModalFooter>
// //       </ModalContent>
// //     </Modal>
// //   );
// // }




import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"


const Demo = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}


export default function CartModal(){
  return(
    <>
    <Demo />
    </>
  )
}