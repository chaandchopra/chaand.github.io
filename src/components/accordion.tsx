import React, { JSX } from 'react';

type AccordionProps = {
    icon: JSX.Element;
    title: string;
    content: JSX.Element | string;
    // content: string;
}

export const Accordion = ({ icon, title, content }: AccordionProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <div className="w-full overflow-hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center space-x-2">
                    <span>{icon}</span>
                    <span className="relative inline-block group overflow-hidden">
                    <span className="relative font-roboto font-normal text-md text-gray-900 z-10 transition-colors duration-300">{title}</span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-yellow-200 z-0 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>
            </div>
            <div className={`accordion-content transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`} >
                {content}
                {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
            </div>
        </>
    )
}
