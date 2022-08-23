import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';


export const CAccordion = ({ items }) => (
    items?.length
        ? <div className="faq-accordion mt-4">

            <Accordion allowZeroExpanded>
                {
                    items?.map((item, id) => (
                        <AccordionItem key={id} uuid={id.toString()}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
        : null
)

const AccordionWithTitle = ({ title, content, items, image }) => {
    return (
        <div className="faq-area bg-2 ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>

                <div className="row align-items-center">


                    <div className="col-lg-12">
                        <CAccordion items={items} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionWithTitle;