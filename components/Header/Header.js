import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { DialogButton } from "../../components/Button";
import { Link } from 'react-scroll';
import { nanoid } from 'nanoid';

const menu = [
  { label: 'Services', to: 'services' },
  { label: 'About', to: 'about' },
  { label: 'Reviews', to: 'reviews' }
];

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
          <h1 className="-m-1.5 p-1.5">
            <span className="sr-only">Everglow Esthetics</span>
            <img
              alt="Logo"
              src={`${scrollTop ? '/images/logo-light.svg' : '/images/logo-dark.svg'}`}
              className={`w-auto h-16 ${scrollTop ? 'sm:h-20 md:h-24' : ''}`}
            />
          </h1>
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
          {menu.map((item) => (
            <Link
              activeClass="is-active"
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              key={nanoid()}
              className={`menu-link ${scrollTop ? 'text-teal-50' : 'text-teal-900'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DialogButton
            frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQu3nnF3p4mbWpHUKqjMjnWqxd38tnoJwRXOGB/3Pcs6h+OchetGKdnmgGSTQMBuLRQ=="
            className={scrollTop ? 'is-primary is-light shadow-primary-light' : 'is-secondary is-dark shadow-secondary-light'}
          >
            Contact
          </DialogButton>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40" />
        <DialogPanel transition className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-stone-900/10 duration-300 ease-out data-[closed]:transform-[scale(50%)] data-[closed]:opacity-0">
          <div className="flex items-center justify-between">
            <h1 className="-m-1.5 p-1.5">
              <span className="sr-only">Everglow Esthetics</span>
              <img
                alt="Logo"
                src="/images/logo-dark.svg"
                className="w-auto h-16"
              />
            </h1>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-stone-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-stone-500/10">
              <div className="py-6 space-y-2">
                {menu.map((item) => (
                  <Link
                    activeClass="bg-stone-50"
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    key={nanoid()}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 -mx-3 font-semibold rounded-lg cursor-pointer text-stone-900 text-base/7 hover:bg-stone-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <DialogButton
                  frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQu3nnF3p4mbWpHUKqjMjnWqxd38tnoJwRXOGB/3Pcs6h+OchetGKdnmgGSTQMBuLRQ=="
                  className={scrollTop ? 'is-primary is-dark shadow-primary-light' : 'is-secondary is-dark shadow-secondary-light'}
                >
                  Contact
                </DialogButton>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
