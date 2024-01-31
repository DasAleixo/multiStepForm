import { GoPerson } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import './Steps.css'

const Steps = ({ currentStep }) => {
  return (
    <div id='steps' className="flex justify-center items-center mb-5 gap-16 relative">
        <div id="identification" className="passo flex flex-col justify-center items-center text-center bg-neutral-50">
            <GoPerson className={`${currentStep >= 0 ? 'fill-[#9370DB]': ''} size-7 mb-2`}/>
            <p className={`${currentStep >= 0 && 'font-bold'} text-gray-600`}>Identificação</p>
        </div>
        <div id='avaliation' className="passo flex flex-col justify-center items-center text-center bg-neutral-50">
            <FaRegStar className={`${currentStep >= 1 && 'fill-[#9370DB]'} size-7 mb-2`}/>
            <p className={`${currentStep >= 1 && 'font-bold'} text-gray-600`}>Avaliação</p>
        </div>
        <div id="classification" className="passo flex flex-col justify-center items-center text-center bg-neutral-50">
            <BsSend className={`${currentStep == 2 && 'fill-[#9370DB]'} size-7 mb-2`}/>
            <p className={`${currentStep >= 2 && 'font-bold'} text-gray-600`}>Classificação</p>
        </div>
    </div>
  )
}

export default Steps