import {
    Box,
    Text,
    Flex,
    HStack,
    VStack,
    Image,
    Icon
} from "@chakra-ui/react"
import { FaHeart } from "react-icons/fa6";

export default function Favorites(){
    return(
        <>
        <Box>  
            <Flex
         
          align="center"
        
        
        
             w="1200px"
                  
                      maxW="100%"
                      mx="auto"
                 
                      gap="20px"
                      py={{ base: "40px", md: "50px" }}
                      h="64px"
                      textAlign="center"
                      justify={{ base: "center", md: "space-between" }}
        
        
           >
          <Box
          
            h="38px"
           
            borderRadius="16px"
            display="flex"
            alignItems="center"
             fontSize={["32px", "32px", "32px"]}
          fontWeight="bold"
          color="#1A1A1A"
          flex="1"
          >
            <Text color="black" px="20px">Favoris</Text>
          </Box>
        
        
        </Flex>
        
         <Flex
         
          align="center"
        
        
        
             w="1200px"
                  
                      maxW="100%"
                      mx="auto"
                  
                    
                      gap="20px"
                      py={{ base: 4, md: 0 }}
                      h="64px"
                      textAlign="center"
                      justify={{ base: "center", md: "space-between" }}
        
        
           >
         <HStack gap={10}>
             <Box
            w="145px"
            h="45px"
            bgColor="black"
            borderRadius="16px"
          display="flex"
  alignItems="center"
  justifyContent="center"
  textAlign="center"
          >
            <Text color="white" >Influenceurs</Text>
             
          </Box>
          <Text color={"black"}>Produits</Text>
            <Text color={"black"}>Boutiques</Text>
         </HStack>
        
          <HStack color={"black"}>
            <Text>4 influenceurs</Text>
           
          </HStack>
        </Flex>











<Box>


 <Flex gap={4} justify={"center"} wrap="wrap" maxW="1200px" mx="auto" w="100%">



        
        
     
     <Box>
       <Flex   gap={4}
  justify="center"
  wrap="wrap"
  maxW="1200px"
  mx="auto"
  w="100%"
  align="flex-start"> 
      
          <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>

        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>


        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>


        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>


        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>


        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>


        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>

        <Box
        w={["45%", "288px"]} // (mobile = 45%, desktop = fixed 288px)
  minW="250px"
  h="394px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative" zIndex={2}>
          <Image
            src="/C2.png"
          w="268px"
          h="285px"
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
              <VStack align="flex-start">
                <Text fontWeight="700" fontSize="18px">Zoé Chic</Text>
                <Text fontSize="14px" opacity={0.8}>@nom · 128K</Text>
              </VStack>
      
              <HStack>
                <Image src="/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/speaker.svg"
          w="37px"
          h="23px"
        
          mx="auto"
         top={"-26px"}
          position={"relative"} zIndex={2} />
         
       <Box position="absolute" bgColor={"#F9F5FF"} w="268px" h="281px" borderRadius={"24px"} textAlign={"center"} 
                    spaceY={"10px"}
                    mt="-250px" zIndex={0}>
             <Text fontWeight="700" color="#7344E4" mt="250px" >Sponsor dès <span style={{color:"#7344E4"}}>200€</span></Text>
       </Box>
      
          <Text fontSize="14px" color="#7B7B7C" mt="10px">Lifestyle / Voyages</Text>
        </VStack>
      </Box>

     
      
      </Flex>
      
     </Box>
        
        
        
        
        
        </Flex>
</Box>















        </Box>
        </>
    )
}