import TextArea from "components/Textarea";
import { sampleCurrentUser } from "constants/global";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "libs/firebase-app";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import classNames from "utils/classNames";
import styles from "./commentEdit.module.scss";

interface CommentEditProps {
  comment: any;
  toggleOpenEdit: () => void;
}

const CommentEdit = ({ comment, toggleOpenEdit }: CommentEditProps) => {
  const [value, setValue] = useState(comment.content);
  const currentUser = sampleCurrentUser;
  const handleUpdateComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUser) return;
    if (currentUser.uid !== comment.userId) {
      toast.error("You have no right to do this action!");
      return;
    }
    try {
      const colRef = doc(db, "comments", comment.id);
      await updateDoc(colRef, { content: value.trim() });
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      toggleOpenEdit();
    }
  };
  return (
    <form onSubmit={handleUpdateComment}>
      <TextArea
        rows={1}
        value={value}
        className="w-full rounded py-[6px] px-3 min-w-[400px] bg-[#ddd]"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={toggleOpenEdit}
          className="text-white rounded-md font-medium text-sm mt-1 outline-none py-[6px] px-3 bg-redff4"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-white rounded-md font-medium text-sm mt-1 outline-none py-[6px] px-3 bg-green-400"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default CommentEdit;
