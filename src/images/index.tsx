import profile from './profile.jpg';
import animatedprofile from './animatedprofile.png';
import linkedin from './linkedin.png';

export const ProfilePhoto = () => {
    return <img className=" w-24 h-24 rounded-full object-cover transition-transform duration-500 hover:scale-x-[-1]" src={profile} alt="profilePhoto" />;
}

export const AnimatedProfilePhoto = () => {
    return <img className="w-24 h-24 rounded-full object-cover" src={animatedprofile} alt="profilePhoto" />;
}

export const LinkedinIcon = () => {
    return <img className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-110" src={linkedin} alt="LinkedIn Icon" />;
}

export const FlipCard = ()=> {
  return (
    <div className="group w-24 h-24 [perspective:1000px] transition-transform duration-200 ease-in-out hover:scale-140">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        <div className="absolute w-full h-full [backface-visibility:hidden]">
            <ProfilePhoto />
        </div>

        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <AnimatedProfilePhoto />
        </div>
      </div>
    </div>
  );
}