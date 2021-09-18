import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import classes from "./Nav.module.css";

export const Nav = () => {
  return (
    <div className={classes.nav}>
      <Link href="/ramenList">
        <a className={classes.nav_items}>
          <HomeIcon className={classes.nav_icon} />
          <p className={classes.nav_button}>ホーム</p>
        </a>
      </Link>

      <Link href="/subscription">
        <a className={classes.nav_items}>
          <AddCircleOutlineIcon className={classes.nav_icon} />
          <p className={classes.nav_button}>サブスク</p>
        </a>
      </Link>

      <Link href="/account">
        <a className={classes.nav_items}>
          <AccountCircleIcon className={classes.nav_icon} />
          <p className={classes.nav_button}>アカウント</p>
        </a>
      </Link>
    </div>
  );
};
