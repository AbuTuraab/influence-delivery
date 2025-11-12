import {
  Box,
  Container,
  VStack,
  Flex,
  Card,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";


interface InfoCardProps {
  iconSrc: string;
  title: string;
  description: string;
  actionText: string;
  footerText: string;
  link: string;
}

export const InfoCard = ({
  iconSrc,
  title,
  description,
  actionText,
  footerText,
  link,
}: InfoCardProps) => {
  return (
    <Box textAlign="center">
      <Link
       
        href={link}
      
      >
        <Card.Root
          w="391px"
          h="324px"
          border="none"
          bgColor="white"
          borderRadius="32px"
          opacity={1}
          boxShadow="0px 3px 13px #0000000A"
       
        >
          <Image src={iconSrc} w="54px" h="56px" mt="30px" ml="30px"  objectFit="contain"   />

          <Card.Body gapY="20px" mt="12px" px="30px">
            <Text
              fontFamily="'Helvetica Neue', sans-serif"
              fontWeight="bold"
              fontSize={["20px", "24px"]}
              color="#1A1A1A"
            >
              {title}
            </Text>

            <Text fontFamily="'Helvetica Neue', sans-serif"
              fontWeight="normal"
              fontSize={["16px", "16px"]}
              color="#1A1A1A">{description}</Text>

            <Text fontFamily="'Helvetica Neue', sans-serif"
              fontWeight="bold"
              fontSize={["16px", "16px"]}
              color="#E13E85" >
              {actionText}
            </Text>
          </Card.Body>
        </Card.Root>
      </Link>

      <Text fontFamily="'Helvetica Neue', sans-serif"
              fontWeight="normal"
              fontSize={["12px", "12px"]}
              color="#939494" textAlign={"left"} px="30px">
        {footerText}
      </Text>
    </Box>
  );
};

export default function Inscription() {
  const cards = [
    {
      iconSrc: "/device-message.png",
      title: "Je souhaite découvrir et collaborer",
      description:
        "Trouvez vos créateurs préférés, collaborez ou achetez leurs produits officiels.",
      actionText: "Continuer en tant que client",
      footerText: "Pour les marques, entreprises ou particuliers.",
      link: "/creation-utilisation",
    },
    {
      iconSrc: "/Groupchat2x.png",
      title: "Je souhaite proposer mes services",
      description:
        "Créez votre vitrine, collaborez avec des marques et vendez vos produits officiels.",
      actionText: "Continuer en tant que créateur",
      footerText: "Pour les créateurs, influenceurs et talents.",
      link: "/creation-influencer",
    },
  ];

  return (
    <Box>
     <Flex
  justify="center"
  align="center"
 

>
  <Container
    maxW="container.xl"
    px={[4, 8, 16, 32]}
    py={[6, 14]}
    textAlign="center"
  >
    <VStack  align="center">
      <Box
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight="bold"
        fontSize={["28px", "32px", "32px", "32px"]}
        color="#1A1A1A"
      >
        Bienvenue sur Tendance et Influence
      </Box>

      <Box
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight="normal"
        fontSize={["14px", "16px", "16px"]}
        lineHeight={["22px", "24px", "26px"]}
        color="#1A1A1A"
        maxW={["100%", "80%", "600px"]}
      >
        Choisissez votre profil pour une expérience adaptée à vos besoins.
      </Box>
    </VStack>
  </Container>
</Flex>


      <Flex gap={4} justify="center" wrap="wrap">
        {cards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </Flex>
    </Box>
  );
}
