// import { Accordion } from "@mui/material";
import ProfileHeader from "./header"
import { ResumeSwitch } from "./resumeSwitch";
import {Accordion} from "./accordion";

const About = () => { 
    return (
        <>
    <div className="pr-[25%] pl-[25%] pt-[4%] ">
            <ProfileHeader />
            <ResumeSwitch />
            <Accordion 
                title="About Me" 
                content="I am a software engineer with a passion for building scalable systems and debating ideas. I enjoy writing about my experiences and sharing my thoughts through podcasts and travel." />
            <Accordion 
                title="About Me 123" 
                content="I am a software engineer with a passion for building scalable systems and debating ideas. I enjoy writing about my experiences and sharing my thoughts through podcasts and travel." />
        </div>
        </>
    )
}

export default About;