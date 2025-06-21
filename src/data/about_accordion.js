import { HiLightningBolt } from "react-icons/hi";

const nowContent = () => {
    return (
        <div className='text-sm text-purple-600'>
            The current version of the app is a simple, single-page application that allows users to view and interact with a list of items. It is built using React and Tailwind CSS, providing a clean and modern user interface.
        </div>
    )
}

export const accordion_data =[
    {
        "icon": <HiLightningBolt color="orange" />,
        "title": "Now", 
        "content": nowContent()
    }
]