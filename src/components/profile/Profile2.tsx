import { Box, Flex, Image, Text, HStack, VStack, Button, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
// import { RiTwitterXFill } from "react-icons/ri";
// import { LuShoppingBag } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";



function BoutiqueCard() {
  return (
    <Box
      borderRadius="32px"
      boxShadow="0px 8px 16px #0000000F"
      border="2px solid #E5E5E5"
      overflow="hidden"
      w={{ base: "100%", md: "372px" }}
      h="197px"
      bg="white"
      p="10px"
      mb="10px"
      mx="auto"
    >
      {/* image area */}
      <Box >
        <Image
          src="/C2.png"
          w="352px"
          h="117px"
          objectFit="cover"
          borderRadius="18px"
          mx="auto"
        />
      </Box>

      <VStack align="stretch" px="10px">
        <HStack justify="space-between">
          <Text fontFamily="Helvetica Neue" fontWeight="500" fontSize="18px" color="#1A1A1A">
            Curology
          </Text>

          <HStack>
            <Image src="/star.svg" w="12px" h="12px" />
            <Text fontSize="14px" fontWeight="bold" color="#1A1A1A">5.0</Text>
          </HStack>
        </HStack>

        <HStack justify="space-between">
          <Text fontFamily="Helvetica Neue" fontSize="14px" color="#7B7B7C">@lilaglam</Text>
          <Text fontSize="14px" color="#7B7B7C">8 produits</Text>
        </HStack>
      </VStack>
    </Box>
  );
}



export default function Profile2Page() {


  const campaigns = [
    { icon: <FaInstagram size={26} />, title: "Story Instagram", price: "200€" },
    { icon: <FaTiktok size={26} />, title: "Vidéo TikTok", price: "260€" },
    { icon: <CiYoutube size={26} />, title: "Short YouTube", price: "310€" },
    { icon: <FaFacebook size={26} />, title: "Post Facebook", price: "195€" },
    { icon: <Image src="src/unbox.svg" />, title: "Vidéo unboxing", price: "325€" },
  ];

  const tabs = [
    "Tous", "Instagram", "Facebook", "TikTok", "YouTube", "X", "Autres services"
  ];




  return (
    <>
      <Box mt={{ base: "-100px", md: "100px", lg: "40px" }}
        ml={{ base: "70px", md: "100px", lg: "75px" }}
        boxShadow="0px 8px 16px #0000000F" bgColor="#F2EDFC">


        <HStack>
          <Image
            src="/home-hashtag.png"
            w="12px"
            h="12px"
            color={"black"}
          />

          <Text color="black">/</Text>
          <Text color="black">Influenceurs</Text>
          <Text color="black">/</Text>
          <Text color="black">Lila Glam</Text>
        </HStack>
        <Flex minH="100vh" p={6} fontFamily="Helvetica Neue"
        
          direction={{ base: "column", lg: "row" }}  
        >



          {/* LEFT SECTION */}
          <Box flex="1" mr={6}  >
            {/* big image grid */}





              <Box
          
                borderRadius="24px"
                boxShadow="0px 8px 16px #0000000F"
                overflow="hidden"
               
              >
                <Flex gap="5px"   direction={{ base: "column", lg: "row" }}  >
                  <Image
                    src="/215.png"
                    flex="1"
                    h="400px"
                    objectFit="cover"
                    borderRadius="32px 0px 0px 32px"
                  
                  />

                  <Flex wrap="wrap"  flex="1">
                    <Image src="/215.png" w="50%" h="200px" pb="2.5px" />
                    <Image src="/215.png" w="50%" h="200px" borderRadius="0px 32px 0px 0px" pb="2.5px" pl="5px" />
                    <Image src="/215.png" w="50%" h="200px" pt="2.5px" />

                    <Box position="relative" w="50%" h="200px" pl="5px" pt="2.5px">
                      <Image src="/215.png" w="100%" h="100%"/>

                      <Box
                        position="absolute"
                        bottom={4}
                        right={4}
                        w="80px"
                        h="32px"
                        bg="#00000029"
                        borderRadius="24px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text color="black" fontSize="12px" fontWeight="500" borderRadius="0px 0px 32px 0px">
                          Voir tout
                        </Text>
                      </Box>
                    </Box>
                  </Flex>
                </Flex>
              </Box>

          


            {/* profile bar */}
            <Box
              mt={4}
              mb={4}
              bg="white"
              borderRadius="24px"
              p={6}
              boxShadow="0px 8px 16px #0000000F"
            >
              <HStack justify="space-between">
                <Box>
                  <HStack>
                    <Text fontSize="20px" fontWeight="700" color="black">Lila Glam</Text>
                    <MdVerified color="#E13E85" />
                  </HStack>
                  <Text color="#7B7B7C" fontSize="14px">@lilaglam · Beauté / Sport</Text>
                  <HStack>
                    <IoLocationOutline color="#7B7B7C" />
                    <Text fontSize="14px" color="#7B7B7C">


                      Bordeaux, France</Text>
                  </HStack>
                </Box>

                <HStack>
                  <Box p={2} borderRadius="50%" bg="#F3EEFF">
                    <FaShareAlt color="black" />
                  </Box>
                  <Box p={2} borderRadius="50%" bg="#F3EEFF">
                    <FaHeart color="black" />
                  </Box>
                </HStack>
              </HStack>

              <Text mt={4} color="#313131" fontSize="15px" lineHeight="22px">
                Lila Glam, est une coach sportive passionnée par la performance et le bien-être. Athlétique, charismatique et souriante, elle partage chaque jour ses conseils d’entraînement et de nutrition avec une communauté engagée.
                Entre ses séances de coaching, ses collaborations avec des marques de sport et ses vidéos motivantes, elle incarne un mode de vie équilibré et inspirant, rigueur, élégance et énergie positive.
              </Text>
            </Box>


            <Box
              bg="white"
              borderRadius="24px"
              p={6}
              w="100%"
              maxW="900px"
              mx="auto"
              boxShadow="0px 8px 16px #0000000F"
              fontFamily="Helvetica Neue"
            >
              <HStack mb={4}>
                <Text fontSize="22px" fontWeight="700" color="black" >Campagnes sponsor</Text>
                <Text fontStyle="normal"
                  fontWeight="500"   // medium = 500
                  fontSize="16px"
                  lineHeight="19px"
                  letterSpacing="0px"
                  color="#1A1A1A"
                  textAlign="right">· 246 services</Text>
              </HStack>

              {/* tabs */}
              <HStack overflowX="auto" pb={3}>
                {tabs.map((tab, i) => (
                  <Flex
                    key={i}
                    px={4}
                    py={1}
                    borderRadius="25px"
                    bg={i === 0 ? "black" : "#F2F2F2"}
                    color={i === 0 ? "white" : "#313131"}
                    fontSize="14px"
                    fontWeight="600"
                    cursor="pointer"
                    whiteSpace="nowrap"
                  >
                    {tab}
                  </Flex>
                ))}
              </HStack>

              <VStack mt={6}>

                {campaigns.map((item, i) => (
                  <Flex
                    key={i}
                    w="100%"
                    justify="space-between"
                    align="center"
                    bg="#FAFAFA"
                    px={4}
                    py={3}
                    borderRadius="18px"
                  >
                    <HStack color="black">
                      {item.icon}
                      <Box>
                        <Text fontWeight="700" color="black">{item.title}</Text>
                        <Text fontSize="13px" color="#7B7B7C">
                          Lorem ipsum dolor sit amet, consectetur sadipscing elitr
                        </Text>
                      </Box>
                    </HStack>

                    <HStack gap={5}>
                      <Text fontWeight="800" fontSize="16px" color="#7344E4">
                        {item.price}
                      </Text>
                      <Flex
                        bgGradient="to-r"
                        gradientFrom="#7344E4 0%"
                        gradientTo=" #E13E85 100%"
                        borderRadius="20px"
                        py="12px"
                        px="16px"
                        align="center"
                        justify="center"
                        color="white"
                        w="60px"
                      >

                        <Image src="src/icone-sac.png" w="18px" h="18px" />
                      </Flex>
                    </HStack>
                  </Flex>
                ))}

              </VStack>

              <Box w="344px" justifyContent={"center"}
                textAlign={"center"}
                mx="auto"

              >
                <Button
                  mt={8}
                  w="100%"
                  bg="white"
                  border="1px solid #E0E0E0"
                  borderRadius="14px"
                  fontWeight="600"
                >
                  Voir toute la liste
                </Button>
              </Box>

            </Box>
          </Box>

          {/* RIGHT SIDEBAR */}
          <Box   w={{ base: "100%", lg: "392px" }}h="100%" bg="white" borderRadius="24px" p={5} boxShadow="0px 8px 16px #0000000F">

            <Flex wrap="wrap" gap={0}>
              <Text fontFamily="Helvetica Neue"
                fontWeight="bold"
                fontSize="16px"
                lineHeight="19px"
                letterSpacing="0px"
                color="#1A1A1A"
                textAlign="left"
                opacity={1}>Mon influence</Text>

              <SimpleGrid
                columns={2}
              
                mt={4}
                w="100%"

                border="2px solid #DCDDDE"
                borderRadius="24px"
              >
                <VStack>

                  <Text fontWeight="700" fontSize="22px" color="black">234K</Text>
                  <Text fontSize="12px" color="#7B7B7C">Followers</Text>
                </VStack>

                <VStack>
                  <Text fontWeight="700" color="black" fontSize="22px">99%</Text>
                  <Text fontSize="12px" color="#7B7B7C">Engagement</Text>
                </VStack>

                <VStack>
                  <Text color="black" fontWeight="700" fontSize="22px">4.5</Text>
                  <Text fontSize="12px" color="#7B7B7C">Stars</Text>
                </VStack>

                <VStack>
                  <Text color="black" fontWeight="700" fontSize="22px">4.5</Text>
                  <Text fontSize="12px" color="#7B7B7C">Stars</Text>
                </VStack>
              </SimpleGrid>
            </Flex>


            <Box pt={3}>
              <VStack align="start" >
                {/* Title */}
                <Text
                  fontFamily="Helvetica Neue"
                  fontWeight="bold"
                  fontSize="16px"
                  lineHeight="19px"
                  letterSpacing="0px"
                  color="#1A1A1A"
                  textAlign="left"
                  opacity={1}
                >
                  Mes réseaux
                </Text>

                {/* Stats Grid */}
                <Grid templateColumns="repeat(3, 1fr)" gap={4} width="100%">
                  <GridItem
                    bgColor="#F9FAFB"
                    borderRadius="24px"
                    w="106px"
                    h="105px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack  textAlign="center">
                      <Image
                        src="src/logo-tiktok-noir.svg"
                        boxSize="24px"
                        alt="TikTok"
                      />
                      <Text fontSize="sm" fontWeight="medium" color="#636363">
                        @lilaglam
                      </Text>
                      <Text fontSize="lg" fontWeight="bold" color="blue.500">
                        128K
                      </Text>
                    </VStack>
                  </GridItem>

                  <GridItem
                    bgColor="#F9FAFB"
                    borderRadius="24px"
                    w="106px"
                    h="105px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack  textAlign="center">
                      <Box as={CiYoutube} color="black" boxSize="24px" />
                      <Text fontSize="sm" fontWeight="medium" color="#636363" >
                        @lilaglam
                      </Text>
                      <Text fontSize="lg" fontWeight="bold" color="blue.500">
                        245K
                      </Text>
                    </VStack>
                  </GridItem>

                  <GridItem
                    bgColor="#F9FAFB"
                    borderRadius="24px"
                    w="106px"
                    h="105px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack  textAlign="center">
                      <Image
                        src="src/logo-instagram-noir.svg"
                        boxSize="24px"
                        alt="Instagram"
                      />
                      <Text fontSize="sm" fontWeight="medium" color="#636363">
                        @lilaglam
                      </Text>
                      <Text fontSize="lg" fontWeight="bold" color="blue.500">
                        99K
                      </Text>
                    </VStack>
                  </GridItem>
                </Grid>
              </VStack>
            </Box>


            <Box pt={3}>
              <Text
                fontFamily="Helvetica Neue"
                fontWeight="bold"
                fontSize="16px"
                lineHeight="19px"
                letterSpacing="0px"
                color="#1A1A1A"
                textAlign="left"
                opacity={1}
              >
                Je propose
              </Text>

              <Box mt={6} bgColor="#F9F5FF" borderRadius={"24px"} p="15px">
                <Flex display="flex"
                  alignItems="center"
                  justifyContent="space-between" >
                  <Box>
                    <Text fontWeight="700" color="black" fontSize="16px">Campagnes sponsor</Text>
                    <Text fontSize="13px" color="#7B7B7C">À partir de 200€</Text>
                  </Box>
                  <Button w="89px" h="32px" mt={2} bg="#7344E4" borderRadius={"17px"} color="white">Découvrir</Button>
                </Flex>
              </Box>

              <Box mt={6} bgColor="#F9F5FF" borderRadius={"24px"} p="15px">
                <Flex display="flex"
                  alignItems="center"
                  justifyContent="space-between">
                  <Box>
                    <Text fontWeight="700" color="black" fontSize="16px">4 Boutiques</Text>
                    <Text fontSize="13px" color="#7B7B7C">Plus de 500 produits</Text>
                  </Box>
                  <Button w="89px" h="32px" mt={2} bg="#7344E4" borderRadius={"17px"} color="white">Découvrir</Button>
                </Flex>
              </Box>
            </Box>
            <Box>
              <VStack color="black" textAlign={"center"} pt={3}>
                <Image src="src/union.svg" h="17px" w="17px" />
                <Text fontFamily="Helvetica Neue"
                  fontWeight="bold"
                  fontSize="16px"
                  lineHeight="19px"
                  letterSpacing="0px"
                  color="#1A1A1A"
                  textAlign="center"
                  opacity={1}>
                  Une question ou une proposition ?
                </Text>

                <Text fontFamily="Helvetica Neue"
                  fontWeight="normal"
                  fontSize="16px"
                  lineHeight="19px"
                  letterSpacing="0px"
                  color="#1A1A1A"
                  textAlign="center"
                  opacity={1}>Contactez-moi directement en cliquant ici.</Text>
              </VStack>

              <Button w="100%" bg="black" color="white" mt={8} h="48px" borderRadius={"16px"}>
                Me contacter
              </Button>
            </Box>
          </Box>

        </Flex>





        <Box borderRadius="32px" maxW="808px" bg="#FFFFFF" py="20px" px="20px" my="20px">
          <Flex color="black" mb="20px" gap={2}>
            <Text>Boutiques</Text>
            <Text>· 4 boutiques</Text>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}

          >
            <BoutiqueCard />
            <BoutiqueCard />
            <BoutiqueCard />
            <BoutiqueCard />
          </SimpleGrid>
        </Box>



        <HStack align="flex-start" mt={8} >
          <Box h="auto" w="391px" bgColor={"white"} borderRadius="32px" >
            <HStack alignItems={"center"} justifyContent={"center"}>
              <Image src="src/star.svg" w="80px" h="80px" />
              <Text fontFamily="Helvetica Neue"
                fontWeight="bold"
                fontSize="112px"
                lineHeight="136px"
                letterSpacing="0px"
                color="#1A1A1A"
                textAlign="center">5.0</Text>
            </HStack>

            <HStack alignItems={"center"} justifyContent={"space-around"}
            >
              <HStack >
                <Image src="src/etoile.svg" w="13px" h="13px" />
                <Box color="black" textAlign="center"><Text>100%</Text>
                  <Text>Satisfaction</Text>
                </Box>
              </HStack>
              <HStack>
                <Image src="src/etoile.svg" w="13px" h="13px" />
                <Box color="black" textAlign="center"><Text>Excellente</Text>
                  <Text>Qualité globale</Text>
                </Box>
              </HStack>
            </HStack>

            <Box color="black" px="10px" py="20px">
              <Text>Note globale (2 avis)</Text>



              <HStack alignItems={"center"} justifyContent={"space-around"} >
                <HStack>

                  <Box color="black" textAlign="center">

                    <Text>5</Text>
                  </Box>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                </HStack>
                <Image src="src/line.png" w="160px" h="3px" />
                <HStack>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                  <Box color="black" textAlign="center">

                    <Text>2 (100%)</Text>
                  </Box>
                </HStack>
              </HStack>

              <HStack alignItems={"center"} justifyContent={"space-around"} >
                <HStack>

                  <Box color="black" textAlign="center">

                    <Text>5</Text>
                  </Box>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                </HStack>
                <Image src="src/line.png" w="160px" h="3px" />
                <HStack>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                  <Box color="black" textAlign="center">

                    <Text>2 (100%)</Text>
                  </Box>
                </HStack>
              </HStack>

              <HStack alignItems={"center"} justifyContent={"space-around"} >
                <HStack>

                  <Box color="black" textAlign="center">

                    <Text>5</Text>
                  </Box>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                </HStack>
                <Image src="src/line.png" w="160px" h="3px" />
                <HStack>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                  <Box color="black" textAlign="center">

                    <Text>2 (100%)</Text>
                  </Box>
                </HStack>
              </HStack>

              <HStack alignItems={"center"} justifyContent={"space-around"} >
                <HStack>

                  <Box color="black" textAlign="center">

                    <Text>5</Text>
                  </Box>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                </HStack>
                <Image src="src/line.png" w="160px" h="3px" />
                <HStack>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                  <Box color="black" textAlign="center">

                    <Text>2 (100%)</Text>
                  </Box>
                </HStack>
              </HStack>

              <HStack alignItems={"center"} justifyContent={"space-around"} >
                <HStack>

                  <Box color="black" textAlign="center">

                    <Text>5</Text>
                  </Box>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                </HStack>
                <Image src="src/line.png" w="160px" h="3px" color="grey" />
                <HStack>
                  <Image src="src/etoile.svg" w="13px" h="13px" />
                  <Box color="black" textAlign="center">

                    <Text>2 (100%)</Text>
                  </Box>
                </HStack>
              </HStack>
            </Box>
          </Box>









          <Box color="black" w="808px" h="auto" bgColor={"white"} borderRadius="32px"   >
            <VStack>
              <Box h="468px" borderRadius="32px" bg="#FFFFFF" p={5} my="10px" >
                <HStack >
                  <Text color="black">Avis clients</Text>
                  <Text color="black">/</Text>

                  <Text color="black">2 Avis</Text>

                  <HStack ml="auto" // <— pushes it to the right
                    display="flex">
                    <Text>Les plus récents</Text>
                    <Image src="src/fleche.png" w="16px" h="10px" />
                  </HStack>
                </HStack>
                <Box border="2px solid #ABACAD" borderRadius="16px" py="20px" px="10px" my="10px" >

                  <HStack textAlign={"center"}>
                    <Image src="src/profilepic.png" w="40px" h="40px" />


                    <Box>
                      <HStack> <Text>Aline Dupont ·</Text>
                        <Image src="src/etoile.svg" w="13px" h="13px" />
                        <Text>5.0</Text>
                      </HStack>
                      <HStack>
                        <Image src="src/localisation.png" w="13px" h="13px" />
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
                      <HStack textAlign="center" justifyContent={"center"}>
                        <Image src="src/flag.png" w="12px" />
                        <Text>Répondre</Text>

                      </HStack>
                      <HStack alignItems={"center"} textAlign="center" justifyContent={"center"}>
                        <Image src="src/flagout.png" w="12px" />
                        <Text>Répondre</Text>

                      </HStack>

                    </HStack>


                  </Box>
                </Box>

                <Box border="2px solid #ABACAD" borderRadius="16px" p="10px">

                  <HStack textAlign={"center"}>
                    <Image src="src/profilepic.png" w="40px" h="40px" />


                    <Box>
                      <HStack> <Text>Aline Dupont ·</Text>
                        <Image src="src/etoile.svg" w="13px" h="13px" />
                        <Text>5.0</Text>
                      </HStack>
                      <HStack>
                        <Image src="src/localisation.png" w="13px" h="13px" />
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
                      <HStack textAlign="center" justifyContent={"center"}>
                        <Image src="src/flag.png" w="12px" />
                        <Text>Répondre</Text>

                      </HStack>
                      <HStack alignItems={"center"} textAlign="center" justifyContent={"center"}>
                        <Image src="src/flagout.png" w="12px" />
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
