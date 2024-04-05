import React, { useState, useEffect } from "react";
import ".././about/about.css";
import ProfileImage from "../../assets/img/Profile.jpg";

function About() {
  const [currentTitle, setCurrentTitle] = useState("");
  const titles = ["About Me", "Web Developer", "Fresh Graduate"];
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let typingIndex = 0;
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentTitle((prev) => {
          if (typingIndex === titles[currentIndex].length) {
            typingIndex = 0;
            currentIndex = (currentIndex + 1) % titles.length;
            return "";
          } else {
            typingIndex++;
            return titles[currentIndex].substring(0, typingIndex);
          }
        });
        setIsChanging(false);
      }, 20);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-img" data-aos="fade-up">
      <div className="content d-flex justify-content-center">
        <div className="col-lg-6 p-5 d-flex justify-content-center ">
          <img src={ProfileImage} alt="Profil" className="img img-rounded" />
        </div>
        <div className="content col-lg-6 ">
          <h1 className={isChanging ? "changing" : ""}>{currentTitle} 👨‍💻</h1>
          <div className="plus">
            <span>FUll NAME : SAYYID UMAR</span> <br />
            <span>Call : UMAR</span>
            <br />
            <span>
              Address : DKI Jakarta, Jakarta Timur, Kec.Jatinegara, Kel.Cipinang
              Besar Selatan, jln. Cipinang Jaya AA ujung RT 10/RW 08
            </span>
            <br />
            <span>No.Hp : 085772169466</span> <br />
            <span class="last">
              date/place first birth : Jakarta, 01-12-2004
            </span>
            <br /> <br />
            <p>
              Hello everyone, my name is Sayyid Umar. I am a Junior Web
              Developer. I am a fresh graduate of high school majoring in social
              sciences, West Jakarta. Coding has been my passion and hobby since
              I was 16 years old, and I have loved computers since I was in
              elementary school. Apart from coding, I like listening to music. I
              also like playing games. whatever the game is because I think of a
              way to make it that I think is interesting Sometimes I watch
              anime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
