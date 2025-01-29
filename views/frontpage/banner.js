import Image from "next/image";
import { Button } from "../../components/";
import { ChatBubbleOvalLeftEllipsisIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

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
          {banner?.heading && (
            <h1
              className="text-5xl font-semibold tracking-tight text-teal-100 text-balance sm:text-6xl"
              dangerouslySetInnerHTML={{ __html: banner?.heading }}
            ></h1>
          )}

          {banner?.subheading && (
            <div dangerouslySetInnerHTML={{ __html: banner?.subheading }}></div>
          )}

          {(banner?.buttonOne || banner?.buttonTwo) && (
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {banner?.buttonOne && (
                <Button
                  data={banner.buttonOne}
                  isLink={true}
                  className="is-secondary is-dark shadow-primary-dark"
                >
                  {banner.buttonOne.title}
                  <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-auto"/>
                </Button>
              )}

              {banner?.buttonTwo && (
                <Button
                  data={banner.buttonTwo}
                  isLink={true}
                  className="is-primary is-light shadow-primary-light"
                >
                  {banner.buttonTwo.title}
                  <CalendarDaysIcon className="w-5 h-auto" />
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="relative order-1 w-full max-w-md md:min-w-96 aspect-square md:order-2">
          {banner?.imageOne && imageOne(banner.imageOne.node)}
          {banner?.imageTwo && imageTwo(banner.imageTwo.node)}
        </div>
      </div>
    </section>
  );
}