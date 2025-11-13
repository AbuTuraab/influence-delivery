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
import { useState } from "react";

export default function Favorites(){
    type Tab = "Influenceurs" | "Produits" | "Boutiques";
    const [activeTab, setActiveTab] = useState<Tab>("Influenceurs");
    
    const tabData: Record<Tab, { count: number; label: string }> = {
        Influenceurs: { count: 4, label: "influenceurs" },
        Produits: { count: 4, label: "produits" },
        Boutiques: { count: 8, label: "boutiques" }
    };
    
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
                <HStack gap={"1px"}>
                    {(Object.keys(tabData) as Tab[]).map((tab) => (
                        <Box
                            key={tab}
                            w="145px"
                            h="45px"
                            bgColor={activeTab === tab ? "black" : "transparent"}
                            borderRadius="16px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            cursor="pointer"
                            onClick={() => setActiveTab(tab)}
                           
                        >
                            <Text color={activeTab === tab ? "white" : "black"}>
                                {tab}
                            </Text>
                        </Box>
                    ))}
                </HStack>
        
                <HStack color={"black"}>
                    <Text>
                        {tabData[activeTab].count} {tabData[activeTab].label}
                    </Text>
                </HStack>
            </Flex>

            <Box>
                <Flex gap={4} justify={"center"} wrap="wrap" maxW="1200px" mx="auto" w="100%">
                    {activeTab === "Influenceurs" && (
                        <Flex gap={4} justify="center" wrap="wrap" maxW="1200px" mx="auto" w="100%" align="flex-start">
                            {["/31.jpg", "/33.png", "/29.png", "/21.png"].map((img, idx) => (
                                <Box
                                    key={idx}
                                    w={["45%", "288px"]}
                                    minW="250px"
                                    h="394px"
                                    bgColor="white"
                                    borderRadius="24px"
                                    boxShadow="0px 8px 16px #0000000F"
                                    fontFamily="Helvetica Neue"
                                >
                                    <Box position="relative" zIndex={2}>
                                        <Image
                                            src={img}
                                            w="268px"
                                            h="285px"
                                            objectFit="cover"
                                            borderRadius="18px"
                                            mx="auto"
                                            mt="12px" 
                                        />
                                        
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
                                    
                                    <VStack py="16px">
                                        <Image 
                                            src="/speaker.svg"
                                            w="37px"
                                            h="23px"
                                            mx="auto"
                                            top={"-26px"}
                                            position={"relative"} 
                                            zIndex={2} 
                                        />
                                        
                                        <Box 
                                            position="absolute" 
                                            bgColor={"#F9F5FF"} 
                                            w="268px" 
                                            h="281px" 
                                            borderRadius={"24px"} 
                                            textAlign={"center"}
                                            mt="-250px" 
                                            zIndex={0}
                                        >
                                            <Text fontWeight="700" color="#7344E4" mt="250px">
                                                Sponsor dès <span style={{color:"#7344E4"}}>200€</span>
                                            </Text>
                                        </Box>
                                        
                                        <Text fontSize="14px" color="#7B7B7C" mt="10px">
                                            Lifestyle / Voyages
                                        </Text>
                                    </VStack>
                                </Box>
                            ))}
                        </Flex>
                    )}
                    
                   {activeTab === "Produits" && (
  <Flex
    gap={4}
    justify="center"
    wrap="wrap"
    maxW="1200px"
    mx="auto"
    w="100%"
    align="flex-start"
  >
    {[
      "/215.png",
      "/14.png",
      "/50.png",
      "/179.png",
     
    ].map((img, idx) => (
      <Box
        key={idx}
        w={["45%", "288px"]}
        minW="288px"
        h="403px"
        bgColor="white"
        borderRadius="24px"
        boxShadow="0px 8px 16px #0000000F"
        fontFamily="Helvetica Neue"
        position="relative"
      >
        {/* Heart Icon */}
        <Box
          position="absolute"
           top="20px"
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
          zIndex={2}
        >
          <Icon as={FaHeart} w="18px" h="16px" color="red" />
        </Box>

        {/* Product Image */}
        <Image
          src={img}
          w="268px"
          h="268px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
          mt="12px"
        />

        {/* Product Details */}
        <VStack align="flex-start" p="14px">
          <HStack w="100%" justify="space-between" align="center">
            <Text
              fontFamily="Helvetica Neue"
              fontWeight="medium"
              fontSize="18px"
              lineHeight="23px"
              color="#1A1A1A"
              textAlign="left"
            >
              Rouge à lèvres - YS
            </Text>

            <HStack>
              <Image src="/star.svg" w="12px" h="12px" />
              <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                5.0
              </Text>
            </HStack>
          </HStack>

          <Text
            h="16px"
            fontFamily="Helvetica Neue"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="16px"
            color="#7B7B7C"
            textAlign="left"
          >
            @lolarend
          </Text>

          <HStack w="100%" justify="space-between" align="center" mt="6px">
            <Text
              fontWeight="bold"
              textAlign="left"
              fontFamily="Helvetica Neue"
              color="#121826"
            >
              69,00€
            </Text>

            <Box
              w="60px"
              h="40px"
              borderRadius="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
            >
              <Image src="/icone-sac@2x.png" w="18px" h="18px" />
            </Box>
          </HStack>
        </VStack>
      </Box>
    ))}
  </Flex>
)}

                    
                    {activeTab === "Boutiques" && (
                        <Box textAlign="center" py={10}>
                            <Text fontSize="24px" color="gray.500">
                                Contenu des boutiques à venir
                            </Text>
                        </Box>
                    )}
                </Flex>
            </Box>
        </Box>
        </>
    )
}