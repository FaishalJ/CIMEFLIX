import styles from "./AppLayout.module.scss";
import { Outlet, useNavigation } from "react-router-dom";


import Navigation from "./Navigation";
import Footer from "./Footer";
import Spinner from "./Spinner";

export default function AppLayout() {
  const navigation = useNavigation();
  
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        {navigation.state === "loading" && <Spinner />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
