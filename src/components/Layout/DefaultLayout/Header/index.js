import './header.scss'

function Header() {
  return (
    <section className="navbar-menu">
      <div className="menu">
        <nav className="navbar navbar-expand-lg d-flex">
          <div className="container">
            <div className="logo">
              <a className="navbar-brand" asp-route="Home">
                JunPik
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="list-menu">
              <div className="collapse navbar-collapse row" id="navbarNav">
                <div className="col-lg-8">
                  <ul className="navbar-nav main-menu">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-list-check"></i> Tất cả danh mục
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Mẫu
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Thiết kế mới
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Thịnh hành
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Thiết kế đồ họa
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Đoạn phim ngắn
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Âm thanh hiệu ứng
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        <i className="fa fa-pen-ruler"></i> Thiết kế
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        <i className="fa fa-file-powerpoint"></i> Bài thuyết
                        trình
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        <i className="fa fa-file-waveform"></i> Âm thanh hiệu
                        ứng
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4">
                  <ul className="navbar-nav func-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-share-nodes"></i> Kết nối
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa-regular fa-circle-question"></i> Hỗ trợ
                      </a>
                    </li>
                    <li className="nav-item btn-login"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
