import { IconTrash } from "components/Icons";
import Image from "components/Image";
import { ChangeEvent } from "react";
import classNames from "utils/classNames";
import styles from "./imageUpload.module.scss";

interface ImageUploadProps {
  name: string;
  className?: string;
  image: string;
  handleDeleteImage: () => void;
  handleUploadImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload = ({
  name,
  className = "",
  image = "",
  handleDeleteImage = () => {},
  handleUploadImage = () => {},
  ...props
}: ImageUploadProps) => {
  return (
    <label className={classNames(styles.imageUpload, className)}>
      <input
        type="file"
        name={name}
        className={styles.inputFileHidden}
        onChange={(e) => handleUploadImage(e)}
        {...props}
      />
      {!image && (
        <div className={styles.upload}>
          <Image src="/img-upload.png" alt="Upload" />
          <span>Chọn ảnh đại diện</span>
        </div>
      )}
      {image && (
        <div className={styles.preview}>
          <picture>
            <img
              src={image}
              alt="preview"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://images.unsplash.com/photo-1659321196549-448fba0143fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
              }}
            />
          </picture>
          {image && (
            <button className={styles.buttonDelete} onClick={handleDeleteImage}>
              <IconTrash />
            </button>
          )}
        </div>
      )}
    </label>
  );
};

export default ImageUpload;
