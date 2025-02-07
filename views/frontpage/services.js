import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { DialogButton } from "../../components/Button";
import { Element } from "react-scroll";
import { useContext } from "react";
import { SiteContext } from "../contexts";

export default function Services() {
  const { sitePath: path } = useContext(SiteContext);

  return (
    <Element id="services" className="relative w-full py-24 overflow-hidden border-t-8 bg-teal-50 border-x-8 border-teal-50">
      <div className="absolute top-0 left-0 transform rotate-45 -translate-x-48 -translate-y-48 scale-[3.5] 2xl:scale-[4] bg-stone-600 size-96"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-teal-900 md:h-48"></div>

      <div className="relative z-10 max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
        <h2 className="font-semibold text-teal-50 text-base/7">My Services</h2>
        <p className="max-w-lg mt-2 text-4xl font-semibold tracking-tight text-teal-100 text-pretty sm:text-5xl">
          Enhancing Your Natural Beauty, One Treatment at a Time
        </p>
        <div className="grid grid-cols-1 gap-4 mt-10 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-white w-full ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              {typeof path === 'string' && (
                <Image
                  alt="waxing"
                  src={`${path}/wp-content/uploads/2025/01/laser-epilation-hair-removal-therapy-1.webp`}
                  className="object-cover object-left w-full h-80"
                  width="1200"
                  height="768"
                />
              )}
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Waxing</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Smooth, Flawless Skin, Effortlessly</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Experience gentle, expert waxing for silky-smooth skin. From brows to Brazilians, I ensure precision, comfort, and long-lasting results. Glow with confidence!
                </p>
                <div className="mt-6">
                  <DialogButton
                    className="is-dark is-primary shadow-secondary-light"
                    frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQnMisTFctN14rC73gciJ+WEYXcGum+x/wcYi7sOKOKIFSoexXm6x0WDFhMmuaUJm1g=="
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
              {typeof path === 'string' && (
                <Image
                  alt="lashes/brows"
                  src={`${path}/wp-content/uploads/2025/01/fleur-kaan-w4Dj3MshHQ0-unsplash-scaled.webp`}
                  className="object-cover w-full h-80"
                  width="500"
                  height="500"
                />
              )}
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Lashes & Brows</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Perfectly Framed, Effortlessly Beautiful</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Elevate your natural beauty with expert brow shaping and lash treatments. From precise waxing to lifting and tinting, we create a look you'll love!
                </p>
                <div className="mt-6">
                  <DialogButton
                    className="is-dark is-secondary shadow-primary-light"
                    frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQtyw/o2ICbFWjzr+TynGXZmsXhTTpooZoHZRua8Qy2a3maRDLWLbPWi8I6O1brxsTQ=="
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </DialogButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden w-full rounded-lg bg-white ring-1 ring-white/15 lg:rounded-bl-[2rem]">
              {typeof path === 'string' && (
                <Image
                  alt="spray tanning"
                  width="500"
                  height="500"
                  src={`${path}/wp-content/uploads/2025/01/sharon-pittaway-4_hFxTsmaO4-unsplash-scaled.webp`}
                  className="object-cover w-full h-80"
                />
              )}
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Spray Tanning</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Sun-Kissed Glow, No Sun Required</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Get a Impeccable, natural-looking tan with our custom spray tanning. Streak-free, long-lasting, and perfectly tailored to your skin tone for a radiant glow!
                </p>
                <div className="mt-6">
                  <DialogButton
                    className="is-dark is-secondary shadow-primary-light"
                    frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQha1Cs/Qa/gScWbzOUb4AwTl1prpWHlbIRflFuzQ5DR4hRDN4YIiW0/QC3jOaqx3Tw=="
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </DialogButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden w-full rounded-lg bg-white ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              {typeof path === 'string' && (
                <Image
                  alt="facials"
                  width="1200"
                  height="768"
                  src={`${path}/wp-content/uploads/2025/01/dominique-rivas-tVgjf-Jd-IU-unsplash.webp`}
                  className="object-cover w-full h-80"
                />
              )}
              <div className="p-10">
                <h3 className="font-semibold text-amber-950 text-sm/4">Facials</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-teal-900">Nourish, Rejuvenate, Glow</p>
                <p className="max-w-lg mt-2 text-stone-600 text-sm/6">
                  Indulge in expert facial treatments designed to refresh and restore your skin. From deep hydration to targeted treatments, we’ll reveal your most radiant glow!
                </p>
                <div className="mt-6">
                  <DialogButton
                    className="is-dark is-primary shadow-secondary-light"
                    frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQqUWYQJHxNWU4X3sN91IRAIuMI+tKpAw3Xf9X85/bDC8L+M1nM1MmYriH8fZMXJAyQ=="
                  >
                    Learn More
                    <SparklesIcon className="w-5 h-auto" />
                  </DialogButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}