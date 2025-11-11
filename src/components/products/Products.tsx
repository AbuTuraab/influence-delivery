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
  Icon,


} from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
// import { CiYoutube } from "react-icons/ci";


export default function Products() {
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
                  textAlign="left"
                  variant="outline"
                  border="none"
                  bgColor={"transparent"}
                  fontFamily="Helvetica Neue"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="19px"
                  letterSpacing="0px"
                  color="#1A1A1A"
                  _focus={{ boxShadow: "none", borderColor: "transparent" }}
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
                  variant="outline"
                  border="none"
                  bgColor={"transparent"}
                  fontFamily="Helvetica Neue"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="19px"
                  letterSpacing="0px"
                  color="#1A1A1A"
                  _focus={{ boxShadow: "none", borderColor: "transparent" }}
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
                <Icon as={FaSearch} color="white"
                  w="12px" h="12px"
                />
              </Button>
            </Flex>





          </Container>
        </Box>




       <Flex
 
  align="center"

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
  <Box
    w="288px"
    h="48px"
    bgColor="black"
    borderRadius="16px"
    display="flex"
    alignItems="center"
  >
    <Text color="white" px="20px">Afficher les filtres</Text>
  </Box>

  <HStack>
    <Text>Produits</Text>
    <Text>/</Text>
    <Text>200</Text>
  </HStack>
</Flex>




       <Box >


        <Flex gap={4} justify={"center"} wrap="wrap" maxW="1200px" mx="auto" w="100%">



     <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px">
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"

  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text 
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px" >
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"

  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text w="61px"
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px">
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"
  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text w="61px"
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px">
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"
  
  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text w="61px"
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px">
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"
 
  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text w="61px"
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px">
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"
  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text w="61px"
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
  w="288px"
  h="403px"
  bgColor="white"
  borderRadius="24px"
  boxShadow="0px 8px 16px #0000000F"
>
  <Image
    src="/src/assets/C2.png"
    w="268px"
    h="268px"
    objectFit="cover"
    borderRadius="18px"
    mx="auto"
    mt="12px"   // <-- top margin here
  />



          <VStack align="flex-start" p="14px">
            <HStack w="100%" justify="space-between" align="center">
              <Text   fontFamily="Helvetica Neue"
  fontWeight="medium"
  fontSize="18px"
  lineHeight="23px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
                Rouge à levres - YS
              </Text>

              <HStack >
                <Image src="/src/assets/star.svg"   w="12px"
  h="12px"
  bgImage="url('/img/star.png')"
  bgSize="cover"
  bgRepeat="no-repeat"
  
  opacity={1} />
                <Text fontSize="14px" color="#1A1A1A" fontWeight="bold">
                  5.0
                </Text>
              </HStack>
            </HStack>

            <Text w="61px"
  h="16px"
  fontFamily="Helvetica Neue"
  fontStyle="normal"
  fontWeight="normal"
  fontSize="14px"
  lineHeight="16px"
  letterSpacing="0px"
  color="#7B7B7C"
  textAlign="left"
  opacity={1}>
              @lolarend
            </Text>

            <HStack w="100%" justify="space-between" align="center" mt="6px">
              <Text 
fontSize="bold"  textAlign="left"fontFamily="Helvetica Neue"
letterSpacing="0px;="
color="#121826"
opacity={1}>
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
                <Image src="/src/assets/icone-sac@2x.png" w="18px" h="18px"/>
              </Box>
            </HStack>
          </VStack>
        </Box>
        
        
        </Flex>
        
       </Box>







<Flex w="100%" justify="space-between" align="center" py="20px">

  {/* left side buttons */}
  <HStack  mx="auto" gap={4}>
    {/* back button */}
    <Box
      w="64px"
      h="43px"
      borderRadius="16px"
      bg="#FFFFFF"
      boxShadow="0px 8px 16px #0000000F"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    >
      <FaArrowLeft />
    </Box>

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