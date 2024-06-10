import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


// images
import LandingPagePic from "../landingPage.png"
import LandingDoc from "../LandingDoc.png"
import FrameAppMobile from "../FrameAppMobile.png"
import GooglePlay from "../GooglePlay.png"
import AppStore from "../AppStore.png"

// icons
import { IoSearch, IoCalendarOutline } from "react-icons/io5";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { FaRegCheckCircle } from "react-icons/fa";

// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';


const LandingPage = () => {

    const slides = [
        {
            title: "Slide 1",
            description: "This is the description for slide 1.",
            content: "Additional content for slide 1."
        },
        {
            title: "Slide 2",
            description: "This is the description for slide 2.",
            content: "Additional content for slide 2."
        },
        {
            title: "Slide 3",
            description: "This is the description for slide 3.",
            content: "Additional content for slide 3."
        },
        {
            title: "Slide 4",
            description: "This is the description for slide 4.",
            content: "Additional content for slide 4."
        },
        // Add more slides as needed
    ];

    return (
        <>
            <section className="w-full py-8 md:py-18 lg:py-18 xl:py-18">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-semibold  sm:text-5xl xl:text-6xl/none">
                                    Book Your <br /><span className="text-[#0471A6]">Appointment</span> Online.
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                            </div>
                        </div>
                        <img
                            src={LandingPagePic}
                            alt="Hero"
                            className="mx-auto aspect-video bg-cover lg:h-[500px] overflow-hidden rounded-xl sm:w-full lg:order-last "
                        />
                    </div>
                </div>
            </section>

            <div className="py-8">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-medium text-center mb-20 mt-10">3 Easy steps and Get Your Solution</h2>
                    <div className="flex flex-col sm:flex-row justify-around gap-8">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="bg-[#6FC3FF] w-[100px] h-[100px] flex justify-center items-center rounded-full">
                                <IoSearch className="text-5xl" />
                            </div>
                            <h1 className="text-2xl font-medium">Check Our Website</h1>
                            <p className="w-[85%] text-center">Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="bg-[#6FC3FF] w-[100px] h-[100px] flex justify-center items-center rounded-full">
                                <IoCalendarOutline className="text-5xl" />
                            </div>
                            <h1 className="text-2xl font-medium">Get Appointment</h1>
                            <p className="w-[85%] text-center">Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere </p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="bg-[#6FC3FF] w-[100px] h-[100px] flex justify-center items-center rounded-full">
                                <LiaNotesMedicalSolid className="text-5xl" />
                            </div>
                            <h1 className="text-2xl font-medium">Happy Consultations</h1>
                            <p className="w-[85%] text-center">Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere </p>
                        </div>
                    </div>
                </div>
            </div>


            <section className="w-full py-6 md:py-10 lg:py-10 xl:py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div>
                            <img
                                src={LandingDoc}
                                width="450"
                                alt="Hero"
                                className="mx-auto  bg-cover h-full object-center overflow-hidden rounded-xl sm:w-full lg:order-last"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-6">
                                <h1 className="text-2xl font-meduim tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Best quality service with our experience doctor
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere .
                                </p>
                            </div>
                            <div className="w-full space-y-2">
                                <p className="text-x text-gray-500  flex items-center">
                                    <FaRegCheckCircle className="mr-2 text-xl text-green-600" />Tortor at auctor urna nunc id cursus metus aliquam
                                </p>
                                <p className="text-x text-gray-500  flex items-center">
                                    <FaRegCheckCircle className="mr-2 text-xl text-green-600" />Tortor at auctor urna nunc id cursus metus aliquam
                                </p>
                                <p className="text-x text-gray-500  flex items-center">
                                    <FaRegCheckCircle className="mr-2 text-xl text-green-600" />Tortor at auctor urna nunc id cursus metus aliquam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full py-4 md:py-10 lg:py-10 xl:py-10">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-6">
                                <h1 className="text-2xl font-meduim tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Mobile App are available Get (AppName) For Free
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                                </p>
                            </div>
                            <div className="w-full flex max-w-sm space-y-2">

                                <img src="" className="bg-cover rounded-xl lg:order-last" />
                                <img src={GooglePlay} className="bg-cover rounded-xl lg:order-last " />
                                <img src={AppStore} className="bg-cover rounded-xl lg:order-last" />
                            </div>
                        </div>
                        <img
                            src={FrameAppMobile}
                            alt="Hero"
                            className="mx-auto bg-cover overflow-hidden rounded-xl h-[400px] rotate-6 lg:order-last"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 px-10">
                <h1></h1>
                <Swiper modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')} >
                    {slides.map((slideContent) => (
                        <SwiperSlide key={slideContent.title} className="w-full px-20">
                            <div className="w-full flex flex-col items-center">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <p className="mt-2 text-xl font-semibold">ilyas El Malki</p>
                                <p className="w-full text-center text-sm">Tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default LandingPage