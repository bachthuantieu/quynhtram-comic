import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "libs/firebase-app";
import { CommentAddNew } from "modules/CommentAddNew";
import CommentItem from "modules/CommentItem";
import Heading from "modules/Heading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./commentList.module.scss";

const CommentList = () => {
  const router = useRouter();
  const { slug, id } = router.query;
  const [comments, setComments] = useState<any[]>([]);
  useEffect(() => {
    let unSubscribe: Unsubscribe;
    async function getComments() {
      try {
        if (!slug) return;
        const colRef = collection(db, "comments");
        const queryRef = query(colRef, where("slug", "==", slug));
        unSubscribe = onSnapshot(queryRef, (snapshot) => {
          const results: any[] = [];
          snapshot.forEach((doc: any) => {
            results.push({
              id: doc.id,
              ...doc.data()
            });
          });
          setComments(results);
        });
        return unSubscribe;
      } catch (error: any) {
        toast.error(error?.message);
      }
    }
    getComments();
    return () => {
      unSubscribe();
    };
  }, [slug]);
  return (
    <div className={styles.section}>
      <Heading>Bình luận</Heading>
      <CommentAddNew />
      <div className={styles.comments}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
