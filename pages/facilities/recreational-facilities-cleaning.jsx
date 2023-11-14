import Image from "next/image";
import Link from 'next/link';

const RecreationalFacilitiesCleaning = () => {
  return (
    <main role="main">
      {/* Start of 'Facilities' Landing */}
      <section className="recreational-bg-image flex">
        <div className="z-20 self-center md:self-start md:pl-16">
          <h2 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-100">
            FACILITIES
          </h2>
          <h1 className="font-semibold text-3xl md:text-5xl text-gray-50 mb-8">
            Sports and <br />
            Recreational
            <br />
            Facilities
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
            Absolutely! At Perfect Scrub, we understand the importance of
            maintaining clean and sanitary environments in various types of
            establishments, including local gyms, yoga studios, and bowling
            alleys. We take pride in delivering exceptional cleaning services
            that meet your specific needs, ensuring that your venues remain
            clean both before and after use.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            We pay meticulous attention to quality and understand that these
            spaces require thorough cleaning to provide a pleasant and safe
            experience for your patrons. Our dedicated service teams are trained
            in deep cleaning techniques, ensuring that all areas, including
            high-touch surfaces, floors, and equipment, receive the attention
            they deserve.
          </p>
          <Image
            width={500}
            height={500}
            className="max-h-full lg:h-100 mx-auto object-cover mb-10"
            src="/facilities/gym-cleaner.jpg"
            alt="person about to clean a gym"
          />
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            Whether it's sanitizing exercise machines and yoga mats, maintaining
            cleanliness in locker rooms and shower facilities, or ensuring the
            lanes and seating areas in a bowling alley are pristine, we have the
            expertise to handle the unique cleaning requirements of your
            establishment.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            By choosing Perfect Scrub as your preferred service provider, you
            can trust that we will go above and beyond to exceed your
            expectations. Our commitment to quality and customer satisfaction
            ensures that your venues are consistently clean, creating a positive
            and hygienic environment for your customers.
          </p>
          <p className="text-xl lg:text-2xl max-w-prose lg:pr-16 pb-16 leading-relaxed text-gray-600">
            If you have specific cleaning needs or would like to discuss how our
            services can benefit your gym, yoga studio, or bowling alley, please
            feel free to reach out to us. We would be more than happy to assist
            you and provide a free walk-through of your space to determine the
            best cleaning solutions for your establishment.
          </p>
        </article>
        <aside className="hidden lg:block">
          <h3 className="font-sans text-2xl mb-4">
            Other <span className="font-bold">Facilities</span> we service:
          </h3>
          <ul className="pl-3 text-lg">
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="office-buildings-cleaning">Office Buildings</Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="retail-stores-cleaning">
                Retail stores and shopping centers
              </Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="day-care-cleaning">Day Care and Preschool</Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="school-cleaning">Schools and universities</Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="medical-office-cleaning">
                Medical Offices and clinics
              </Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="hotel-cleaning">Hotels and resorts</Link>
            </li>
            <li className="active-side-menu py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="recreational-facilities-cleaning">
                Sports and recreational facilities
              </Link>
            </li>
            <li className="py-2 pr-1 border-b hover:text-blue-600 hover:border-blue-600">
              <Link href="post-construction-cleaning">
                Post Construction Clean up
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
              src="/man-holding-brush.png"
              alt="man ready to clean"
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

export default RecreationalFacilitiesCleaning;