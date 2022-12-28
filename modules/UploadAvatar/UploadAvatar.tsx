import { ImageUpload } from "components/ImageUpload";
import { defaultAvatar } from "constants/global";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { db } from "libs/firebase-app";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

const UploadAvatar = () => {
  const currentUser = null;
  const [avatar, setAvatar] = useState("");
  const deleteAvatar = async () => {
    if (!currentUser) return;
    const colRef = doc(db, "users", "hT26MaMmxkTlPRkTHmHQq8CLEUz2");
    await updateDoc(colRef, {
      photoURL: ""
    });
    setAvatar("");
  };
  const handleUploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const files = e.target.files;
      if (!files || !files[0].name || !currentUser) return;
      const storage = getStorage();
      const storageRef = ref(storage, "images/" + files[0].name);
      await uploadBytesResumable(storageRef, files[0]);
      const newAvatar = await getDownloadURL(storageRef);
      const colRef = doc(db, "users", "hT26MaMmxkTlPRkTHmHQq8CLEUz2");
      await updateDoc(colRef, { photoURL: newAvatar });
      toast.success("Update avatar successfully!");
      setAvatar(newAvatar);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <ImageUpload
      name="photoURL"
      image={avatar}
      handleDeleteImage={deleteAvatar}
      handleUploadImage={handleUploadAvatar}
    />
  );
};

export default UploadAvatar;
