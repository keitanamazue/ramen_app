// import { Description } from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../components/Nav";

import classes from "../styles/subscription.module.css";

export default function subscription() {
  return (
    <div className={classes.container}>
     <Image src="/profile.JPG" alt="ramen" width={70} height={70}  className={classes.image}/>

      <h2 className={classes.title}>Select subsucription</h2>
      <p className={classes.description}>お好きなプランをお選びください</p>

      <div className={classes.cards}>
          <Link href="#">
            <a className={classes.card}>
            <h3>3 months</h3>
            <h4>3万円/月</h4>
            </a>
           </Link>

            <Link href="#">
            <a className={classes.card}>
                <h3>12 months</h3>
                <h4>1万円/月</h4>
            </a>
            </Link>
      </div>

      <Nav />
    </div>
  );
}
