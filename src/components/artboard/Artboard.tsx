import { Image, HStack, Text, Box, VStack, Link, Grid, SimpleGrid, Icon} from "@chakra-ui/react";
import { AiFillShop } from "react-icons/ai";

export default function Artboard() {
  return (
    <>
      <Box
        mt={{ base: "-100px", md: "100px", lg: "40px" }}
        ml={{ base: "70px", md: "100px", lg: "75px" }}
        boxShadow="0px 8px 16px #0000000F"
      >
        <HStack>
          <Image
            src="/home-hashtag.png"
            w="12px"
            h="12px"
            color={"black"}
          />

          <Text color="black">/</Text>
          <Text color="black">Produits</Text>
          <Text color="black">Headphones sans fil</Text>
        </HStack>

        <HStack align="flex-start" mt={8} >
          <Image src="/215.png" w="703px" h="703px" />
          <Box color="black" position={"relative"} >
            <VStack>
              <Box w="496px" h="468px"  p={4} bg="#FFFFFF"
  boxShadow="0px 8px 16px #0000000F"
  border="0.5px solid #E5E5E5"
  borderRadius="32px"
   zIndex={2} // 👈 Bring this box forward
      position="relative"
  opacity={1}>
               <HStack>
                <Icon as={AiFillShop} color="#E13E85"/>
                 <Text  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="13px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"> <Text as="span"  color={"#E13E85"}> CUROLOGY · </Text>by @lilaglam</Text>
               </HStack>

                <Image
                  src="/Group30.png"
                  w="43px"
                  h="43px"
                  ml="auto" // <— pushes it to the right
                  display="block" // to respect the margin
                />

                <Text  
                fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="32px"
  lineHeight="39px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left">Nettoyant doux</Text>
                <HStack>
                  <Image src="/etoile.svg" w="13px" h="13px" />
                  <Image src="/etoile.svg" w="13px" h="13px" />
                  <Image src="/etoile.svg" w="13px" h="13px" />
                  <Image src="/etoile.svg" w="13px" h="13px" />
                  <Image src="/etoile.svg" w="13px" h="13px" />
                  <Text color="#1A1A1A">5.0 (2 avis)</Text>
                </HStack>
                <Text    
                fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="24px"
  
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left" mt="10px" mb="10px">179,99€</Text>
                <Box
                  height={"111px"}
                  border="0.5px solid #DCDDDE"
                  borderRadius={"20px"}
                  px="15px"
                  pt="10px"
                >
                  <Text    fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="21px"
  letterSpacing="0px"
  color="#1A1A1A"
  >
                    Éliminez les impuretés et l’excès de sébum sans irriter la
                    peau ni obstruer les pores grâce au Nettoyant Doux. Sa
                    texture gel légèrement moussante convient à tous les types
                    de…
                  </Text>
                  <Link fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="medium"
  fontSize="14px"
  lineHeight="21px"
  letterSpacing="0px"
 
  textAlign="left" color="#7344E4">En savoir plus</Link>
                </Box>
                <Box w="100%" mt={4}>
                  <HStack w="100%">
                    {/* quantity counter */}
                    <HStack w="103px" h="38px" bg="#F6F6F7"
  borderRadius="24px"
   alignItems="center"
  justifyContent="space-around"
  p={4}>
                      <Image src="/line.png" w="32px"   />
                      <Text>1</Text>
                      <Image src="/add.png" w="32px" h="32px" />
                    </HStack>

                    <Text fontFamily="'Helvetica Neue', sans-serif"
  fontStyle="italic"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="21px"
  letterSpacing="0px"
  color="#939494"
  textAlign="left"
  opacity={1}>50 unités disponibles</Text>
                  </HStack>

                  {/* ADD TO CART BUTTON */}
                  <HStack w="100%" mt={4} align="center" justify="space-around">
                    <HStack
                      bgGradient="to-r"
                      gradientFrom="#7344E4 0%"
                      gradientTo=" #E13E85 100%"
                      borderRadius="14px"
                      py="12px"
                      px="16px"
                      align="center"
                      justify="center"
                      color="white"
                      w="381px"
                    >
                      <Image src="/icone-sac.png" w="18px" h="18px" />
                      <Text fontWeight="bold">Ajouter au panier · 179,99€</Text>
                    </HStack>
                    <Image src="/love.png" w="18px" h="18px" />
                  </HStack>
                </Box>
             


              </Box>
            </VStack>
               <Box
                  divideY={"1px"}
                  spaceY={"10px"}
                  boxShadow="0px 8px 16px #0000000F"
                  
                  borderRadius="0 0 32px 32px "
                   px="20px"
                   h="217px"
                   position={'absolute'}
                   w="496px"
                  bottom="-120px"
                  
zIndex={0}
                   bg="#FFFFFF"

  borderBottom="0.5px solid #E5E5E5"

                   
                >
                  <HStack
                    align={"center"}
                    justify="space-between"
                    spaceY={"10px"}
                    mt="120px"
                  >
                    <Text>Description</Text>
                    <Image src="/fleche.png" w="16px" h="10px" />
                  </HStack>
                  {/* <Divider color="black"/> */}
                  <HStack
                    align={"center"}
                    justify="space-between"
                    spaceY={"10px"}
                  >
                    <Text>Livraison et retours</Text>
                    <Image src="/fleche.png" w="16px" h="10px" />
                  </HStack>
                </Box>
          </Box>
        </HStack>

  <Grid templateColumns="repeat(2, 1fr)" gap="10px" mt="10px">
  
    <SimpleGrid columns={2} gap="10px">
      <Image src="/C2.png" borderRadius="12px" h="344px" w="344px" />
      <Image src="/C2.png" borderRadius="12px" h="344px" w="344px" />
      <Image src="/C2.png" borderRadius="12px" h="344px" w="344px"  />
      <Image src="/C2.png" borderRadius="12px" h="344px" w="344px" />
    </SimpleGrid>

</Grid>



 <HStack align="flex-start" mt={8 }>
          <Box h="546px" w="391px" bg="#FFFFFF"
  border="0.5px solid #E5E5E5"
  borderRadius="32px" >
          <HStack alignItems={"center"} justifyContent={"center"} my="25px">
             <Image src="/star.svg" w="80px" h="80px" />
             <Text   fontFamily="Helvetica Neue"
  fontWeight="bold"
  fontSize="112px"
  lineHeight="136px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="center">5.0</Text>
          </HStack>

          <HStack alignItems={"center"} justifyContent={"space-around"} my="25px" >
            <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black" ><Text  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="24px"
  
  letterSpacing="0px"
  color="#1A1A1A">100%</Text>
                <Text>Satisfaction</Text>
                </Box>
            </HStack>
              <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black"  ><Text  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="24px"
  
  letterSpacing="0px"
  color="#1A1A1A">Excellente</Text>
                <Text>Qualité globale</Text>
                </Box>
            </HStack>
          </HStack>

          <Box color="black" px="10px" py="20px" my="25px">
            <Text fontFamily="Helvetica Neue"
  fontWeight="bold"
  fontSize="18px"
  lineHeight="22px"
  letterSpacing="0px"
  color="#1A1A1A" ml="10px" textAlign="left">Note globale (2 avis)</Text>

        

             <HStack alignItems={"center"} justifyContent={"space-around"} >
            <HStack>
               
                <Box color="black"  textAlign="center">
                   
               <Text>5</Text>
                </Box>
                 <Image src="/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center">
                 
                 <Text>2 (100%)</Text>
                </Box>
            </HStack>
          </HStack>

             <HStack alignItems={"center"} justifyContent={"space-around"} >
            <HStack>
               
                <Box color="black"  textAlign="center">
                   
               <Text>5</Text>
                </Box>
                 <Image src="/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center">
                 
                 <Text>2 (100%)</Text>
                </Box>
            </HStack>
          </HStack>

             <HStack alignItems={"center"} justifyContent={"space-around"} >
            <HStack>
               
                <Box color="black"  textAlign="center">
                   
               <Text>5</Text>
                </Box>
                 <Image src="/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center">
                 
                 <Text>2 (100%)</Text>
                </Box>
            </HStack>
          </HStack>

             <HStack alignItems={"center"} justifyContent={"space-around"} >
            <HStack>
               
                <Box color="black"  textAlign="center">
                   
               <Text>5</Text>
                </Box>
                 <Image src="/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center">
                 
                 <Text>2 (100%)</Text>
                </Box>
            </HStack>
          </HStack>

             <HStack alignItems={"center"} justifyContent={"space-around"} >
            <HStack>
               
                <Box color="black"  textAlign="center">
                   
               <Text>5</Text>
                </Box>
                 <Image src="/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="/line.png" w="160px" h="3px" color="grey"/>
              <HStack>
                <Image src="/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center">
                 
                 <Text>2 (100%)</Text>
                </Box>
            </HStack>
          </HStack>
          </Box>
          </Box>





          <Box color="black" w="808px" h="543px" bg="#FFFFFF"
  border="0.5px solid #E5E5E5"
  borderRadius="32px" >
            <VStack>
              <Box h="468px" borderRadius="32px" bg="#FFFFFF" p={5} my="10px" >
                <HStack >
<Text  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="24px"
  
  letterSpacing="0px"
  color="#1A1A1A">Avis clients</Text>
          <Text color="black">/</Text>
          
          <Text color="black">2 Avis</Text>

           <HStack  ml="auto" // <— pushes it to the right
                  display="flex">
      <Text>Les plus récents</Text>
      <Image src="/fleche.png" w="16px" h="10px" />
    </HStack>
        </HStack>
               <Box border="2px solid #ABACAD" borderRadius="16px" py="20px" px="10px" my="10px" >
                
                <HStack textAlign={"center"}>
                  <Image src="/profilepic.png" w="40px" h="40px" />
                 
              
                <Box>
                 <HStack> <Text  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="16px"
  
  letterSpacing="0px"
  color="#1A1A1A">Aline Dupont ·</Text>
                    <Image src="/etoile.svg" w="13px" h="13px" />
                     <Text>5.0</Text>
                    </HStack>
                 <HStack>
                    <Image src="/localisation.png" w="13px" h="13px" />
                   <Text fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#939494"
  textAlign="left"
  opacity={1}>24 Oct. - 14:30</Text>
                 </HStack>
                </Box>
                
                </HStack>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  </Text>
              
                <Box w="100%" mt={4}>
                  <HStack w="100%" gap="50px" >
                    {/* quantity counter */}
                    <HStack  textAlign="center" justifyContent={"center"} w="106px"
  h="32px"
  bg="#F9FAFB"
  border="0.5px solid #F6F6F7"
  borderRadius="17px"
  opacity={1}>
                      <Image src="/flag.png" w="12px" />
                      <Text fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="500"
  fontSize="14px"
  lineHeight="17px"
  letterSpacing="0px"
  color="#4A4B4B"
  textAlign="left"
  opacity={1}>Répondre</Text>
                  
                    </HStack>
 <HStack  alignItems={"center"} textAlign="center" justifyContent={"center"} w="106px"
  h="32px"
  bg="#F9FAFB"
  border="0.5px solid #F6F6F7"
  borderRadius="17px"
  opacity={1}>
                      <Image src="/flagout.png" w="12px" />
                      <Text fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="500"
  fontSize="14px"
  lineHeight="17px"
  letterSpacing="0px"
  color="#4A4B4B"
  textAlign="left"
  opacity={1}>Répondre</Text>
                 
                    </HStack>
                   
                  </HStack>

               
                </Box>
               </Box>
             
  <Box border="2px solid #ABACAD" borderRadius="16px" p="10px">
              
                <HStack textAlign={"center"}>
                  <Image src="/profilepic.png" w="40px" h="40px" />
                 
              
                <Box>
                 <HStack> <Text  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="16px"
  
  letterSpacing="0px"
  color="#1A1A1A">Aline Dupont ·</Text>
                    <Image src="/etoile.svg" w="13px" h="13px" />
                     <Text>5.0</Text>
                    </HStack>
                 <HStack>
                    <Image src="/localisation.png" w="13px" h="13px" />
                   <Text fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#939494"
  textAlign="left"
  opacity={1}>24 Oct. - 14:30</Text>
                 </HStack>
                </Box>
                
                </HStack>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  </Text>
              
                <Box w="100%" mt={4}>
                  <HStack w="100%" gap="50px" >
                    {/* quantity counter */}
                    <HStack  textAlign="center" justifyContent={"center"} w="106px"
  h="32px"
  bg="#F9FAFB"
  border="0.5px solid #F6F6F7"
  borderRadius="17px"
  opacity={1}>
                      <Image src="/flag.png" w="12px" />
                      <Text fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="500"
  fontSize="14px"
  lineHeight="17px"
  letterSpacing="0px"
  color="#4A4B4B"
  textAlign="left"
  opacity={1}>Répondre</Text>
                  
                    </HStack>
 <HStack  alignItems={"center"} textAlign="center" justifyContent={"center"} w="106px"
  h="32px"
  bg="#F9FAFB"
  border="0.5px solid #F6F6F7"
  borderRadius="17px"
  opacity={1}>
                      <Image src="/flagout.png" w="12px" />
                      <Text fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="500"
  fontSize="14px"
  lineHeight="17px"
  letterSpacing="0px"
  color="#4A4B4B"
  textAlign="left"
  opacity={1}>Répondre</Text>
                 
                    </HStack>
                   
                  </HStack>

               
                </Box>
               </Box>

              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>



      
    </>
  );
}
