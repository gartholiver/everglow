import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { DialogButton } from "../../components";

export default function Contact() {
  return (
    <section className="relative z-10 overflow-hidden border-b-8 bg-gradient-to-t from-teal-800 to-teal-900 border-x-8 border-teal-50">
      <div className="px-6 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-teal-100 text-balance sm:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-teal-50 text-pretty text-lg/8">
            Have questions? I'm more than happy to provide clarity as to what I do and how I do it! You can call or text me at (248) 929-5656. Otherwise, feel free to schedule one or more of my services. I look forward to meeting you!
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <DialogButton
                frame="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVJHQ4Xb0RrDOY3PfsdJZlXWRdAIBxQ1c4U/Yro8671mwTFsb/I3ZVXnQPPmFxQTbfr9lKuZXXMeRd46L4eTxgKOwdaOWogwes7t2kXT9ybXf5BgMxro1JPKUyMsrO3i024aGa1obS4fyL++k1QqKbgk5mwG/r0fhV41zE1FinChL5BKjxCgor4XgveVvJTQqG+FoaPTugy+RTe7kwhRtw0cY7agP75skihVVg/CPYW11xDc+pOqUSTOiZjEiG8HBHL07OMOzGGoAPyxEcZ/AiRjbZ00uF9hg1CrLOJ9Gacl48uFIg/LcV9oj8C38rP9SVVAiGwVnF8PpC+zZtMMIju2btLwsQ2lQGUQ8cJOQXu5OurD1qfzBQuq9QvBUrKnOQu3nnF3p4mbWpHUKqjMjnWqxd38tnoJwRXOGB/3Pcs6h+OchetGKdnmgGSTQMBuLRQ=="
                className="is-secondary is-dark shadow-primary-dark"
              >
                Book Now
                <CalendarDaysIcon className="w-5 h-auto" />
              </DialogButton>

              <div className="flex items-center gap-2 text-white">
                Call or Text

                <a
                  href="tel:2489295656"
                  target="_blank"
                  className="italic underline transition-all duration-200 underline-offset-8 decoration-teal-50 hover:decoration-teal-200"
                >
                  (248) 929-5656
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}