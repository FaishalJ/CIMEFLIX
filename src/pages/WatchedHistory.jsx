import styles from "./watchedHistory.module.scss";
import { Outlet } from "react-router-dom";
import {  NavLink } from "react-router-dom";

import Detail from "../features/Detail";

export default function WatchHistory() {
  return (
    <div className={styles.container}>
      <Detail />
      <div className={styles.watch_related}>
        <div className={styles.watch_related__links}>
          <NavLink to="related" className="link">
            <h4>Related Movies</h4>
          </NavLink>
          <NavLink to="bookmark">
            <h4>Bookmark</h4>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
