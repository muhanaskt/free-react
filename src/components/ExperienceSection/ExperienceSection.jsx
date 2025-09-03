'use client';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from  './Accordion';
import { TimelineContent } from  './TimelineContent';
import { Plus } from 'lucide-react';
import { useRef } from 'react';
const experienceData = [
  {
    company: 'amazon',
    year: '2020-2021',
    position: 'a. Design director',
    answer:
      'We specialize in custom AI solutions including chatbots, predictive analytics, computer vision, NLP, and automation workflows tailored to your business needs.',
  },
  {
    company: 'apple*',
    year: '2019-2020',
    position: 'Seniour designer',
    answer:
      'We offer flexible pricing based on project complexity and duration—ranging from fixed project fees to retainer and hourly models.',
  },
  {
    company: 'cruise',
    year: '2018-2019',
    position: 'Product designer',
    answer:
      'Absolutely! We offer seamless integration with CRMs, ERPs, databases, APIs, and other third-party tools your business relies on.',
  },
  {
    company: 'uber',
    year: '2017-2018',
    position: 'Design lead',
    answer:
      'We conduct thorough testing and offer ongoing optimization post-launch. If something’s off, we’ll tweak it until it delivers results.',
  },
  {
    company: 'lyft',
    year: '2015-2017',
    position: 'art director',
    answer:
      'Yes, we provide clear documentation and offer team training to help you and your staff understand and make the most of the AI systems we implement.',
  },
  {
    company: 'google*',
    year: '2013-2015',
    position: 'Senior designer',
    answer:
      'We offer flexible pricing based on project complexity and duration—ranging from fixed project fees to retainer and hourly models.',
  },
  {
    company: 'soundcloud',
    year: '2017-2018',
    position: 'designer',
    answer:
      'We offer flexible pricing based on project complexity and duration—ranging from fixed project fees to retainer and hourly models.',
  },
  {
    company: 'uber',
    year: '2017-2018',
    position: 'Design lead',
    answer:
      'We conduct thorough testing and offer ongoing optimization post-launch. If something’s off, we’ll tweak it until it delivers results.',
  },
  {
    company: 'lyft',
    year: '2015-2017',
    position: 'art director',
    answer:
      'Yes, we provide clear documentation and offer team training to help you and your staff understand and make the most of the AI systems we implement.',
  },

];
export default function ExperienceSection() {
  const heroRef = useRef(null);
  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(20px)',
      y: 40,
      opacity: 0,
    },
  };
  return (
    <div className="sm:p-10 p-5 mx-auto bg-[#f7f7f7] min-h-screen w-full shadow-sm">
      <div className="mt-3 max-w-7xl mx-auto" ref={heroRef}>
        <Accordion defaultValue="item-2">
          {experienceData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-0 overflow-visible rounded-none bg-transparentw-full"
            >
              <TimelineContent
                key={index}
                animationNum={index}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="border-t border-neutral-300 py-2"
              >
                <AccordionHeader
                  customIcon
                  className="hover:no-underline p-0 gap-4 py-2 relative data-[active]:bg-transparent hover:bg-transparent text-black sm:text-base text-sm"
                >
                  <span className="font-medium lg:text-8xl md:text-6xl text-4xl uppercase">
                    {item.company}
                  </span>
                  <div className="flex items-center space-x-2 sm:gap-10 gap-2 sm:w-80 sm:justify-between justify-end">
                    <span className="flex flex-col space-y-2">
                      <span className="text-xs lg:text-base md:text-sm italic font-normal">
                        ({item.year})
                      </span>
                      <span className="lg:text-xl md:text-base text-sm uppercase font-medium">
                        {item.position}
                      </span>
                    </span>
                    <span className="relative group-data-[active]:rotate-90 text-neutral-600 p-2 -translate-x-1 rounded-xl">
                      <Plus className="group-data-[active]:rotate-90 transition-all duration-300" />
                    </span>
                  </div>
                </AccordionHeader>
              </TimelineContent>
              <TimelineContent
                animationNum={index}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <AccordionPanel
                  className="space-y-10 w-full mx-auto bg-[#f7f7f7] data-[active]:bg-[#f7f7f7] px-0"
                  articleClassName="pt-2 px-0 bg-[#f7f7f7] sm:w-80 w-full ml-auto"
                >
                  <p className="text-xs  sm:text-base">{item.answer}</p>
                </AccordionPanel>
              </TimelineContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
