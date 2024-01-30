import React from "react";
export default function VeChungToi1() {
return(
    <section id="about" className="services-section">
        <div className="bg" style={{backgroundImage: 'url(./images/main-slider/shape-2.jpg)'}} />
        <div className="auto-container">
          {/* <div class="">
					<div> */}
          <div className="col-lg-7 sec-title text-center" style={{margin: '0px auto 30px auto'}}>
            <span className="sub-title">Tại sao chọn AT Tech</span>
            <h2>Làm hài lòng khách hàng là niềm hạnh phúc của chúng tôi!</h2>
          </div>
          {/* </div>
				</div> */}
          <div className="row justify-content-center">
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>Sản phẩm</a></h6>
                <i className="icon fa-duotone fa-gears" />
                <a href="l" className="read-more">Chất lượng cao, thiết kế trau chuốt, đảm bảo tính thẩm mỹ, phù
                  hợp thị hiếu và nhu cầu sử dụng.</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>Giải pháp</a></h6>
                <i className="icon fa-regular fa-head-side-brain" />
                <a href className="read-more">Enterprise resource planning(ERP), Enterprise Service Bus
                  (ESB), Enterprise content management(ECM), Business Process Management(BPM)</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>Dịch vụ</a></h6>
                <i className="icon fa-thin fa-user-tie" />
                <a href className="read-more">Tiến độ xây dựng nhanh chóng và quản lý vận hành chặt chẽ. Khâu
                  chăm sóc khách hàng sau dịch vụ luôn để lại dấu ấn tốt. Khẳng định sự uy tín của công ty
                  trên thị trường cung cấp dịch vụ phần mềm.</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>Nhân sự</a></h6>
                <i className="icon fa-regular fa-bolt-lightning" />
                <a href className="read-more">Đội ngũ chuyên gia CNTT được đào tạo bài bản, thường xuyên tự
                  trau dồi những kiến thức mới nhất về quản lý, cải tiến công nghệ.</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-2 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                {/* <h6 class="title ct1"><a href="page-service-details.html">Công nghệ</a></h6> */}
                <h6 className="title ct1"><a href>Công nghệ</a></h6>
                <i className="icon fa-light fa-microchip-ai" />
                <a href className="read-more">Chúng tôi luôn mang đến những công
                  nghệ mới nhất cho bạn như AI, Machine Learning, IoT, Container, Docker,
                  Kubernetes...</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-2 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>Phương châm</a></h6>
                <i className="icon fa-solid fa-book" />
                <a href className="read-more">“Luôn lấy cái tâm làm gốc”, tối ưu hóa lợi ích của khách
                  hàng và đối tác.</a>
              </div>
            </div>
          </div>
        </div>
      </section>
)

}