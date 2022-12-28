import Image from "components/Image";
import { sampleCurrentUser } from "constants/global";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "libs/firebase-app";
import { CommentEdit } from "modules/CommentEdit";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { checkTimeAgo } from "utils/helper";

interface CommentItemProps {
  comment: any;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = sampleCurrentUser;
  const toggleOpenEdit = () => {
    if (!currentUser || currentUser.uid !== comment.userId) return;
    setIsEditing(!isEditing);
  };
  const handleDeleteComment = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Bình luận sẽ bị xóa vĩnh viễn!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy"
    }).then(async (result) => {
      if (!result.isConfirmed) return;
      try {
        const colRef = doc(db, "comments", comment.id);
        await deleteDoc(colRef);
        toast.success("Xóa bình luận thành công!");
      } catch (error: any) {
        toast.error(error?.message);
      }
    });
  };
  return (
    <div className="flex gap-4 my-4">
      <div className="p-1 shrink-0">
        <Image
          width={44}
          height={44}
          src={comment.avatar}
          alt={comment.fullname}
          className="object-cover rounded-full bg-dark33"
        />
      </div>
      <div className="rounded-lg">
        {isEditing && <CommentEdit comment={comment} toggleOpenEdit={toggleOpenEdit} />}
        {!isEditing && (
          <>
            <span className="font-bold">{comment.fullname || "Ẩn danh"}</span>
            <p>{comment.content}</p>
            <div className="flex items-center gap-3 mt-1 text-sm font-medium">
              {currentUser?.uid === comment.userId && (
                <>
                  <button className="bg-transparent outline-none" onClick={toggleOpenEdit}>
                    Chỉnh sửa
                  </button>
                  <button className="bg-transparent outline-none" onClick={handleDeleteComment}>
                    Xóa
                  </button>
                </>
              )}
              <span>{checkTimeAgo((comment?.createdAt?.seconds as number) * 1000)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
