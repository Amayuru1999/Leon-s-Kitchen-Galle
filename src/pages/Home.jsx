import css from "../styles/index.css";
import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Flex,
  Image,
  IconButton,
  Link,
  Button,
  Input,
  Heading,
  Box,
  Container,
  InputLeftElement,
  InputGroup,
  AbsoluteCenter,
  space,
} from "@chakra-ui/react";

export default function MacBookPro14OnePage() {
  return (
    <>
      <Helmet>
        <title>Payment UI</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box h="1482px" bg="white.A700" w="100%" position="relative">
        <Box h="870px" w="35%" position="absolute" right="5%" top="4%" m="auto">
          <AbsoluteCenter
            bg="gray.200_01"
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100%"
            p="24px"
            m="auto"
            borderRadius="10px"
          >
            <Container
              mt="53px"
              mb="89px"
              gap="169px"
              display="flex"
              w="100%"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
              maxW="550px"
              px="0px"
            >
              <Text color="gray.700" ml="22px" >
                You’re paying,
              </Text>
              <Flex w="100%" flexDirection="column" alignItems="end">
                <Flex mr="12px" w="98%" justifyContent="space-between" alignItems="center">
                  <Heading as="h1" mb="1px">
                    Mixed Fried Rice
                  </Heading>
                  <Text>Rs. 1300.00</Text>
                </Flex>
                <Flex mt="61px" mr="12px" w="98%" justifyContent="space-between" alignItems="center">
                  <Heading mt="2px">Leon’s Kitchen Special</Heading>
                  <Text>Rs. 1700.00</Text>
                </Flex>
                <Flex mt="76px" w="100%" justifyContent="space-between" alignItems="center">
                  <Heading as="h3" mb="1px">
                    Discounts & Offers
                  </Heading>
                  <Text>Rs. 0.00</Text>
                </Flex>
                <Box h="1px" mt="82px" mr="11px" bg="gray.600" w="89%" />
                <Flex mt="42px" mr="8px" w="91%" justifyContent="space-between" alignItems="center">
                  <Heading as="h4" mt="1px">
                    Tax
                  </Heading>
                  <Text>Rs. 110.00</Text>
                </Flex>
                <Flex mt="50px" mr="12px" w="90%" justifyContent="space-between" alignItems="center">
                  <Heading as="h5" mt="1px">
                    Total
                  </Heading>
                  <Text>Rs. 3110.00</Text>
                </Flex>
              </Flex>
            </Container>
          </AbsoluteCenter>
          <Flex w="60%" position="absolute" left="20%" top="12%" m="auto">
            <Heading mt="30px" size="md">Rs. 3110.00</Heading>
          </Flex>
        </Box>
        <Flex w="100%" justifyContent="center" position="absolute" bottom="0px" right="0px" left="0px" m="auto">
          <Flex gap="123px" w="100%" flexDirection="column" alignItems="start">
            <Flex ml="84px" w="45%" flexDirection="column" alignItems="start">
              <Heading size="md">Let’s Make Payment</Heading>
              <Text color="gray.700" mt="42px" ml="3px" fontWeight={400}>
                To start your subscription, input your card details to make payment. 
                You will be redirected to your banks authorization page .{" "}
              </Text>
              <Container
                mt="38px"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                maxW="607px"
                w="100%"
                px="0px"
                mx="auto"
              >
                <Image src="images/img_image_6.png" w="34%" />
                <Image src="images/img_image_4.png" ml="20px" w="20%" />
                <Image src="images/img_image_5.png" ml="31px" w="39%" />
              </Container>
              <Text size="md" color="gray.700" mt="35px" ml="7px">
                Cardholder’s Name
              </Text>
              <Input
                placeholder="Amayuru Upantih"
                mt="1px"
                ml="3px"
                borderColor="deep_purple.A200"
                borderBottomWidth="1px"
                w="79%"
              />
              <Text size="md" color="gray.700" mt="9px" ml="7px">
                Card Number
              </Text>
              <InputGroup w="79%" mt="6px" ml="3px">
                <InputLeftElement>
                  <Image src="images/img_mastercard_1.png" w="62px" h="33px" />
                </InputLeftElement>
                <Input
                  placeholder="9870 3456 7890 6473"
                  color="green.900"
                  gap="19px"
                  borderColor="deep_purple.A200"
                  borderBottomWidth="1px"
                />
              </InputGroup>
              <Container
                mt="10px"
                w="100%"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                maxW="609px"
                px="0px"
                mx="auto"
              >
                <Flex w="100%" flexDirection="column" alignItems="start">
                  <Text size="md" color="gray.700" ml="-30px" zIndex={1}  >
                    Expiry
                  </Text>

                  <div style={{ position: "relative" }}>
  <Text size="md" color="gray.700" ml="225px" zIndex={1}>
    .
  </Text>
  <div style={{ position: "absolute", top: "-20px", left: "225px" }}>
    <Text size="md" color="gray.700" zIndex={2}>
      Expiry
    </Text>
  </div>
</div>


                 
                  <Flex mt="-15px" alignItems="center">
                  
                    {/* <Box color="green.800" pt="40px" pb="18px" textAlign="left" fontSize="23px" w="69%" px="33px">
                      03 / 25
                    </Box> */}

                    <Input
                      placeholder="03/25"
                      color="green.900_02"
                      ml="-40px"
                      borderColor="deep_purple.A200"
                      borderBottomWidth="1px"
                      w="40%"
                      mt="-2px"
                     
                    />

                  

                    
                    <Input
                      placeholder="654"
                      color="green.900_02"
                      ml="20px"
                      borderColor="deep_purple.A200"
                      borderBottomWidth="1px"
                      w="40%"
                      mt="-2px"
                    />
                  </Flex>
                </Flex>
              </Container>
              <Text size="md" color="gray.700" mt="9px" ml="7px">
                Discount Code
              </Text>
              <Input
                size="sm"
                placeholder="CHIKAMSO-20-OFF"
                color="lime.900"
                mt="6px"
                ml="3px"
                borderColor="deep_purple.A200"
                borderBottomWidth="1px"
                w="79%"
              />
              <Button size="md" mt="41px" ml="3px" fontWeight={700} minW="242px" borderRadius="10px">
                Pay
              </Button>
            </Flex>
            <Flex direction="column" as="footer" w="100%" justifyContent="center" alignItems="center">
              <Flex w="100%" justifyContent="center">
                <Flex w="100%" flexDirection="column" alignItems="center" justifyContent="center">
                  <Image src="images/img_327006203_70740.png" ml="-1056px"  zIndex={1} w="16%" />
                  <Flex mt="-217px" w="100%">
                    <Flex w="100%" flexDirection="column" alignItems="center">
                      <Flex bg="blue_gray.100" w="100%" justifyContent="flex-end" py="42px">
                        <Flex mt="47px" gap="1px" w="94%" flexDirection="column" alignItems="end">
                          <Flex mr="178px" w="58%" justifyContent="space-between">
                            <Heading className="deals" size="xs" as="h6" color="black.900" fontFamily="Poppins">
                              Get Exclusive Deals in your Inbox
                            </Heading>
                            <Flex justifyContent="space-between" gap="141px">
                              <h5 className="bottom" size="xs" as="h4" color="black.900" mt="1px" ml="220px" fontFamily="Poppins">
                                Legal Pages
                              </h5>
                              <h5 className="bottom" as="h6" color="black.900" fontFamily="Poppins" >
                                Important Links
                              </h5>
                            </Flex>
                          </Flex>
                          <Flex gap="40px" w="100%" alignItems="center">
                            <Flex gap="10px" w="62%" flexDirection="column" alignItems="start">
                              <Flex w="100%" justifyContent="space-between" alignItems="start">
                                <Image src="images/img_app_store_badges_en.png" mt="54px" w="37%" />
                                <Flex mb="10px" gap="8px" w="49%" flexDirection="column" alignItems="start">
                                  <Flex w="100%">
                                    <Flex w="100%" className="subscribe">
                                      <Input
                                        size="xs"
                                        colorScheme="blue_gray_800"
            
                                        placeholder="youremail@gmail.com"
                                        type="email"
                                        fontFamily="Poppins"
                                        w="79%"
                                        borderRadius="29px"
                                      />
                                      <Button
                                        size="sm"
                                        colorScheme="orange_600"
                                        ml="-67px"
                                        fontFamily="Poppins"
                                        fontWeight={500}
                                        minW="171px"
                                        borderRadius="29px"
                                      >
                                        Subscribe
                                      </Button>
                                    </Flex>
                                  </Flex>
                                  <div className="spam">
                                    <Text size="xs" color="black.900" ml="-25px" fontFamily="Poppins">
                                      <Text size="xs"  as="span" color="black.900" >
                                        we won't spam, read our
                                        
                                      </Text>
                                      <Text size="xs" href="#" color="black.900" textDecoration="underline">
                                        email policy
                                      </Text>
                                    </Text>
                                  </div>
                                  


                                </Flex>
                              </Flex>
                              <Flex gap="225px" w="77%" justifyContent="space-between" alignItems="start">
                                <Text size="s" mt="10px" fontFamily="Poppins" w="42%">
                                  Company # 490039-445, Registered with
                                  <br />
                                  House of companies.
                                </Text>
                                <Flex justifyContent="space-between" gap="14px">
                                  <IconButton
                                    icon={<Image src="images/img_facebook.png" />}
                                    aria-label="2:58-facebook_one"
                                    w="45px"
                                    background={"transparent"}
                                  />
                                  <IconButton
                                    icon={<Image src="images/img_instagram.png" />}
                                    aria-label="2:59-instagram_one"
                                    w="45px"
                                    background={"transparent"}
                                  />
                                  <IconButton
                                    icon={<Image src="images/img_tiktok.png" />}
                                    aria-label="2:60-tiktok_one" 
                                    w="45px"
                                    background={"transparent"}
                                  />

                                   <IconButton
                                    icon={<Image src="images/img_snapchat.png" />}
                                    aria-label="2:60-tiktok_one" 
                                    w="45px"
                                    background={"transparent"}
                                  /> 


                            
                                  
                                </Flex>
                              </Flex>
                            </Flex>
                            <Flex w="36%">
                              <Flex w="100%" alignItems="start">
                                <Text
                                  size="s"
                                  fontFamily="Poppins"
                                  zIndex={1}
                                  lineHeight="43px"
                                  textDecoration="underline"
                                  ml="0.2px"
                                >
                                  Terms and conditions
                                  <br />
                                  Privacy
                                  <br />
                                  Cookies
                                  <br />
                                  Modern Slavery Statement
                                </Text>
                                <Text
                                  size="s"
                                  ml="25px"
                                  fontFamily="Poppins"
                                  lineHeight="43px"
                                  textDecoration="underline"
                                >
                                  Get help
                                  <br />
                                  Add your restaurant
                                  <br />
                                  Sign up to deliver
                                  <br />
                                  Create a business account
                                </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex bg="black.900" w="100%" justifyContent="space-between" p="19px">
                        <Text size="s" color="white.A700" mt="8px" mb="2px" ml="96px" fontFamily="Poppins">
                          leonskitchen.lk Copyright 2023, All Rights Reserved.
                        </Text>
                        <Text size="s" color="white.A700" mr="80px" fontFamily="Poppins">
                          Privacy Policy Terms Pricing Do not sell or share my personal information
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

