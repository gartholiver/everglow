import Image from "next/image";
import { Button } from "../../components";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { DialogButton } from "../../components/Button";
import { Element } from "react-scroll";

export default function Services() {
  return (
    <Element id="services" className="relative w-full py-24 overflow-hidden border-t-8 bg-teal-50 border-x-8 border-teal-50">
      <div className="absolute top-0 left-0 transform rotate-45 -translate-x-48 -translate-y-48 scale-[3.5] 2xl:scale-[4] bg-stone-600 size-96"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-teal-900 md:h-48"></div>

      <div className="relative z-10 max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
        <h2 className="font-semibold text-teal-50 text-base/7">My Services</h2>
        <p className="max-w-lg mt-2 text-4xl font-semibold tracking-tight text-teal-100 text-pretty sm:text-5xl">
          Everything you need to truely glow up and show out.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-10 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-white w-full ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <Image
                alt="waxing"
                src="http://localhost:8882/wp-content/uploads/2025/01/laser-epilation-hair-removal-therapy-1.webp"
                className="object-cover object-left w-full h-80"
                width="1200"
                height="768"
              />
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Waxing</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Get smooth from head to toe</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
                  egestas sem pellentesque.
                </p>
                <div className="mt-6">
                  <DialogButton
                    className="is-dark is-primary shadow-secondary-light"
                    frame="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mw/P269iYkjnJcUKy1e/SonNsoD8V8sj7U/iHm6jOQy0xffUhvGKOL+75HaMCXUD3SS3ch2I56XANCXTXivOarRHIJmN3qPSw6HEeVZBAJH8mUE2+CFGGD4sarciQztL6F8Gt/fP35QouH/gtHiB6X7S7Fk/RMQ76Li+eEYe3/Cc4Re3rBW0muWSkwKKvGsukFNPp0phlXB+tdoaJBNWoVZxT/R0aiwEPjlD1soQCIphq2V1RJVXCUSyjsXk5Vvdpxk6Tnd8VdrcgIZ7GcsTRPIYqRdFH96kwTwMX8bITvndRUTURApspqTwNJ+cLO8cjbKZo181QCK6IboGKO1NXRVe7fg2m/xARSFMLXP78QUno="
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </DialogButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden w-full rounded-lg bg-white ring-1 ring-white/15 lg:rounded-tr-[2rem]">
              <Image
                alt="lashes/brows"
                src="http://localhost:8882/wp-content/uploads/2025/01/fleur-kaan-w4Dj3MshHQ0-unsplash-scaled.webp"
                className="object-cover w-full h-80"
                width="500"
                height="500"
              />
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Lashes & Brows</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Shape dat shit up</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.
                </p>
                <div className="mt-6">
                  <Button
                    isLink={true}
                    className="is-dark is-secondary shadow-primary-light"
                    data={{
                      title: 'Learn More',
                      url: '#fpo',
                      target: '_self'
                    }}
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden w-full rounded-lg bg-white ring-1 ring-white/15 lg:rounded-bl-[2rem]">
              <img
                alt=""
                src="http://localhost:8882/wp-content/uploads/2025/01/sharon-pittaway-4_hFxTsmaO4-unsplash-scaled.webp"
                className="object-cover w-full h-80"
              />
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Spray Tanning</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Be less pale</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
                <div className="mt-6">
                  <Button
                    isLink={true}
                    className="is-dark is-secondary shadow-primary-light"
                    data={{
                      title: 'Learn More',
                      url: '#fpo',
                      target: '_self'
                    }}
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden w-full rounded-lg bg-white ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt=""
                src="http://localhost:8882/wp-content/uploads/2025/01/dominique-rivas-tVgjf-Jd-IU-unsplash.webp"
                className="object-cover w-full h-80"
              />
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Facials</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">It feels great</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
                  augue sed elit dictum vulputate.
                </p>
                <div className="mt-6">
                  <Button
                    isLink={true}
                    className="is-dark is-primary shadow-secondary-light"
                    data={{
                      title: 'Learn More',
                      url: '#fpo',
                      target: '_self'
                    }}
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}