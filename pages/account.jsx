import Image from "next/image";
import { Nav } from "../components/Nav";

import classes from "../styles/account.module.css";

export default function account () {
  return (
    <div className={classes.account}>
        <div className={classes.profile}>
            <Image src="/profile.JPG" alt="ramen" width={70} height={70}  className={classes.image}/>
            <p className={classes.profile_name}>keita namazue</p>
        </div>
        <div className={classes.point}>
            <p className={classes.point_current}>あなたの現在のポイントは</p>
            <h2 className={classes.point_number}>100</h2>
            <p className={classes.point_is}>ポイントです</p>
        </div>
      <Nav />
    </div>
  );
};
