import Image from "next/image";
import Link from "next/link";

const CarpetCleaning = () => {
  return (
    <main role="main">
      {/* Start of 'Services' Landing */}
      <section className="carpet-bg-image flex">
        <div className="z-20 self-center md:self-start md:pl-16">
          <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
            SERVICES
          </h2>
          <h1 className="font-semibold text-3xl lg:text-5xl text-gray-50 mb-8">
            Carpet Cleaning
          </h1>
        </div>
        {/* Monogram Overlay */}
        <Image
          width={500}
          height={500}
          className="absolute max-w-xs z-10 opacity-30 -bottom-5 -left-10 w-3/4"
          src="/ps-monogram-white.svg"
          alt=""
        />
      </section>

      {/* Start Information section*/}
      <section className="px-4 lg:px-16 pt-24 pb-0 lg:pt-40 lg:pb-10 flex gap-14">
        <article>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-10 leading-relaxed text-gray-600">
            Did you know that over 70% of debris and dirt finds its way into
            spaces through carpets? This unwanted dirt buildup not only creates
            an unattractive appearance but can also pose potential health risks.
            At our company, we understand that you require more than just an
            average commercial carpet cleaning service. We recognize that clean
            carpets play a vital role in creating an appealing, safe, and
            healthy workspace environment. Our commitment goes beyond mere
            cleaning – we aim to help our clients protect their carpets and
            extend their lifespan.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            Through our high-quality service, we offer thorough shampoo cleaning
            that effectively eliminates dirt, dust, and allergens from your
            carpet surfaces. By regularly restoring your carpets, we not only
            enhance their appearance but also contribute to a healthier indoor
            environment. We collaborate closely with your team to assess your
            spaces and identify areas with high foot traffic, ensuring that our
            carpet cleaning is tailored to your specific needs.
          </p>
          <Image
            width={500}
            height={500}
            className="max-h-full lg:h-100 mx-auto object-cover mb-10"
            src="/carpet-cleaner-2.jpg"
            alt="man cleaning a carpet"
          />
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            Moreover, we prioritize the use of products that are both safe for
            your carpets and environmentally friendly, minimizing any potential
            damage. With our comprehensive carpet cleaning service, you can
            enjoy the benefits of clean, well-maintained carpets that enhance
            the overall ambiance of your workspace while ensuring a healthy and
            inviting atmosphere.
          </p>
        </article>
        <aside className="hidden lg:block">
          <h3 className="font-sans text-2xl mb-4">
            Our <span className="font-bold">Services</span>
          </h3>
          <ul className="pl-3 text-lg">
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="standard-cleaning">Standard Cleaning</Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="deep-cleaning">Deep Cleaning</Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="disinfecting-services">
                Disinfecting Services
              </Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="janitorial-services">Janitorial Services</Link>
            </li>
            <li className="active-side-menu py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="carpet-cleaning">Carpet Cleaning</Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="washroom-cleaning-and-consumables">
                Washroom & Consumables
              </Link>
            </li>
          </ul>
        </aside>
      </section>

      {/* Start of Small Steps */}
      <section className="flex flex-col px-4 py-16 justify-center bg-white">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <h2 className="font-semibold text-2xl lg:text-4xl text-gray-700 px-1 py-5 mb-8 border-t-4 rounded-xl md:ml-8 self-center  border-b-8 border-green-500">
            Getting your <br />
            Perfect Scrub Clean <br /> is as EASY AS:
            {/* <span className="text-blue-600">1-2-3</span> */}
          </h2>
          <div className="lg:block mb-0 lg:-mb-16 w-1/2 self-center">
            <Image
              width={500}
              height={500}
              className="object-cover"
              src="/woman-with-cap.png"
              alt="woman holding window scraper"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-6 lg:px-4 justify-center text-center bg-white">
          <div className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
            <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">
              #1
            </span>
            <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">
              Use our
              <Link className="text-blue-600 hover:underline" href="/quote">
                {" "}
                get a quote
              </Link>
              form to inform us about your cleaning needs
            </span>
          </div>
          <div className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
            <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">
              #2
            </span>
            <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">
              We will get in touch with you and process your cleaning request
            </span>
          </div>
          <div className="w-full md:w-72 border-8 rounded-2xl border-blue-600 px-2 py-6 mb-8 lg:ml-10 font-plexSerif font-semibold flex flex-col lg:mb-16 pb-2 ring-4 ring-blue-300 ring-inset">
            <span className="text-2xl lg:text-4xl lg:mr-2 mb-4 text-green-500">
              #3
            </span>
            <span className="text-xl lg:text-2xl px-2 pb-8 lg:mr-2 text-gray-700">
              A cleaning crew will be at your location on your designated start
              date
            </span>
          </div>
        </div>
        <div className="py-6 mb-8 font-sans font-bold grid grid-col-1 lg:mb-20 pb-10">
          {/* <h2 className="font-sans text-4xl">A job well done is what we stand for</h2> */}
          <h2 className="font-sans text-4xl text-center mb-6">
            A job well done. That is our promise to you.
          </h2>
          <p className="font-plexSerif text-2xl lg:text-3xl lg:mr-2 mb-10 text-green-500 text-center">
            Our 100% SATISFACTION GUARANTEE
          </p>
          <p className="text-lg lg:text-2xl mb-20 m-auto text-gray-700 text-center">
            If you are not totally satisfied with our performance - we will
            clean it again, free.
          </p>
          <Link
            className="text-2xl py-4 px-8 m-auto text-white bg-green-600 hover:shadow-xl text-center no-underline 
              uppercase border-2 border-green-600 hover:bg-green-500 hover:border-green-500 scale-100 hover:scale-105 self-center cursor-pointer"
            href="/contact"
          >
            contact us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CarpetCleaning;