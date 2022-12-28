import Image from "components/Image";
import React from "react";

const CommentItem = () => {
  return (
    <div className="flex gap-4">
      <div className="pt-2 shrink-0">
        <Image src="https://source.unsplash.com/random" alt="" className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex-1">
        <span className="inline-block text-lg font-bold">Hoang Lam</span>
        <p className="text-base font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat magni, eos culpa
          soluta commodi facilis maxime natus minus debitis. Nobis vel qui unde iure in molestias
          cumque maiores corporis?
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
