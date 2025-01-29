import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button } from '../../components';
import { nanoid } from 'nanoid';

const samples = [
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur. Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
  {
    testimonial: 'Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.',
    name: 'Judith Black',
    title: 'CEO of Workcation'
  },
];

function Testimonial({ data }) {
  return (
    <article className="w-full p-6 overflow-auto bg-white sm:p-8 lg:p-12">
      <figure className="max-w-2xl mx-auto">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex text-teal-900 gap-x-1">
          <StarIcon aria-hidden="true" className="flex-none size-5" />
          <StarIcon aria-hidden="true" className="flex-none size-5" />
          <StarIcon aria-hidden="true" className="flex-none size-5" />
          <StarIcon aria-hidden="true" className="flex-none size-5" />
          <StarIcon aria-hidden="true" className="flex-none size-5" />
        </div>
        <blockquote className="mt-6 font-semibold tracking-tight text-stone-600 text-sm/7 md:text-base/8 xl:text-lg/9">
          <p className='overflow-auto max-h-72'>
            "{data.testimonial}"
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-10 gap-x-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
            className="rounded-full size-12 bg-gray-50"
          />
          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">{data.name}</div>
            <div className="mt-0.5 text-gray-600">{data.title}</div>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

export default function Reviews() {
  return (
    <section className="relative py-24 border-t-8 bg-teal-50 border-x-8 border-teal-50">
      <div className='absolute bottom-0 left-0 z-0 w-full h-64 bg-teal-900 md:h-72'></div>

      <div className='container relative z-10'>
        <div className="grid grid-cols-1 mb-12 sm:grid-cols-2 sm:gap-6">
          <div className='flex flex-col gap-4'>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-teal-900 text-pretty sm:text-5xl">My Reviews</h2>
            <p className='text-stone-600 lg:text-lg/8'>Over 200 five star reviews on Vagaro!</p>
          </div>
          <div className='flex items-center justify-end'>
            <Button
              isLink={true}
              data={{
                url: '#fpo',
                title: 'Leave A Review',
                target: '_blank'
              }}
              className="is-dark is-primary shadow-secondary-light"
            >
              Leave A Review
              <StarIcon className='w-5 h-auto' />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">        
        <Swiper
          className='px-8 sm:px-12 lg:px-16'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
            disabledClass: "opacity-50"
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {samples.map((sample) => (
            <SwiperSlide key={nanoid()}>
              <Testimonial data={sample} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className='absolute z-30 flex items-center justify-center bg-teal-900 rounded-full size-12 prev-arrow arrow top-1/2 left-2 md:left-6'>
          <ChevronLeftIcon className="w-6 h-auto text-white" />
        </button>
        <button className='absolute z-30 flex items-center justify-center bg-teal-900 rounded-full size-12 next-arrow arrow top-1/2 right-2 md:right-6'>
          <ChevronRightIcon className='w-6 h-auto text-white' />
        </button>
      </div>
    </section>
  );
}