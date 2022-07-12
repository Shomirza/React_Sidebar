import React, { useState } from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

function App() {
  const { pathname } = useLocation();
  const [down, setDown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setDown(!down);
    setShow(false);
  };
  const showSidebar = () => {
    setShow(!show);
    setDown(false);
  };
  return (
    <div className="d-flex">
      <section className={`Sidebar col-2 d-flex flex-column ${show ? "Show" : ""}`}>
        <div className="avatar d-flex justify-content-between align-items-center">
          <div className="d-flex p-2">
            <img
              src="https://safe-web.eu/wp-content/uploads/2020/02/Ellipse-2-1.png"
              alt="Abbos Rakhmonov"
              className="rounded-circle"
            />
            <p className={`lh-1 small ms-2 m-auto ${show ? "d-none" : ""}`}>
              <strong>Abbos Rakhmonov</strong> <br />
              <span className="text-muted">Direktor</span>
            </p>
          </div>
          <h5 className={`${show ? "d-none" : ""}`}>
            <BsIcons.BsThreeDotsVertical />
          </h5>
        </div>

        <div className="d-flex justify-content-end mt-1">
          <span
            onClick={showSidebar}
            className="ShowBtn d-flex justify-content-center align-items-center"
          >
            <h5>
              <BsIcons.BsChevronLeft />
            </h5>
          </span>
        </div>

        <div className="nav-links p-3">
          <NavLink to="/">
            <h6
              className={`nav-link ${pathname === "/" ? "actived" : ""}`}
            >
              <i className={`${show ? "m-auto d-flex" : ""}`}>
                <FaIcons.FaHome />
              </i>{" "}
              <text className={`${show ? "d-none" : ""}`}>Bosh sahifa</text>
            </h6>
          </NavLink>
          <NavLink to="/products">
            <h6 className={`product flex-column ${down ? "active" : ""}`}>
              <p
                onClick={handleClick}
                className={`nav-link ${
                  pathname === "/products" ? "actived" : ""
                }`}
              >
                <i className={`${show ? "m-auto d-flex" : ""}`}>
                  <FaIcons.FaShoppingCart />
                </i>{" "}
                <text className={`${show ? "d-none" : ""}`}>Maxsulotlar</text>
                <span
                  className={`d-flex justify-content-end w-100 chevronUp ${
                    show ? "d-none" : ""
                  }`}
                >
                  <BsIcons.BsChevronDown />
                </span>
              </p>
              <div className="ps-5 productItems text-muted">
                <p>
                  <span>
                    <BsIcons.BsChevronRight />
                  </span>{" "}
                  Yaratish
                </p>
                <p>Maxsulotlar hisoboti</p>
                <p>Qabul qilish</p>
                <p>
                  <span>
                    <BsIcons.BsChevronRight />
                  </span>{" "}
                  Inventarizatsiya
                </p>
              </div>
            </h6>
          </NavLink>
          <NavLink to="/wallet">
            <h6
              className={`nav-link ${pathname === "/wallet" ? "actived" : ""}`}
            >
              <i className={`${show ? "m-auto d-flex" : ""}`}>
                <FaIcons.FaWallet />
              </i>{" "}
              <text className={`${show ? "d-none" : ""}`}>Sotuv</text>
              <span
                className={`d-flex justify-content-end w-100 chevronUp ${
                  show ? "d-none" : ""
                }`}
              >
                <BsIcons.BsChevronDown />
              </span>
            </h6>
          </NavLink>
          <NavLink to="/cash">
            <h6 className={`nav-link ${pathname === "/cash" ? "actived" : ""}`}>
              <i className={`${show ? "m-auto d-flex" : ""}`}>
                <BsIcons.BsCalculator />
              </i>{" "}
              <text className={`${show ? "d-none" : ""}`}>Kassa</text>
            </h6>
          </NavLink>
          <NavLink to="/branch">
            <h6
              className={`nav-link ${pathname === "/branch" ? "actived" : ""}`}
            >
              <i className={`${show ? "m-auto d-flex" : ""}`}>
                <BiIcons.BiBuildingHouse />
              </i>{" "}
              <text className={`${show ? "d-none" : ""}`}>Filial</text>
            </h6>
          </NavLink>
          <NavLink to="/currency">
            <h6
              className={`nav-link ${
                pathname === "/currency" ? "actived" : ""
              }`}
            >
              <i className={`${show ? "m-auto d-flex" : ""}`}>
                <FaIcons.FaMoneyBill />
              </i>{" "}
              <text className={`${show ? "d-none" : ""}`}>Valyuta kursi</text>
            </h6>
          </NavLink>
        </div>
      </section>
      <section className="content w-100 d-flex justify-content-center align-items-center border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
