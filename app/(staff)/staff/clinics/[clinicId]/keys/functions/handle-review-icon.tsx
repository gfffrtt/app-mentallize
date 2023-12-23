import {
  CircleOfLife,
  FourElements,
  Key,
  LoveLanguage,
  Result,
  SelfKnowledge,
} from "@prisma/client";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const handleReviewedIcon = (
  key: Key & {
    circleOfLife?: CircleOfLife & { result?: Result };
    selfKnowledge?: SelfKnowledge & { result?: Result };
    loveLanguage?: LoveLanguage & { result?: Result };
    fourElements?: FourElements & { result?: Result };
  }
) => {
  switch (true) {
    case !!key.circleOfLife &&
      !!key.circleOfLife.result &&
      key.circleOfLife.result.analyzed:
      return <FaCheck className="text-[#80825C]" />;
    case !!key.fourElements &&
      !!key.fourElements.result &&
      key.fourElements.result.analyzed:
      return <FaCheck className="text-[#80825C]" />;
    case !!key.loveLanguage &&
      !!key.loveLanguage.result &&
      key.loveLanguage.result.analyzed:
      return <FaCheck className="text-[#80825C]" />;
    case !!key.selfKnowledge &&
      !!key.selfKnowledge.result &&
      key.selfKnowledge.result.analyzed:
      return <FaCheck className="text-[#80825C]" />;
    default:
      return <IoClose className="text-red-600" />;
  }
};
