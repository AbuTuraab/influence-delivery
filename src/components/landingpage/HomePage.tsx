
import {
  Box,
  Text,
  Flex,
  Container,
  Stack,
  Card,
  Image,
  
  VStack,
 
  AbsoluteCenter,
} from "@chakra-ui/react";
// import { FaInstagram } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaTiktok } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


function HomePage() {
  return (
    <>
      <Box bg="#F6F6F7" color={"black"} mt="-66px">
        <Box
  bgImage="url(/MaskGroup5.png)"
  bgSize="cover"
  bgPos="center"
  bgRepeat="no-repeat"
  minH={{ base: "580px", md: "600px" }}
  display="flex"
  alignItems="center"
  justifyContent="center"
  px={{ base: 4, md: 10 }}
>
  <Container maxW="container.xl" textAlign="center">
    <Text
      fontFamily="Helvetica Neue"
      fontWeight="bold"
      fontSize={{ base: "28px", md: "48px", lg: "60px" }}
      lineHeight={{ base: "34px", md: "56px", lg: "64px" }}
      color="white"
      mb={{ base: 6, md: 8 }}
    >
      Collaborez avec des influenceurs vérifiés pour booster votre marque
    </Text>

    <Text
      fontFamily="Helvetica Neue"
      fontWeight="normal"
      fontSize={{ base: "16px", md: "22px", lg: "24px" }}
      lineHeight={{ base: "22px", md: "30px", lg: "32px" }}
      color="white"
      maxW="900px"
      mx="auto"
      mb={{ base: 8, md: 10 }}
    >
      Tendance & influence (Ti) connecte les marques et les créateurs autour de
      campagnes, produits et services authentiques. Une plateforme simple,
      transparente et pensée pour des collaborations qui ont de l’impact.
    </Text>

    <Stack
      direction={{ base: "column", md: "row" }}
     
      justify="center"
      align="center"
    >
      <Flex
        border="0.2px solid #FFFFFF"
        bg="#FFFFFF33"
        borderRadius="18px"
        px={6}
        py={3}
        align="center"
        gap={3}
        cursor="pointer"
      >
        <Box
          bgImage="url(/Union264.svg)"
          bgSize="cover"
          bgRepeat="no-repeat"
          w="15px"
          h="15px"
        />
        <Text
          fontFamily="Helvetica Neue"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="bold"
          color="white"
        >
          Découvrir les créateurs
        </Text>
      </Flex>

      <Flex
        border="0.2px solid #FFFFFF"
        bg="#FFFFFF33"
        borderRadius="18px"
        px={6}
        py={3}
        align="center"
        gap={3}
        cursor="pointer"
      >
        <Box
          bgImage="url(/Propertyoutline.svg)"
          bgSize="cover"
          bgRepeat="no-repeat"
          w="15px"
          h="15px"
        />
        <Text
          fontFamily="Helvetica Neue"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="bold"
          color="white"
        >
          Créer ma boutique
        </Text>
      </Flex>
    </Stack>
  </Container>
</Box>


       <Box 
       py={{ base: "35px", md: "35px" }}
        textAlign="center">
  <Text
    fontFamily="Helvetica Neue"
    fontWeight="bold"
    fontSize={{ base: "22px", sm: "28px", md: "38px", lg: "48px" }}
    lineHeight={{ base: "30px", sm: "36px", md: "48px", lg: "56px" }}
    color="#1A1A1A"
    mx="auto"
    maxW="900px"
    px={{ base: 4, md: 0 }}
  >
    Une expérience simple et fluide pour chaque profil
  </Text>
</Box>

       <Box py={{ base: "30px", md: "50px" }} textAlign="center">
  <Text
    fontFamily="Helvetica Neue"
    fontWeight="normal"
    fontSize={{ base: "14px", sm: "16px", md: "18px" }}
    lineHeight={{ base: "20px", sm: "24px", md: "26px" }}
    color="#1A1A1A"
    maxW="650px"
    mx="auto"
    px={{ base: 4, md: 0 }}
  >
    Que vous soyez une marque ou un créateur, Ti facilite la collaboration et la
    mise en avant de vos services.
  </Text>
</Box>

      <Flex
  gap={4}
  justify="center"
  wrap="wrap"
  px={4} // small left+right padding so mobile breathes
>
  <Card.Root
    w={['100%', '90%', '600px']}
    h={['auto', 'auto', '630px']}
    bg="transparent url(/fond-rose-jaune.png)no-repeat"
    borderRadius="45px 45px 0px 0px"
    border="none"
  >
    <Box w="100%" h={['auto', 'auto', '357px']}>
      <Image
        src="/Group30493.png"
        w={['60%', '60%', '339.74px']}
        h="auto"
        mx="auto"
        my="20px"
      />
    </Box>

    <Card.Body gap="3">
      <Card.Description>
        POUR LES MARQUES ET ENTREPRISES
      </Card.Description>

      <Text color="black">
          <Text as="span" color="#E13E85">Découvrez des influenceurs</Text> pertinents pour votre audience
        Collaborez sur des  <Text as="span" color="#E13E85">campagnes sponsorisées</Text> sur mesure
        Accédez aux  <Text as="span" color="#E13E85">produits officiels</Text> de vos influenceurs préférés
      </Text>

      <Text
        fontWeight="medium"
        letterSpacing="tight"
        mt="2"
        color="white"
        bgColor="#E13E85"
        w={['70%', '248px']}
        h="43px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        borderRadius="16px"
        border="0.2px solid #F5AACB"
        mx="auto"
      >
        Explorer les influenceurs
      </Text>
    </Card.Body>
  </Card.Root>

  {/* SECOND CARD */}
  <Card.Root
    w={['100%', '90%', '600px']}
    h={['auto', 'auto', '630px']}
    bg="transparent url(/fond-rose-violet.png)no-repeat"
    borderRadius="45px 45px 0px 0px"
    border="none"
  >
    <Box w="100%" h={['auto', 'auto', '357px']}>
      <Image
        src="/Group30657.png"
        w={['60%', '60%', '339.74px']}
        h="auto"
        mx="auto"
        my="20px"
      />
    </Box>

    <Card.Body gap="3">
      <Card.Description>
        POUR LES CRÉATEURS ET INFLUENCEURS
      </Card.Description>

      <Text color="black">
        
        <Text as ="span" color="#7344E4">Créez votre vitrine </Text>  
         et valorisez vos services professionnels <Text as="span" color="#7344E4">Proposez vos collaborations
          </Text>  (stories, posts, vidéos…) <Text as="span" color="#7344E4">Vendez les produits officiels     </Text>  de vous partenaires.
           </Text>

      <Text
        fontWeight="medium"
        letterSpacing="tight"
        mt="2"
        color="white"
        bgColor="#7344E4"
        w={['70%', '248px']}
        h="43px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        borderRadius="16px"
        border="0.2px solid #E7DFFC"
        mx="auto"
      >
        Créer mon profil
      </Text>
    </Card.Body>
  </Card.Root>
</Flex>


      <Container
  maxW="container.xl"
  px={[4, 8, 16, 32]} // mobile / tablet / small desktop / large desktop
  py={[6, 8]}
>
  <VStack align="flex-start">
    <Box
      fontFamily="'Helvetica Neue', sans-serif"
      fontWeight="bold"
      fontSize={["28px", "32px", "40px", "48px"]} // scales down on mobile
      lineHeight={["34px", "38px", "46px", "56px"]}
      color="#1A1A1A"
      textAlign="left"
    >
      Comment fonctionne Ti ?
    </Box>

    <Box
      fontFamily="'Helvetica Neue', sans-serif"
      fontWeight="normal"
      fontSize={["14px", "16px", "18px"]} // responsive
      lineHeight={["22px", "24px", "26px"]}
      color="#1A1A1A"
      textAlign="left"
      maxW={["100%", "80%", "600px"]}
    >
      Ti simplifie la rencontre entre marques et créateurs. En quelques étapes,
      lancez votre première collaboration.
    </Box>
  </VStack>
</Container>


        <Flex gap={4} justify="center" wrap="wrap">
          <Card.Root
            w="392px"
            h="237px"
            border="none"
            bgColor="white"
            borderRadius="32px"
            opacity={1}
          >
            <Image
              src="/Group30695.png"
              w="56px"
              h="56px"
              mt="20px"
              ml="20px"
            />

            <Card.Body gap="3" mt="12px" px="20px">
              <Text color="black">Recherchez les bon profils</Text>

              <Text color="black">
                Recherchez des profils selon vos besoins : thématique, audience,
                type de contenu.
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            w="392px"
            h="237px"
            border="none"
            bgColor="white"
            borderRadius="32px"
            opacity={1}
          >
            <Image
              src="/Group30696.png"
              w="56px"
              h="56px"
              mt="20px"
              ml="20px"
            />

            <Card.Body gap="3" mt="12px" px="20px">
              <Text color="black">Créez vos collaborations</Text>

              <Text color="black">
                Choisissez les influenceurs qui correspondent à vos objectifs et
                échangez directement avec eux.
              </Text>
            </Card.Body>
          </Card.Root>

          <Card.Root
            w="392px"
            h="237px"
            border="none"
            bgColor="white"
            borderRadius="32px"
            opacity={1}
          >
            <Image
              src="/Group30697.png"
              w="56px"
              h="56px"
              mt="20px"
              ml="20px"
            />

            <Card.Body gap="3" mt="12px" px="20px">
              <Text color="black">Développez votre marque</Text>

              <Text color="black">
                Grâces aux créateurs de Ti, développez vos campagnes et
                renforcez votre notoriété.
              </Text>
            </Card.Body>
          </Card.Root>
        </Flex>

        <Box position="relative" height="47px" borderRadius="md" py="50px">
          <AbsoluteCenter>
            <Box
              top="838px"
              left="461px"
              w="322px"
              h="43px"
              bgColor="#E13E85"
              border="0.2px solid #F5AACB"
              borderRadius="16px"
              opacity={1}
              textAlign="center"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Commencer dès aujourd’hui
            </Box>
          </AbsoluteCenter>
        </Box>

       <Flex
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="space-between"
  p={[4, 8, 12]}
  bg="gray.50"
  borderRadius="lg"
  gap={[6, 8, 12]}
>
  {/* TEXT SECTION */}
  <Box flex="1">
    <Text
      fontFamily="'Helvetica Neue', sans-serif"
      fontWeight="bold"
      fontSize={["24px", "32px", "40px", "48px"]}
      lineHeight={["32px", "40px", "48px", "56px"]}
      color="#1A1A1A"
      mb={4}
    >
      Un espace unique pour vendre, acheter et collaborer en toute confiance.
    </Text>

    <Text
      fontSize={["14px", "16px", "18px"]}
      lineHeight={["22px", "24px", "26px"]}
      color="#1A1A1A"
      maxW={["100%", "90%", "600px"]}
      mb={6}
    >
      Sur Ti, tout est centralisé : les créateurs présentent leurs services
      publicitaires et leurs produits, les marques trouvent des partenaires
      fiables et les acheteurs accèdent à des articles officiels et authentiques.
    </Text>

    <Text fontWeight="bold" fontSize={["18px", "22px", "24px"]} mb={1}>
      Produits officiels
    </Text>
    <Text fontStyle="italic" fontSize={["14px", "16px"]} color="#636363" mb={1}>
      Vous produits mise en avant par les meilleures influenceurs.
    </Text>
    <Text
      fontWeight="bold"
      fontSize="16px"
      color="#E13E85"
      textDecoration="underline"
      mb={6}
    >
      Voir les produits
    </Text>

    <Text fontWeight="bold" fontSize={["18px", "22px", "24px"]} mb={1}>
      Services sponsorisés
    </Text>
    <Text fontStyle="italic" fontSize={["14px", "16px"]} color="#636363" mb={1}>
      (posts, stories, vidéos, campagnes)
    </Text>
    <Text
      fontWeight="bold"
      fontSize="16px"
      color="#E13E85"
      textDecoration="underline"
    >
      Voir les profils
    </Text>
  </Box>

  {/* IMAGE */}
  <Box flex="1" display="flex" justifyContent="center">
    <Image
      src="/Group30782.png"
      w={["80%", "70%", "500px", "600px"]}
      h="auto"
    />
  </Box>
</Flex>


       <Container maxW="container.xl" py={[8, 10, 12]}>
  <Text
    fontSize={["24px", "28px", "32px"]}
    fontWeight="bold"
    textAlign="center"
    mb={[4, 6]}
  >
    FAQ – Tendance & Influence
  </Text>

  <Stack maxW="850px" mx="auto" w="100%">
    {[
      "Qu’est-ce que TI ?",
      "Est-ce gratuit ?",
      "Comment collaborer ?",
      "Les paiements sont-ils sécurisés ?",
    ].map((q, i) => (
      <Flex
        key={i}
        justify="space-between"
        align="center"
        bg="#FFFFFF"
        borderRadius="24px"
        py={[3, 4]}
        px={[4, 6]}
        boxShadow="0px 4px 15px rgba(0,0,0,0.05)"
      >
        <Text
          fontSize={["16px", "17px", "18px"]}
          fontWeight="bold"
          color="#1A1A1A"
          flex="1"
        >
          {q}
        </Text>
        <FaPlus />
      </Flex>
    ))}
  </Stack>

  <Box
    maxW="350px"
    mx="auto"
    mt={10}
    bg="white"
    boxShadow="0px 13px 19px rgba(0,0,0,0.06)"
    borderRadius="16px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    py={3}
    px={6}
  >
    <Text
      fontSize={["14px", "15px", "16px"]}
      fontWeight="bold"
      color="#1A1A1A"
      textAlign="center"
      whiteSpace="nowrap"
    >
      FAQ – Tendance & Influence
    </Text>
  </Box>
</Container>


        {/* <Box
         maxW="1014px"
  h={{ base: "320px", md: "245px" }}   // mobile taller
  mx="auto"
  display="flex"
  justifyContent="flex-start"
  alignItems="center"
  bgImage="url('/MaskGroup17.png')"
  bgRepeat="no-repeat"
  bgSize={{ base: "cover", md: "cover" }}  // mobile use contain
  bgPos="center"  // good default
        >
          <Box
            maxW="400px"
            color="white"
            p={4}
            borderRadius="md"
            ml="30px"
            textAlign="left"
          >
            <Text
              fontSize="32px"
              lineHeight="36px"
              fontWeight="bold"
              fontFamily="Helvetica Neue"
              mb="10px"
            >
              Commencez dès maintenant
            </Text>

            <Text
              fontSize="18px"
              lineHeight="26px"
              fontFamily="Helvetica Neue"
              mb="20px"
            >
              Rejoignez une communauté de marques et de créateurs qui font de
              l’influence un vrai levier de croissance.
            </Text>

            <Flex gap={4}>
              <Box
                px="20px"
                py="10px"
                border="0.2px solid #FFFFFF"
                bg="#FFFFFF33"
                borderRadius="18px"
                fontSize="14px"
                w="196px"
                display="flex"
                alignItems="center"
                justifyContent="center" // <-- add this here
              >
                <Text
                  fontSize="16px"
                  lineHeight="19px"
                  fontWeight="bold"
                  color="white"
                  whiteSpace="nowrap"
                  textAlign="center"
                >
                  Découvrir les créateurs
                </Text>
              </Box>

              <Box
                px="20px"
                py="10px"
                border="0.2px solid #FFFFFF"
                bg="#FFFFFF33"
                borderRadius="18px"
                w="196px"
                display="flex"
                alignItems="center"
              >
                <Text
                  fontSize="16px"
                  lineHeight="19px"
                  fontWeight="bold"
                  color="white"
                  whiteSpace="nowrap"
                >
                  Créer ma boutique
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>  */}

       









<Box
  position="relative"
  maxW="1014px"
  mx={{base:"auto"}}
  h={{ base: "420px", md: "320px" }}
  w="97%"
  overflow="hidden"
  borderRadius="20px"
>
  {/* background image */}
  <Image
    src="/MaskGroup17.png"
    alt="background"
    position="absolute"
    inset="0"
    w="100%"
    h="100%"
    objectFit="cover"
    zIndex={0}
  />

  {/* text container */}
  <Box
    position="relative"
    zIndex={1}
    color="white"
    p={{ base: 6, md: 8 }}
    maxW={{ base: "100%", md: "450px" }}
    ml={{ base: "0px", md: "30px" }}
    textAlign={{ base: "center", md: "left" }}
    mt={{ base: "60px", md: "0px" }}   // move text down on mobile
  >
    <Text
      fontSize={{ base: "32px", md: "32px" }}
      lineHeight={{ base: "36px", md: "36px" }}
      fontWeight="bold"
      fontFamily="Helvetica Neue"
      mb="10px"
    >
      Commencez dès maintenant
    </Text>

    <Text
      fontSize={{ base: "16px", md: "18px" }}
      lineHeight={{ base: "22px", md: "26px" }}
      fontFamily="Helvetica Neue"
      mb="20px"
    >
      Rejoignez une communauté de marques et de créateurs qui font de
      l’influence un vrai levier de croissance.
    </Text>

    <Flex
  direction={{ base: "column", md: "row" }}   // <-- stack on mobile
  align={{ base: "center", md: "flex-start" }} // <-- center on mobile
  gap={4}
>
  <Box
    px="20px"
    py="10px"
    border="0.2px solid #FFFFFF"
    bg="#FFFFFF33"
    borderRadius="18px"
    fontSize="14px"
    w="196px"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="16px" lineHeight="19px" fontWeight="bold" color="white" whiteSpace="nowrap">
      Découvrir les créateurs
    </Text>
  </Box>

  <Box
    px="20px"
    py="10px"
    border="0.2px solid #FFFFFF"
    bg="#FFFFFF33"
    borderRadius="18px"
    w="196px"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="16px" lineHeight="19px" fontWeight="bold" color="white" whiteSpace="nowrap">
      Créer ma boutique
    </Text>
  </Box>
</Flex>

  </Box>
</Box>













      </Box>
    </>
  );
}

export default HomePage;


