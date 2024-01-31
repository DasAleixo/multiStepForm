import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";

const Thanks = ({ data }) => {
  const emojis = {
    very_satisfied: <BsEmojiGrin />,
    satisfied: <BsEmojiSmile />,
    neutral: <BsEmojiNeutral />,
    insatisfied: <BsEmojiFrown />
  };

  return (
    <div id="thanks-container" className="flex flex-col justify-center text-center mt-10">
      <h2 className="font-bold text-2xl mb-3">Falta pouco...</h2>
      <p className="text-gray-500">Sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
      <p className="text-gray-500 mb-5">Para concluir a sua avaliação clique no botão de Enviar abaixo.</p>
      <h3 className="font-bold text-lg text-gray-600">Aqui está o resumo da sua avaliação:</h3>
      <div id="review-data" className="flex flex-col justify-center text-left p-2">
        <div id="emoji-review" className="flex  items-center gap-x-2 my-2">
          <span className="font-bold">Satisfação com o produto:</span>
          {emojis[data.review]}
        </div>
        <p className="font-bold ">Comentário: <span className="font-normal">{data.comment}</span></p>
      </div>
    </div>
  )
}

export default Thanks