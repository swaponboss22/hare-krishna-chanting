import ProgressBar from "./shared-components/ProgressBar.jsx";
import DoneAllIcon from '@mui/icons-material/DoneAll';
function ChantingCard() {
    return (<div className={'flex flex-col justify-between container mx-4 h-[80vh] max-h-[560px] max-w-[750px] mx-auto bg-white shadow-lg border border-gray-100 py-10 px-5'}>
        <p className="text-center">
            <span className="font-bold text-xl leading-10 text-gray-900">
                  পঞ্চতত্বের মন্ত্র
            </span>
            <br/>
            <span className="text-gray-800">
                  জয় শ্রী-কৃষ্ণ-চৈতন্য প্রভু-নিত্যানন্দ। <br/> শ্রী-অদ্বৈত গদাধর শ্রীবাসাধি-গৌর-ভক্ত-বৃন্দ।।
             </span>
        </p>
        <div className={'flex flex-col justify-center items-center max-w-sm mx-auto w-full'}>
            <h3 className="text-5xl mb-10 font-bold text-gray-800">
                2
            </h3>
            <ProgressBar></ProgressBar>
        </div>
        <div className="text-center">
    <span className={'text-gray-900'}><DoneAllIcon/> Completed Round:</span> 2
        </div>
    </div>)
}

export default ChantingCard
