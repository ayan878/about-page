"use client";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaUserTie, FaGlobeAmericas } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { QualityCarousel } from "@/components/QualityCarousel";
import { AwardsCarousel } from "@/components/AwardsCarousel";
import Image from "next/image";

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = () => {
      if (count < endValue) {
        setCount((prev) =>
          Math.min(prev + Math.ceil(endValue / 100), endValue)
        );
      }
    };

    const interval = setInterval(increment, 30);
    return () => clearInterval(interval);
  }, [count, endValue]);

  return <span>{count}</span>;
};

export default function AboutPage() {
  return (
    <main>
      {/* First Section */}
      <div className="bg-aboutBg bg-cover bg-center h-screen flex flex-col justify-end mb-8 leading-loose space-y-4 px-4 sm:px-6 md:px-8 lg:px-12 py-12 opacity-100">
        <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[12rem] md:text-[14rem] text-sky-950 opacity-20 tracking-widest font-Oswald font-bold mt-4 mx-auto">
          TAPARIA
        </h1>
        <h3 className="text-2xl sm:text-3xl font-Oswald font-normal text-white">
          About us
        </h3>
        <hr className="w-10 border-1 border-sky-600 ml-4" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Anton text-white tracking-wide sm:tracking-wider">
          Innovation in Every Tool
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
          Taparia Tools has been consistently producing all hand tools in India
          <br />
          with the exact technology of its collaborators.
        </p>
      </div>

      {/* Flex container for two equal-width columns */}
      <div className="flex flex-col lg:flex-row h-screen">
        {/* First div (text content) */}
        <div className="flex-1 py-16 px-4 sm:px-6 md:px-8 lg:px-12 ml-10">
          <h1 className="capitalize text-sky-900 text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-Anton">
            About us
          </h1>
          <p className="text-slate-500 mb-4">
            <strong className="text-sky-900 font-Anton tracking-wider">
              FOUNDED IN 1969,
            </strong>{" "}
            Taparia Tools Ltd. is one of India's most trusted hand tool
            manufacturers. Our journey began with Bahco of Sweden, bringing
            their expertise to India.
          </p>
          <p className="text-slate-500 mb-4">
            Today, we blend high-quality craftsmanship with advanced technology,
            catering to both professional tools and DIY enthusiasts. With a wide
            range of tools that meet global standards, we proudly represent
            India on the international stage.
          </p>
          <Button className="border-2 border-sky-900 text-sky-900 font-semibold bg-transparent hover:bg-sky-900 hover:text-white transition duration-300">
            READ MORE
          </Button>
        </div>

        {/* Second div (image with 1996 text) */}
        <div className="relative flex-1 lg:mt-0 flex justify-center items-center">
          {/* Outer container with triangle clip */}
          <div className="absolute inset-0 bg-aboutBg clip-triangle">
            {/* Empty div to maintain the triangle background */}
          </div>

          {/* Inner container for the text */}
          <div className="relative z-30 -top-16 flex justify-center items-center">
            <h1 className="text-9xl sm:text-7xl lg:text-9xl text-sky-900 font-bold transform -rotate-45">
              1996
            </h1>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-sky-900 opacity-90">
        <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[12rem] md:text-[14rem] text-sky-950 opacity-20 tracking-widest font-Oswald font-bold mt-4 mx-auto">
          TAPARIA
        </h1>
        <Image
          src="/assets/images/Logo.png"
          alt="Logo"
          width={400}
          height={100}
        />
        <p className="text-white text-center px-6">
          As we look to the future, Taparia Tools remains committed to
          maintaining its leadership in the hand tools industry. Our long-term
          goals include investing in cutting-edge technology, expanding our
          product range, and continually enhancing our processes. With a focus
          on sustainability and technological advancement, Taparia is set to
          continue shaping the future of the hand tools industry.
        </p>

        {/* Stats Section with Animated Numbers */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <section className="grid gap-12 md:grid-cols-3 md:gap-16">
            {/* Block #1 */}
            <article className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                <FaUserTie className="w-8 h-8 text-sky-900" />
              </div>
              <h2 className="text-slate-900 text-5xl font-extrabold mb-2">
                <Counter endValue={1200} />
              </h2>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                Employees
              </span>
            </article>

            {/* Block #2 */}
            <article className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center -rotate-3 mb-6">
                <PiBuildingOfficeFill className="w-8 h-8 text-sky-900" />
              </div>
              <h2 className="text-slate-900 text-5xl font-extrabold mb-2">
                <Counter endValue={800} />
              </h2>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                Over Distributors
              </span>
            </article>

            {/* Block #3 */}
            <article className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                <FaGlobeAmericas className="w-8 h-8 text-sky-900" />
              </div>
              <h2 className="text-slate-900 text-5xl font-extrabold mb-2">
                <Counter endValue={25} />
              </h2>
              <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                Exports to Countries
              </span>
            </article>
          </section>
        </div>
      </div>
      {/* Mission and Vision Section */}
      <div className="relative flex flex-col items-center justify-center h-screen">
        <h1 className="relative md:text-7xl sm:text-6xl text-sky-900 font-Anton -mt-20">
          MISSION AND VISION
        </h1>
        <h1 className="text-[5rem] sm:text-[12rem] md:text-[14rem] bg-gradient-to-b from-zinc-300 to-white text-transparent bg-clip-text tracking-wide font-Oswald font-bold -mt-8">
          TAPARIA
        </h1>

        <div className="absolute left-44 top-56">
          <Image
            className="absolute z-30"
            src="/assets/images/mission.png"
            width={400}
            height={200}
          />
          <p className="relative text-sm top-[6.3rem] w-2/5 pl-20 left-24 bg-gradient-to-r from-zinc-200 to-white py-5">
            we aim to lead the industry while putting our customers first,
            setting new standards for quality and sustainalbilty along the way
          </p>
        </div>
        <div className="absolute left-1/2 top-[22rem]">
          <Image
            className="absolute z-30"
            src="/assets/images/vision.png"
            width={400}
            height={200}
          />
          <p className="relative text-sm top-[6rem] w-4/6 pl-20 left-[6.5rem] bg-gradient-to-r from-zinc-200 to-white py-5">
            At Taparia Tools, Our mission is to deliver reliable, durable, and
            high-performance tools that our customers can trust
          </p>
        </div>
      </div>

      {/* Manufacturing facility */}
      <div className="relative bg-manufactureBg bg-cover bg-center h-screen mt-16">
        <div className="absolute top-16 right-10 md:top-20 bg-white flex flex-col p-4 items-center justify-center w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 space-y-3">
          <Image
            className="text-black"
            src="/assets/images/Logo2.png"
            alt="Logo"
            width={400}
            height={100}
          />

          <h2 className="text-sky-900 text-5xl font-Anton text-center">
            MANUFACTURING FACILITY
          </h2>
          <p className="text-zinc-500 text-justify px-8">
            The company has a well laid out fully equipped factory located at
            Nashik, which is about four hours drive from the city of Mumbai in
            Western India and another expanded unit at Goa, approx 600
            kilometers from Mumbai. The plant is located on a total area of
            42832 Sq.Mtrs. All the manufacturing facilities required for
            production of hand tools are under one roof at one location. Hand
            tools manufacturing is complicated, involving high technology and
            labor-intensive production process.
          </p>
        </div>
      </div>

      {/* Quality and assurance */}
      <div className="bg-white py-16 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <h2 className="text-sky-900 text-5xl font-Anton text-center mb-8">
          QUALITY ASSURANCE & INNOVATION
        </h2>

        {/* Section Paragraph */}
        <p className="text-zinc-500 text-justify max-w-3xl mb-8">
          Taparia Tools, quality is at the core of everything we do. As an ISO
          9001-certified company, we adhere to strict quality control processes,
          ensuring that our tools exceed international standards, including
          those from the U.S., U.K., and Germany. Every tool is designed,
          tested, and produced with the highest quality in mind.
        </p>

        {/* Quality Carousel */}
        <QualityCarousel />
      </div>

      {/* Awards and Recognition */}
      <div className="relative bg-white py-16 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <h2 className="text-sky-900 text-5xl font-Anton text-center mb-8">
          AWARDS AND RECOGNITIONS
        </h2>
        <div
          className="relative flex flex-col items-center justify-center space-y-4 py-16"
          style={{
            backgroundImage: 'url("/assets/images/awards.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          {/* Awards Carousel */}
          <AwardsCarousel />
          {/* Section Paragraph */}
          <p className="text-white text-center max-w-3xl mb-8">
            Taparia Tools' excellence has been recognized with numerous Export
            Excellence Awards, beginning in 1974 and continuing through the
            decades. We are proud to have been acknowledged for our
            contributions to the industry both in India and internationally,
            with accolades across multiple years: 1977-78, 1978-79, 1979-80, and
            many more through to 2006-07. Our tools are not only trusted across
            India but are also well-received in countries such as the U.S.A.,
            U.K., Germany, Sweden, and more
          </p>
        </div>
      </div>
    </main>
  );
}

// "use client";
// import { PiBuildingOfficeFill } from "react-icons/pi";
// import { FaUserTie, FaGlobeAmericas } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import { QualityCarousel } from "@/components/QualityCarousel";
// import { AwardsCarousel } from "@/components/AwardsCarousel";
// import Image from "next/image";  // Correct import of Image component

// const Counter = ({ endValue }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const increment = () => {
//       if (count < endValue) {
//         setCount((prev) =>
//           Math.min(prev + Math.ceil(endValue / 100), endValue)
//         );
//       }
//     };

//     const interval = setInterval(increment, 30);
//     return () => clearInterval(interval);
//   }, [count, endValue]);

//   return <span>{count}</span>;
// };

// export default function AboutPage() {
//   return (
//     <main>
//       {/* First Section */}
//       <div className="bg-aboutBg bg-cover bg-center h-screen flex flex-col justify-end mb-8 leading-loose space-y-4 px-4 sm:px-6 md:px-8 lg:px-12 py-12 opacity-100">
//         <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[12rem] md:text-[14rem] text-sky-950 opacity-20 tracking-widest font-Oswald font-bold mt-4 mx-auto">
//           TAPARIA
//         </h1>
//         <h3 className="text-2xl sm:text-3xl font-Oswald font-normal text-white">
//           About us
//         </h3>
//         <hr className="w-10 border-1 border-sky-600 ml-4" />
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Anton text-white tracking-wide sm:tracking-wider">
//           Innovation in Every Tool
//         </h1>
//         <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
//           Taparia Tools has been consistently producing all hand tools in India
//           <br />
//           with the exact technology of its collaborators.
//         </p>
//       </div>

//       {/* Flex container for two equal-width columns */}
//       <div className="flex flex-col lg:flex-row h-screen">
//         {/* First div (text content) */}
//         <div className="flex-1 py-16 px-4 sm:px-6 md:px-8 lg:px-12 ml-10">
//           <h1 className="capitalize text-sky-900 text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-Anton">
//             About us
//           </h1>
//           <p className="text-slate-500 mb-4">
//             <strong className="text-sky-900 font-Anton tracking-wider">
//               FOUNDED IN 1969,
//             </strong>{" "}
//             Taparia Tools Ltd. is one of India's most trusted hand tool
//             manufacturers. Our journey began with Bahco of Sweden, bringing
//             their expertise to India.
//           </p>
//           <p className="text-slate-500 mb-4">
//             Today, we blend high-quality craftsmanship with advanced technology,
//             catering to both professional tools and DIY enthusiasts. With a wide
//             range of tools that meet global standards, we proudly represent
//             India on the international stage.
//           </p>
//           <Button className="border-2 border-sky-900 text-sky-900 font-semibold bg-transparent hover:bg-sky-900 hover:text-white transition duration-300">
//             READ MORE
//           </Button>
//         </div>

//         {/* Second div (image with 1996 text) */}
//         <div className="relative flex-1 lg:mt-0 flex justify-center items-center">
//           {/* Outer container with triangle clip */}
//           <div className="absolute inset-0 bg-aboutBg clip-triangle">
//             {/* Empty div to maintain the triangle background */}
//           </div>

//           {/* Inner container for the text */}
//           <div className="relative z-30 -top-16 flex justify-center items-center">
//             <h1 className="text-9xl sm:text-7xl lg:text-9xl text-sky-900 font-bold transform -rotate-45">
//               1996
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="relative flex flex-col items-center justify-center h-screen bg-sky-900 opacity-90">
//         <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[12rem] md:text-[14rem] text-sky-950 opacity-20 tracking-widest font-Oswald font-bold mt-4 mx-auto">
//           TAPARIA
//         </h1>
//         {/* Image without /public prefix */}
//         <Image
//           src="/assets/images/Logo.png"
//           alt="Logo"
//           width={400}
//           height={100}
//         />
//         <p className="text-white text-center px-6">
//           As we look to the future, Taparia Tools remains committed to
//           maintaining its leadership in the hand tools industry. Our long-term
//           goals include investing in cutting-edge technology, expanding our
//           product range, and continually enhancing our processes. With a focus
//           on sustainability and technological advancement, Taparia is set to
//           continue shaping the future of the hand tools industry.
//         </p>

//         {/* Stats Section with Animated Numbers */}
//         <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
//           <section className="grid gap-12 md:grid-cols-3 md:gap-16">
//             {/* Block #1 */}
//             <article className="flex flex-col items-center text-center">
//               <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
//                 <FaUserTie className="w-8 h-8 text-sky-900" />
//               </div>
//               <h2 className="text-slate-900 text-5xl font-extrabold mb-2">
//                 <Counter endValue={1200} />
//               </h2>
//               <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
//                 Employees
//               </span>
//             </article>

//             {/* Block #2 */}
//             <article className="flex flex-col items-center text-center">
//               <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center -rotate-3 mb-6">
//                 <PiBuildingOfficeFill className="w-8 h-8 text-sky-900" />
//               </div>
//               <h2 className="text-slate-900 text-5xl font-extrabold mb-2">
//                 <Counter endValue={800} />
//               </h2>
//               <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
//                 Over Distributors
//               </span>
//             </article>

//             {/* Block #3 */}
//             <article className="flex flex-col items-center text-center">
//               <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
//                 <FaGlobeAmericas className="w-8 h-8 text-sky-900" />
//               </div>
//               <h2 className="text-slate-900 text-5xl font-extrabold mb-2">
//                 <Counter endValue={25} />
//               </h2>
//               <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
//                 Exports to Countries
//               </span>
//             </article>
//           </section>
//         </div>
//       </div>
//       {/* Mission and Vision Section */}
//       <div className="relative flex flex-col items-center justify-center h-screen">
//         <h1 className="relative md:text-7xl sm:text-6xl text-sky-900 font-Anton -mt-20">
//           MISSION AND VISION
//         </h1>
//         <h1 className="text-[5rem] sm:text-[12rem] md:text-[14rem] bg-gradient-to-b from-zinc-500 to-s+white text-transparent bg-clip-text tracking-wide font-Oswald font-bold -mt-8">
//           TAPARIA
//         </h1>
//         {/* Mission & Vision Images without /public prefix */}
//         <Image
//           className="absolute left-1/2 top-96"
//           src="/assets/images/mission.png"
//           width={400}
//           height={200}
//         />
//         <Image
//           className="absolute left-44 top-56"
//           src="/assets/images/vision.png"
//           width={400}
//           height={200}
//         />
//       </div>

//       {/* Manufacturing facility */}
//       <div className="relative bg-manufactureBg bg-cover bg-center h-screen mt-8">
//         <div className="absolute top-20 right-10 md:top-32 bg-white flex flex-col p-4 items-center justify-center w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5">
//           {/* Correct image path */}
//           <Image src="/assets/images/Logo.png" alt="Logo" width={600} height={200} />
//           <h2 className="text-sky-900 text-5xl font-Anton text-center">
//             MANUFACTURING FACILITY
//           </h2>
//           <p className="text-zinc-500 text-justify">
//             The company has a well laid out fully equipped factory located at
//             Nashik...
//           </p>
//         </div>
//       </div>

//       {/* Quality and assurance */}
//       <div className="bg-white py-16 flex flex-col items-center justify-center">
//         <h2 className="text-sky-900 text-5xl font-Anton text-center mb-8">
//           QUALITY ASSURANCE & INNOVATION
//         </h2>

//         <p className="text-zinc-500 text-justify max-w-3xl mb-8">
//           Taparia Tools, quality is at the core of everything we do...
//         </p>

//         {/* Quality Carousel */}
//         <QualityCarousel />
//       </div>

//       {/* Awards and Recognition */}
//       <div className="relative bg-white py-16 flex flex-col items-center justify-center">
//         <h2 className="text-sky-900 text-5xl font-Anton text-center mb-8">
//           AWARDS AND RECOGNITIONS
//         </h2>
//         <div
//           className="relative flex flex-col items-center justify-center space-y-4 py-16"
//           style={{
//             backgroundImage: 'url("/assets/images/awards.png")',
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "100vh",
//           }}
//         >
//           <AwardsCarousel />
//           <p className="text-white text-center max-w-3xl mb-8">
//             Taparia Tools' excellence has been recognized with numerous Export
//             Excellence Awards...
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
