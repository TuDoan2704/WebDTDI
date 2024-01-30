import React from "react";

export default function DichVu() {
    return(
        <section id="home" className="features-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">                 
                  <h2>“We Are A Dynamic Team”</h2>                
                  <div className="text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Công ty Cổ phần Công Nghệ và Giải Pháp AT được ra đời
                    vào năm
                    2021 nhằm cung cấp dịch vụ lưu trữ và vận dụng các nền tảng công nghệ 4.0 tiên tiến.
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhận thức được tiềm năng và cả thách thức trên
                    hành trình đổi mới của thế giới tương
                    lai. Chúng tôi - những con người giàu nhiệt huyết và có niềm đam mê lớn đối
                    với công
                    nghệ luôn không ngừng tìm kiếm những cách thức mới, cải tiến công nghệ để đưa đến
                    cho khách hàng giá trị cách tân và những dịch vụ tuyệt hảo nhất.
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    AT luôn tự hào là đơn vị hàng đầu trong lĩnh vực kinh doanh công nghệ và tiên phong
                    trong quá trình phát triển.
                  </div>
                </div>                
                <a href="#contact" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Liên hệ
                    chúng tôi</span></a>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <span className="bg-shpe-1 bounce-x" />
                <span className="bg-shpe-2 zoom-one" />
                <figure className="image-1 overlay-anim wow fadeInUp"><img src="./css/images/about.jpg" alt="" />
                </figure>
                <span className="logo-box bounce-y"><img src="images/icons/icon-logo.png" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}