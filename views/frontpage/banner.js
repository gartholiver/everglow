import Image from "next/image";
import { DialogButton } from "../../components/";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

function imageOne(node) {
  return (
    <div className="absolute right-0 z-0 w-2/3 h-full transform scale-105 bg-teal-900 rounded-t-full xl:scale-125 -top-8">
      <Image
        src={node.sourceUrl}
        alt={node.altText}
        height={node.mediaDetails.height}
        width={node.mediaDetails.width}
        className="absolute inset-0 object-cover transform scale-95 rounded-t-full size-full"
      />
    </div>
  );
}

function imageTwo(node) {
  return (
    <div className="absolute z-10 w-3/5 transform scale-105 bg-teal-900 left-6 xl:scale-125 h-2/5 rounded-2xl -bottom-12">
      <Image
        src={node.sourceUrl}
        alt={node.altText}
        height={node.mediaDetails.height}
        width={node.mediaDetails.width}
        className="absolute inset-0 object-cover transform scale-95 size-full rounded-2xl"
      />
    </div>
  );
}

export default function Banner({ banner }) {
  return (
    <section className="relative md:sticky top-0 flex justify-center w-full py-24 bg-gradient-to-t md:bg-gradient-to-r from-teal-800 via-teal-900 to-teal-900 md:py-0 md:h-screen md:min-h-[48rem] item-center border-8 border-white">
      <div className="absolute top-0 right-0 w-full h-1/3 md:h-full md:w-1/3 bg-stone-600"></div>

      <div className="container flex flex-col items-center justify-center gap-20 text-white md:gap-12 xl:gap-24 md:flex-row">
        <div className="flex flex-col order-2 max-w-md gap-6 md:order-1">
          <h1 className="font-semibold tracking-tight text-teal-100 text-3xl/tight sm:text-3xl/tight lg:text-5xl/tight text-balance">
            Radiate&nbsp;Confidence,
            <br/>Glow&nbsp;Effortlessly
          </h1>

          <p className="text-base/7 sm:text-lg/8">Step into a world of rejuvenation where expert care meets tranquility—because glowing skin starts with self-care.</p>

          <div className="flex flex-wrap items-center gap-5 mt-4">
            <DialogButton
              frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQu3nnF3p4mbWpHUKqjMjnWqxd38tnoJwRXOGB/3Pcs6h+OchetGKdnmgGSTQMBuLRQ=="
              className="is-secondary is-dark shadow-primary-dark"
            >
              Book Now
              <CalendarDaysIcon className="w-5 h-auto" />
            </DialogButton>

            <div className="flex items-center gap-2">
              Call or Text

              <a
                href="tel:2489295656"
                target="_blank"
                className="italic underline transition-all duration-200 underline-offset-8 decoration-teal-50 hover:decoration-teal-200"
              >
                (248) 929-5656
              </a>
            </div>
          </div>
        </div>

        <div className="relative order-1 w-full max-w-md md:min-w-96 aspect-square md:order-2">
          {banner?.imageOne && imageOne(banner.imageOne.node)}
          {banner?.imageTwo && imageTwo(banner.imageTwo.node)}
        </div>
      </div>
    </section>
  );
}