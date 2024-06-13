import Head from "next/head";
import React from "react";
import Image from "next/image";
import logo from "./../../public/logo.png";
import Sphere from "../../public/sphere.svg";
import Shield from "../../public/shield.svg";
import circles from "../../public/circles.svg";
import bg_gradient from "../../public/bg-gradient-top.svg";
import { FaApple, FaAndroid } from "react-icons/fa";
import bg_gradient_customer from "../../public/bg-customer-gradient.svg";
import bg_onboard_gradient from "../../public/bg-onboard-gradient.svg";
import footer_looper_bg from "../../public/footer-looper-bg.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Flashooot Landing Page</title>
        <meta
          name="description"
          content="Collaborate, Work, and Earn with Flashooot."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative bg-black text-white"
        style={{
          backgroundImage: `url(${bg_gradient.src}), url(${circles.src})`,
          backgroundPosition: "left top, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <header className="flex justify-between items-center p-4">
          <div className="w-1/3"></div>{" "}
          {/* Empty space to push the logo to the center */}
          <div className="flex justify-center w-1/3">
            <Image src={logo} alt="FLASHOOT Logo" width={184} height={61} />{" "}
            {/* Set the exact dimensions */}
          </div>
          <div className="w-1/3 flex justify-end"></div>
        </header>

        <section className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Collaborate <span className="text-red-500">{">"}</span> Work{" "}
            <span className="text-red-500">{">"}</span> Earn
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-6">
            Sign up, get verified, and start receiving bookings.
            <br />
            Complete shoots, upload your work, and get paid promptly.
          </p>
          <button className="bg-black text-red-500 border border-red-500 px-6 py-3 rounded-full text-lg sm:text-xl lg:text-2xl transition ease-in-out duration-300 hover:bg-red-500 hover:text-white">
            Partner Today
          </button>
        </section>
      </div>

      <section className="h-screen flex flex-col items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-md lg:text-md font-bold mb-4 text-red-500">
          How it works
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
          Let’s Take You Through a <br /> Step-by-Step Process
        </h3>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white border border-white rounded-full text-2xl font-bold">
                1
              </div>
            </div>
            <div className="text-2xl font-bold mb-4">
              Onboard and Get Verified
            </div>
            <p>
              Create an account with your details and upload verification
              documents. Once approved, you&apos;ll receive a confirmation email and
              become an official partner.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white border border-white rounded-full text-2xl font-bold">
                2
              </div>
            </div>
            <div className="text-2xl font-bold mb-4">Receive Bookings</div>
            <p>
              Get booking notifications via the Flashooot app with job details.
              Review and accept bookings that fit your schedule, then confirm
              your availability.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white border border-white rounded-full text-2xl font-bold">
                3
              </div>
            </div>
            <div className="text-2xl font-bold mb-4">Shoot and Earn</div>
            <p>
              Arrive on time with your gear, understand client needs, and
              deliver high-quality work. Upload the final files for client
              review; once approved, you&apos;ll receive prompt payment.
            </p>
          </div>
        </div>
      </section>
      <div className="wrapperCustomerServiceSupport h-screen bg-black relative">
        <div
          className="lg:w-[50%] max-lg:w-[90%]"
          style={{
            backgroundImage: `url(${bg_gradient_customer.src})`,
            backgroundPosition: "top left",
            backgroundSize: "75%",
            backgroundRepeat: "no-repeat, no-repeat",
            position: "absolute",
            zIndex: "0",
            left: "0px",
            top: "-60px",
            height: "100%",
          }}
        ></div>
        <section
          className="h-screen flex flex-col lg:flex-row items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-36"
          // style={{
          //   backgroundImage: `url(${circles.src}), url(${bg_gradient.src})`,
          //   backgroundPosition: "center, left",
          //   backgroundRepeat: "no-repeat, no-repeat",
          // }}
        >
          <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 space-y-8 px-4 lg:px-0">
            <div
              id="shield"
              className="relative lg:w-[275px] max-lg:w-[200px] max-lg:mx-auto"
            >
              <Image src={Shield} alt="Shield" className="relative z-10" />
              <Image
                src={Sphere}
                alt="Sphere"
                className="absolute left-[-20%] top-1/2 transform -translate-y-1/2 z-0"
              />
            </div>
          </div>
          <div className="max-w-2xl lg:w-1/2 mt-10 lg:mt-0 px-4 lg:px-0 max-lg:flex max-lg:flex-col max-lg:items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-left max-lg:text-center">
              24/7 access to full <br /> service customer <br /> support
            </h2>
            <p className="text-lg w-[85%] sm:text-md lg:text-lg font-normal text-gray-400 text-left leading-6 max-lg:text-center">
              Access round-the-clock customer assistance for all your needs. Our
              dedicated team ensures help is always available when you need it.
            </p>
          </div>
        </section>
      </div>
      <section className="h-[50vh] lg:h-screen relative flex flex-col items-center justify-center text-center text-white bg-black px-4 sm:px-6 lg:px-40">
        <div
          id="bgOnboardGradient"
          style={{
            backgroundImage: `url(${bg_onboard_gradient.src})`,
            backgroundPosition: "center right",
            backgroundSize: "71%",
            backgroundRepeat: "no-repeat, no-repeat",
            position: "absolute",
            zIndex: "0",
            right: "0px",
            top: "-60px",
            height: "100%",
            width: "45%",
          }}
        ></div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Onboard with Us Today and <br /> Get Pre-Launch Partner Benefits
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-center text-gray-500 width-[80%]">
          Join us now and enjoy perks reserved for our early partners. Pay a Rs.
          499 onboarding fee, reimbursed to your wallet upon successful
          registration.
        </p>
        <a href="https://rzp.io/l/1fXRLn4Hix" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-500 px-6 py-3 rounded text-lg sm:text-xl lg:text-2xl w-[100%]">
            Pay Rs. 499 Today
          </button>
        </a>
      </section>

      <footer
        className="text-white py-6 bg-black lg:h-[50vh] lg:px-24 max-lg:px-2"
        style={{
          backgroundImage: `url(${footer_looper_bg.src})`,
          backgroundPosition: "bottom center",
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat no-repeat",
        }}
      >
        <div className="container flex flex-col justify-between relative lg:px-24 pt-24">
          <Image
            className="lg:absolute block lg:top-6 lg:left-24 max-md:mx-auto"
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
          <div className="flex max-md:flex-col justify-between">
            {" "}
            {/* space-y-4 */}
            <div className="flex flex-col">
              <p className="text-center lg:text-left block my-8 text-gray-400">
                Flashoot Partner is a platform or service that <br /> connects
                Reelmakers with Clients looking for Professional Video Services.
              </p>
              <p className="max-lg:text-center max-lg:text-sm">
                © 2024 Flashooot, a product of konchamkoote Pvt. Ltd. All Rights
                Reserved.
              </p>
            </div>
            <div className="flex flex-col space-x-4 my-8">
              <h2 className="flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66699C5.40866 1.66699 1.66699 5.40866 1.66699 10.0003C1.66699 14.592 5.40866 18.3337 10.0003 18.3337C14.592 18.3337 18.3337 14.592 18.3337 10.0003C18.3337 5.40866 14.592 1.66699 10.0003 1.66699ZM13.9837 8.08366L9.25866 12.8087C9.14199 12.9253 8.98366 12.992 8.81699 12.992C8.65033 12.992 8.49199 12.9253 8.37533 12.8087L6.01699 10.4503C5.77533 10.2087 5.77533 9.80866 6.01699 9.56699C6.25866 9.32533 6.65866 9.32533 6.90033 9.56699L8.81699 11.4837L13.1003 7.20033C13.342 6.95866 13.742 6.95866 13.9837 7.20033C14.2253 7.44199 14.2253 7.83366 13.9837 8.08366Z"
                    fill="white"
                  />
                </svg>
                Available on all platforms
              </h2>
              <div className="flex lg:justify-between max-lg:justify-center w-auto my-8">
                <a
                  href="#"
                  className="w-[82px] h-[35px] lg:mx-4 max-lg:me-2 flex items-center justify-center bg-black p-[10px, 16px, 10px, 16px] rounded-[100px] gap-2 border-[1px] border-gray-200"
                >
                  <FaApple size={14} />
                  <p className="text-xs">ios</p>
                </a>
                <a
                  href="#"
                  className="w-[100px] h-[35px] flex items-center justify-center bg-black p-[10px, 16px, 10px, 16px] rounded-[100px] gap-2 border-[1px] border-gray-200"
                >
                  <FaAndroid size={14} />
                  <p className="text-xs">Android</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
