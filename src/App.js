import DichVu from "./components/DichVu";
import DoiTac from "./components/DoiTac";
import DoiTacTu from "./components/DoiTacTu";
import DuAn from "./components/DuAn";
import Test1 from "./components/Test1";
import VeChungToi from "./components/VeChungToi";
import VeChungToi1 from "./components/VeChungToi1";


function App() {
  return (
    <div className="page-wrapper">
      {/* Preloader */}
      {/* <div className="preloader" /> */}
      {/* Main Header*/}
      <header id="home" className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              {/* Info List */}
              <ul className="list-style-one">
                <li><i className="fa fa-envelope" /> <a href="mailto:admin@at-tech.com.vn">admin@at-tech.com.vn</a></li>
                <li><a target="_blank" href="https://www.google.com/maps/place/Viwaseen+Tower+T%E1%BB%91+H%E1%BB%AFu/@20.9980766,105.7918503,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ad8f8064667b:0x65f8f955fb2e87c1!8m2!3d20.9980716!4d105.7944252!16s%2Fg%2F11j8tlptwv?entry=ttu"><i className="fa fa-map-marker" />Tầng 12, tòa nhà Viwaseen Tower, 48 Tố Hữu, Phường
                  Trung Văn, Quận Nam Từ Liêm, Thành phố Hà Nội</a></li>
              </ul>
            </div>
            <div className="top-right">
              {/* <ul class="useful-links">
						<li><a href="#">Help</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Contact</a></li>
					</ul> */}
              <ul className="social-icon-one">
                <li><a href="https://twitter.com/?lang=vi" target="_blank"><span className="fab fa-twitter" /></a></li>
                <li><a href="https://www.facebook.com/attechjsc" target="_blank"><span className="fab fa-facebook-square" /></a></li>
                {/* <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li> */}
                <li><a href="https://www.instagram.com/" target="_blank"><span className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header Top */}
        {/* Header Lower */}
        <div className="header-lower">
          {/* Main box */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo"><a href="index.html"><img className="logo" src="./css/images/ATTECH LOGO_Green&Mint.svg" alt="" /></a></div>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="mhb"><a onclick="scrollToElement(home)" href="#home" className="active navbarmenu">TRANG CHỦ</a></li>
                  <li className="mhb"><a href="#about">VỀ CHÚNG TÔI</a></li>
                  <li className="mhb"><a href="#services">DỊCH VỤ</a></li>
                  <li className="mhb"><a href="#doitac">ĐỐI TÁC</a></li>
                  <li className="mhb"><a href="#contact">LIÊN HỆ</a></li>
                  {/* <li><a href="#projects">Projects</a></li> */}
                  {/* <li><a href="#news">Blog</a></li> */}
                </ul>
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box">
                {/* <a href="tel:+84 393 245 192" class="info-btn">
								<img src="images/icons/icon-chat.png" alt="" class="icon">
								<small>Bạn muốn đặt câu hỏi cho chúng tôi? <br>Miễn phí</small>
								<strong>+84 393 245 192 </strong>
							</a> */}
                <div className="ui-btn-outer">
                  <button className="ui-btn ui-btn search-btn">
                    <span className="icon lnr lnr-icon-search" />
                  </button>
                </div>
                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo"><a href="index.html"><img className="logo" src="./css/images/Logo_full color.svg" alt="" title /></a></div>
              <div className="close-btn"><i className="icon fa fa-times" /></div>
            </div>
            <ul className="navigation clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Gọi ngay cho chúng tôi</span>
                  <a href="tel:+92880098670">+84 393 245 192</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Email liên hệ</span>
                  <a href="mailto:help@company.com">admin@at-tech.com.vn</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Hoạt động</span>
                  T2 - T7 8:00 - 17:00, Chủ nhật - NGHỈ
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li><a href="https://twitter.com/?lang=vi"><i className="fab fa-twitter" /></a></li>
              <li><a href="https://www.facebook.com/attechjsc"><i className="fab fa-facebook-f" /></a></li>
              {/* <li><a href="#"><i class="fab fa-pinterest"></i></a></li> */}
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a></li>
            </ul>
          </nav>
        </div>{/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search"><span className="fa fa-times" /></button>
          <div className="search-inner">
            <form method="post" action="index.html">
              <div className="form-group">
                <input type="search" name="search-field" defaultValue placeholder="Search..." required />
                <button type="submit"><i className="fa fa-search" /></button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <a href="index.html" title><img src="./css/images/Logo_full color.svg" alt="" title /></a>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </ul>
                  </div>
                </nav>{/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars" /></div>
              </div>
            </div>
          </div>
        </div>{/* End Sticky Menu */}
      </header>
      <section className="main-slider" id="home">
        <div className="rev_slider_wrapper fullwidthbanner-container" id="rev_slider_one_wrapper" data-source="gallery">
          <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
            <ul>
              {/* Slide 1 */}
              <li data-index="rs-1" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img src="./css/images/website-development.jpg" alt="" className="rev-slidebg" />

                <div className="tp-caption" data-paddingbottom="[10,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','600','500']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-20','-20','-20','-20']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <h1>Phát triển <br />ứng dụng web</h1>
                </div>
                <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','450']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['120','185','200','150']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one"><span className="btn-title">Liên
                        hệ chúng tôi</span></a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
              {/* Slide 2 */}
              <li data-index="rs-2" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img src="./css/images/cloud-computing-banner-background-smart-city.jpg" alt="" className="rev-slidebg" />

                <div className="tp-caption" data-paddingbottom="[10,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','600','500']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-20','-20','-20','-20']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <h1>Dịch vụ <br /> lưu trữ đám mây</h1>
                </div>
                <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','450']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['120','185','200','150']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one"><span className="btn-title">Liên
                        hệ chúng tôi</span></a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
              {/* Slide 3 */}
              <li data-index="rs-3" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img src="./css/images/slide.png" alt="" className="rev-slidebg" />

                <div className="tp-caption" data-paddingbottom="[10,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','600','500']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-20','-20','-20','-20']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <h1>Phân tích &amp; <br />xử lý dữ liệu</h1>
                </div>
                <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','450']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['120','185','200','150']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one"><span className="btn-title">Liên
                        hệ chúng tôi</span></a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
              {/* Slide 4 */}
              <li data-index="rs-4" data-transition="zoomout">
                {/* MAIN IMAGE */}
                <img src="./css/images/5g-connection.jpg" alt="" className="rev-slidebg" />
                <div className="tp-caption" data-paddingbottom="[10,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','600','500']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-20','-20','-20','-20']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <h1>Tư vấn &amp; thực hiện chuyển đổi số</h1>
                </div>
                <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','450']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['120','185','200','150']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                  <div className="btn-box">
                    <div className="btn-outer">
                      <a href="#contact" className="theme-btn btn-style-one"><span className="btn-title">Liên
                        hệ chúng tôi</span></a>
                      {/* <a href="page-contact.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <DichVu/>
      <DoiTac/>
      <VeChungToi1/>
      <VeChungToi/>
      {/* <DuAn/> */}
      <DoiTacTu/>
      <Test1/>
     
    </div>
  );
}

export default App;
