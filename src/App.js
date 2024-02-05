import './App.css';
import { BsEnvelope, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaCertificate,FaLinkedinIn, FaHandPointRight, FaUniversity, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogleplus, IoLogoLinkedin, IoMdCamera, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { TfiGoogle } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";
import logoimg from './image/p1.svg';
import logo2 from './image/p31.svg';
// import { FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
// import { IoRemoveOutline } from "react-icons/io5";
function App() {
    return (
        <div className="main">
            <header>
                <div className="head">
                    <div className="container">
                        <div className='top'>
                            <div className="first">
                                <div className='flex f_1'>
                                    <div><a><BsEnvelope></BsEnvelope></a></div>
                                    <div className='id'><a>info@cdmi.in</a></div>
                                </div>
                                <div className='flex f_2'>
                                    <div><a><FaCertificate></FaCertificate></a></div>
                                    <div><a className='id'>Verify FaCertificate</a></div>
                                </div>
                            </div>
                            <div className='second flex'>
                                <div>HAVE ANY QUESTION ? +91 90333 16003</div>
                            </div>
                            <div className='third flex'>
                                <div><a><FaFacebookF></FaFacebookF></a></div>
                                <div><a><FaTwitter></FaTwitter></a></div>
                                <div><a><TfiGoogle></TfiGoogle></a></div>
                                <div><a><FaLinkedin></FaLinkedin></a></div>
                                <div><a><FaInstagram></FaInstagram></a></div>
                                <div><a><CiYoutube></CiYoutube></a></div>
                                <div><a><FaWhatsapp></FaWhatsapp></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <div className='container'>
                    <div className='tital flex'>
                        <div className='logo'>
                            <img src={logoimg} className='logo'></img>
                        </div>
                        <div className='menu flex'>
                            <div><a>HOME</a></div>
                            <div><a>COURSES</a></div>
                            <div><a>ACTIVITIES</a></div>
                            <div><a>BLOG</a></div>
                            <div><a>KNOW US</a></div>
                            <div><a>GET IN TOUCH</a></div>
                            <div><a>STUDENT ZONE</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='img'>
                    <img src={require('./image/p2.webp')}></img>
                </div>
            </div>
            <div className='container'>
                <div className='creat'>
                    <div className='flex c_line'>
                        <div className='line'></div>
                        <div>CREATIVE COURSE</div>
                    </div>
                    <div><a>OFFERED COURSES</a></div>

                    <div className='course1'>
                        <div className='c_img'>
                            <div className='i_1'>
                                <img src={require('./image/p3.webp')}></img>
                            </div>
                            <div><p>Development Courses</p></div>
                            <div className='flex justy star_1'>
                                <div className='star flex'>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStarHalfAlt></FaStarHalfAlt></div>
                                </div>
                                <div className='btn'>Know More..!</div>
                            </div>
                        </div>
                        <div className='c_img'>
                            <div className='i_1'>
                                <img src={require('./image/p4.webp')}></img>
                            </div>
                            <div><p>Design Courses</p></div>
                            <div className='flex justy star_1'>
                                <div className='star flex'>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStarHalfAlt></FaStarHalfAlt></div>
                                </div>
                                <div className='btn'>Know More..!</div>
                            </div>
                        </div>
                        <div className='c_img'>
                            <div className='i_1'>
                                <img src={require('./image/p5.webp')}></img>
                            </div>
                            <div><p>Python</p></div>
                            <div className='flex justy star_1'>
                                <div className='star flex'>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStarHalfAlt></FaStarHalfAlt></div>
                                </div>
                                <div className='btn'>Know More..!</div>
                            </div>
                        </div>
                    </div>
                    <div className='course1'>
                        <div className='c_img'>
                            <div className='i_1'>
                                <img src={require('./image/p6.webp')}></img>
                            </div>
                            <div><p>Master In Flutter Development</p></div>
                            <div className='flex justy star_1'>
                                <div className='star flex'>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStarHalfAlt></FaStarHalfAlt></div>
                                </div>
                                <div className='btn'>Know More..!</div>
                            </div>
                        </div>
                        <div className='c_img'>
                            <div className='i_1'>
                                <img src={require('./image/p7.jpg')}></img>
                            </div>
                            <div><p>Laravel</p></div>
                            <div className='flex justy star_1'>
                                <div className='star flex'>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStarHalfAlt></FaStarHalfAlt></div>
                                </div>
                                <div className='btn'>Know More..!</div>
                            </div>
                        </div>
                        <div className='c_img'>
                            <div className='i_1'>
                                <img src={require('./image/p8.webp')}></img>
                            </div>
                            <div><p>Maya Pro | 3Ds Max Pro</p></div>
                            <div className='flex justy star_1'>
                                <div className='star flex'>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStar></FaStar></div>
                                    <div><FaStarHalfAlt></FaStarHalfAlt></div>
                                </div>
                                <div className='btn'>Know More..!</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='view'>
                    <div>View All Courses<a><BsArrowRight></BsArrowRight></a></div>
                </div>
            </div>
            <div className='part'>
                <div className='subject flex'>
                    <div className='shap'>
                        <div className='pro_1'>
                            <div className='flex'>
                                <div className='line_1'></div>
                                <div className='sub3'>ABOUT US</div>
                            </div>
                            <div className='sub1'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</div>
                            <p className='sub2'> Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                            <div className='sub4'>
                                <div>Enroll Now..!<a><BsArrowRight></BsArrowRight></a></div>
                            </div>
                        </div>
                    </div>
                    <div className='img1'>
                        <img src={require('./image/p9.jpg')}></img>
                    </div>
                </div>
            </div>
            <div className='main_s'>
                <div className='slider'>
                    <div className='score flex'>
                        <div className='text'>
                            <img src={require('./image/p24.png')}></img>
                            <h1>18000+</h1>
                            <p>HAPPY STUDENTS</p>
                        </div>
                        <div className='text'>
                            <img src={require('./image/p21.png')}></img>
                            <h1>10+</h1>
                            <p>CERTIFICATION APPROVAL</p>
                        </div>
                        <div className='text'>
                            <img src={require('./image/p22.png')}></img>
                            <h1>100+</h1>
                            <p>CERTIFIED TEACHERS</p>
                        </div>
                        <div className='text'>
                            <img src={require('./image/p23.png')}></img>
                            <h1>12000+</h1>
                            <p>STUDENTS PLACED</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='flex justy happy_stu'>
                    <div className='happy'>
                        <div className='flex student'>
                            <div className='line_2'></div>
                            <div>HAPPY STUDENTS</div>
                        </div>
                        <div className='name'>ALUMNI SPEAK</div>
                        <div className='flex justy'>
                            <div className='flex justy box'>
                                <div className='box1'><a><BsChevronLeft></BsChevronLeft></a></div>
                                <div className='box2'><a><BsChevronRight></BsChevronRight></a></div>
                            </div>
                        </div>
                        <p>Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        <div className='flex design'>
                            <div className='ui_img'>
                                <img src={require('./image/p14.jpg')}></img>
                            </div>
                            <div className='ui_name'>
                                <h3>KOLADIYA MANSI</h3>
                                <div className='flex'><p>UI/UX Designer</p><a>@ Patoliya Infotech</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='happy2'>
                        <img src={require('./image/p32.PNG')}></img>
                        {/*  <img src={require('./image/p12.png')}></img> */}
                    </div>
                </div>
            </div>
            <div className='choose_part'>
                <div className='container'>
                    <div className='offer_part'>
                        <div className='b_line flex'>
                            <div className='bline'></div>
                            <div className='text_cdmi'>READ OUR DIFFERENCE</div>
                        </div>
                        <p>WHY CHOOSE CREATIVE</p>
                    </div>
                    <div className='six_part1'>
                        <div className='first1 flex justy'>
                            <div className='one1'>
                                <div className='one_img1'>
                                    <img src={require('./image/p15.png')}></img>
                                </div>
                                <p className='industry'>Industry Experts As Trainers</p>
                                <p className='our_p'>Our trainers have 5+ years of industry experience coupled with extensive research and analysis within a short time.</p>
                            </div>
                            <div className='one1'>
                                <div className='one_img2'>
                                    <img src={require('./image/p16.png')}></img>
                                </div>
                                <p className='industry'>Latest Curriculum</p>
                                <p className='our_p'>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge..</p>
                            </div>
                            <div className='one1'>
                                <div className='one_img3'>
                                    <img src={require('./image/p17.png')}></img>
                                </div>
                                <p className='industry'>Latest Technology</p>
                                <p className='our_p'>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                            </div>
                        </div>
                        <div className='sec1'>
                            <div className='one1'>
                                <div className='one_img4'>
                                    <img src={require('./image/p18.png')}></img>
                                </div>
                                <p className='industry'>Interview Assistance</p>
                                <p className='our_p'>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                            </div>
                            <div className='one1'>
                                <div className='one_img5'>
                                    <img src={require('./image/p19.png')}></img>
                                </div>
                                <p className='industry'>Free Upgradation</p>
                                <p className='our_p'>We will be provided free upgradation for any newer version of the course you have Free Upgradation We.</p>
                            </div>
                            <div className='one1'>
                                <div className='one_img6'>
                                    <img src={require('./image/p20.png')}></img>
                                </div>
                                <p className='industry'>Lifetime Support</p>
                                <p className='our_p'>We will provide you lifetime support on all the courses you learned from us.for any newer version of the course you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='part1'>
                    <div className='flex b_line'>
                        <div className='bline'></div>
                        <div className='text_cdmi'>STUDENT PLACEMENT</div>
                    </div>
                    <p>OUR RECRUITMENT PARTNERS</p>
                </div>
                <div>
                    <div className='flex slider_img'>
                        <img src={require('./image/p25.png')}></img>
                        <img src={require('./image/p26.png')}></img>
                        <img src={require('./image/p27.png')}></img>
                        <img src={require('./image/p28.png')}></img>
                        <img src={require('./image/p29.png')}></img>
                        <img src={require('./image/p30.png')}></img>
                    </div>
                </div>
                <div className='line3'>
                    <p>Our Demanded Course -</p>
                </div>
                <div className='flex'>
                    <div className='c_name'>Best PHP Training Institute In Surat</div>
                    <div className='c_name'>Google Sketchup Training Institute In Katargam</div>
                    <div className='c_name'>Game Design Course In Mota Varachha</div>
                    <div className='c_name'>C++ Programming Language Training Institute</div>
                </div>
                <div className='flex'>
                    <div className='c_name'>Learn Basic Computer Course From The Best Computer Institute In Surat</div>
                    <div className='c_name'>Game Development Class In Katargam</div>
                    <div className='c_name'>Game Design Course In Mota Varachha</div>
                    <div className='c_name'> Video Editing Training Institute In Surat</div>
                </div>
                <div className='flex'>
                    <div className='c_name'>Flutter Training Course</div>
                    <div className='c_name'>Game Design Training Institute In Surat</div>
                    <div className='c_name'>PHP Training Institute In Surat</div>
                    <div className='c_name'>Solidworks Training Institute In Mota Varachha</div>
                    <div className='c_name'>PHP Training Course</div>
                </div>
                <p className='show'>Show More</p>
            </div>
            <footer className='footer_bg'>
          <div className='container'>
            <div className='top_footer'>
              <div className='container '>
                <div className='footer_logo'>
                  <div className='logo_img' >
                    <img src={logo2}></img>
                  </div>
                </div>
                <p className='text_1'>
                  Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
                </p>
                <h2 className='text_2'>Follow Us On</h2>
                <div className='icon_5'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><TfiGoogle></TfiGoogle></a>
                  <a><FaLinkedinIn></FaLinkedinIn></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><CiYoutube></CiYoutube></a>
                  <a><FaWhatsapp></FaWhatsapp></a>
                </div>
              </div>
              <div className="part_2">
                <h2 className='link'>Feature Links </h2>
                <ul className='menu1'>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>about Us</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Blogs</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Join Us</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Company Login</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>ertificate Verification</li>

                </ul>
              </div>
              <div className='part_3'>
                <h4 className='us'>Contact Us</h4>
                <h3>HEAD OFFICE - YOGICHOWK</h3>
                <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                <h5>Mo :<span>+91 90333 16003</span></h5>
                <h3>Other Branches</h3>
                <ul className='icon_7'>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Katargam</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Mota Varachha</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Adajan</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Navsari</li>
                </ul>

              </div>
            </div>
          </div>
        </footer>

        {/* end footer  */}
        {/* footer */}
        <div className='copyright'>
          <div className='container'>
            <div className='container'>
              <h3>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h3>
            </div>
          </div>
        </div>
        </div>
    );
}

export default App;
