import React from 'react'

const FooterCustomer = () => {
  return (
    <div className='container-xxl footer'>
      <div className="row">
      <div class="col-md-4">
                <h3>THÔNG TIN CÔNG TY</h3>
                <ul class="ul-footer">
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Tin tuyển dụng</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h3>Hỗ trợ khách hàng</h3>
                <ul class="ul-footer">
                    <li><a href="#">Tìm hiểu về mua trả góp</a></li>
                    <li><a href="#">Chính sách vận chuyển, giao hàng</a></li>
                    <li><a href="#">Chính sách, quy định chung</a></li>
                    <li><a href="#">Chính sách bảo hành</a></li>
                    <li><a href="#">Chính sách đổi trả</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h3>Địa chỉ</h3>
                <span>103,Tăng Nhơn Phú, phường Phước Long B, TP.Thủ Đức, TP.Hồ Chí Minh
                    <br/> Số điện thoại: 0949 9999 xxx
                    <br/>Email: websitefree@gmail.com
                </span>
                <br/>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-envelope"></i>
            </div>
      </div>
      <section class="copyright bg-black">
        <div class="container text-center ">
            <a href="#" class="a-color">Thiết kế bởi: Lê Nguyễn Huy Vũ</a>
        </div>
      </section>
    </div>
  )
}

export default FooterCustomer