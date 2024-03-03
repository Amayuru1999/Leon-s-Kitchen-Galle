
import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input, Heading, RatingBar, Slider, GoogleMap } from "../../components";
import { Link } from "react-router-dom";



export default function OrderingPagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Ordering page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full mt-[17px]">
          <div className="h-[2335px] w-full relative max-w-[1528px]">
            <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-col items-center justify-start w-full z-[1]">
                <header className="flex flex-col items-center justify-between w-full z-[1]">
                  
                  <div className="flex flex-row justify-center w-[63%] mt-[89px]">


               





                    <div className="flex flex-row justify-start  w-full gap-[39px] ">
                      <div className="h-[45px] w-[70%] relative -0">
                        <div className="h-[45px] w-[22%] right-[0%] bottom-0 top-4 m-auto bg-orange-600 absolute rounded-[22px]" />


<div className="navbar">
  <Heading
    size="md"
    as="h6"
    className="w-max bottom-[2%] right-0 left-80 m-auto !text-black-900_01 !font-manrope absolute"
  >
    <span className="text-black-900_01 font-poppins font-medium ">Home</span>
    <span className="text-black-900_01 font-poppins font-medium" style={{ margin: '0 10px' }}>Special Offers</span>
    <span className="text-white-A700 font-poppins font-medium" style={{ margin: '0 30px' }}>Restaurants</span>
    <span className="text-black-900_01 font-poppins font-medium" style={{ margin: '0 1px' }}>Track Order</span>
  </Heading>
</div>

                      </div>
                     


                    <div className="login flex items-center ml-[px]">

                    <Button
                        color="black_900"
                        size="lg"
                        leftIcon={<Img src="images/img_male_user.png" alt="Male User"  className="w-[30px] h-[27px] " />}
                        className="gap-[10px] font-medium min-w-[234px] rounded-[30px]  "
                      >
                        Login/Signup
                      </Button>

                    </div>

                     


                    



                    </div>
                  </div>
                </header>
                <div className="flex flex-col items-start justify-start w-full mt-[-150px]">
                  <Img
                    src="images/img_327006203_70740.png"
                    alt="image_one"
                    className="w-[18%] ml-[30px] z-[1] object-cover"
                  />
                  <div className="h-[477px] w-full mt-[-48px] relative">
                    <Img
                      src="images/img_rectangle_43.png"
                      alt="image_two"
                      className="justify-center h-[477px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                    />
                    <div className="justify-center h-[477px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_rectangle_2.png"
                        alt="image_three"
                        className="justify-center h-[477px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[12px]"
                      />
                      <div className="flex flex-row justify-between items-start w-[94%] bottom-[9%] right-0 left-0 m-auto absolute">
                        <div className="flex flex-row justify-start items-center w-[49%] mb-12 gap-[17px]">



                          <div className="flex flex-col items-center justify-start w-[48%] gap-[17px]">
                            <Heading size="6xl" as="h1" className="tracking-[10.80px]">
                              All Set!
                            </Heading>


                            
                            <div className="flex flex-row justify-end items-center w-full gap-[17px] p-[11px] border-white-A700 border border-solid bg-black-900 rounded-[31px] mt-1">
                              <Img
                                src="images/img_order_completed.png"
                                alt="ordercompleted"
                                className="w-[34px] mt-[5px] object-cover"
                              />
                              <Heading size="md" as="h2" className="mr-[9px]">
                                Minimum Order: Rs.2000
                              </Heading>
                            </div>
                          </div>


                        

                         



                          <div className="flex flex-row justify-start items-center w-1/2 gap-[17px] p-[13px] border-white-A700 border border-solid bg-black-900 rounded-[31px] mt-28">
                            <Img
                              src="images/img_motocross.png"
                              alt="motocross_one"
                              className="w-[34px] mt-px ml-2 object-cover"
                            />
                            <Heading size="md" as="h3">
                              Delivery in 20-25 Minutes
                            </Heading>

                          </div>


                         


                        

                          


                         


                        </div>
                        <Img
                          src="images/img_rectangle_64.png"
                          alt="image_four"
                          className="w-[10%] mt-[60px] object-cover rounded-[12px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-1/4 mt-[-32px]">
                <Button
                  color="orange_600"
                  size="lg"
                  leftIcon={<Img src="images/img_clock.png" alt="Clock" className="w-[29px] h-[29px]" />}
                  className="gap-[13px] rounded-tr-[12px] rounded-br-[12px] font-semibold z-[1] min-w-[335px]"
                >
                  Open until 3:00 AM
                </Button>
                <div className="flex flex-col items-end justify-start w-full mt-[-28px]">
                  <Img
                    src="images/img_327006203_70740.png"
                    alt="image_five"
                    className="w-[43%] mr-3.5 z-[1] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-full mt-[-34px] py-[45px] border-gray-400 border border-solid bg-gray-50_01 rounded-[12px]">
                    <div className="flex flex-col items-start justify-start w-full mb-[1048px] gap-[45px]">
                      <div className="flex flex-row justify-start items-center ml-[34px] gap-5">
                        <Img
                          src="images/img_restaurant_menu.png"
                          alt="restaurantmenu"
                          className="w-[55px] object-cover"
                        />
                        <Heading size="3xl" as="h4" className="!text-black-900_01">
                          Menu
                        </Heading>
                      </div>
                      <div className="h-[67px] w-full bg-black-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-3/4 bottom-1 right-0 m-auto absolute">
              <Input
                color="black_900"
                size="sm"
                variant="outline"
                name="search"
                placeholder="Search from menu..."
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e)}
                prefix={
                  <Img
                    src="images/img_search_more.png"
                    alt="Search More"
                    className="w-[26px] h-[26px] cursor-pointer"
                  />
                }
                suffix={
                  searchBarValue1?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue1("")} height={26} width={26} />
                  ) : null
                }
                className="w-[31%] mr-[11px] gap-2.5 text-black-900_90 font-semibold"
              />
              <div className="flex flex-row justify-between items-center w-[98%] mt-[25px]">
                <Heading size="3xl" as="h5" className="!text-black-900_01">
                  Fried Rice
                </Heading>
                <div className="flex flex-row justify-between items-center w-[62%]">
                  <div className="flex flex-row justify-between items-end w-auto gap-[77px] p-[9px] border-blue_gray-100_01 border border-solid bg-gray-100 rounded-[26px]">
                    <Text size="lg" as="p" className="ml-[30px]">
                      Sort by Pricing
                    </Text>
                    <Img
                      src="images/img_forward_button.png"
                      alt="forwardbutton"
                      className="w-[30px] mr-[3px] opacity-0.4 object-cover"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center gap-[21px] p-[33px] bg-orange-600 rounded-lg">
                    <Img src="images/img_clock.png" alt="clock_one" className="w-[58px] mt-px ml-3.5 object-cover" />
                    <Heading size="md" as="h6">
                      Open until 10:00 PM
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-full mt-[18px] gap-5">
                <div className="flex flex-col w-[67%] gap-[31px]">
                  <div className="flex flex-row justify-center w-full p-[26px] border-black-900_19 border border-solid bg-gray-50_02 shadow-sm rounded-lg">
                    <div className="flex flex-col items-center justify-start w-full mb-2 mr-[5px] gap-[31px]">
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-start mt-3.5 gap-[57px]">
                          <Heading size="2xl" as="h4" className="!text-black-900_01">
                            Mixed Fried Rice
                          </Heading>
                          <Text size="s" as="p">
                            LEON’S KITCHEN Mixed Fried Rice
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_46.png"
                          alt="circleimage"
                          className="h-[191px] w-[191px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full gap-4">
                          <div className="flex flex-row justify-start w-[81%] gap-[5px]">
                            <div className="flex flex-row justify-start items-center w-[33%] gap-[21px] p-[7px] border-blue_gray-400 border border-solid bg-black-900 rounded">
                              <Heading as="p" className="ml-[13px]">
                                Small
                              </Heading>
                              <Button size="xs" shape="round" className="mt-0.5 font-bold min-w-[90px]">
                                Rs.850
                              </Button>
                            </div>
                            <div className="h-[58px] w-[35%] relative">
                              <div className="flex flex-row justify-center items-center w-max h-max gap-[21px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <Heading as="p" className="!text-black-900_01">
                                  Medium
                                </Heading>
                                <div className="flex flex-row justify-end w-[53%] p-2 bg-teal-800 rounded">
                                  <Heading as="p" className="mr-[5px]">
                                    Rs.1350
                                  </Heading>
                                </div>
                              </div>
                              <div className="justify-center h-[58px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 border-black-900_6c border border-solid absolute rounded" />
                            </div>
                            <div className="h-[58px] w-[32%] relative">
                              <div className="flex flex-row justify-center items-center w-max h-max gap-6 left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <Heading as="p" className="!text-black-900_01">
                                  Large
                                </Heading>
                                <div className="flex flex-row justify-end w-[59%] p-2 bg-teal-800 rounded">
                                  <Heading as="p" className="mr-1">
                                    Rs.1950
                                  </Heading>
                                </div>
                              </div>
                              <div className="justify-center h-[58px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 border-black-900_6c border border-solid absolute rounded" />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-start w-[72%] ml-[197px]">
                            <Heading as="p" className="mt-[22px]">
                              £32.90
                            </Heading>
                            <Img src="images/img_remove.png" alt="image" className="w-[35px] mb-2 object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[26px] border-black-900_19 border border-solid bg-gray-50_02 shadow-sm rounded-lg">
                    <div className="flex flex-col items-start justify-start w-full mr-[5px] gap-[31px]">
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-start mt-[17px] gap-14">
                          <Heading size="2xl" as="h4" className="!text-black-900_01">
                            LEON’S KITCHEN Special Fried Rice
                          </Heading>
                          <Text size="s" as="p">
                            LEON’S KITCHEN Special Fried Rice
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_46_191x191.png"
                          alt="circleimage"
                          className="h-[191px] w-[191px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex flex-row justify-start w-[81%] gap-[5px]">
                        <div className="flex flex-row justify-start items-center w-[33%] gap-[21px] p-[7px] border-blue_gray-400 border border-solid bg-black-900 rounded">
                          <Heading as="p" className="ml-[13px]">
                            Small
                          </Heading>
                          <Heading
                            as="p"
                            className="flex justify-center items-center w-[90px] h-[39px] mt-0.5 pl-3.5 pr-7 py-[9px] bg-teal-800 rounded"
                          >
                            Rs.950
                          </Heading>
                        </div>
                        <div className="h-[58px] w-[35%] relative">
                          <div className="flex flex-row justify-center items-center w-max h-max gap-[21px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Heading as="p" className="!text-black-900_01">
                              Medium
                            </Heading>
                            <div className="flex flex-row justify-center w-[53%] p-2 bg-teal-800 rounded">
                              <Heading as="p" className="ml-[9px] mr-2.5">
                                Rs.1350
                              </Heading>
                            </div>
                          </div>
                          <div className="justify-center h-[58px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 border-black-900_6c border border-solid absolute rounded" />
                        </div>
                        <div className="h-[58px] w-[32%] relative">
                          <div className="flex flex-row justify-center items-center w-max h-max gap-6 left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Heading as="p" className="!text-black-900_01">
                              Large
                            </Heading>
                            <div className="flex flex-row justify-end w-[59%] p-[7px] bg-teal-800 rounded">
                              <Heading as="p" className="mt-0.5 mr-[5px]">
                                Rs.1950
                              </Heading>
                            </div>
                          </div>
                          <div className="justify-center h-[58px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 border-black-900_6c border border-solid absolute rounded" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-[72%] ml-[197px]">
                        <Heading as="p">£32.90</Heading>
                        <Img src="images/img_remove.png" alt="remove_one" className="w-[35px] object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[18px] border-black-900_19 border border-solid bg-gray-50_02 shadow-sm rounded-lg">
                    <div className="flex flex-col items-start justify-start w-[97%] mt-[9px] ml-2 mr-[13px] gap-[34px]">
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-start mt-3.5 gap-[57px]">
                          <Heading size="2xl" as="h4" className="!text-black-900_01">
                            Chicken Fried Rice
                          </Heading>
                          <Text size="s" as="p">
                            LEON’S KITCHEN Chicken Fried Rice
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle_46_1.png"
                          alt="circleimage"
                          className="h-[191px] w-[191px] rounded-[50%]"
                        />
                      </div>
                      <div className="flex flex-row justify-start w-[81%] gap-[5px]">
                        <div className="flex flex-row justify-start items-center w-[33%] gap-[21px] p-[7px] border-blue_gray-400 border border-solid bg-black-900 rounded">
                          <Heading as="p" className="ml-[13px]">
                            Small
                          </Heading>
                          <Button size="xs" shape="round" className="mt-0.5 font-bold min-w-[90px]">
                            Rs.700
                          </Button>
                        </div>
                        <div className="h-[58px] w-[35%] relative">
                          <div className="flex flex-row justify-center items-center w-max h-max gap-[21px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Heading as="p" className="!text-black-900_01">
                              Medium
                            </Heading>
                            <div className="flex flex-row justify-center w-[53%] p-2 bg-teal-800 rounded">
                              <Heading as="p" className="ml-[7px] mr-3">
                                Rs.1200
                              </Heading>
                            </div>
                          </div>
                          <div className="justify-center h-[58px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 border-black-900_6c border border-solid absolute rounded" />
                        </div>
                        <div className="h-[58px] w-[32%] relative">
                          <div className="flex flex-row justify-center items-center w-max h-max gap-6 left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Heading as="p" className="!text-black-900_01">
                              Large
                            </Heading>
                            <div className="flex flex-row justify-center w-[59%] p-2 bg-teal-800 rounded">
                              <Heading as="p" className="ml-[9px] mr-[11px]">
                                Rs.1700
                              </Heading>
                            </div>
                          </div>
                          <div className="justify-center h-[58px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 border-black-900_6c border border-solid absolute rounded" />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-start w-[72%] ml-[197px]">
                        <Heading as="p">£32.90</Heading>
                        <Img src="images/img_remove.png" alt="remove_one" className="w-[35px] mt-0.5 object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[33%] mt-[3px] pb-3 border-black-900_1c border border-solid bg-gray-50 rounded-[12px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-start items-end w-full gap-[30px] p-5 rounded-tl-lg rounded-tr-lg border-black-900_1c border border-solid bg-teal-800">
                      <Img
                        src="images/img_full_shopping_basket.png"
                        alt="fullshopping"
                        className="w-[58px] mt-[17px] ml-[26px] object-cover"
                      />
                      <Heading size="3xl" as="h2" className="mb-1">
                        My Cart
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="h-px w-full ml-px bg-white-A700" />
                        <div className="flex flex-row justify-start w-[56%] mt-[21px] ml-5">
                          <div className="flex flex-row justify-start items-center w-full">
                            
                            <Heading size="lg" as="h5" className="ml-[-55px] !text-teal-800 z-[1] ">
                                  Rs.1650
                                </Heading>
                            <Heading
                                    size="2xl"
                                    as="h4"
                                    className="flex justify-center items-center h-[45px] w-[45px] !font-bold bg-orange-600 text-center rounded-[22px] ml-[-22px] mt-[18px] "
                                  >
                                    1x
                                  </Heading>
                            <Heading size="s" as="h6" className="ml-[20px]  !text-black-900 mt-[30px]">
                              Mixed Fried Rice
                            </Heading>
                            
                          </div>
                        </div>
                        <div className="flex flex-col w-full mt-[49px] gap-4">
                          <div className="flex flex-col items-center justify-start w-full pt-6">
                            <div className="flex flex-row justify-start w-full pb-5 px-5">
                              <div className="flex flex-col items-start justify-start w-[82%] mb-[23px]">
                                <Heading size="lg" as="h5" className="ml-[72px] !text-teal-800 z-[1]">
                                  Rs.1650
                                </Heading>
                                <div className="flex flex-row justify-start items-start mt-[-1px] gap-[27px]">
                                  <Heading
                                    size="2xl"
                                    as="h4"
                                    className="flex justify-center items-center h-[45px] w-[45px] !font-bold bg-orange-600 text-center rounded-[22px]"
                                  >
                                    1x
                                  </Heading>
                                  <Heading size="s" as="h6" className="w-[73%] mt-1 !text-black-900">
                                    LEON’S KITCHEN Special <br />
                                    Fried Rice
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-px bg-black-900_33" />
                          <div className="flex flex-row justify-start w-full pb-5 px-5">
                            <div className="flex flex-row justify-start items-center w-[69%] mb-2.5 gap-[27px]">
                              <Heading
                                size="2xl"
                                as="h4"
                                className="flex justify-center items-center h-[45px] w-[45px] !font-bold bg-orange-600 text-center rounded-[22px]"
                              >
                                1x
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[68%] gap-0.5">
                                <Heading size="lg" as="h5" className="!text-teal-800">
                                  Rs.1400
                                </Heading>
                                <Heading size="s" as="h6" className="!text-black-900">
                                  Chicken Fried Rice
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-start w-[92%] mt-[173px]">
                      <Heading size="lg" as="h5" className="mt-px !text-black-900">
                        Sub Total:{" "}
                      </Heading>
                      <Text size="xl" as="p" className="!text-gray-900_01">
                        Rs.4400
                      </Text>
                    </div>
                    <Heading size="lg" as="h5" className="mt-[13px] !text-black-900 ml-[-230px]">
                      Discounts:
                    </Heading>
                    <div className="flex flex-row justify-between items-center w-[89%] mt-3.5">
                      <Heading size="lg" as="h5" className="!text-black-900 ml-[-5px]" >
                        Delivery Fee:
                      </Heading>
                      <Text size="xl" as="p" className="!text-gray-900_01">
                        Rs.200
                      </Text>
                    </div>
                    <div className="h-px w-full mt-[30px] bg-black-900_33" />
                    <div className="flex flex-row justify-between items-center w-[94%] mt-[33px] p-[3px] border-black-900_1c border border-solid bg-orange-600_cc rounded-lg">
                      <Heading size="lg" as="h5" className="ml-[27px]">
                        Total to pay
                      </Heading>
                      <Heading size="4xl" as="h1" className="mt-[3px] mb-1">
                        Rs.4600
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-center w-full mt-[177px]">
                      <div className="flex flex-col items-start justify-start w-full gap-4">
                        <div className="h-px w-full bg-black-900_33" />
                        <div className="flex flex-row justify-start items-start w-[83%] ml-[13px] gap-3">
                          <div className="flex flex-col items-center justify-start w-[53%] gap-2 p-2.5 border-black-900_33 border border-solid bg-gray-200 rounded-[12px]">
                            <Img
                              src="images/img_delivery_scooter.png"
                              alt="delivery_one"
                              className="w-[35px] object-cover"
                            />
                            <div className="flex flex-col items-center justify-start w-[74%] mb-[5px]">
                              <Heading size="s" as="h6" className="!text-black-900_01">
                                Delivery
                              </Heading>
                              <Text as="p" className="mt-[-3px]">
                                Starts at 17:50
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-[44%]">
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="h-[104px] w-px bg-black-900_33" />
                              <div className="flex flex-col items-center justify-start w-3/4">
                                <div className="flex flex-col items-center justify-start w-[36%] gap-1">
                                  <Img
                                    src="images/img_new_store.png"
                                    alt="newstore_one"
                                    className="w-[35px] opacity-0.5 object-cover"
                                  />
                                  <Heading size="s" as="h6" className="!text-black-900_87 opacity-0.5">
                                    Pick
                                  </Heading>
                                </div>
                                <Text as="p" className="mt-[-1px] !text-black-900_87 opacity-0.5">
                                  Starts at 8:30
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="xl"
                      leftIcon={
                        <Img
                          src="images/img_forward_button_35x35.png"
                          alt="Forward Button"
                          className="w-[35px] h-[35px]"
                        />
                      }
                      className="mt-[17px] gap-[35px] font-semibold border-black-900_1c border border-solid min-w-[342px] rounded-lg"
                    >
                      Checkout!
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Heading size="3xl" as="h2" className="left-0 top-[32%] m-auto !text-black-900_01 absolute">
              Order from{" "}
            </Heading>
            <div className="flex flex-col items-center justify-start w-[13%] bottom-[10%] left-[2%] m-auto absolute ">
              <a href="#">
                <Heading size="xl" as="h5" className="!text-gray-900">
                  <span className="rice">Fried Rice </span>
                  <br />
                  Spaghetti
                  <br />
                  Salad
                  <br />
                  Pasta
                  <br />
                  Omelette <br />
                  Noodles
                  <br />
                  Kottu
                  <br />
                  French Frice
                  <br />
                  Mongolian
                  <br />
                  Sausages
                  <br />
                  Turkey
                  <br />
                  Cashew
                  <br />
                  Mutton
                  <br />
                  Nasi
                  
                </Heading>
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-[88%] mt-[23px] gap-[10px]">
            <div className="flex flex-col items-start justify-start w-[65%] gap-[38px]">
              <div className="flex flex-row justify-start  gap-[-5px] ml-[200px] ">


                
                <Img src="images/img_id_verified.png" alt="idverified_one" className="w-[55px] object-cover  " />

                



                <Heading size="3xl" as="h2" className="!text-black-900 !font-bold ml-[47px]">
                  Contact information
                </Heading>
              </div>
              <Heading size="md" as="h3" className="w-[95%] ml-[320px] mb-5 !text-black-900_01 !font-bold">
                <span className="text-black-900_01 font-normal leading-[46px] ">
                  <br />
                  If you have allergies or other dietary restrictions  please contact the restaurant. The restaurant
                  will provide food-specific information upon request.
                  <br />
                </span>
                <span className="text-black-900_01">
                  Phone number
                  <br />
                </span>
                <span className="text-black-900 text-2xl">
                  076 735 9359
                  <br />
                </span>
                <span className="text-black-900 text-2xl font-normal leading-[48px]">
                  <br />
                </span>
              </Heading>
            </div>
            <div className="h-[659px] w-[52%] relative ">
              <div className="flex flex-row justify-center items-start w-max h-full pl-[66px] pr-14 gap-[15px] left-60 bottom-0  top-0 py-[62px] m-auto rounded-tr-[12px] rounded-br-[12px] bg-black-900 shadow-xs absolute">
                <Img src="images/img_clock_45x45.png" alt="clock_three" className="w-[45px] mt-[59px] object-cover" />
                <Heading size="3xl" as="h4" className="mt-[57px] mb-[427px] mr-[5px] !font-bold">
                  Operational Times
                </Heading>
              </div>
              <Heading
                size="s"
                as="h5"
                className="w-[88%] bottom-[22%] left-80 m-auto !font-bold leading-[46px] absolute"
              >
                <span className="text-white-A700">Monday:</span>
                <span className="text-white-A700 font-normal">8:00 AM–10:00 PM</span>
                <span className="text-white-A700">
                  <br />
                  Tuesday:{" "}
                </span>
                <span className="text-white-A700 font-normal">8:00 AM–10:00 PM</span>
                <span className="text-white-A700">
                  <br />
                  Wednesday:{" "}
                </span>
                <span className="text-white-A700 font-normal">8:00 AM–10:00 PM</span>
                <span className="text-white-A700">
                  <br />
                  Thursday:{" "}
                </span>
                <span className="text-white-A700 font-normal">8:00 AM–10:00 PM</span>
                <span className="text-white-A700">
                  <br />
                  Friday:{" "}
                </span>
                <span className="text-white-A700 font-normal">8:00 AM–10:00 PM</span>
                <span className="text-white-A700">
                  <br />
                  Saturday:{" "}
                </span>
                <span className="text-white-A700 font-normal">8:00 AM–11:30 PM</span>
                <span className="text-white-A700">
                  <br />
                  Sunday:
                </span>
                <span className="text-white-A700 font-normal">8:00 AM–11:30 PM</span>
              </Heading>
            </div>
          </div>
          <div className="h-[1865px] w-full mt-[98px] relative">
            <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
              <GoogleMap showMarker={false} className="h-[795px] w-full max-w-[1548px]" />
              <div className="flex flex-row justify-center w-full mt-[-6px] px-14 py-[87px] bg-lime-300">
                <div className="flex flex-col items-center justify-start w-[95%] mb-[42px] gap-[35px] mx-3">
                  <div className="flex flex-row justify-between items-start w-full max-w-[1508px]">
                    <Heading size="5xl" as="h2" className="mt-0.5 !text-black-900_01">
                      Customer Reviews
                    </Heading>
                    <div className="flex flex-row w-[12%] gap-[22px]">
                      <div className="flex flex-col items-center justify-center h-[75px] w-[44%] p-[19px] rotate-[-180deg] bg-orange-600 rounded-[37px]">
                        <Img src="images/img_back.png" alt="back_one" className="w-9 object-cover" />
                      </div>
                      <div className="flex flex-col items-center justify-center h-[75px] w-[44%] p-[19px] bg-orange-600 rounded-[37px]">
                        <Img src="images/img_back_36x36.png" alt="back_one" className="w-9 object-cover" />
                      </div>
                    </div>
                  </div>
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-full"
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex flex-row justify-start mx-2.5">
                          <div className="flex flex-row justify-center w-full p-[18px] bg-white-A700 rounded">
                            <div className="flex flex-col items-center justify-start w-[99%] mt-[17px] ml-1.5 gap-[35px]">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-center items-center w-[43%]">
                                  <Img
                                    src="images/img_ellipse_3.png"
                                    alt="circleimage"
                                    className="h-[54px] w-[54px] rounded-[50%]"
                                  />
                                  <div className="h-[50px] w-0.5 ml-2.5 bg-orange-600" />
                                  <Text size="lg" as="p" className="w-[59%] ml-[13px]">
                                    <span className="text-black-900_01">Nisal </span>
                                    <span className="text-black-900_01">
                                      <br />
                                    </span>
                                    <span className="text-orange-600">Matara</span>
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start items-center w-[45%] gap-[13px]">
                                  <Img
                                    src="images/img_time_span.png"
                                    alt="timespan_one"
                                    className="w-[23px] object-cover"
                                  />
                                  <div className="flex flex-col items-end justify-start w-[82%] gap-[5px]">
                                    <RatingBar
                                      value={5}
                                      isEditable={true}
                                      size={16}
                                      className="flex justify-between h-4 w-[97px] bg-[url(/public/images/img_group_52.png)] bg-cover bg-no-repeat"
                                    />
                                    <Text as="p">24th September, 2023</Text>
                                  </div>
                                </div>
                              </div>
                              <Text size="lg" as="p" className="w-[99%] !leading-[27px]">
                                The positive aspect was undoubtedly the efficiency of the service. Superb and fantastic
                                food experience.
                              </Text>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full bottom-0 right-0 left-0 m-auto absolute">
              <Img
                src="images/img_rectangle_64.png"
                alt="image_six"
                className="w-[9%] z-[1] object-cover rounded-[12px]"
              />
              <footer className="flex justify-center items-center w-full mt-[-55px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="h-[390px] w-full relative">
                      <div className="flex flex-row justify-end w-full bottom-0 right-0 left-0 py-[30px] m-auto bg-blue_gray-100 absolute">
                        <div className="flex flex-col items-end justify-start w-[94%] mt-[30px] gap-10px">
                          <div className="flex flex-row justify-between w-[58%] mr-[178px]">
                            <Heading size="md" as="h6" className="!text-black-900 !font-bold">
                              Get Exclusive Deals in your Inbox
                            </Heading>
                            <div className="flex flex-row justify-between w-auto gap-[141px]">
                              <h5 size="x5" as="h6" className="bottom" mt="1px" fontFamily="Poppins" >
                                Legal Pages
                              </h5>
                              <h5 size="x5" as="h6" className="bottom">
                                Important Links
                              </h5>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full gap-10">
                            <div className="flex flex-col items-start justify-start w-[62%] gap-2.5">
                              <div className="flex flex-row justify-between items-start w-full">
                                <Img
                                  src="images/img_app_store_badges_en.png"
                                  alt="appstore_one"
                                  className="w-[37%] mt-20 object-cover"
                                />
                                <div className="flex flex-col items-start justify-start w-[49%] mb-2.5 gap-2">
                                  <div className="flex flex-row justify-start w-full ">
                                    





                                    <div className="flex flex-row justify-start w-full ">
                                      <Input
                                        type="email"
                                        name="email"
                                        placeholder="youremail@gmail.com"
                                        className="w-[79%] !rounded-[29px]"
                                      />
                                      <Button
                                        color="orange_600"
                                        size="md"
                                        className="ml-[-67px] font-medium min-w-[171px] rounded-[29px]"
                                      >
                                        Subscribe
                                      </Button>
                                    </div>
                                  </div>
                                  <Text size="xs" as="p" className="ml-[30px] !text-black-900">
                                    <div className="h-px w-full bg-black-900_33" />
                                    <div className="h-[104px] w-px bg-black-900_33" />
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between items-start w-[77%] gap-[225px]">
                                <Text as="p" className="w-[42%] mt-2.5">
                                  Company # 490039-445, Registered with
                                  <br />
                                  House of companies.
                                </Text>
                                <div className="flex flex-row justify-between w-auto gap-3.5">
                                  
                                  <Img
                                    src="images/img_facebook.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                               <Img
                                    src="images/img_instagram.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                                <Img
                                    src="images/img_tiktok.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                               <Img
                                    src="images/img_snapchat.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-[36%]">
                              <div className="flex flex-row justify-start items-start w-full">
                                <div className="flex flex-row justify-start w-[57%] z-[1]">
                                  <ul className="flex flex-col items-start justify-start w-full gap-[30px]">
                                    <li>
                                      <a href="#" className="bottom1">
                                        <Text as="p" className="underline">
                                          Terms and conditions
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom1" >
                                        <Text as="p" className="underline">
                                          Privacy
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom1">
                                        <Text as="p" className="underline">
                                          Cookies
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom1">
                                        <Text as="p" className="underline">
                                          Modern Slavery Statement
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="flex flex-row justify-start w-[57%] z-[1]">
                                  <ul className="flex flex-col items-start justify-start w-full gap-[30px]">
                                    <li>
                                      <a href="#" className="bottom2">
                                        <Text as="p" className="underline">
                                          Get help
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom2" >
                                        <Text as="p" className="underline">
                                          Add your restaurant
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom2">
                                        <Text as="p" className="underline">
                                          Sign up to deliver
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom2">
                                        <Text as="p" className="underline">
                                          Create a business account
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                             
                              
                             





















                            




                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_327006203_70740.png"
                        alt="image_seven"
                        className="h-[237px] w-[16%] left-[7%] bottom-65 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full p-[19px] bg-black-900">
                      <div className="flex flex-row justify-center mt-2 mb-0.5 ml-[94px]">
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            leonskitchen.lk Copyright 2023, All Rights Reserved.
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-row justify-center mr-20">
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Privacy Policy Terms Pricing Do not sell or share my personal information
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}






