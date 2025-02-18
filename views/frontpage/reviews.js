import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, DialogButton } from '../../components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import { LinkIcon } from '@heroicons/react/24/outline';

function Testimonial({ data }) {
  const initials = (name) => {
    let split = name.split(' ');
    let first = (split[0] || ' ').split('')[0];
    let last = (split[1] || ' ').split('')[0];

    return first.replace(' ', '') + last.replace(' ', '');
  };

  return (
    <article className="w-full px-12 py-6 overflow-auto bg-white md:p-8 lg:p-12">
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
          <p className='overflow-auto text-sm max-h-72 sm:text-base'>
            "{data.text}"
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-10 gap-x-6">
          <div className="flex items-center justify-center rounded-full size-12 bg-gray-50">
            <div className="font-bold lg:text-lg">{initials(data.authorAttribution.displayName)}</div>
          </div>

          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">
              {data.authorAttribution.displayName}
            </div>
            <div className="mt-0.5 text-gray-600">
              Happy Client
            </div>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (status === 'idle') {
      setStatus('loading');

      const loader = new Loader({
        apiKey: "AIzaSyC-lCyuMHmiJIg6_Zloylhk6bcQEdIo1CA",
        version: "weekly"
      });
    
      loader.importLibrary('places')
        .then(({ Place }) => {
          const place = new Place({
            id: "ChIJ2ax8saW9JIgRJhJPPfDjyXg",
            requestedLanguage: "en"
          });

          place.fetchFields({ fields: ["reviews"] })
            .then((results) => {
              const reviews = results.place.Eg.reviews.filter((review) => {
                return review.rating > 4;
              })
              setReviews(reviews);
              setStatus('success');
            });
        })
        .catch((e) => {
          setStatus('error');
          console.error(e);
        });
    }
  }, [status]);

  return (
    <section id="reviews" className="relative z-10 pt-24 border-t-8 sm:py-24 bg-teal-50 border-x-8 border-teal-50">
      <div className='absolute bottom-0 left-0 z-0 w-full h-64 bg-teal-900 md:h-72'></div>

      <div className='relative z-10 max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8'>
        <div className="grid grid-cols-1 mb-12 sm:grid-cols-2 sm:gap-6">
          <div className='flex flex-col gap-4'>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-teal-900 text-pretty sm:text-5xl">My Reviews</h2>
            <p className='text-stone-600 lg:text-lg/8'>Over 200 five star reviews on Vagaro!</p>
          </div>
          <div className='flex items-center justify-end'>
            <Button
              isLink={true}
              data={{
                url: 'https://g.page/r/CSYSTz3w48l4EBM/review',
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

      <div className="max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
        {reviews.length > 0 && (
          <Swiper
            className="w-[125%] pr-[25%] xl:w-[135%] xl:pr-[35%]"
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
            {reviews.map((review) => (
              <SwiperSlide key={nanoid()}>
                <Testimonial data={review} />
              </SwiperSlide>
            ))}

            <SwiperSlide key={nanoid()}>
              <div className='text-white bg-teal-900'>
                <div className='flex flex-col items-center gap-4 px-12 py-6 md:p-8 lg:p-12'>
                  <div className='text-lg font-bold text-teal-100 sm:text-xl'>See what others are saying!</div>
                  <div className='pb-6'>Check out my reviews on Vagaro.</div>
                  <DialogButton
                    className="is-light is-primary shadow-primary-light"
                    frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKMNv9tBhppFSXWvM8N3/hvQPk7Rzw2rBIF7CwOxrVanOt//9PaGVkYsSfzxQ+R+r+eu0zbTRTSO03Z9pD+seNpUC4z/7KVfioJAVoAcDB4gB1PNRwXQ8vrwLadzOH5oq+O8bozETVOCD/BItiVCJsYdkqq8aLHOgo4K0IiVxwcDCI/t4Ii/zlYqwLt397XueDZ0f3tw9Kl3+/F/LDf4o54M2B39JiL4rgiMmFsjrzej1o5YTQFoblFAmAJlZ6H+93mgJ5/jk49MV7jJDAOjtGag6KdyTUeUPDUd3dbv+nj26n2mruj9UpIyzkGevBfxZxIpNVN53xjNqOjk5sUXng5X"
                  >
                    Learn More
                    <LinkIcon className="w-5 h-auto" />
                  </DialogButton>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}

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