import { useEffect } from "react";
import "./cssLayout/LeftMenu.scss";
import logo from "../../assets/images/logo.png";
import {
  BlockOutlined,
  FileTextFilled,
  WalletFilled,
  PieChartFilled,
  DatabaseFilled,
  SettingFilled,
  QuestionCircleFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";

function LeftMenu() {
  useEffect(() => {
    //seclected item header
    var activeHeader = document.querySelector(".left_menu_content");
    var pageItem = activeHeader.getElementsByClassName("lm_page_item");
    for (var i = 0; i < pageItem.length; i++) {
      pageItem[i].addEventListener("click", function () {
        var current = activeHeader.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);
  return (
    <>
      <div className="left_menu_container">
        <div className="left_menu_logo">
          <div className="logo_image">
            {" "}
            <img src={logo} alt="logo" />
          </div>
          <h2>
            Fin<span>app</span>
          </h2>
        </div>
        <div className="left_menu_content">
          <div className="left_menu_page">
            <ul className="lm_page_ul">
              <li className="lm_page_li">
                <div className="lm_page_item active">
                  <div className="lm_page_item_icon">
                    <BlockOutlined className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Dashboard</h4>
                  </div>
                </div>
              </li>
              <li className="lm_page_li">
                <div className="lm_page_item ">
                  <div className="lm_page_item_icon">
                    <FileTextFilled className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Invoition</h4>
                  </div>
                </div>
              </li>
              <li className="lm_page_li">
                <div className="lm_page_item ">
                  <div className="lm_page_item_icon">
                    <WalletFilled className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Wallest</h4>
                  </div>
                </div>
              </li>
              <li className="lm_page_li">
                <div className="lm_page_item  ">
                  <div className="lm_page_item_icon">
                    <PieChartFilled className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Reports</h4>
                  </div>
                </div>
              </li>
              <li className="lm_page_li">
                <div className="lm_page_item  ">
                  <div className="lm_page_item_icon">
                    <DatabaseFilled className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Trancaction</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="left_menu_support">
            <ul className="lm_page_ul">
              <li className="lm_page_li">
                <div className="lm_page_item  ">
                  <div className="lm_page_item_icon">
                    <SettingFilled className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Setting</h4>
                  </div>
                </div>
              </li>
              <li className="lm_page_li">
                <div className="lm_page_item  ">
                  <div className="lm_page_item_icon">
                    <QuestionCircleFilled className="lm_page_item_icon_icon" />
                  </div>
                  <div className="lm_page_item_title">
                    <h4>Help</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="left_menu_logout">
            <div className="lm_page_item  ">
              <div className="lm_page_item_icon">
                <ArrowLeftOutlined className="lm_page_item_icon_icon" />
              </div>
              <div className="lm_page_item_title">
                <h4>Log out</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
