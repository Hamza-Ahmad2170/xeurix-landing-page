type AccordionProps = {
  accordionTitle: string;
  accordionItem: string;
};

import React from "react";
import {
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

export default function FAQAccordion({
  accordionTitle,
  accordionItem,
}: AccordionProps) {
  return (
    <>
      <AccordionItemState>
        {({ expanded }) => (
          <>
            <AccordionItemHeading>
              <AccordionItemButton
                className={`${
                  expanded
                    ? `bg-[#d4145a] text-white before:bg-white after:rotate-90 after:bg-white`
                    : "bg-white"
                } relative px-6 py-3 text-md text-[#212121] before:absolute before:right-[15px] before:top-1/2 before:h-[1px] before:w-[17px] before:bg-[#d4145a] before:transition-all after:absolute after:bottom-1/2 after:right-[23px] after:-mb-[9px] after:h-[17px] after:w-[1px] after:bg-[#d4145a] after:transition-all after:duration-300 hover:bg-[#d4145a] hover:text-white before:hover:bg-white after:hover:bg-white sm:text-base font-semibold lg:text-[1.3rem]`}
              >
                {accordionTitle}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel
              className={`grid overflow-hidden transition-[opacity,grid,height] duration-500 ease-out  md:text-[1.38rem] ${
                expanded
                  ? `min-h-16 grid-rows-[1fr] px-6 py-3 opacity-100`
                  : "h-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              {accordionItem}
            </AccordionItemPanel>
          </>
        )}
      </AccordionItemState>
    </>
  );
}
