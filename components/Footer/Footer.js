import { nanoid } from "nanoid";
import { Link } from "react-scroll";

const navigation = {
  main: [
    { label: 'Services', to: 'services' },
    { label: 'About', to: 'about' },
    { label: 'Reviews', to: 'reviews' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/EverGlow.Esthetics.MI/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/everglow_esthetic/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Vagaro',
      href: 'https://www.vagaro.com/everglowesthetics',
      icon: (props) => (
        <svg viewBox="0 0 234.000000 213.000000" preserveAspectRatio="xMidYMid meet" {...props}>
          <metadata>Online Scheduling for Salons and Spas. Salon Software | Salon Appointment Software" title="Online Scheduling for Salons and Spas. Salon Software | Salon Appointment Software</metadata>
          <g transform="translate(0.000000,213.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
            <path d="M283 2116 c-189 -61 -310 -260 -274 -452 6 -37 23 -89 37 -116 14 -28 199 -350 410 -717 258 -447 399 -680 427 -709 84 -87 226 -132 349 -112 82 13 172 58 225 112 28 29 170 265 428 713 213 368 397 690 410 716 101 198 11 451 -193 547 -51 24 -69 27 -167 27 -103 0 -114 -2 -177 -32 -38 -18 -86 -51 -111 -76 -28 -29 -119 -176 -258 -416 -117 -204 -216 -371 -219 -371 -3 0 -75 120 -160 268 -311 539 -311 540 -430 596 -56 26 -78 31 -160 33 -60 2 -110 -2 -137 -11z m232 -150 c28 -13 62 -36 77 -52 21 -22 483 -808 491 -834 1 -4 -61 -116 -139 -251 -77 -134 -144 -253 -148 -263 -8 -24 32 -89 -331 539 -159 275 -298 525 -308 555 -16 47 -17 63 -8 109 35 176 211 270 366 197z m1504 9 c125 -44 200 -179 168 -301 -17 -64 -788 -1404 -836 -1452 -19 -19 -52 -43 -75 -53 -55 -25 -157 -25 -212 0 -49 22 -106 79 -130 129 -22 47 -30 139 -15 185 16 48 782 1374 822 1421 63 75 181 106 278 71z"></path>
            <path d="M1141 537 c-91 -31 -104 -162 -21 -210 85 -51 190 17 177 115 -10 77 -82 120 -156 95z"></path>
          </g>
        </svg>
      ),
    }
  ],
}

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-50">
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="flex flex-wrap justify-center -mb-6 gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              key={nanoid()}
              className="text-gray-600 cursor-pointer hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center mt-16 gap-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600 text-sm/6">&copy; {year} Everglow Esthetics, LLC. All rights reserved.</p>
      </div>
    </footer>

  );
}
