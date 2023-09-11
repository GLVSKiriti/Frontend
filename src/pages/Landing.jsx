// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
import { useEffect, useState } from "react";
import TeamVector from "../assets/teamvector";
import MetaMask from "../components/Button/MetaMask";
import NavBar from "../components/Navbar/Navbar";
import LoginCard from "../components/LoginCard/loginCard";
const Landing = () => {
  // const [isConnected, setIsConnected] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const detectCurrentProvider = () => {
  //   let provider;
  //   if (window.ethereum) {
  //     provider = window.ethereum;
  //   } else if (window.web3) {
  //     provider = window.web3.currentProvider;
  //   } else {
  //     console.log("It is not an Ethereum browser");
  //   }
  //   return provider;
  // };

  // const onConnect = async () => {
  //   try {
  //     const currentProvider = detectCurrentProvider();
  //     if (currentProvider) {
  //       await currentProvider.request({ method: "eth_requestAccounts" });
  //       const web3 = new Web3(currentProvider);
  //       const userAccount = await web3.eth.getAccounts();
  //       const account = userAccount[0];
  //       let ethBalance = await web3.eth.getBalance(account);
  //       if (ethBalance) {
  //         console.log({ EthBalance: ethBalance });
  //       }
  //       setIsConnected(true);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 900);
  const [isFoldView, setIsFoldView] = useState(window.innerWidth < 350);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
      setIsFoldView(window.innerWidth < 350);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="landing-page-container flex align-middle flex-col justify-center p-2 xl:p-20 bg-new-primary-bg-color items-center overflow-x-hidden gap-3.5rem h-screen pt-16">
        <div className="landing-container flex-row-reverse  md:flex items-center h-50vh px-5">
          <div className="landing-container">
            {isMobileView && !isFoldView && (
              <TeamVector width={328} height={262} />
            )}
            {isFoldView && <TeamVector width={250} height={242} />}
            {!isMobileView && !isFoldView && (
              <TeamVector width={488} height={358} />
            )}
          </div>
          <div className="landing-page-text-container flex flex-col items-start gap-3 md:w-2/3">
            <div className="landing-header-text mb-2 font-semibold text-3xl text-intro-text-color">
              AcademiaGuard: <br /> Empowering the Future of Education
            </div>
            <div className="landing-text mb-4 text-sm font-normal md:text-base text-body-text-color">
              Welcome to AcademiaGuard, where the future of education meets
              blockchain innovation. Our platform is your digital fortress,
              securing academic records with the power of blockchain technology.
              Say goodbye to worries of tampering or lost credentials. Join us
              on a journey to redefine trust in education. Your success,
              digitally protected.
            </div>
            <MetaMask />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
