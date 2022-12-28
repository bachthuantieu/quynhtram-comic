import { IComicDetails } from "@types";
import Image from "components/Image";
import { WrapLink } from "components/link";
import { PATH } from "constants/path";
import { collection, onSnapshot, Unsubscribe } from "firebase/firestore";
import { db } from "libs/firebase-app";
import ComicTitle from "modules/ComicTitle";
import Heading from "modules/Heading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const HomeFeatured = () => {
  const [comics, setComics] = useState<IComicDetails[]>([]);
  useEffect(() => {
    let unSubscribe: Unsubscribe = () => {};
    async function getUsers() {
      try {
        const colRef = collection(db, "comics");
        unSubscribe = onSnapshot(colRef, (snapshot) => {
          const results: any[] = [];
          snapshot.forEach((doc: any) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setComics(results);
        });
      } catch (error: any) {
        toast.error(error?.message);
      }
    }
    getUsers();
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <section className="pt-6">
      <div className="layout-container">
        <Heading>Truyện mới cập nhật</Heading>
        <div className="pt-4 comic-list">
          {comics.map((comic) => (
            <div key={comic.id}>
              <WrapLink
                className="bg-[#999999] rounded inline-block overflow-hidden"
                href={`${PATH.comicDetails}/${comic.slug}`}
              >
                <Image
                  src={comic.poster}
                  alt={comic.title}
                  className="object-cover aspect-[175/233]"
                />
              </WrapLink>
              <ComicTitle href={`${PATH.comicDetails}/${comic.slug}`}>{comic.title}</ComicTitle>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
