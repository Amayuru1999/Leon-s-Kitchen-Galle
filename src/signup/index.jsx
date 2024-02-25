import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-center justify-between mx-auto pb-1 pl-1 w-full">
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[140px] md:px-5 w-[22%] md:w-full">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 uppercase"
            size="txtPoppinsBold30"
          >
            Sign Up 
          </Text>
          <Text
            className="mt-1.5 text-base text-blue_gray-700"
            size="txtPoppinsRegular16Bluegray700"
          >
            Create an account,It's free!
          </Text>
          <div className="flex flex-col items-center justify-start mt-[31px] w-full">
            <Input
              name="groupOne"
              placeholder="Name"
              className="leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xs w-full"
              wrapClassName="flex rounded-[16px] w-full"
              type="text"
              prefix={
                <Img
                  className="mr-1.5 my-auto"
                  src="images/img_frame.svg"
                  alt="Frame"
                />
              }
              color="yellow_700_cc"
              size="md"
            ></Input>
            <Input
  name="email" 
  placeholder="Email"  
  className="leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xs w-full"
  wrapClassName="flex mt-[21px] rounded-[16px] w-full"
  type="email" 
  prefix={
    <Img
      className="mr-1.5 my-auto"
      src="images/email.svg"
      alt="Frame"
      style={{ width: '16px', height: '16px' }}  
    />
  }
  color="yellow_700_cc"
  size="md"
></Input>


            <Input
              name="groupTwo"
              placeholder="Password"
              className="leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xs w-full"
              wrapClassName="flex mt-[21px] rounded-[16px] w-full"
              type="password"
              prefix={
                <Img
                  className="mr-1.5 my-auto"
                  src="images/img_frame_gray_900_02.svg"
                  alt="Frame"
                />
              }
              color="yellow_700_cc"
              size="md"
            ></Input>
            <Input
              name="groupTwo"
              placeholder="Confirm Password"
              className="leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xs w-full"
              wrapClassName="flex mt-[21px] rounded-[16px] w-full"
              type="password"
              prefix={
                <Img
                  className="mr-1.5 my-auto"
                  src="images/img_frame_gray_900_02.svg"
                  alt="Frame"
                />
              }
              color="yellow_700_cc"
              size="md"
            ></Input>
            <Input
  name="mobile" 
  placeholder="Phone Number"  
  className="leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xs w-full"
  wrapClassName="flex mt-[21px] rounded-[16px] w-full"
  type="mobile" 
  prefix={
    <Img
      className="mr-1.5 my-auto"
      src="images/mobile.svg"
      alt="Frame"
      style={{ width: '16px', height: '16px' }}  
    />
  }
  color="yellow_700_cc"
  size="md"
></Input>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[124px] mt-7 rounded-[16px] text-center text-xs hover:scale-110"
              onClick={() => navigate("/fooddeliverydashboard")}
              size="2xl"
              variant="gradient"
              color="orange_A100_yellow_700"
              
            >
              Sign Up
            </Button>
            
           
            <div className="h-6 md:h-[54px] mt-[30px] relative w-full">
            <button
    className="absolute h-full inset-[0] justify-center m-auto text-base font-bold text-blue_gray-700 w-max hover:text-blue-600"
    size="txtPoppinsRegular16Bluegray700"
>
    Already have an account? Login now
</button>


              
            </div>
            {/* <Line className="absolute bg-deep_purple-50 h-px inset-[0] justify-center m-auto w-full" /> */}
            <div className="h-6 md:h-[54px] mt-[30px] relative w-full">
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-base text-blue_gray-700 w-max"
                size="txtPoppinsRegular16Bluegray700"
              >
                Sign Up with Others
              </Text>
              
            </div>
            
            <List
              className="flex flex-col gap-[19px] items-center mt-[31px] w-full"
              orientation="vertical"
            >
              <div className="border border-deep_purple-50 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[16px] w-full hover:scale-110">
    <button
        className="flex flex-row gap-2 items-center justify-center w-[43%] md:w-full transform transition-transform duration-300 focus:outline-none"
    >
        <Img
            className="h-[35px] md:h-auto object-cover w-[25%] rounded-full"  
            src="images/img_google1.png" 
            alt="googleOne"
        />
        <Text
            className="text-gray-900_02 text-xs"
            size="txtPoppinsRegular12Gray90002"
        >
            <span className="text-gray-900_02 font-poppins text-left font-normal">
            Sign Up with{" "}
            </span>
            <span className="text-gray-900_02 font-poppins text-left font-bold">
                Google
            </span>
        </Text>
    </button>
</div>


<div className="border border-deep_purple-50 border-solid flex flex-1 flex-col items-center justify-start p-[13px] rounded-[16px] w-full">
    <button
        className="flex flex-row gap-2 items-center justify-center w-[48%] md:w-full transform transition-transform duration-300 hover:scale-110 focus:outline-none"
        // Add your onClick function
    >
        <Img
            className="h-[35px] md:h-auto object-cover w-[19%]"
            src="images/img_facebook1.png"
            alt="facebookOne"
        />
        <Text
            className="text-gray-900_02 text-xs"
            size="txtPoppinsRegular12Gray90002"
        >
            <span className="text-gray-900_02 font-poppins text-left font-normal">
            Sign Up with{" "}
            </span>
            <span className="text-gray-900_02 font-poppins text-left font-bold">
                Facebook
            </span>
        </Text>
    </button>
</div>

            </List>
          </div>
        </div>
        <div className="h-[1188px] md:px-5 relative w-[65%] md:w-full">
          <div className="bg-gradient3  h-[768px] ml-auto w-[62%]"></div>
          <div className="absolute h-[1188px] inset-[0] justify-center m-auto w-full">
            <div className="h-[1188px] m-auto w-full">
              <Img
                className="h-[1188px] m-auto object-cover w-full"
                src="images/img_rectangle4.png"
                alt="rectangleFour"
              />
              <div className="absolute bg-white-A700_35 border border-solid border-white-A700_84 flex flex-col items-center justify-end p-[42px] md:px-10 sm:px-5 right-[29%] rounded-[46px] top-[11%] w-[38%]">
                <div className="bg-white-A700 flex flex-col h-[79px] items-center justify-start mt-[370px] p-[18px] rounded-[39px] w-[79px]">
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[42px]"
                    src="images/img_thunderbolt1.png"
                    alt="thunderboltOne"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[365px] object-cover right-[29%] top-[13%] w-[38%]"
              src="images/img_32700620370740.png"
              alt="32700620370740"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
