import TextArea from "components/Textarea";
import { defaultAvatar, sampleCurrentUser } from "constants/global";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "libs/firebase-app";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const CommentAddNew = () => {
  const router = useRouter();
  const currentUser = sampleCurrentUser;
  const [commentValue, setCommentValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const resizeTextArea = () => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };
  const handleAddNewComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUser) {
      toast.error("Vui lòng đăng nhập!");
      return;
    }
    if (!commentValue) {
      toast.error("Vui lòng nhập bình luận!");
      return;
    }
    try {
      const colRef = collection(db, "comments");
      await addDoc(colRef, {
        userId: currentUser.uid,
        avatar: currentUser.photoURL || defaultAvatar,
        fullname: currentUser.displayName,
        content: commentValue.trim(),
        createdAt: serverTimestamp(),
        slug: router.query.slug,
        chapterId: router.query.id,
        reactions: []
      });
      toast.success("Thêm bình luận thành công!");
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setCommentValue("");
    }
  };
  useEffect(resizeTextArea, [commentValue]);
  return (
    <form
      onSubmit={handleAddNewComment}
      className="bg-[#f5f5f5] rounded overflow-hidden p-5 mt-3 mb-1"
    >
      <div>
        <TextArea
          rows={3}
          className="w-full"
          value={commentValue}
          placeholder="Nhập bình luận..."
          onChange={(e) => setCommentValue(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="block px-5 py-2 mt-3 ml-auto text-white bg-redff4 rounded-3xl"
      >
        Gửi bình luận
      </button>
    </form>
  );
};

export default CommentAddNew;
