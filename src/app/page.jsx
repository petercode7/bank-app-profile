import Image from "next/image";
import styles from "./page.module.css";
import Page from "./Component/Profile/Page/page";
import Sidebar from "./Component/Profile/Sidebar/page";

export default function Home() {
  return (
    <>
      <Page />
      <Sidebar />
    </>
  );
}
