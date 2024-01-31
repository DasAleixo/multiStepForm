// components
import { IconContext } from "react-icons";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps"
// hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

import './App.css'

function App() {
  const templateData = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };


  const [data, setData] = useState(templateData);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <Thanks data={data}/>
];

  const { indexStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className='p-8' id='app'>
      <div id='header' className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Deixe sua avaliação</h2>
        <p className="text-zinc-500 text-sm2">Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div id='form-container' className="max-w-xl bg-neutral-50 p-16 shadow-xl mx-0 my-auto">
        <Steps currentStep={indexStep} />
        <form onSubmit={(e) => changeStep(indexStep + 1, e)} className="">
          <div id="inputs-container">
            {currentComponent}
          </div>

          <div id='actions' className="flex justify-end mt-10 h-25 py-2">
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(indexStep - 1)} className="mr-3">
                <IconContext.Provider value={{ className: "shared-class", size: 35, color: "#9370DB" }}>
                  <FaArrowAltCircleLeft />
                </IconContext.Provider>
              </button>
            )}

            {!isLastStep ?
              (<button type='submite' className="mr-3">
                <IconContext.Provider value={{ className: "shared-class", size: 35, color: "#9370DB" }}>
                  <FaArrowAltCircleRight />
                </IconContext.Provider>
              </button>) :
              (<button type='button' className="mr-3">
                <IconContext.Provider value={{ className: "shared-class", size: 35, color: "#9370DB" }}>
                  <FaCheckCircle />
                </IconContext.Provider>
              </button>)
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
