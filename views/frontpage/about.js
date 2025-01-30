import Image from 'next/image';
import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element id="about">
      <section className="relative top-0 w-full border-b-8 bg-gradient-to-t from-teal-800 to-teal-900 border-x-8 md:sticky border-teal-50">
        <div className="max-w-2xl px-6 py-12 mx-auto lg:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <p className="font-semibold text-teal-50 text-base/7">About us</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-teal-100 text-pretty sm:text-5xl">Our mission</h2>
              <div className='mt-6 text-teal-50 text-base/7'>
                <p className="mb-6">
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                  sed amet vitae sed turpis id.
                </p>
                <p>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div className="pt-16 lg:row-span-2">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4 xl:gap-6">
                <div className="overflow-hidden rounded-full shadow-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block object-cover size-full"
                  />
                </div>
                <div className="-mt-8 overflow-hidden shadow-xl rounded-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block object-cover size-full"
                  />
                </div>
                <div className="overflow-hidden shadow-xl rounded-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block object-cover size-full"
                  />
                </div>
                <div className="-mt-8 overflow-hidden rounded-full shadow-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block object-cover size-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}