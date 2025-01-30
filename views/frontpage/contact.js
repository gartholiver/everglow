import { CalendarDaysIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { Button } from "../../components";

export default function Contact() {
  return (
    <div className="relative overflow-hidden border-b-8 bg-gradient-to-t from-teal-800 to-teal-900 border-x-8 border-teal-50">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-teal-100 text-balance sm:text-5xl">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-teal-50 text-pretty text-lg/8">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
          <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button
                data={{
                  title: 'Contact Me',
                  url: '#fpo',
                  target: '_self'
                }}
                isLink={true}
                className="is-secondary is-dark shadow-primary-dark"
              >
                Contact Me
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-auto"/>
              </Button>

              <Button
                data={{
                  title: 'Learn More',
                  url: '#fpo',
                  target: '_self'
                }}
                isLink={true}
                className="is-primary is-light shadow-primary-light"
              >
                Book An Appointment
                <CalendarDaysIcon className="w-5 h-auto" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}