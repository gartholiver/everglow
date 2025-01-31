import Image from 'next/image';
import { Element } from 'react-scroll';
import { Button, DialogButton } from '../../components';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <Element id="about">
      <section className="relative top-0 w-full border-b-8 bg-gradient-to-t from-teal-800 to-teal-900 border-x-8 md:sticky border-teal-50">
        <div className="max-w-2xl px-6 py-12 mx-auto lg:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <p className="font-semibold text-teal-50 text-base/7">About</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-teal-100 text-pretty sm:text-5xl">My Mission</h2>
              <div className='mt-6 text-teal-50 text-base/7'>
                <p className="mb-6">
                  Everglow was envisioned as an environment that is kind, caring, and professional. I strive to provide the best services with professionalism and integrity. Licensed Esthetician since 2013 and state-licensed educator since 2016. My specialties are Speed-waxing, Brazilian Waxes, Lash enhancement Services, Luxurious Touch Facial Treatments, and Custom Airbrush Tanning.
                </p>
                <p className='mb-8'>
                  I am located inside "Northern Roots Hair Studio and Beauty Spa" at the intersection of Dixie Highway and Frembes. Once inside, proceed to the back of the building to Suite 2 on the right. Feel free to call or text the business number for additional instructions! Parking is located in the rear of the build accessible from Frembes.
                </p>
                <Button
                  className="is-light is-primary shadow-primary-light"
                  isLink={true}
                  useRouter={false}
                  data={{
                    url: 'https://www.google.com/maps/dir//4494+Dixie+Highway,+Suite+2,Waterford+Township,Michigan,48329/@42.7995019,-83.7305383,15z?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D',
                    target: '_blank',
                    title: 'Get Direction'
                  }}
                >
                  Get Direction
                  <MapPinIcon className="w-5 h-auto" />
                </Button>
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