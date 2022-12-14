import "assets/styles/globals.scss";
import Modal from "react-modal";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import { Authentication } from "components/Authentication";

Modal.setAppElement("#__next");
Modal.defaultStyles = {
  content: {}
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authentication>
      <ToastContainer />
      <Component {...pageProps} />
    </Authentication>
  );
}

export default MyApp;
