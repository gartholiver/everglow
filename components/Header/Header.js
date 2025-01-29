import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Button } from "../../components/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollTop = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollTop(scrollY < 768);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollTop);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header className={`md:fixed left-0 z-50 w-full top-0 transition-all isolate ${scrollTop ? 'bg-transparent py-6 absolute' : 'bg-teal-50 py-2 fixed'}`}>
      <nav aria-label="Global" className="flex items-center justify-between px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={`${scrollTop ? '/images/logo-light.svg' : '/images/logo-dark.svg'}`}
              className={`w-auto h-16 ${scrollTop ? 'sm:h-20 md:h-24' : ''}`}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${scrollTop ? 'text-teal-50' : 'text-teal-900'}`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className={`font-semibold text-sm/6 ${scrollTop ? 'text-teal-50' : 'text-teal-900'}`}>
            Features
          </a>
          <a href="#" className={`font-semibold text-sm/6 ${scrollTop ? 'text-teal-50' : 'text-teal-900'}`}>
            Marketplace
          </a>
          <a href="#" className={`font-semibold text-sm/6 ${scrollTop ? 'text-teal-50' : 'text-teal-900'}`}>
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            isLink={true}
            data={{
              url: '#FPO',
              title: 'Contact',
              target: '_self'
            }}
            className={scrollTop ? 'is-primary is-light shadow-primary-light' : 'is-secondary is-dark shadow-secondary-light'}
          >
            Contact
          </Button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" />
        <DialogPanel transition className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 duration-300 ease-out data-[closed]:transform-[scale(50%)] data-[closed]:opacity-0">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/images/logo-dark.svg"
                className="w-auto h-16"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
