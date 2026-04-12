import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long is each cruise?",
    answer: "Each SeaSpa cruise is a 90-minute private experience. You'll have the entire boat to yourself for the full duration.",
  },
  {
    question: "How many people can the boat hold?",
    answer: "Our hot tub boats comfortably accommodate up to 6 guests. For larger groups, we can arrange multiple boats cruising together.",
  },
  {
    question: "What should I bring?",
    answer: "Just bring your swimsuit and a towel! We provide everything else including water and a Bluetooth speaker for your music. You're welcome to bring your own snacks and beverages.",
  },
  {
    question: "What happens if it rains?",
    answer: "Light rain actually makes the experience even more magical — you're already in a hot tub! For severe weather, we'll reschedule your cruise at no extra charge.",
  },
  {
    question: "Where do cruises depart from?",
    answer: "Our cruises depart from the SeaSpa dock in the NJ Bay area. The exact location and directions will be provided in your booking confirmation email.",
  },
  {
    question: "Can I book for a special occasion?",
    answer: "Absolutely! We love hosting proposals, anniversaries, birthdays, and bachelorette parties. Contact us to discuss special arrangements and add-ons.",
  },
  {
    question: "Is the experience safe?",
    answer: "Safety is our top priority. All boats are US Coast Guard inspected and equipped with safety gear. Our trained captains handle navigation while you relax.",
  },
];

export default function FAQAccordion() {
  return (
    <section
      id="FAQ-hot-tub-boat-NJ"
      className="py-24 md:py-40 bg-deep-atlantic glass-rule"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Got Questions?
          </p>
          <h2
            id="faq-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-lg px-6 border-0"
            >
              <AccordionTrigger className="font-body font-medium text-sea-salt text-left hover:text-sky-horizon hover:no-underline py-5 text-base focus-ring">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-mist-grey text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}