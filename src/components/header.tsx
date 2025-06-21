import { FlipCard, LinkedinIcon, ProfilePhoto } from '../images/index';

const ProfileHeader = () => {
    return (
        <>
            <div className="flex gap-x-0">
                <div id="photo" className="flex-none w-30 inline-block m-4 p-2 "><FlipCard /></div>
                <div id="profileInfo" className="flex-auto w-full items-center">
                    <div className="flex-col justify-items-start w-full mt-6">
                        <div id="profileName" className=" w-full font-geist text-2xl font-semibold text-left inline-block align-middle">chaand chopra</div>
                        <div id="profileName" className=" mt-1 w-full font-arimo text-lg font-normal text-gray-700 text-left">Building systems, debating ideas, writing thoughts — one podcast and one trip at a time</div>
                        <div className="mt-1"><LinkedinIcon /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader;