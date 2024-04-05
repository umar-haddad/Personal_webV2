import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "../../../public/css/certificationContent.css";

// gambar untuk sertifnya //
import gambar1 from "../../assets/img-sertif/basic-computer.png";
import gambar2 from "../../assets/img-sertif/career_preparetion.png";
import gambar3 from "../../assets/img-sertif/participant.png";
import gambar4 from "../../assets/img-sertif/graphic-design.png";
import gambar5 from "../../assets/img-sertif/intermediate-computer.png";
import gambar6 from "../../assets/img-sertif/intern.png";
import gambar7 from "../../assets/img-sertif/sertif_basic_coding.png";
import gambar8 from "../../assets/img-sertif/penghargaan.png";

const CertificationContent = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="sertif col-12" id="certifications" data-aos="fade-up">
      <ScrollToTop smooth />
      <div className="sertif-title col-12 pt-5 pb-5 mt-5 mb-5 d-flex justify-content-center">
        <h1>📜 Certifications</h1>
      </div>
      <div className="sertif-page col-12 d-flex ">
        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar1} alt="computer-basic" className="lazyload" />
          <div className="sertif-description">
            <h6>Basic Computer</h6>
            <span>YCAB Foundation&Binus</span>
            <p>
              mengikuti kursus Computer yang mempelajari MS.Word dari basic
              basicnya.
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar5} alt="computer-intermediate" className="lazyload" />
          <div className="sertif-description">
            <h6>Computer Intermediate</h6>
            <span>YCAB Foundation&Binus</span>
            <p>
              lolos dari tahap komputer basic, disini saya mempelajari hal hal
              sulit seperti pengoperasian excel, word, powerpoint, dll.
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar4} alt="Graphic design" className="lazyload" />
          <div className="sertif-description">
            <h6>Graphic Design</h6>
            <span>YCAB Foundation</span>
            <p>
              mengikuti kursus dari YCAB Foundation Graphic Design menggunakan
              software CANVA dan Sebulan menggunakan ADOBE Photoshop.
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar7} alt="Basic_Coding" className="lazyload" />
          <div className="sertif-description">
            <h6>Basic Coding</h6>
            <span>YCAB Foundation</span>
            <p>
              mengikuti kursus Basic Coding di ycab foundation, mempelajari
              Fundamental HTML, CSS, dan Javascript. serta beberapa pengetahuan
              kecil tentang Framework.
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar8} alt="Penghargaan" className="lazyload" />
          <div className="sertif-description">
            <h6>Penghargaan Demo day #SiapapunBisaNgoding</h6>
            <span>Skilvul</span>
            <p>
              mengikuti lomba Membuat Landing page dengan Vanilla CSS dan
              Javascript, serta belajar basic
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar2} alt="Preparation" className="lazyload" />
          <div className="sertif-description">
            <h6>Career Preparation</h6>
            <span>YCAB Foundation x Skilvul</span>
            <p>
              penyiapan career untuk masuk kedunia kerja dan cara memanage waktu
              kita saat kita sudah bekerja.
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar6} alt="Intern" className="lazyload" />
          <div className="sertif-description">
            <h6>Sertifikat Beasiswa Fullstack Developer</h6>
            <span>Skilvul</span>
            <p>
              telah berhasil lolos dengan julukan
              <i>
                <b>Certificate of completion</b>
              </i>
              dan mengerjakan Project yang susah. yaitu membuat website ada
              UI/UX nya dan front end serta Backendnya
            </p>
          </div>
        </div>

        <div className="sertif-card col-6" data-aos="fade-up">
          <img src={gambar3} alt="Participant" className="lazyload" />
          <div className="sertif-description">
            <h6>Participant Skilvul</h6>
            <span>Skilvul</span>
            <p>
              hanya menjadi Participant dalam Front-end Developer career,
              mempelajari UI/UX Design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationContent;
