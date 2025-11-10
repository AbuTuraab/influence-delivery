import {
    Image,
    Box,
    HStack,
    VStack,
    Text,
    Container,
    Flex,
    Button,
    Input,
   
    Accordion,
   

    Checkbox,
 
    Span,
    Icon

} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";


export default function Filter() {



    const items = [
        { value: "a", title: "Catégorie", text: "Some value 1..." },

    ]

    return (
        <>
            <Box bg="#F6F6F7" color={"black"} mt="-66px">
                <Box
                    bgImage="url(/MaskGroup5.png)"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    height="64px"
                    minH={{ base: "580px", md: "268px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 4, md: 10 }}
                >
                    <Container maxW="container.xl" textAlign="center" >

                        <Box mt={{ base: "-100px", md: "100px", lg: "80px" }}
                            ml={{ base: "70px", md: "100px", lg: "75px" }}
                        >
                            <HStack>


                                <Image
                                    src="/src/assets/home-hashtag.svg"
                                    w="12px"
                                    h="12px"

                                />

                                <Text color="white">
                                    /
                                </Text>
                                <Text color="white">
                                    Produits
                                </Text>

                            </HStack>
                        </Box>

                        <Text
                            fontFamily="Helvetica Neue"     // or your var(--unnamed-font-family-helvetica-neue)
                            fontWeight="bold"
                            fontStyle="normal"
                            fontSize="32px"
                            lineHeight="64px"
                            letterSpacing="0px"
                            color="#FFFFFF"
                            textAlign="center"
                            opacity="1"
                        >
                            Explorer les produits des influenceurs
                        </Text>

                        <Flex
                            bg="white"
                            w="900px"
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
                            <Box flex="1">
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
                                    opacity="1">Où ?</Text>
                                <Input
                                    placeholder="Ville, code postal, adresse..."
                                    textAlign="left"
 borderColor="transparent"
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
                                        textAlign: "left"
                                    }}
                                />
                            </Box>

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





                    </Container>
                </Box>




              




                <Flex

                    align="right"

                    px={4}

                    w="1200px"

                    maxW="95%"
                    mx="auto"

                    p="18px"
                    gap="20px"
                    py={{ base: 4, md: 0 }}
                    h="64px"
                    textAlign="center"
                    justify={{ base: "center", md: "space-between" }}


                >
                    {/* <Box
    w="288px"
    h="48px"
    bgColor="black"
    borderRadius="16px"
    display="flex"
    alignItems="center"
  >
    <Text color="white" px="20px">Afficher les filtres</Text>
  </Box> */}

                    <HStack ml={"auto"}>
                        <Text>Influenceurs</Text>
                        <Text>/</Text>
                        <Text>200</Text>
                    </HStack>
                </Flex>




                <Box >




                    <Flex  gap={6}
  maxW="1200px"
  mx="auto"
  w="100%"
  align="flex-start"
  // *** THIS IS THE IMPORTANT FIX ***
  wrap="nowrap">



                          <Box
                    w="288px"
                    h="900px"
                    bg="white"
                    boxShadow="0px 8px 16px #0000000F"
                    borderRadius="24px"
                    p="20px"
                >


                    {/* top close filter button */}
                    <Flex w="240px" justify="space-between" align="center" mb="20px">
                        <Text fontWeight="bold">Cacher les filtres</Text>
                        <Box
                            w="24px"
                            h="24px"
                            borderRadius="50%"
                            bg="#F2F2F2"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="bold"
                            textAlign="center"
                            
                        >
                            ×
                        </Box>
                    </Flex>
                    <Accordion.Root variant={"plain"} collapsible defaultValue={["b"]}>

                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value}>
                                <Accordion.ItemTrigger>
                                    <Span flex="1">Catégorie</Span>



                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>

                                <Accordion.ItemContent>

                                    <Accordion.ItemBody>
                                        <Checkbox.Root>
                                            <Checkbox.HiddenInput />

                                            <Flex align={"center"}
                                                gap={"60px"}
                                                alignContent={"center"}>
                                                <Checkbox.Control />
                                                <Flex gap="20px">
                                                    <Checkbox.Label>Beauté</Checkbox.Label>
                                                    <Box>
                                                        <Text>56</Text>
                                                    </Box>
                                                </Flex>

                                            </Flex>

                                        </Checkbox.Root>


                                    </Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>


                    <Box>
                        <Text
                            mt="12px"
                            color="#7344E4"
                            fontSize="14px"
                            cursor="pointer"
                            fontWeight="semibold"
                        >
                            Effacer toutes les catégories
                        </Text>
                    </Box>


                    <Accordion.Root variant={"plain"} collapsible defaultValue={["b"]}>

                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value}>
                                <Accordion.ItemTrigger>
                                    <Span flex="1">Trier par</Span>



                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>

                                <Accordion.ItemContent>

                                    <Accordion.ItemBody>
                                        <Checkbox.Root>
                                            <Checkbox.HiddenInput />

                                            <Flex align={"center"}
                                                gap={"60px"}
                                                alignContent={"center"}>
                                                <Checkbox.Control />
                                                <Flex gap="20px">
                                                    <Checkbox.Label>Beauté</Checkbox.Label>
                                                    <Box>
                                                        <Text>56</Text>
                                                    </Box>
                                                </Flex>

                                            </Flex>

                                        </Checkbox.Root>


                                    </Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>

                    {/* map preview */}
                    {/* <Box
        borderRadius="16px"
        overflow="hidden"
        bg="#E4E4E4"
        mb="24px"
      >
        <Image src="/src/assets/map.png" w="100%" h="100px" objectFit="cover" />
        <Button
          mt="12px"
          mb="12px"
          color="black"
          bg="#B6E7FF"
          w="full"
          borderRadius="12px"
        >
          Voir dans la carte
        </Button>
      </Box> */}

                    {/* Accordion categories */}
                    {/* <Accordion.Root > */}
                    {/* <Accordion.Item>
          <AccordionButton>
            <Text fontSize="18px" flex="1" textAlign="left">Catégorie</Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <VStack align="start" spacing="12px">
              <Flex align="center" gap="6px">
                <Checkbox defaultChecked colorScheme="purple">Beauté</Checkbox>
                <Badge bg="#EEE1FF" color="#6A3BC8">56</Badge>
              </Flex>
              <Flex align="center" gap="6px">
                <Checkbox>Mode</Checkbox>
                <Badge bg="#EEE1FF">34</Badge>
              </Flex>
              <Flex align="center" gap="6px">
                <Checkbox>Sport et santé</Checkbox>
                <Badge bg="#EEE1FF">26</Badge>
              </Flex>
            </VStack>

            <Text
              mt="12px"
              color="#7344E4"
              fontSize="14px"
              cursor="pointer"
              fontWeight="semibold"
            >
              Effacer toutes les catégories
            </Text>
          </AccordionPanel>
        </Accordion.Item> */}

                    {/* TRIER PAR */}
                    {/* <Accordion.Item mt="20px">
          <AccordionButton>
            <Text fontSize="18px" flex="1" textAlign="left">Trier par</Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
          <RadioGroup defaultValue="pop">
              <VStack align="start">
                <Radio value="pop">Popularité</Radio>
                <Radio value="croissant">Prix croissant</Radio>
                <Radio value="decroissant">Prix décroissant</Radio>
                <Radio value="recent">Plus récents</Radio>
              </VStack>
            </RadioGroup> *
          </AccordionPanel>
        </Accordion.Item>  */}
                    {/* </Accordion.Root> */}
                </Box>
                      
                      
       

                  
                     

                     
                     <Box>
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
            src="/src/assets/C2.png"
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
                <Image src="/src/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/src/assets/speaker.svg"
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
  bgColor="red"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
  fontFamily="Helvetica Neue"
      >
        {/* Image + top section */}
        <Box position="relative">
          <Image
            src="/src/assets/C2.png"
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
                <Image src="/src/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/src/assets/speaker.svg"
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
            src="/src/assets/C2.png"
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
                <Image src="/src/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/src/assets/speaker.svg"
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
            src="/src/assets/C2.png"
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
                <Image src="/src/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/src/assets/speaker.svg"
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
            src="/src/assets/C2.png"
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
                <Image src="/src/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/src/assets/speaker.svg"
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
            src="/src/assets/C2.png"
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
                <Image src="/src/assets/star.svg" w="12.17px" h="12.16px" />
                <Text fontWeight="600">4.9</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      
        {/* lower white area */}
        <VStack py="16px">
            
           <Image 
            src="/src/assets/speaker.svg"
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