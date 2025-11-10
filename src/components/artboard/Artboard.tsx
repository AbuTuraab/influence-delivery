import { Image, HStack, Text, Box, VStack, Link, Grid } from "@chakra-ui/react";

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
            src="/src/assets/home-hashtag.png"
            w="12px"
            h="12px"
            color={"black"}
          />

          <Text color="black">/</Text>
          <Text color="black">Produits</Text>
          <Text color="black">Headphones sans fil</Text>
        </HStack>

        <HStack align="flex-start" mt={8}>
          <Image src="/src/assets/215.png" w="703px" h="703px" />
          <Box color="black">
            <VStack>
              <Box w="496px" h="468px" borderRadius="32px" bg="#FFFFFF" p={4}>
                <Text>CUROLOGY · by @lilaglam</Text>

                <Image
                  src="/src/assets/Group30.png"
                  w="43px"
                  h="43px"
                  ml="auto" // <— pushes it to the right
                  display="block" // to respect the margin
                />

                <Text>Nettoyant doux</Text>
                <HStack>
                  <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                  <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                  <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                  <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                  <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                  <Text>5.0 (2 avis)</Text>
                </HStack>
                <Text>179,99€</Text>
                <Box
                  height={"111px"}
                  border="0.5px solid #DCDDDE"
                  borderRadius={"20px"}
                >
                  <Text>
                    Éliminez les impuretés et l’excès de sébum sans irriter la
                    peau ni obstruer les pores grâce au Nettoyant Doux. Sa
                    texture gel légèrement moussante convient à tous les types
                    de…
                  </Text>
                  <Link color="#7344E4">En savoir plus</Link>
                </Box>
                <Box w="100%" mt={4}>
                  <HStack w="100%">
                    {/* quantity counter */}
                    <HStack>
                      <Image src="src/assets/line.png" w="12px" />
                      <Text>1</Text>
                      <Image src="src/assets/add.png" w="32px" h="32px" />
                    </HStack>

                    <Text color="black">50 unités disponibles</Text>
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
                      <Image src="src/assets/icone-sac.png" w="18px" h="18px" />
                      <Text fontWeight="bold">Ajouter au panier · 179,99€</Text>
                    </HStack>
                    <Image src="src/assets/love.png" w="18px" h="18px" />
                  </HStack>
                </Box>
                <Box
                  divideY={"1px"}
                  spaceY={"10px"}
                  boxShadow="0px 8px 16px #0000000F"
                  border="0.5px solid #E5E5E5"
                  borderRadius="32px"
                   px="20px"
                >
                  <HStack
                    align={"center"}
                    justify="space-between"
                    spaceY={"10px"}
                  >
                    <Text>Description</Text>
                    <Image src="src/assets/fleche.png" w="16px" h="10px" />
                  </HStack>
                  {/* <Divider color="black"/> */}
                  <HStack
                    align={"center"}
                    justify="space-between"
                    spaceY={"10px"}
                  >
                    <Text>Description</Text>
                    <Image src="src/assets/fleche.png" w="16px" h="10px" />
                  </HStack>
                </Box>

              <Box
  w="496px"
  boxShadow="0px 8px 16px #0000000F"
  border="0.5px solid #E5E5E5"
  borderRadius="32px"
  px="20px"
  h="217px"
>
  <VStack align="stretch">
    <HStack justify="space-between">
      <Text>Description</Text>
      <Image src="src/assets/fleche.png" w="16px" h="10px" />
    </HStack>

    <HStack justify="space-between">
      <Text>Description</Text>
      <Image src="src/assets/fleche.png" w="16px" h="10px" />
    </HStack>
  </VStack>
</Box>

              </Box>
            </VStack>
          </Box>
        </HStack>

    <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap="2px">
<Box>  <Image src="/src/assets/C2.png" borderRadius="12px" h="244px" w="244px" /></Box>
<Box>  <Image src="/src/assets/C2.png" borderRadius="12px" h="244px" w="244px" /></Box>
<Box>  <Image src="/src/assets/C2.png" borderRadius="12px" h="244px" w="244px" /></Box>
<Box>  <Image src="/src/assets/C2.png" borderRadius="12px" h="244px" w="244px" /></Box>
</Grid>


 <HStack align="flex-start" mt={8}>
          <Box h="546px" w="391px" bgColor={"white"} >
          <HStack alignItems={"center"} justifyContent={"center"}>
             <Image src="src/assets/star.svg" w="80px" h="80px" />
             <Text   fontFamily="Helvetica Neue"
  fontWeight="bold"
  fontSize="112px"
  lineHeight="136px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="center">5.0</Text>
          </HStack>

          <HStack alignItems={"center"} justifyContent={"space-around"}>
            <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center"><Text>100%</Text>
                <Text>Satisfaction</Text>
                </Box>
            </HStack>
              <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center"><Text>Excellente</Text>
                <Text>Qualité globale</Text>
                </Box>
            </HStack>
          </HStack>

          <Box color="black" px="10px" py="20px">
            <Text>Note globale (2 avis)</Text>

        

             <HStack alignItems={"center"} justifyContent={"space-around"} >
            <HStack>
               
                <Box color="black"  textAlign="center">
                   
               <Text>5</Text>
                </Box>
                 <Image src="src/assets/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="src/assets/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
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
                 <Image src="src/assets/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="src/assets/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
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
                 <Image src="src/assets/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="src/assets/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
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
                 <Image src="src/assets/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="src/assets/line.png" w="160px" h="3px" />
              <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
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
                 <Image src="src/assets/etoile.svg" w="13px" h="13px" />
            </HStack>
             <Image src="src/assets/line.png" w="160px" h="3px" color="grey"/>
              <HStack>
                <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                <Box color="black"  textAlign="center">
                 
                 <Text>2 (100%)</Text>
                </Box>
            </HStack>
          </HStack>
          </Box>
          </Box>





          <Box color="black" w="808px" h="543px" bgColor={"white"} >
            <VStack>
              <Box h="468px" borderRadius="32px" bg="#FFFFFF" p={5} my="10px" >
                <HStack >
<Text color="black">Avis clients</Text>
          <Text color="black">/</Text>
          
          <Text color="black">2 Avis</Text>

           <HStack  ml="auto" // <— pushes it to the right
                  display="flex">
      <Text>Les plus récents</Text>
      <Image src="src/assets/fleche.png" w="16px" h="10px" />
    </HStack>
        </HStack>
               <Box border="2px solid #ABACAD" borderRadius="16px" py="20px" px="10px" my="10px" >
                
                <HStack textAlign={"center"}>
                  <Image src="src/assets/profilepic.png" w="40px" h="40px" />
                 
              
                <Box>
                 <HStack> <Text>Aline Dupont ·</Text>
                    <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                     <Text>5.0</Text>
                    </HStack>
                 <HStack>
                    <Image src="src/assets/localisation.png" w="13px" h="13px" />
                   <Text>24 Oct. - 14:30</Text>
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
                    <HStack  textAlign="center" justifyContent={"center"}>
                      <Image src="src/assets/flag.png" w="12px" />
                      <Text>Répondre</Text>
                  
                    </HStack>
 <HStack  alignItems={"center"} textAlign="center" justifyContent={"center"}>
                      <Image src="src/assets/flagout.png" w="12px" />
                      <Text>Répondre</Text>
                 
                    </HStack>
                   
                  </HStack>

               
                </Box>
               </Box>
             
  <Box border="2px solid #ABACAD" borderRadius="16px" p="10px">
              
                <HStack textAlign={"center"}>
                  <Image src="src/assets/profilepic.png" w="40px" h="40px" />
                 
              
                <Box>
                 <HStack> <Text>Aline Dupont ·</Text>
                    <Image src="src/assets/etoile.svg" w="13px" h="13px" />
                     <Text>5.0</Text>
                    </HStack>
                 <HStack>
                    <Image src="src/assets/localisation.png" w="13px" h="13px" />
                   <Text>24 Oct. - 14:30</Text>
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
                    <HStack  textAlign="center" justifyContent={"center"}>
                      <Image src="src/assets/flag.png" w="12px" />
                      <Text>Répondre</Text>
                  
                    </HStack>
 <HStack  alignItems={"center"} textAlign="center" justifyContent={"center"}>
                      <Image src="src/assets/flagout.png" w="12px" />
                      <Text>Répondre</Text>
                 
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
