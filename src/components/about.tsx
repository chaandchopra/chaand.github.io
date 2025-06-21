// import { Accordion } from "@mui/material";
import ProfileHeader from "./header"
import { ResumeSwitch } from "./resumeSwitch";
import {accordion_data} from "../data/about_accordion";
import { Accordion } from "./accordion";
import { JSX } from "react";

type AccordionData = {
    icon: JSX.Element;
    title: string;
    content: JSX.Element;
    // content: string;
}

const About = () => {
    return (
        <>
            <div className="pr-[20%] pl-[20%] pt-[4%] ">
                <ProfileHeader />
                <ResumeSwitch />
                {accordion_data.map((item: AccordionData) => (
                    <>
                        <Accordion
                            icon={item.icon}
                            title={item.title}
                            content={item.content} />
                    </>
                ))}
            </div>
        </>
    )
}

export default About;