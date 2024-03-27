import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function CalendarDayNoeventPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>HONGDA HUANG's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-3.5 bg-white-A700">
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar
            width="243px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="flex flex-col h-screen gap-9 top-0 p-8 md:p-5 bg-white-A700 !sticky overflow-auto md:hidden"
          >
            <Img src="images/img_settings.svg" alt="settings_one" className="h-[28px] mt-1" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "16px",
                  color: "#828fa2",
                  fontWeight: 400,
                  fontSize: "14px",
                  paddingTop: "17px",
                  paddingBottom: "17px",
                  [`&:hover, &.ps-active`]: { color: "#36414f" },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "0.47px" } }}
              className="flex flex-col self-stretch items-center w-full mb-[393px]"
            >
              <MenuItem icon={<Img src="images/img_icon.svg" alt="icon_one" className="h-[20px] w-[20px]" />}>
                Dashboard
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_icon_blue_gray_400.svg" alt="icon_three" className="h-[20px] w-[20px]" />}
              >
                Customer
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="images/img_icon_blue_gray_400_20x20.svg" alt="icon_five" className="h-[20px] w-[20px]" />
                }
                suffix={
                  <div className="w-full pb-4">
                    <div className="flex justify-center items-start">
                      <Text size="xs" as="p" className="mt-1 !text-white-A700 text-center z-[1]">
                        3
                      </Text>
                      <div className="h-[24px] w-[23px] ml-[-6px] relative bg-red-600 flex-1 rounded-[50%]" />
                    </div>
                  </div>
                }
              >
                Message
              </MenuItem>
              <MenuItem icon={<Img src="images/img_icon_20x20.svg" alt="icon_seven" className="h-[20px] w-[20px]" />}>
                File
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_icon_blue_gray_100.svg" alt="icon_nine" className="h-[20px] w-[20px]" />}
              >
                Calender
              </MenuItem>
              <MenuItem icon={<Img src="images/img_icon_1.svg" alt="icon_eleven" className="h-[20px] w-[20px]" />}>
                Shop
              </MenuItem>
              <MenuItem icon={<Img src="images/img_icon_2.svg" alt="icon_thirteen" className="h-[20px] w-[20px]" />}>
                Cart
              </MenuItem>
              <MenuItem icon={<Img src="images/defaultNoData.png" alt="vector_one" className="h-[18px] w-[18px]" />}>
                Settings
              </MenuItem>
            </Menu>
          </Sidebar>
          <div className="md:self-stretch md:p-5 flex-1">
            <header className="bg-white-A700">
              <div className="self-end pb-[23px] px-[23px] sm:pb-5 sm:px-5">
                <div className="flex md:flex-col justify-between items-center mb-[829px] gap-5">
                  <Text size="s" as="p" className="!text-blue_gray-800">
                    Welcomback, Team!
                  </Text>
                  <div className="flex md:flex-col justify-center items-center w-[67%] md:w-full gap-3">
                    <div className="w-full p-2.5">
                      <Input
                        name="search"
                        placeholder={`Search...`}
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e)}
                        prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                        suffix={
                          searchBarValue?.length > 0 ? (
                            <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#36414fff" />
                          ) : null
                        }
                        className="flex items-center justify-center h-[40px] pl-4 pr-[35px] gap-2 sm:pr-5 text-blue_gray-400 text-xs border-blue_gray-200 border border-solid bg-white-A700 rounded"
                      />
                    </div>
                    <div className="flex justify-between items-center w-full pl-[136px] gap-5 md:pl-5">
                      <Img src="images/img_shopping_bag.svg" alt="shoppingbag_one" className="h-[24px] w-[24px]" />
                      <Img src="images/img_icon_icon_line293.svg" alt="iconicon_one" className="h-[24px] w-[24px]" />
                      <div className="flex py-2">
                        <Text as="p" className="self-end !text-gray-500">
                          <span className="text-gray-500">Hello,</span>
                          <span className="text-blue_gray-900">&nbsp;Sam</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex md:flex-col justify-center items-start gap-[23px]">
              <div className="h-full w-px md:w-full md:h-px bg-indigo-50" />
              <div className="md:self-stretch mt-6 flex-1">
                <div className="flex flex-col items-start gap-[33px]">
                  <Text size="lg" as="p" className="!text-blue_gray-900 !font-poppins">
                    Calendar
                  </Text>
                  <div className="flex md:flex-col self-stretch items-center gap-5">
                    <div className="w-[24%] md:w-full p-8 sm:p-5 bg-white-A700 shadow-xs rounded">
                      <div className="flex flex-col gap-[31px]">
                        <div className="flex flex-col gap-6">
                          <Text size="s" as="p" className="leading-[22px]">
                            Click in the calendar to create event
                          </Text>
                          <Button
                            rightIcon={<Img src="images/img_plus.svg" alt="plus" />}
                            className="flex items-center justify-center h-[48px] w-full gap-[5px] px-8 sm:px-5 text-white-A700 text-center text-sm bg-deep_orange-300 rounded-[24px]"
                          >
                            Create new event
                          </Button>
                        </div>
                        <div className="flex flex-col md:flex-row sm:flex-col pb-[33px] gap-5 sm:pb-5">
                          <div className="flex items-center gap-2 flex-1">
                            <div className="h-[8px] w-[8px] bg-green-700 rounded" />
                            <Text as="p" className="!text-blue_gray-800">
                              New Event
                            </Text>
                          </div>
                          <div className="w-full h-px bg-indigo-50" />
                          <div className="flex items-center gap-2 flex-1">
                            <div className="h-[8px] w-[8px] bg-indigo-400 rounded" />
                            <Text as="p" className="self-end !text-blue_gray-800">
                              My Event Only
                            </Text>
                          </div>
                          <div className="w-full h-px bg-indigo-50" />
                          <div className="flex items-center gap-2 flex-1">
                            <div className="h-[8px] w-[8px] bg-amber-300 rounded" />
                            <Text as="p" className="self-end !text-blue_gray-800">
                              Meeting
                            </Text>
                          </div>
                          <div className="w-full h-px bg-indigo-50" />
                          <div className="flex items-center gap-2 flex-1">
                            <div className="h-[8px] w-[8px] bg-red-600 rounded" />
                            <Text as="p" className="!text-blue_gray-800">
                              Error
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-[34px]">
                          <Text size="s" as="p">
                            Team members
                          </Text>
                          <div className="flex flex-col self-stretch gap-5">
                            <div className="flex justify-between gap-5 flex-1">
                              <div className="flex items-center gap-2">
                                <Img src="images/img_.svg" alt="avo_one" className="h-[22px]" />
                                <Text as="p" className="!text-blue_gray-900">
                                  @Avo
                                </Text>
                              </div>
                              <Button className="flex items-center justify-center h-[28px] px-4 text-indigo-400 text-center text-xs bg-gray-100 min-w-[102px] rounded">
                                Lead design
                              </Button>
                            </div>
                            <div className="flex gap-[27px]">
                              <div className="flex items-center gap-2">
                                <Img src="images/img_.svg" alt="image" className="h-[22px] mt-0.5" />
                                <Text as="p" className="!text-blue_gray-900">
                                  @Nhun
                                </Text>
                              </div>
                              <Button className="flex items-center justify-center h-[28px] px-1.5 text-indigo-400 text-center text-xs bg-gray-100 min-w-[100px] rounded">
                                Product design
                              </Button>
                            </div>
                            <div className="flex justify-between gap-5 flex-1">
                              <div className="flex items-center gap-2">
                                <Img src="images/img_.svg" alt="image" className="h-[22px]" />
                                <Text as="p" className="!text-blue_gray-900">
                                  @Riri
                                </Text>
                              </div>
                              <Button className="flex items-center justify-center h-[28px] px-1.5 text-indigo-400 text-center text-xs bg-gray-100 min-w-[100px] rounded">
                                Product design
                              </Button>
                            </div>
                            <div className="flex justify-between gap-5 flex-1">
                              <div className="flex items-center gap-2">
                                <Img src="images/img_.svg" alt="image" className="h-[22px]" />
                                <Text as="p" className="!text-blue_gray-900">
                                  @Juki
                                </Text>
                              </div>
                              <Button className="flex items-center justify-center h-[28px] px-1.5 text-indigo-400 text-center text-xs bg-gray-100 min-w-[100px] rounded">
                                Product design
                              </Button>
                            </div>
                            <div className="flex justify-between gap-5 flex-1">
                              <div className="flex items-center gap-2">
                                <Img src="images/img_.svg" alt="image" className="h-[22px]" />
                                <Text as="p" className="!text-blue_gray-900">
                                  @Nobi
                                </Text>
                              </div>
                              <Button className="flex items-center justify-center h-[28px] px-1.5 text-indigo-400 text-center text-xs bg-gray-100 min-w-[100px] rounded">
                                Product design
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button
                          leftIcon={<Img src="images/img_close.svg" alt="close" />}
                          className="flex items-center justify-center h-[24px] w-full pr-[35px] gap-2 sm:pr-5 text-deep_orange-300 text-center text-base"
                        >
                          Add member
                        </Button>
                      </div>
                    </div>
                    <div className="md:self-stretch p-[26px] sm:p-5 bg-white-A700 shadow-xs flex-1 rounded">
                      <div className="flex flex-col gap-[30px]">
                        <div className="flex sm:flex-col justify-between gap-5">
                          <div className="flex justify-between items-center w-[41%] sm:w-full gap-5">
                            <Text size="xl" as="p" className="self-end mb-0.5 !text-blue_gray-900">
                              <span className="text-blue_gray-900">24 January&nbsp;</span>
                              <span className="text-indigo-400">2022</span>
                            </Text>
                            <div className="flex gap-4">
                              <Button className="flex items-center justify-center h-[40px] w-[40px] bg-gray-50 rounded-[20px]">
                                <Img src="images/img_arrow_left.svg" />
                              </Button>
                              <Button className="flex items-center justify-center h-[40px] w-[40px] bg-gray-50 rounded-[20px]">
                                <Img src="images/img_arrow_right.svg" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button className="flex items-center justify-center h-[40px] px-[23px] sm:px-5 text-blue_gray-800 text-center text-sm border-indigo-50 border border-solid min-w-[75px] rounded-[20px]">
                              Day
                            </Button>
                            <Button className="flex items-center justify-center h-[40px] px-[18px] text-blue_gray-800 text-center text-sm border-indigo-50 border border-solid min-w-[75px] rounded-[20px]">
                              Week
                            </Button>
                            <Button className="flex items-center justify-center h-[40px] px-4 text-white-A700 text-center text-sm bg-blue_gray-900 min-w-[75px] rounded-[20px]">
                              Month
                            </Button>
                          </div>
                        </div>
                        <div className="py-3 border-indigo-50 border border-solid">
                          <div className="flex flex-col items-center mb-[264px] gap-[78px] md:gap-[58px] sm:gap-[39px]">
                            <div className="flex flex-col self-stretch items-center justify-center gap-3">
                              <Text as="p" className="!text-blue_gray-800 text-center">
                                Friday
                              </Text>
                              <div className="self-stretch h-px bg-indigo-50" />
                            </div>
                            <div className="flex flex-col items-start w-[25%] md:w-full gap-[18px]">
                              <Img
                                src="images/img_searching_data_1.svg"
                                alt="searchingdata"
                                className="h-[200px] w-full md:h-auto"
                              />
                              <Text as="p">
                                <span className="text-blue_gray-400">No Event.&nbsp;</span>
                                <span className="text-indigo-400">Create new</span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
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
