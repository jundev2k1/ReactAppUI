import './footer.scss'

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 fast-link">
            <ul className="row">
              <li className="col-4">
                <h2>Danh mục sản phẩm</h2>
                <button >Mẫu</button>
                <button >Thiết kế sáng tạo</button>
                <button >Bài thuyết trình</button>
                <button >Âm thanh hiệu ứng</button>
                <button >Footage</button>
                <button >Banner</button>
                <button >Poster</button>
              </li>
              <li className="col-4">
                <h2>Website</h2>
                <button >Về chúng tôi</button>
                <button >Tham gia cùng chúng tôi</button>
                <h2>Hỗ trợ</h2>
                <button >Hỗ trợ FAQ</button>
                <button >Liên hệ</button>
                <button >Chính sách hoàn tiền</button>
              </li>
              <li className="col-4">
                <h2>Pháp lý</h2>
                <button >Điều khoản dịch vụ</button>
                <button >Thỏa thuận cấp phép</button>
                <button >Chính sách bảo mật</button>
                <button >Thông tin bản quyền</button>
                <button >Quyền sở hữu trí tuệ</button>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12 statistical">
            <h2>
              Theo chúng tôi
              <button >
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button >
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button >
                <i className="fa-brands fa-tiktok"></i>
              </button>
              <button >
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button >
                <i className="fa-brands fa-pinterest"></i>
              </button>
              <button >
                <i className="fa-brands fa-youtube"></i>
              </button>
            </h2>
            <ul className="row">
              <li className="col-4">
                <button className="btn btn-warning" >
                  Tham gia PREMEUM
                </button>
              </li>
              <li className="col-8">
                <label>Tải về vô hạn</label>
                <span>
                  9,349 người dùng đã trở thành thành viên cao cấp của chúng tôi
                </span>
              </li>
              <li className="col-4">
                <label>2,164,923</label>
                <span>Các sản phẩm</span>
              </li>
              <li className="col-4">
                <label>16,895,523</label>
                <span>Các thành viên</span>
              </li>
              <li className="col-4">
                <label>1,134</label>
                <span>Các thiết kế mỗi ngày từ cộng đồng JunPik</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
