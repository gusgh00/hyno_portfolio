import Link from "next/link";
import styles from "./page.module.css";
import { getMetadata } from "@utils/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata("HOME")

export default function Home() {
  const jandiHynoArr = `
011200111011201101202112101010011011212101101101111
144114414401440440044114444011333301133333303301330
144014424411440444044044114410331133033011103311331
144444410444411440444144214412330133033333303311331
144114411144010441144144114411331133033110111333311
144124411144111441044004444111333300033333311033111
121100112101112211100112100111102111122101100111011`

  const jandiIconArr = `
201021110112011012021121010100110111211011011211112
114440114440040114044444014440114441044444211114001
040104240114044014210401140104041004112411011110411
140111141104140404101402144444041011101401144444441
141104141104140144111401140114041024121421110221411
004440114441141114110402141114204441111422110104111
111211121011111111211211021111011221111011001110112`

  return (
    <div className={styles.home}>
      <div className={styles.home_main}>
        <div className={styles.start_section}>
          <Link href={"/"} className={styles.jandi_box}>
            <div className={styles.jandi}>
              {jandiHynoArr.replace(/(\s*)/g, "").split("").map((item, index) => (
                <div className={styles.block + " color" + item} key={index}>
                </div>
              ))}
            </div>
          </Link>
          <Link href={"https://github.com/gusgh00"} target="_blank" className={styles.jandi_box}>
            <div className={styles.jandi}>
              {jandiIconArr.replace(/(\s*)/g, "").split("").map((item, index) => (
                <div className={styles.block + " color" + item} key={index}>
                </div>
              ))}
            </div>
          </Link>
        </div>
        <div className={styles.end_section}>
          <span className={styles.greeting_text + " font-title"}>
            안녕하세요,<br /><br />
            <span className="font-accent">프로덕트</span>를<br />
            기획부터 개발까지 진행하며<br />
            <span className="font-info">다양한</span> 역할을 수행해온<br />
            <span className="font-primary">유현호</span> 입니다!
          </span>
        </div>
      </div>
    </div>
  );
}
