'use client';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import  { useState } from 'react';

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

export function Accordion({ children, multiple, defaultValue }) {
  const [activeIndex, setActiveIndex] = useState(
    multiple
      ? Array.isArray(defaultValue)
        ? defaultValue
        : []
      : defaultValue || null
  );

  const onChangeIndex = (value) => {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex ? null : value;
      }
      if (Array.isArray(currentActiveIndex)) {
        if (currentActiveIndex.includes(value)) {
          return currentActiveIndex.filter((i) => i !== value);
        }
        return [...currentActiveIndex, value];
      }
      return [value];
    });
  };
 
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;
    const value = child.props.value;
    
    const isActive = multiple
      ? Array.isArray(activeIndex) && activeIndex.includes(value)
      : activeIndex === value;

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({ children, value, className }) {
  const { isActive } = useAccordion();
  return (
    <div
      data-active={isActive || undefined}
      className={cn('rounded-lg overflow-hidden mb-2 group', className)}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({ children, customIcon, className }) {
  const { isActive, value, onChangeIndex } = useAccordion();

  
  const handleClick = () => {
    if (value && onChangeIndex) {
      onChangeIndex(value);
    }
  };

  return (
    <motion.div
      data-active={isActive || undefined}
      className={cn(
        'p-4 cursor-pointer w-full transition-all font-semibold text-neutral-500 data-[active]:bg-neutral-100 hover:bg-neutral-100 hover:text-black flex justify-between gap-2 items-center',
        className
      )}
      onClick={handleClick}
    >
      {children}
      {!customIcon && (
        <ChevronDown
          className={cn(
            'transition-transform',
            isActive ? 'rotate-180' : 'rotate-0'
          )}
        />
      )}
    </motion.div>
  );
}

export function AccordionPanel({ children, className, articleClassName }) {
  const { isActive } = useAccordion();
  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          data-active={isActive || undefined}
          initial={{ height: 0, overflow: 'hidden' }}
          animate={{ height: 'auto', overflow: 'hidden' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className={cn(
            'bg-neutral-100 px-2 data-[active]:bg-neutral-100 text-black',
            className
          )}
        >
          <motion.article
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            className={cn(
              'px-3 bg-transparent pb-4 space-y-2',
              articleClassName
            )}
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
