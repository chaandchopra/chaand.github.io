import React from 'react';


export const Accordion = ({ title, content }: { title: string; content: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                <div>{title}</div>
                <div>{isOpen ? '-' : '+'}</div>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </>
    )
}