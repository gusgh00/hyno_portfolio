"use client"
import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import HynoAvatar01 from "@imgs/hyno_avatar_01.png";
import HynoAvatar02 from "@imgs/hyno_avatar_02.png";
import HynoAvatar03 from "@imgs/hyno_avatar_03.png";
import { FaPlayCircle } from "react-icons/fa";
import ActiveBtn from "@components/button/ActiveButton";
import { useState } from "react";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";
import { IoPlay } from "react-icons/io5";
import { allList } from "@items/AlbumList";
import { stackList } from "@items/StackList";
import { albumInterface, musicInterface } from "@interfaces/AlbumInterface";

export default function Home() {
  const [isAllList, setAllList] = useState<albumInterface[]>(allList)

  const setLike = (albumIdx: number, musicIdx: number, status: boolean, type: number) => {
    setAllList(isAllList.map(item => {
      if (item.album_idx === albumIdx) {
        return {
          ...item, music_list: item.music_list.map(val => {
            if (val.music_idx === musicIdx) {
              if (type === 1) {
                if (val.dislike && status) {
                  return { ...val, like: status, dislike: false}
                } else {
                  return { ...val, like: status }
                }
              } else {
                if (val.like && status) {
                  return { ...val, dislike: status, like: false}
                } else {
                  return { ...val, dislike: status }
                }
              }
            } else {
              return val
            }
          })
        }
      } else {
        return item
      }
    }))
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_section}>
        <div className={"inner_main " + styles.main_inner}>
          <span className="inner_title">홈</span>
          <div className={styles.card_section}>
            <div className={styles.card}>
              <span className={styles.card_title}>상상하는 개발자</span>
              <Image src={HynoAvatar01} alt="avatar" className={styles.card_avatar} />
              <span className={styles.card_desc}>Imagine Pioneer,<br />상상하는 개척자는 제 모토입니다.</span>
              <span className={styles.card_hashtag}>#Next_js #PHP_Laravel #파이썬_자동화_개발</span>
            </div>

            <div className={styles.card}>
              <span className={styles.card_title}>의사소통하는 개발자</span>
              <Image src={HynoAvatar02} alt="avatar" className={styles.card_avatar} />
              <span className={styles.card_desc}>상대의 입장을 생각하여<br />적절한 키워드를 사용합니다.</span>
              <span className={styles.card_hashtag}>#배려심과_책임감 #기획과_디자인_경험 #비유법에_능통</span>
            </div>

            <div className={styles.card}>
              <span className={styles.card_title}>환경에 굴하지 않는 개발자</span>
              <Image src={HynoAvatar03} alt="avatar" className={styles.card_avatar} />
              <span className={styles.card_desc}>빠른 적응력으로<br />실무투입에 용이합니다.</span>
              <span className={styles.card_hashtag}>#빠른_적응력 #과정_복기하는_능력 #습득과_응용</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.introduce_section}>
        <div className={"inner_main " + styles.introduce_inner}>
          <span className="inner_title">소개</span>
          <div className={styles.card_section}>
            <div className={styles.card_main}>
              <div className={styles.card_top}>
                <span className={styles.card_title}>
                  HYNO!!
                </span>
              </div>
              <div className={styles.card_bot}>
                <span className={styles.head}>어떤 개발자를 원하시나요?</span>
                <span className={styles.card_text}>
                  프로덕트를 서버 구축을 포함하여 기획부터 개발까지 진행하며 다양한 역할을 수행해온
                  유현호입니다.
                </span>
                <ActiveBtn btn_name="연락하기" onClick={() => console.log("hello world")} />
              </div>
            </div>
            <div className={styles.card_list}>
              <div className={styles.card}>
                <div className={styles.card_bot}>
                  <span className={styles.card_text}>
                    주식회사 비트썸원에서 1년 4개월간 개발자로 근무하면서 작곡가, 음악 전문 업체에 필요한 시스템을 운영해왔습니다.
                  </span>
                  <FaPlayCircle className={styles.card_icon} />
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_bot}>
                  <span className={styles.card_text}>
                    음원 클라우딩 플랫폼의 UI/UX 개선, SEO 강화, 백오피스 개발 등 SaaS 서비스 운영
                  </span>
                  <FaPlayCircle className={styles.card_icon} />
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_bot}>
                  <span className={styles.card_text}>
                    게임 오디오 에셋 판매처 등록 및 퍼블리싱 자동화 시스템 개발, ffmpeg 플러그인 활용 음원 컨버팅 시스템 개발 등
                  </span>
                  <FaPlayCircle className={styles.card_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tech_stack_section}>
        <div className={"inner_main " + styles.tech_stack_inner}>
          <span className="inner_title">기술 스택</span>
          <div className={styles.stack_card}>
            {stackList.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.card_img_back}>
                  <img src={item.img} alt={item.name} className={styles.card_img} />
                </div>
                <span className={styles.card_name}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.career_section}>
        <div className={"inner_main " + styles.career_inner}>
          <span className="inner_title">경력</span>
          <div className={styles.album_section}>
            {isAllList.filter(item => item.type_idx === 1).map((item, index) => (
              <div key={index} className={styles.album}>
                <Image src={item.img} alt={item.album_name} className={styles.img} />
                <div className={styles.play_btn}>
                  <IoPlay className={styles.play_icon} />
                </div>
                <div className={styles.album_info}>
                  <div className={styles.album_text}>
                    <span className={styles.name}>{item.album_name}</span>
                    <span className={styles.owner}>{item.type + "·" + item.album_owner + "·" + item.year}</span>
                  </div>
                  <GoKebabHorizontal className={styles.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.project_section}>
        <div className={"inner_main " + styles.project_inner}>
          <span className="inner_title">프로젝트</span>
          <div className={styles.album_section}>
            {isAllList.filter(item => item.type_idx === 2).map((item, index) => (
              <div key={index} className={styles.album}>
                <Image src={item.img} alt={item.album_name} className={styles.img} />
                <div className={styles.play_btn}>
                  <IoPlay className={styles.play_icon} />
                </div>
                <div className={styles.album_info}>
                  <div className={styles.album_text}>
                    <span className={styles.name}>{item.album_name}</span>
                    <span className={styles.owner}>{item.type + "·" + item.album_owner + "·" + item.year}</span>
                  </div>
                  <GoKebabHorizontal className={styles.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.self_section}>
        <div className={"inner_main " + styles.self_inner}>
          <span className="inner_title">자기소개서</span>
          <div className={styles.album_section}>
            {isAllList.filter(item => item.type_idx === 3).map((item, index) => (
              <div key={index} className={styles.album}>
                <Image src={item.img} alt={item.album_name} className={styles.img} />
                <div className={styles.play_btn}>
                  <IoPlay className={styles.play_icon} />
                </div>
                <div className={styles.album_info}>
                  <div className={styles.album_text}>
                    <span className={styles.name}>{item.album_name}</span>
                    <span className={styles.owner}>{item.type + "·" + item.album_owner + "·" + item.year}</span>
                  </div>
                  <GoKebabHorizontal className={styles.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.all_section}>
        <div className={"inner_main " + styles.all_inner}>
          <span className="inner_title">전체</span>
          <div className={styles.music_section}>
            <div className={styles.header_sort}>
              <span className={styles.sort}>이름</span>
              <span className={styles.sort}>대표명</span>
              <span className={styles.sort}>프로덕트</span>
            </div>
            {isAllList.map((item, index) => (
              <div key={index}>
                {item.music_list.map((val, idx) => (
                  <div key={idx} className={styles.music}>
                    <div className={styles.music_info}>
                      <Image src={item.img} alt={item.album_name} className={styles.img} />
                      <div className={styles.play_btn}>
                        <IoPlay className={styles.play_icon} />
                      </div>
                      <span className={styles.name}>{val.name}</span>
                      <span className={styles.owner}>{item.album_owner}</span>
                      <span className={styles.album}>{item.album_name}</span>
                    </div>
                    <div className={styles.interation}>
                      {val.like
                        ?
                        <AiFillLike className={styles.icon} onClick={() => setLike(item.album_idx, val.music_idx, false, 1)} />
                        :
                        <AiOutlineLike className={styles.icon} onClick={() => setLike(item.album_idx, val.music_idx, true, 1)} />
                      }
                      {val.dislike
                        ?
                        <AiFillDislike className={styles.icon} onClick={() => setLike(item.album_idx, val.music_idx, false, 0)} />
                        :
                        <AiOutlineDislike className={styles.icon} onClick={() => setLike(item.album_idx, val.music_idx, true, 0)} />
                      }
                      <GoKebabHorizontal className={styles.icon} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
