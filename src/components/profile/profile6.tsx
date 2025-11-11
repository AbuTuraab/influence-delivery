import {
    Image,
    Box,
    HStack,
    VStack,
    Text,
   
    Flex,
    Button,
    Input,
   
  
    Icon,
 
 

} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
// import { StarIcon } from "@chakra-ui/icons";
import {  FiChevronUp } from "react-icons/fi";

import { FaShareAlt, FaTiktok  } from "react-icons/fa";


export default function Profile6() {



    // const items = [
    //     { value: "a", title: "Catégorie", text: "Some value 1..." },

    // ]

    return (
        <>
            <Box bg="#F6F6F7" color={"black"} mt="40px">


  <HStack>


                                <Image
                                    src="/assets/home-hashtag.svg"
                                    w="12px"
                                    h="12px"
color={"black"}
                                />

                                <Text color="black">
                                    /
                                </Text>
                                <Text color="black">
                                  Influenceurs
                                </Text>
                                    <Text color="black">
                                    /
                                </Text>
                                    <Text color="black">
                                 Lila Glam
                          
                                </Text>
                                   <Text color="black">
                                    /
                                </Text>
                                   <Text color="black">
                                  Influenceurs
                                </Text>

                            </HStack>




               <Box
                    bgImage="url(/assets/image-proxy.png)"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    height="64px"
                    minH={{ base: "580px", md: "268px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent=""
                    px={{ base: 4, md: 10 }}
                    position={"relative"}
                    
                >

                     <Box
      bg="white"
      w="288px"


      p={4}

 bgColor="#FFFFFF"
  boxShadow="0px 3px 13px #0000000A"
  border="0.2px solid #E5E5E5"
  borderRadius="32px"
  opacity={1}      position={"absolute"}
      top="50px"
    >
      {/* top app icon */}
<Flex justify="space-between" align="center"  mb={3} mt="-30px" >

  {/* app image left */}
  <Image
    src="/assets/curology.png"
    alt="Curology"
    w="99px"
    h="99px"

  />

  {/* icons right */}
  <HStack >
    <Box p={2} borderRadius="50%" bg="#F3EEFF">
      <FaShareAlt color="black" />
    </Box>
    <Box p={2} borderRadius="50%" bg="#F3EEFF">
      <FaHeart color="black" />
    </Box>
  </HStack>

</Flex>

      {/* share + rating row */}
      <Flex justifyContent={"space-between"} align="center" gap={2} mb={2}>
      
      
    

      <Text fontWeight="bold" fontSize="lg">Curology</Text>
        <HStack>
            <Image src="/assets/star.svg" w="12px" h="12px" />
            <Text fontSize="14px" fontWeight="bold" color="#1A1A1A">5.0</Text>
          </HStack>
 </Flex>
      <Text fontSize="xs" color="gray.500">📍 Bordeaux, France</Text>
      <Text fontSize="xs" color="gray.500">📅 Depuis 2025</Text>
 
        
   
<Box mt="20px">

      <Text fontWeight="semibold" fontSize="sm" mb={2}>Propriétaire</Text>

      <HStack align="center" mb={3}>
        <Image  src="https://i.pravatar.cc/150?img=32" w="40px" h="40px" borderRadius="50%" />
        <VStack  align="start">
          <Text fontSize="sm" fontWeight="medium">Lila Glam</Text>
          <Text fontSize="xs" color="gray.500">@lilaglam</Text>
        </VStack>
      </HStack>
</Box>

      {/* stats */}
      <Flex justify="space-around" align="center" mb={3} mx="auto">
        <VStack >
          <Text fontSize="sm" fontWeight="bold">234K</Text>
          <Text fontSize="xs" color="gray.500">Followers</Text>
        </VStack>
        <VStack >
        
            <Text fontWeight="bold" fontSize="sm">4.5</Text>
        <Image src="/assets/star.svg" w="12px" h="12px" />
        </VStack>
      </Flex>

      {/* tiktok badges */}
      <HStack justify="space-between" mb={3}>
        {[1,2,3].map(i => (
          <HStack
            key={i}
           
            px={3}
            py="3px"
            borderRadius="full"
            bg="gray.100"
          >
           < Icon as={FaTiktok} w="25px" h="25px"/>
            <Text fontSize="xs">128K</Text>
          </HStack>
        ))}
      </HStack>

      <Flex justify="center" mt={2}>
        <Text fontSize="xs" color="gray.600" fontWeight="medium">
          Réduire
        </Text>
        <FiChevronUp style={{ marginLeft: 4 }} />
      </Flex>
    </Box>
                
                </Box>








                <Box >


                      


                    <Flex  gap={6}
  maxW="900px"
  mx="auto"
  w="100%"
  ml="400px"
  mt="20px"

  
  // *** THIS IS THE IMPORTANT FIX ***
  wrap="nowrap"
  
  >



                      
       

                  
                     

                     
                     <Box> 
                <Flex 

                direction={{ base:"column", md:"row" }}   // <---- MAKE THEM STACK
  align={{ base:"center", md:"center" }}   // <---- center them vertically

  justify={{ base:"center", md: "space-between" }}
mb="20px"

  gap={{ base: 4, md: 0 }}
                >
                         <Flex
                            bg="white"
                            w="500px"
                            maxW="95%"
                            mx="auto"
                            borderRadius="24px"
                            align="center"
                            p="18px"
                            gap="20px"
                            py={{ base: 4, md: 0 }}
                            h="64px"
                            textAlign="center"
                            justify={{ base: "center", md: "space-between" }}

                        >
                            {/* LEFT INPUT */}
                            <Box flex="1" >
                                <Text fontFamily="Helvetica Neue"      // or var(--unnamed-font-family-helvetica-neue)
                                    fontWeight="normal"
                                    fontStyle="normal"
                                    fontSize="12px"
                                    lineHeight="14px"
                                    letterSpacing="0px"
                                    color="#1A1A1A"
                                    textAlign="left"
                                    pl="11px"
                                    py={1}
                                    opacity="1">Chercher un produit</Text>
                                <Input
                                    placeholder="Nom du produit..."
                                borderColor="transparent"
                                    textAlign="left"
                                    fontFamily="Helvetica Neue"
                                    fontSize="16px"
                                    fontWeight="500"
                                    lineHeight="19px"
                                    letterSpacing="0px"
                                    color="#1A1A1A"
                                    _placeholder={{
                                        fontFamily: "Helvetica Neue",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        lineHeight: "19px",
                                        letterSpacing: "0px",
                                        color: "#1A1A1A",
                                        opacity: 1,

                                           }}
                                />
                            </Box>

                            {/* RIGHT INPUT */}
                           
                            {/* SEARCH BUTTON */}
                            <Button
                                bg="black"
                                w={{ base: "54px", md: "69px" }}
                                h="54px"

                                borderRadius="20px"
                            >
                               <Icon  as={FaSearch} color="white"
                                    w="12px" h="12px"
                                 />
                            </Button>
                        </Flex>

                    <HStack ml={"auto"}>
                        <Text>Produits</Text>
                       
                        <Text>/</Text>
                         <Text>8</Text>
                    </HStack>
                </Flex>
       <Flex    gap={4}
    wrap="wrap"
    flex="1"
    justify="flex-start"> 
      
          <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/assets/C2.png"
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px" 
          />
      
          {/* heart */}
          <Box
            position="absolute"
            top="10px"
            right="20px"
            w="32px"
            h="32px"
          
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 12px rgba(0,0,0,0.12)"
            
       bg="#FFFFFF"
        opacity={0.3}
          >
            <Icon as={FaHeart} w="18px" h="16px" color="red"/>
          </Box>
      
          {/* bottom left + rating */}
          <Box
            position="absolute"
            bottom="12px"
            left="12px"
            right="12px"
            color="white"
          >
            <HStack justify="space-between" w="100%" padding={3}>
              <VStack align="flex-start" >
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/assets/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} />
         
       <Box>
             <Text fontWeight="700" color="#7344E4" bgColor={"#F9F5FF "}>Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C">Lifestyle / Voyages</Text>
        </VStack>
      </Box>

     
   <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="403px"
 
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/assets/C2.png"
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px" 
          />
      
          {/* heart */}
          <Box
            position="absolute"
            top="10px"
            right="20px"
            w="32px"
            h="32px"
          
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 12px rgba(0,0,0,0.12)"
            
       bg="#FFFFFF"
        opacity={0.3}
          >
            <Icon as={FaHeart} w="18px" h="16px" color="red"/>
          </Box>
      
          {/* bottom left + rating */}
          <Box
            position="absolute"
            bottom="12px"
            left="12px"
            right="12px"
            color="white"
          >
            <HStack justify="space-between" w="100%" padding={3}>
              <VStack align="flex-start" >
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/assets/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} />
         
       <Box>
             <Text fontWeight="700" color="#7344E4" bgColor={"#F9F5FF "}>Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C">Lifestyle / Voyages</Text>
        </VStack>
      </Box>
        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/assets/C2.png"
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px" 
          />
      
          {/* heart */}
          <Box
            position="absolute"
            top="10px"
            right="20px"
            w="32px"
            h="32px"
          
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 12px rgba(0,0,0,0.12)"
            
       bg="#FFFFFF"
        opacity={0.3}
          >
            <Icon as={FaHeart} w="18px" h="16px" color="red"/>
          </Box>
      
          {/* bottom left + rating */}
          <Box
            position="absolute"
            bottom="12px"
            left="12px"
            right="12px"
            color="white"
          >
            <HStack justify="space-between" w="100%" padding={3}>
              <VStack align="flex-start" >
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/assets/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} />
         
       <Box>
             <Text fontWeight="700" color="#7344E4" bgColor={"#F9F5FF "}>Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C">Lifestyle / Voyages</Text>
        </VStack>
      </Box>  <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/assets/C2.png"
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px" 
          />
      
          {/* heart */}
          <Box
            position="absolute"
            top="10px"
            right="20px"
            w="32px"
            h="32px"
          
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 12px rgba(0,0,0,0.12)"
            
       bg="#FFFFFF"
        opacity={0.3}
          >
            <Icon as={FaHeart} w="18px" h="16px" color="red"/>
          </Box>
      
          {/* bottom left + rating */}
          <Box
            position="absolute"
            bottom="12px"
            left="12px"
            right="12px"
            color="white"
          >
            <HStack justify="space-between" w="100%" padding={3}>
              <VStack align="flex-start" >
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/assets/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} />
         
       <Box>
             <Text fontWeight="700" color="#7344E4" bgColor={"#F9F5FF "}>Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C">Lifestyle / Voyages</Text>
        </VStack>
      </Box>  <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/assets/C2.png"
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px" 
          />
      
          {/* heart */}
          <Box
            position="absolute"
            top="10px"
            right="20px"
            w="32px"
            h="32px"
          
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 12px rgba(0,0,0,0.12)"
            
       bg="#FFFFFF"
        opacity={0.3}
          >
            <Icon as={FaHeart} w="18px" h="16px" color="red"/>
          </Box>
      
          {/* bottom left + rating */}
          <Box
            position="absolute"
            bottom="12px"
            left="12px"
            right="12px"
            color="white"
          >
            <HStack justify="space-between" w="100%" padding={3}>
              <VStack align="flex-start" >
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/assets/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} />
         
       <Box>
             <Text fontWeight="700" color="#7344E4" bgColor={"#F9F5FF "}>Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C">Lifestyle / Voyages</Text>
        </VStack>
      </Box>  <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/assets/C2.png"
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px" 
          />
      
          {/* heart */}
          <Box
            position="absolute"
            top="10px"
            right="20px"
            w="32px"
            h="32px"
          
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0px 4px 12px rgba(0,0,0,0.12)"
            
       bg="#FFFFFF"
        opacity={0.3}
          >
            <Icon as={FaHeart} w="18px" h="16px" color="red"/>
          </Box>
      
          {/* bottom left + rating */}
          <Box
            position="absolute"
            bottom="12px"
            left="12px"
            right="12px"
            color="white"
          >
            <HStack justify="space-between" w="100%" padding={3}>
              <VStack align="flex-start" >
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/assets/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} />
         
       <Box>
             <Text fontWeight="700" color="#7344E4" bgColor={"#F9F5FF "}>Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C">Lifestyle / Voyages</Text>
        </VStack>
      </Box>
      

      </Flex>
      
     </Box>
        

                        



                    </Flex>

                </Box>







                <Flex w="100%" justify="space-between" align="center" py="20px">

                    {/* left side buttons */}
                    <HStack mx="auto" gap={4}>
                        {/* back button */}
                        

                        {/* next page button */}
                        <Flex
                            h="43px"
                            w="179px"
                            px="24px"
                            borderRadius="14px"
                            align="center"
                            justify="center"
                            bg="#7344E4"
                            color="white"
                            cursor="pointer"
                            fontFamily="Helvetica Neue"
                            fontWeight="600"
                            fontSize="14px"
                            gap="6px"
                        >
                            <Text>
                                Page suivante
                            </Text>

                            <FaArrowRight />
                        </Flex>
                    </HStack>

                    {/* right side page numbers */}
                    <HStack fontFamily="Helvetica Neue"
                        fontSize="14px" color="#1A1A1A"
                        mr="90px">
                        <Text>Page</Text>
                        <Box
                            w="48px"
                            h="32px"
                            px="12px"
                            py="4px"
                            bg="#FFFFFF"
                            borderRadius="14px"
                            boxShadow="0px 8px 16px #0000000F"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                            <Text fontWeight="600">2</Text>
                        </Box>

                        <Text>de 16</Text>
                    </HStack>

                </Flex>


            </Box>
        </>
    )
}