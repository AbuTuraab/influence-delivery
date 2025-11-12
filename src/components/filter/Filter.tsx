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
  
   Checkbox,
    Accordion,

   Stack,
  
Link,
 
 CheckboxGroup,
    Span,
    Icon

} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import  {useState} from "react";


function MapPreview() {
  const position: [number, number] = [6.5244, 3.3792]; // Lagos
  const AnyMapContainer: any = MapContainer;

  return (
    <Box borderRadius="16px" overflow="hidden" h="94px" mb="10px">
      <AnyMapContainer center={position} zoom={13} style={{ height: "94px", width: "240px" }}>
        <TileLayer
         
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Lagos, Nigeria</Popup>
        </Marker>
      </AnyMapContainer>
    </Box>
  );
}


export default function Filter() {



    const items = [
        { value: "a", title: "Catégorie", text: "Some value 1..." },

    ]

    
     const [check_Items, set_Check_Items] = useState([]);
    const chckFn = (values:any) => {
        set_Check_Items(values);
    };

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
                                    src="/home-hashtag.svg"
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
                    

                    <HStack ml={"auto"}>
                        <Text fontFamily="Helvetica Neue"
  fontSize="24px"
  fontWeight="bold"
  lineHeight="29px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="right"
  opacity={1}>Influenceurs</Text>
                       <HStack fontFamily="Helvetica Neue"
  
  fontWeight="normal"
  
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="right"
  opacity={1}>
     <Text>/</Text>
    <Text>200</Text>
   </HStack>
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
                    <Flex w="240px" h="48px" justify="space-around" align="center" mb="20px"   bg="#FFFFFF"
  border="0.2px solid #C4C4C5"
  boxShadow="0px 5px 9px #0000000F"
  borderRadius="16px"
  opacity={1}>
                        <Text fontWeight="bold">Cacher les filtres</Text>
                     
<Link href="/products"> <Image src="/close-square.png" color="black"/></Link>

                    </Flex>
                    <MapPreview />
                    <Accordion.Root variant={"plain"} collapsible defaultValue={["b"]}>

                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value}>
                                <Accordion.ItemTrigger  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1}>  <Image src="/icoe-boite.png" w="22" h="22" />
                                    <Span flex="1">
                                    
                                      Catégorie
                                      
                                      </Span>



                                    <Accordion.ItemIndicator  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1} />
                                </Accordion.ItemTrigger>

                                <Accordion.ItemContent>

                                    <Accordion.ItemBody>
                                      <Box p={5}>
               
                <Stack >
                   
                 
                  
                  
                    <CheckboxGroup
                        colorScheme='pink'
                        defaultValue={['option1', 'option2']}
                        value={check_Items}
                        onChange={chckFn}
                    >
                      
                    </CheckboxGroup>
                     <Checkbox.Root size='lg'
                            colorScheme='purple' defaultChecked>
                            Beaut
                        </Checkbox.Root>
                </Stack>
            </Box>





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
                                <Accordion.ItemTrigger  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1}>

    <Image src="/icone-fleches.png" />
                                    <Span flex="1">Trier par</Span>



                                    <Accordion.ItemIndicator  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1} />
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



                    <Accordion.Root variant={"plain"} collapsible defaultValue={["b"]}>

                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value}>
                                <Accordion.ItemTrigger  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1}>

    <Image src="/icone-etoile.png" />
                                    <Span flex="1">Note</Span>



                                    <Accordion.ItemIndicator  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1} />
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



                    <Accordion.Root variant={"plain"} collapsible defaultValue={["b"]}>

                        {items.map((item, index) => (
                            <Accordion.Item key={index} value={item.value}>
                                <Accordion.ItemTrigger  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1}>

    <Image src="/icone-euro.png" />
                                    <Span flex="1">Prix</Span>



                                    <Accordion.ItemIndicator  fontFamily="Helvetica Neue"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"

  opacity={1} />
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

                 
                </Box>
                      
                      
       

                  
                     

                     
                     <Box>
       <Flex    gap={4}
    wrap="wrap"
    flex="1"
    justify="flex-start"> 
      
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

