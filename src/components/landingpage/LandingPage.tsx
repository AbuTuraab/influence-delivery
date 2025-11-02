
import Navbar from "./NavBar";
import {
  Box,
  Text,
  Flex,
  Container,
  Stack,
 
  Card,
 
  Image,
  HStack,
  
  VStack,
  Link,
  Icon,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function LandingPage() {
  return (
    <> <Box height="4058px" bg="#F6F6F7" color={"black"}>
      <Box
        top="0px"
        left="0px"
        height="637px"
        bgImage="url(/MaskGroup5.png)"
        
      >
        <Navbar />
        <Container fluid>
          <Box
            position="absolute"
            top="193px"
            left="141px"
            w="1158px"
            h="136px"
            fontFamily="Helvetica Neue"
            fontWeight="bold"
            fontSize="60px"
            lineHeight="64px"
            letterSpacing="0px"
            color="#FFFFFF"
            textAlign="center"
            opacity={1}
          >
            Collaborez avec des influenceurs vérifiés pour booster votre marque
          </Box>
          <Box
            position="absolute"
            top="345px"
            left="209px"
            w="1023px"
            h="92px"
            fontFamily="Helvetica Neue"
            fontWeight="normal"
            fontSize="24px"
            lineHeight="32px"
            letterSpacing="0px"
            color="#FFFFFF"
            textAlign="center"
            opacity={1}
          >
            Tendance & influence (Ti) connecte les marques et les créateurs
            autour de campagnes, produits et services authentiques. Une
            plateforme simple, transparente et pensée pour des collaborations
            qui ont de l’impact.
          </Box>
        </Container>

        <Flex
          gap={2}
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            top="464px"
            left="445px"
            w="269px"
            h="51px"
            border="0.2px solid #FFFFFF"
            bg="#FFFFFF33"
            borderRadius="18px"
            opacity={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4}
          >

<Box   bgImage="url(/Union264.svg)" 
  bgRepeat="no-repeat"
  bgSize="cover"
  height="15px"
  width="15px">

</Box>
            <Text  fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="19px"
  fontWeight="bold"
  letterSpacing="0px"
  color="#FFFFFF"
  textAlign="left">
               Découvrir les créateurs
            </Text>
           
          </Box>

          <Box
            position="absolute"
            top="464px"
            left="726px"
            w="269px"
            h="51px"
            border="0.2px solid #FFFFFF"
            bg="#FFFFFF33"
            borderRadius="18px"
            opacity={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4}
          >

<Box   bgImage="url(/Propertyoutline.svg)" 
  bgRepeat="no-repeat"
  bgSize="cover"
  height="15px"
  width="15px">

</Box>
            <Text  fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="19px"
  fontWeight="bold"
  letterSpacing="0px"
  color="#FFFFFF"
  textAlign="left">
               Créer ma boutique
            </Text>
           
          </Box>
        </Flex>
      </Box>

     
        <Box py="50px" position="relative" height="113px" borderRadius="md">
          <AbsoluteCenter>
            <Box
              top="717px"
              left="352px"
              w="736px"
              h="113px"
              fontFamily="Helvetica Neue"
              fontWeight="bold"
              fontSize="48px"
              lineHeight="56px"
              letterSpacing="0px"
              color="#1A1A1A"
              textAlign="center"
              opacity={1}
            >
              Une expérience simple et fluide pour chaque profil
            </Box>
          </AbsoluteCenter>
        </Box>
        <Box position="relative" height="47px" borderRadius="md" py="50px">
          <AbsoluteCenter>
            <Box
              top="838px"
              left="461px"
              w="518px"
              h="47px"
              fontFamily="Helvetica Neue"
              fontWeight="normal"
              fontSize="18px"
              lineHeight="26px"
              letterSpacing="0px"
              color="#1A1A1A"
              textAlign="center"
              opacity={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Que vous soyez une marque ou un créateur, Ti facilite la
              collaboration et la mise en avant de vos services.
            </Box>
          </AbsoluteCenter>
        </Box>
        <Flex gap={4} justify="center" wrap="wrap">
          <Card.Root
            w="600px"
            h="630px"
            bg="transparent url(/fond-rose-jaune.png)no-repeat"
            borderRadius="45px 45px 0px 0px"
          border="none"
          >
           <Box 
            w="600px"
            h="357px">
             <Image
              src="/Group30493.png"
              w="339.74px"
              h="283.81px"
              bg="transparent no-repeat"
              opacity={1}
              mx="auto"
             my="20px"
            />
           </Box>
            <Card.Body gap="3">
              
              <Card.Description>
              POUR LES MARQUES ET ENTREPRISES
              </Card.Description>
              <Text color="black">

                Découvrez des influenceurs pertinents pour votre audience Collaborez sur des campagne
              s sponsorisés sur mesure Accédez aux produits officiels de vous influenceurs préférés
              
              </Text>
               <Text
                
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
                color= "white"
                bgColor="#E13E85"
                width="248px"
                height="43px"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                borderRadius="16px"
                border="0.2px"
                borderStyle="solid"
                borderColor="#F5AACB"
                display="flex"
              >
               Explorer les influenceurs
              </Text> 
               
            </Card.Body>
          
          </Card.Root>

  <Card.Root
            w="600px"
            h="630px"
            bg="transparent url(/fond-rose-violet.png)no-repeat"
            borderRadius="45px 45px 0px 0px"
          border="none"
          >
           <Box 
            w="600px"
            h="357px">
             <Image
              src="/Group30657.png"
              w="339.74px"
              h="283.81px"
              bg="transparent no-repeat"
              opacity={1}
              mx="auto"
             my="20px"
            />
           </Box>
            <Card.Body gap="3">
              
              <Card.Description>
              POUR LES CRÉATEURS ET INFLUENCEURS
              </Card.Description>
              <Text color="black">

             Créez votre vitrine et valorisez vos services professionnels Proposez vos 
             collaborations (stories, posts, vidéos…) Vendez les produits officiels de vous partenaires.
              </Text>
               <Text
                
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
                color= "white"
                bgColor="#7344E4"
                width="248px"
                height="43px"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                borderRadius="16px"
                border="0.2px"
                borderStyle="solid"
                borderColor="#E7DFFC"
                display="flex"
              >
              Créer mon profil
              </Text> 
               
            </Card.Body>
          
          </Card.Root>
        
        </Flex>

       <Container maxW="container.xl" px={125} py={8}>
  <VStack align="flex-start" >
    <Box
      fontFamily="'Helvetica Neue', sans-serif"
      fontWeight="bold"
      fontSize="48px"
      lineHeight="56px"
      letterSpacing="0px"
      color="#1A1A1A"
      textAlign="left"
    >
      Comment fonctionne Ti ?
    </Box>

    <Box
      fontFamily="'Helvetica Neue', sans-serif"
      fontWeight="normal"
      fontSize="18px"
      lineHeight="26px"
      letterSpacing="0px"
      color="#1A1A1A"
      textAlign="left"
      maxW="600px"
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

    <Text color="black">
      Recherchez les bon profils
    </Text>

     <Text color="black">
     Recherchez des profils selon vos besoins : 
thématique, audience, type de contenu.
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
     <Text color="black">
     Créez vos collaborations
    </Text>

     <Text color="black">
    Choisissez les influenceurs qui correspondent à vos objectifs 
    et échangez directement avec eux.
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
     <Text color="black">
     Développez votre marque
    </Text>

     <Text color="black">
    Grâces aux créateurs de Ti, développez vos campagnes et renforcez votre notoriété.
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
          direction={{ base: "column", md: "row" }} // stack on mobile, side-by-side on desktop
          align="center"
          justify="space-between"
          p={8}
          bg="gray.50"
          borderRadius="lg"
        
          gap={8}
        >
          {/* Left: Image */}

          {/* Right: Text Section */}
          <Box flex="1">
            <Text
  
  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="48px"
  lineHeight="56px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
              Un espace unique pour vendre, acheter et collaborer en toute confiance.
            </Text>
            <Text w="496px"
  h="99px"
  fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="normal"
  fontSize="18px"
  lineHeight="26px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
              Sur Ti, tout est centralisé : les créateurs présentent leurs services publicitaires et leurs produits, les marques trouvent des 
              partenaires fiables et les acheteurs accèdent à des articles officiels et authentiques.
            </Text>
             <Text fontFamily="'Helvetica Neue', sans-serif"
  fontWeight="bold"
  fontSize="24px"
  lineHeight="26px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
  opacity={1}>
              Produits officiels
            </Text>

              <Text width="496px"
  height="18px"
  fontStyle="italic"
  fontWeight="400"
  fontSize="16px"
  lineHeight="26px"
  letterSpacing="0px"
  color="#636363"
  textAlign="left">
             Vous produits mise en avant par les meilleures influenceurs.
            </Text>

              <Text 
              width="496px"
  height="19px"
  fontStyle="normal"
  fontWeight="bold"
  fontSize="16px"
  lineHeight="26px"
  letterSpacing="0px"
  color="#E13E85"
  textAlign="left"
  textDecoration="underline"
              >
             Voir les produits
            </Text>

              <Text 
               width="496px"
  height="28px"
  fontStyle="normal"
  fontWeight="bold"
  fontSize="24px"
  lineHeight="26px"
  letterSpacing="0px"
  color="#1A1A1A"
  textAlign="left"
              >
           
            </Text>
Services sponsorisés
             <Text 
             w="496px"
  fontStyle="italic"
  fontSize="16px"
  lineHeight="26px"
  color="#636363"
             >
            

                (posts, stories, vidéos, campagnes)
            </Text>

             <Text
             w="496px"
  fontWeight="bold"
  fontSize="16px"
  lineHeight="26px"
  color="#E13E85"
  textDecoration="underline"
             >
             Voir les profils
            </Text>
           
          </Box>

          <Box
          
            w="600px"
  h="522px"
          >
            <Image
            
              src="/Group30782.png"
            />
          </Box>
        </Flex>

        <Container maxW="100%" py={10}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        FAQ – Tendance & Influence
      </Text>

      <Stack>
        <Box w="808px" mx="auto" height="70px">
          <Flex
            justify="space-between"
            align="center"
           bg="#FFFFFF"
  borderRadius="24px"
  opacity={1}
            m="10px"
            p="10px"
          >
            <Text  w="448px"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="28px"
  color="#1A1A1A" >Qu’est-ce que TI ?</Text>
            <FaPlus />
          </Flex>
        </Box>

        <Box w="808px" height="70px" mx="auto">
          <Flex
            justify="space-between"
            align="center"
           bg="#FFFFFF"
  borderRadius="24px"
  opacity={1}
            m="10px"
            p="10px"
          >
            <Text  w="448px"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="28px"
  color="#1A1A1A">Est-ce gratuit ?</Text>
            <FaPlus />
          </Flex>
        </Box>

        <Box w="808px" h="70px" mx="auto">
          <Flex
            justify="space-between"
            align="center"
           bg="#FFFFFF"
  borderRadius="24px"
  opacity={1}
            m="10px"
            p="10px"
          >
            <Text  w="448px"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="28px"
  color="#1A1A1A">Comment collaborer ?</Text>
            <FaPlus />
          </Flex>
        </Box>

        <Box w="808px" h="70px" mx="auto">
          <Flex
           justify="space-between"
            align="center"
           bg="#FFFFFF"
  borderRadius="24px"
  opacity={1}
            m="10px"
            p="10px"
          >
            <Text  w="448px"
  fontSize="18px"
  fontWeight="bold"
  lineHeight="28px"
  color="#1A1A1A">Les paiements sont-ils sécurisés ?</Text>
           <FaPlus />
          </Flex>
        </Box>
      </Stack>
      

   <Box
  w="344px"
  h="43px"
  mx="auto"
  bg="white"
  boxShadow="0px 13px 19px rgba(0,0,0,0.06)"
  borderRadius="16px"
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <Text
    fontSize="16px"
    lineHeight="19px"
    fontWeight="bold"
    fontFamily="Helvetica Neue"
    color="#1A1A1A"
    whiteSpace="nowrap"
  >
    FAQ – Tendance & Influence
  </Text>
</Box>

      
    </Container>

     

   <Box
  w="1014px"
  h="245px"
  mx="auto"
  display="flex"
  justifyContent="flex-start"
  alignItems="center"
  bgImage="url('/MaskGroup17.png')"
  bgRepeat="no-repeat"
  bgSize="cover"
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
  justifyContent="center"   // <-- add this here
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
</Box>





       <Box
  maxW="1392px"
  w="97%"
  bg="white"
  borderRadius="32px"
  py={{ base: 10, md: 14 }}
  px={{ base: 6, md: 100}}
  mx="auto"
  mt={{ base: 12, md: 20 }}   // this creates spacing below previous section
>
  <Flex
    direction={{ base: "column", md: "row" }}
    align="center"
    justify="space-between"
    gap={10}
  >
    {/* RIGHT SIDE IMAGE */}
    <Box textAlign="left">
  <VStack align="flex-start">
    {/* Logo */}
    <Image
      src="/Group30795.png"
      alt="Footer Logo"
      w="288px"
      h="43px"
   
    />

    {/* Gradient Button */}
    <Box
      w="130px"
      h="43px"
      background="linear-gradient(270deg, #E13E85 0%, #7344E4 100%)"
      border="0.2px solid #9C41C0"
      borderRadius="14px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="10px"
      mb="10px"
    >
      <Text
        fontSize="16px"
        lineHeight="19px"
        fontWeight="bold"
        color="white"
        whiteSpace="nowrap"
      >
        Button Text
      </Text>
    </Box>

    {/* Social Icons */}
  <HStack
 gap={10}
  justify="space-between"
  
>
  <Icon color="black"  
  w="32px"
      h="32px"
      ><FaFacebookF /></Icon>
  <Icon color="black"  w="32px"
      h="32px"><FaXTwitter /></Icon>
  <Icon color="black"  w="32px"
      h="32px"><FaInstagram /></Icon>
  <Icon color="black"  w="32px"
      h="32px"><FaTiktok /></Icon>
</HStack>

  </VStack>
</Box>


    {/* LEFT SIDE */}
    <Flex direction={{ base: "column", sm: "row" }} gap={{ base: 10, md: 16 }}>
      <VStack align="flex-start">
        <Text fontWeight="bold" fontSize="lg" color="black">Navigation</Text>
        <Link fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.27px"
  color="#636363"
  textAlign="left"
  opacity={1} href="#">Influenceurs</Link>
        <Link fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.27px"
  color="#636363"
  textAlign="left"
  opacity={1} href="#">Produits</Link>
        <Link fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.27px"
  color="#636363"
  textAlign="left"
  opacity={1} href="#">FAQ</Link>
      </VStack>

      <VStack align="flex-start">
        <Text fontWeight="bold" fontSize="lg" color="black">Legal</Text>
        <Link fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.27px"
  color="#636363"
  textAlign="left"
  opacity={1} href="#">CGU/CGV</Link>
        <Link fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.27px"
  color="#636363"
  textAlign="left"
  opacity={1} href="#">Politique de confidentialité</Link>
        <Link fontFamily="Helvetica Neue"
  fontSize="16px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.27px"
  color="#636363"
  textAlign="left"
  opacity={1} href="#">Mentions légales</Link>
      </VStack>
    </Flex>
  </Flex>

  <Text 
  mt={10} 
  

  
   h="16px"
  fontFamily="Helvetica Neue"
  fontSize="14px"
  lineHeight="16px"
  fontWeight="normal"
  letterSpacing="0.24px"
   color="#636363"
   textAlign="center"
  opacity={1}
  >
    © {new Date().getFullYear()} Tendance et influence — Tous droits réservés.
  </Text>
</Box>

      </Box>
    </>
  );
}

export default LandingPage;
