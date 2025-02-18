import Image from 'next/image';
import { Button } from '../../components';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { SiteContext } from '../contexts';
import { Parallax } from 'react-scroll-parallax';

export default function About() {
  const { sitePath: path } = useContext(SiteContext);

  return (
    <section id="about" className="relative z-10 w-full border-b-8 border-x-8 border-teal-50 bg-gradient-to-t from-teal-800 to-teal-900">
      <div className="relative z-10 max-w-2xl px-6 py-12 mx-auto lg:py-24 xl:py-32 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-x-8 lg:gap-y-16">
          <Parallax
            className="lg:pr-8"
            speed={-5}
            translateY={['-50px', '50px']}
          >
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
                  url: 'https://maps.app.goo.gl/aeTGQYESgnkJYBd4A',
                  target: '_blank',
                  title: 'Get Direction'
                }}
              >
                Get Direction
                <MapPinIcon className="w-5 h-auto" />
              </Button>
            </div>
          </Parallax>
          <Parallax
            className="pt-16 lg:row-span-2"
            speed={-5}
            translateY={['50px', '-50px']}
          >
            {typeof path === 'string' && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4 xl:gap-6">
                <div className="overflow-hidden rounded-full shadow-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Megan Messer"
                    height={600}
                    width={600}
                    src={`${path}/wp-content/uploads/2025/01/Facetune_12-07-2023-16-03-33-scaled.webp`}
                    className="block object-cover size-full"
                  />
                </div>
                <div className="-mt-8 overflow-hidden shadow-xl rounded-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt="Female Facial"
                    height={600}
                    width={600}
                    src={`${path}/wp-content/uploads/2025/01/dominique-rivas-rWwuf8yKw4Y-unsplash-scaled.webp`}
                    className="block object-cover size-full"
                  />
                </div>
                <div className="overflow-hidden shadow-xl rounded-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Essential Oil"
                    height={600}
                    width={600}
                    src={`${path}/wp-content/uploads/2025/01/christin-hume-0MoF-Fe0w0A-unsplash-scaled.webp`}
                    className="block object-cover size-full"
                  />
                </div>
                <div className="-mt-8 overflow-hidden rounded-full shadow-xl aspect-square outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt="Male Facial"
                    height={600}
                    width={600}
                    src={`${path}/wp-content/uploads/2025/01/IMG_9033.webp`}
                    className="block object-cover size-full"
                  />
                </div>
              </div>
            )}
          </Parallax>
        </div>
      </div>
    </section>
  );
}