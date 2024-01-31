import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";

const ReviewForm = ({ data, updateFieldHandler }) => {

  return (
    <div id="review-form">
      <div id="form-control" className="flex sm:gap-10 gap-5 mt-10 justify-center items-center">

        <label className="flex flex-col justify-center items-center">
          <input id="ms" type="radio" name="review" className="peer opacity-0" value="very_satisfied"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "very_satisfied"} required />
          <BsEmojiGrin id="very_satisfied" className={`sm:size-7 size-6 mb-2 cursor-pointer hover:fill-[#9370DB] transition fill-current peer-checked:fill-[#9370DB]`} />
          <p>Adorei</p>
        </label>

        <label name="review" className="flex flex-col justify-center items-center">
          <input id="s" type="radio" name="review" className="peer opacity-0" value="satisfied"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "satisfied"} required />
          <BsEmojiSmile className="sm:size-7 size-6 mb-2 cursor-pointer hover:fill-[#9370DB] transition fill-current peer-checked:fill-[#9370DB]" />
          <p>Satisfeito</p>
        </label>

        <label name="review" className="flex flex-col justify-center items-center">
          <input id="n" type="radio" name="review" className="peer opacity-0" value="neutral"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "neutral"} required />
          <BsEmojiNeutral className="sm:size-7 size-6 mb-2 cursor-pointer hover:fill-[#9370DB] transition fill-current peer-checked:fill-[#9370DB]" />
          <p>Neutro</p>
        </label>

        <label name="review" className="flex flex-col justify-center items-center">
          <input id="i" type="radio" name="review" className="peer opacity-0" value="insatisfied"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "insatisfied"} required />
          <BsEmojiFrown className="sm:size-7 size-6 mb-2 cursor-pointer hover:fill-[#9370DB] transition fill-current peer-checked:fill-[#9370DB]" />
          <p>Insatisfeito</p>
        </label>
      </div>
      <div id="form-control" className="flex flex-col mt-10">
        <label htmlFor="comment" className="mb-3 font-bold">Comentário:</label>
        <textarea
          name="comment" id="comment" placeholder="Conte como foi sua experiência com o produto..." className="p-1 h-28 shadow-sm" 
          onChange={(e) => updateFieldHandler("comment", e.target.value)} 
          value={data.comment} required>
        </textarea>
      </div>
    </div>
  )
}

export default ReviewForm