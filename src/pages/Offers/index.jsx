import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, RatingBar } from "../../components";

export default function OffersPage() {
  return (
    <>
      <Helmet>
        <title>Speciel offers</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[215px] gap-[63px] md:pb-5 bg-gray-100">
        <header className="flex flex-row justify-center items-center w-full bg-white-A700">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1854px]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-auto gap-[37px] sm:gap-10">
              <Img
                src="images/img_327006203_70740.png"
                alt="image"
                className="w-[63%] md:h-auto sm:w-full object-cover"
              />
              {/* <a
                href="#"
                className="flex justify-center items-center w-[120px] h-[65px] pl-5 pr-[35px] py-[17px] sm:pr-5 bg-blue_gray-100 rounded-[20px]"
              > */}
                <Heading size="xs" as="h5" className="!text-gray-800">
                  Home
                </Heading>
              {/* </a> */}
            </div>
            <div className="flex flex-col items-end justify-start w-[74%] md:w-full mt-[18px] gap-[21px] md:mt-0">
              <div className="flex flex-row sm:flex-col justify-between items-center w-[73%] md:w-full sm:gap-10">
                <Heading size="md" as="h1" className="mt-px sm:mt-0 !text-blue_gray-900">
                  Welcome, Alisa
                </Heading>
                {/* <a
                  href="#"
                  className="flex justify-center items-center w-[150px] h-[50px] pt-3 pb-[7px] pl-6 pr-[35px] sm:px-5 bg-black-900 rounded-[20px]"
                > */}
                  <Heading size="xs" as="h5" className="!text-white-A700">
                    Logout
                  </Heading>
                {/* </a> */}
              </div>
              <div className="flex flex-row md:flex-col justify-between w-full md:gap-10">
                <div className="flex flex-row justify-start md:h-auto p-4 bg-blue_gray-100 rounded-[20px]">
                  <Heading size="xs" as="h5" className="mt-px !text-gray-800">
                    Browse Menu
                  </Heading>
                </div>
                <Heading
                  size="xs"
                  as="h5"
                  className="flex justify-center items-center w-[180px] h-[65px] pl-[11px] pr-[26px] py-[17px] sm:pr-5 !text-gray-50 bg-amber-600_01 rounded-[20px]"
                >
                  Special Offers{" "}
                </Heading>
                <Button color="blue_gray_100" size="md" className="sm:pr-5 font-bold min-w-[165px] rounded-[20px]">
                  Restaurants
                </Button>
                <Button color="blue_gray_100" size="md" className="font-bold min-w-[150px] rounded-[20px]">
                  Track Order
                </Button>
                <Button color="blue_gray_100" size="md" className="sm:px-5 font-bold min-w-[150px] rounded-[20px]">
                  Cart
                </Button>
                <div className="flex flex-row justify-start md:h-auto p-[17px] bg-blue_gray-100 rounded-[20px]">
                  <Heading size="xs" as="h5" className="ml-1.5 !text-gray-800">
                    Back
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-[42px] md:px-5 max-w-[1816px]">
          <div className="flex flex-row justify-center w-[13%] md:w-full">
            <Heading size="md" as="h1" className="!text-blue_gray-900">
              Today Offers
            </Heading>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row md:flex-col w-full gap-[72px] md:gap-10">
                <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto">
                  <div className="flex flex-row sm:flex-col justify-center items-start h-[400px] w-[400px] sm:w-full sm:h-auto sm:gap-5">
                    <div className="flex flex-row justify-center w-[29%] sm:w-full mt-[30px] sm:mt-0 z-[1]">
                      <Button color="red_400" size="xs" className="w-full sm:px-5 rounded-tr-lg rounded-br-lg">
                        15% Off
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full sm:w-full ml-[-112px] p-[35px] sm:ml-0 sm:p-5 bg-white-A700 rounded-[16px]">
                      <div className="flex flex-col items-start justify-start w-[99%] md:w-full mb-1">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-row justify-start w-full bg-gray-300 rounded-[16px]">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-col items-end justify-start w-full">
                                <Img src="images/img_love.svg" alt="15off_one" className="h-[26px] z-[1]" />
                                <Img
                                  src="images/img_fresh_tasty_bur.png"
                                  alt="freshtastybur"
                                  className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#f8b602"
                          activeColor="#f8b602"
                          size={24}
                          className="flex justify-between w-[136px] mt-[27px] rounded-[1px]"
                        />
                        <div className="flex flex-row justify-between items-center w-full mt-3">
                          <div className="flex flex-col items-start justify-start gap-px">
                            <Text as="p">Fish Burger</Text>
                            <Heading as="h2">
                              <span className="text-amber-600">$</span>
                              <span className="text-blue_gray-900">5.59</span>
                            </Heading>
                          </div>
                          <Button shape="round" className="w-[18%]">
                            <Img src="images/img_button.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto p-[15px] bg-white-A700 rounded-[16px]">
                  <div className="flex flex-col items-end justify-start w-[99%] md:w-full mt-[15px] mb-[23px] gap-[27px]">
                    <div className="h-[202px] w-full relative">
                      <div className="flex flex-row justify-start w-[32%] left-0 top-0 m-auto absolute">
                        <div className="flex flex-row justify-center w-full p-[3px] rounded-tr-lg rounded-br-lg bg-red-400">
                          <Text as="p" className="mb-0.5 !text-white-A700 text-center !font-normal">
                            15% Off
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[89%] h-max right-0 bottom-0 top-0 m-auto absolute">
                        <div className="flex flex-row justify-center w-full bg-gray-300 rounded-[16px]">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-col items-end justify-start w-full">
                              <Img src="images/img_love.svg" alt="love_one" className="h-[26px] z-[1]" />
                              <Img
                                src="images/img_fresh_tasty_bur_198x323.png"
                                alt="freshtastybur"
                                className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] md:w-full gap-3">
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#f8b602"
                        activeColor="#f8b602"
                        size={24}
                        className="flex justify-between w-[136px] rounded-[1px]"
                      />
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-col items-start justify-start gap-px">
                          <Text as="p">Fish Burger</Text>
                          <Heading as="h3">
                            <span className="text-amber-600">$</span>
                            <span className="text-blue_gray-900">5.59</span>
                          </Heading>
                        </div>
                        <Button shape="round" className="w-[18%]">
                          <Img src="images/img_button.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto">
                  <div className="flex flex-row sm:flex-col justify-center items-start h-[400px] w-[400px] sm:w-full sm:h-auto sm:gap-5">
                    <div className="flex flex-row justify-center w-[29%] sm:w-full mt-[30px] sm:mt-0 z-[1]">
                      <Button color="red_400" size="xs" className="w-full sm:px-5 rounded-tr-lg rounded-br-lg">
                        15% Off
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full sm:w-full ml-[-112px] p-[35px] sm:ml-0 sm:p-5 bg-white-A700 rounded-[16px]">
                      <div className="flex flex-col items-start justify-start w-[99%] md:w-full mb-1">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-row justify-start w-full bg-gray-300 rounded-[16px]">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-col items-end justify-start w-full">
                                <Img src="images/img_love.svg" alt="love_one" className="h-[26px] z-[1]" />
                                <Img
                                  src="images/img_fresh_tasty_bur.png"
                                  alt="freshtastybur"
                                  className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#f8b602"
                          activeColor="#f8b602"
                          size={24}
                          className="flex justify-between w-[136px] mt-[27px] rounded-[1px]"
                        />
                        <div className="flex flex-row justify-between items-center w-full mt-3">
                          <div className="flex flex-col items-start justify-start gap-px">
                            <Text as="p">Fish Burger</Text>
                            <Heading as="h4">
                              <span className="text-amber-600">$</span>
                              <span className="text-blue_gray-900">5.59</span>
                            </Heading>
                          </div>
                          <Button shape="round" className="w-[18%]">
                            <Img src="images/img_button.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto">
                  <div className="flex flex-row sm:flex-col justify-center items-start h-[400px] w-[400px] sm:w-full sm:h-auto sm:gap-5">
                    <div className="flex flex-row justify-center w-[29%] sm:w-full mt-[30px] sm:mt-0 z-[1]">
                      <Button color="red_400" size="xs" className="w-full sm:px-5 rounded-tr-lg rounded-br-lg">
                        15% Off
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full sm:w-full ml-[-112px] p-[35px] sm:ml-0 sm:p-5 bg-white-A700 rounded-[16px]">
                      <div className="flex flex-col items-start justify-start w-[99%] md:w-full mb-1">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-row justify-start w-full bg-gray-300 rounded-[16px]">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-col items-end justify-start w-full">
                                <Img src="images/img_love.svg" alt="love_one" className="h-[26px] z-[1]" />
                                <Img
                                  src="images/img_fresh_tasty_bur.png"
                                  alt="freshtastybur"
                                  className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#f8b602"
                          activeColor="#f8b602"
                          size={24}
                          className="flex justify-between w-[136px] mt-[27px] rounded-[1px]"
                        />
                        <div className="flex flex-row justify-between items-center w-full mt-3">
                          <div className="flex flex-col items-start justify-start gap-px">
                            <Text as="p">Fish Burger</Text>
                            <Heading as="h5">
                              <span className="text-amber-600">$</span>
                              <span className="text-blue_gray-900">5.59</span>
                            </Heading>
                          </div>
                          <Button shape="round" className="w-[18%]">
                            <Img src="images/img_button.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-[17%] md:w-full mt-[124px]">
              <Heading size="md" as="h6" className="!text-blue_gray-900">
                This Week Offers
              </Heading>
            </div>
            <div className="flex flex-row md:flex-col w-full mt-[47px] gap-[72px] md:gap-10">
              <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto">
                <div className="flex flex-row sm:flex-col justify-center items-start h-[400px] w-[400px] sm:w-full sm:h-auto sm:gap-5">
                  <div className="flex flex-row justify-center w-[29%] sm:w-full mt-[30px] sm:mt-0 z-[1]">
                    <Button color="red_400" size="xs" className="w-full sm:px-5 rounded-tr-lg rounded-br-lg">
                      15% Off
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-full ml-[-112px] p-[35px] sm:ml-0 sm:p-5 bg-white-A700 rounded-[16px]">
                    <div className="flex flex-row justify-start w-[99%] md:w-full ml-0.5 md:ml-0">
                      <div className="flex flex-row justify-start w-full bg-gray-300 rounded-[16px]">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-col items-end justify-start w-full">
                            <Img src="images/img_love.svg" alt="15off_one" className="h-[26px] z-[1]" />
                            <Img
                              src="images/img_fresh_tasty_bur.png"
                              alt="freshtastybur"
                              className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#f8b602"
                      activeColor="#f8b602"
                      size={24}
                      className="flex justify-between w-[136px] mt-[27px] ml-0.5 md:ml-0 rounded-[1px]"
                    />
                    <div className="flex flex-row justify-between items-center w-[99%] md:w-full mt-3 mb-1 ml-0.5 md:ml-0">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <Text as="p">Fish Burger</Text>
                        <Heading as="h4">
                          <span className="text-amber-600">$</span>
                          <span className="text-blue_gray-900">5.59</span>
                        </Heading>
                      </div>
                      <Button shape="round" className="w-[18%]">
                        <Img src="images/img_button.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto p-[15px] bg-white-A700 rounded-[16px]">
                <div className="flex flex-col items-end justify-start w-[99%] md:w-full mt-[15px] mb-[23px] gap-[27px]">
                  <div className="h-[202px] w-full relative">
                    <div className="flex flex-row justify-start w-[32%] left-0 top-0 m-auto absolute">
                      <div className="flex flex-row justify-center w-full p-[3px] rounded-tr-lg rounded-br-lg bg-red-400">
                        <Text as="p" className="mb-0.5 !text-white-A700 text-center !font-normal">
                          15% Off
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[89%] h-max right-0 bottom-0 top-0 m-auto absolute">
                      <div className="flex flex-row justify-center w-full bg-gray-300 rounded-[16px]">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-end justify-start w-full">
                            <Img src="images/img_love.svg" alt="love_one" className="h-[26px] z-[1]" />
                            <Img
                              src="images/img_fresh_tasty_bur_198x323.png"
                              alt="freshtastybur"
                              className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[89%] md:w-full gap-3">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#f8b602"
                      activeColor="#f8b602"
                      size={24}
                      className="flex justify-between w-[136px] rounded-[1px]"
                    />
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <Text as="p">Fish Burger</Text>
                        <Heading as="h4">
                          <span className="text-amber-600">$</span>
                          <span className="text-blue_gray-900">5.59</span>
                        </Heading>
                      </div>
                      <Button shape="round" className="w-[18%]">
                        <Img src="images/img_button.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto">
                <div className="flex flex-row sm:flex-col justify-center items-start h-[400px] w-[400px] sm:w-full sm:h-auto sm:gap-5">
                  <div className="flex flex-row justify-center w-[29%] sm:w-full mt-[30px] sm:mt-0 z-[1]">
                    <Button color="red_400" size="xs" className="w-full sm:px-5 rounded-tr-lg rounded-br-lg">
                      15% Off
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-full ml-[-112px] p-[35px] sm:ml-0 sm:p-5 bg-white-A700 rounded-[16px]">
                    <div className="flex flex-row justify-start w-[99%] md:w-full ml-0.5 md:ml-0">
                      <div className="flex flex-row justify-start w-full bg-gray-300 rounded-[16px]">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-col items-end justify-start w-full">
                            <Img src="images/img_love.svg" alt="love_one" className="h-[26px] z-[1]" />
                            <Img
                              src="images/img_fresh_tasty_bur.png"
                              alt="freshtastybur"
                              className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#f8b602"
                      activeColor="#f8b602"
                      size={24}
                      className="flex justify-between w-[136px] mt-[27px] ml-0.5 md:ml-0 rounded-[1px]"
                    />
                    <div className="flex flex-row justify-between items-center w-[99%] md:w-full mt-3 mb-1 ml-0.5 md:ml-0">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <Text as="p">Fish Burger</Text>
                        <Heading as="h4">
                          <span className="text-amber-600">$</span>
                          <span className="text-blue_gray-900">5.59</span>
                        </Heading>
                      </div>
                      <Button shape="round" className="w-[18%]">
                        <Img src="images/img_button.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start h-[400px] w-[23%] md:w-full sm:h-auto">
                <div className="flex flex-row sm:flex-col justify-center items-start h-[400px] w-[400px] sm:w-full sm:h-auto sm:gap-5">
                  <div className="flex flex-row justify-center w-[29%] sm:w-full mt-[30px] sm:mt-0 z-[1]">
                    <Button color="red_400" size="xs" className="w-full sm:px-5 rounded-tr-lg rounded-br-lg">
                      15% Off
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-full ml-[-112px] p-[35px] sm:ml-0 sm:p-5 bg-white-A700 rounded-[16px]">
                    <div className="flex flex-row justify-start w-[99%] md:w-full ml-0.5 md:ml-0">
                      <div className="flex flex-row justify-start w-full bg-gray-300 rounded-[16px]">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-col items-end justify-start w-full">
                            <Img src="images/img_love.svg" alt="love_one" className="h-[26px] z-[1]" />
                            <Img
                              src="images/img_fresh_tasty_bur.png"
                              alt="freshtastybur"
                              className="w-full md:h-[198px] mt-[-26px] object-cover rounded-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#f8b602"
                      activeColor="#f8b602"
                      size={24}
                      className="flex justify-between w-[136px] mt-[27px] ml-0.5 md:ml-0 rounded-[1px]"
                    />
                    <div className="flex flex-row justify-between items-center w-[99%] md:w-full mt-3 mb-1 ml-0.5 md:ml-0">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <Text as="p">Fish Burger</Text>
                        <Heading as="h4">
                          <span className="text-amber-600">$</span>
                          <span className="text-blue_gray-900">5.59</span>
                        </Heading>
                      </div>
                      <Button shape="round" className="w-[18%]">
                        <Img src="images/img_button.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
