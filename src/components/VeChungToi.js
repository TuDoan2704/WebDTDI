import React from "react";
export default function VeChungToi() {
    return (
        
        <section id="services" className="about-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center" style={{marginTop: '50px'}}>
            <span className="sub-title">Về chúng tôi</span>
            <h2>Hướng tới tương lai</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href><img className="imgH" src="./css/images/img1.jpg" alt="" /></a></figure>
                  <div className="info-box">
                    <i className="icon flaticon-success" />
                    <h6 className="title">Tầm nhìn</h6>
                    <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <i className="icon flaticon-success" />
                    <h6 className="title"><a href>Tầm nhìn</a></h6>
                    <div className="text">AT sẽ trở thành một doanh nghiệp dẫn đầu ở Việt Nam và khu vực về
                      kinh doanh các
                      sản phẩm, giải pháp và dịch vụ trên nền tảng công nghệ ICT và kỹ thuật số.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href><img className="imgH" src="./css/images/img2.jpg" alt="" /></a></figure>
                  <div className="info-box">
                    <i className="icon flaticon-growth-graph" />
                    <h6 className="title"><a href>Sứ mệnh</a></h6>
                    <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <i className="icon flaticon-growth-graph" />
                    <h6 className="title"><a href>Sứ mệnh</a></h6>
                    <div className="text">AT đem tới khách hàng những sản phẩm và giải pháp công nghệ tối ưu
                      với chất
                      lượng cao, dịch vụ vượt trội cho các hệ thống quản lý sản xuất và vận hành của
                      các doanh nghiệp, các tổ chức</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href><img className="imgH" src="./css/images/img3.jpg" alt="" /></a></figure>
                  <div className="info-box">
                    <i className="icon flaticon-marketing" />
                    <h6 className="title"><a href>Giá trị cốt lõi</a></h6>
                    <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <i className="icon flaticon-marketing" />
                    <h6 className="title"><a href>Giá trị cốt lõi</a></h6>
                    <div className="text">Luôn coi “Lợi ích của Khách hàng” là lợi thế cạnh tranh, là thành
                      công và sự tồn tại của chính mình.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )

}