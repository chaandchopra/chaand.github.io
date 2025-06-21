import Switch from "@mui/material/Switch"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ResumeSwitch = () => {
    return (
        <>
            <div className="flex flex-row-reverse p-[2%]">
                <div className="font-shadows text-xl font-normal">
                    idc, show me 
                    <span className="text-orange-600"> resume  </span> 
                    <ArrowForwardIcon sx={{fontSize: 15, color: 'gray'}}/> 
                    <Switch />
                </div>
            </div>
        </>
    )
}