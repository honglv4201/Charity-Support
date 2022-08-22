import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ItemHomePage } from "../../../components/donateItemHomePage/ItemHomePage";
import { Header } from "../../../components/header/Header";
import "./listpostall.scss";

//  json
import { featuredPost } from "../../../assets/JsonData/featuredPost";
import LeftMenuType from "./LeftMenuType";
/**
 * @author
 * @function ListPostCovid
 **/
const ListPostHeader = () => {
  return (
    <div className="listpost__header">
      <h2 className="title">Tìm kiếm</h2>
      <div className="input-search">
        <input type="text" />
        <Link to="/">
          {" "}
          <div className="search-btn">Tìm kiếm</div>
        </Link>
      </div>
    </div>
  );
};

export const ListPost = (props) => {
  const [type, setType] = useState("all");
  const { pathname } = useLocation();
  useEffect(() => {
    setType(pathname.split("/")[2]);
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    let time = Math.random() * 2000;
    setTimeout(() => {
      setIsLoading(false);
    }, time);
  }, [pathname]);
  return (
    <div>
      <Header link="list" />
      <div className="listpost listpostall">
        <ListPostHeader />

        {/* body */}
        <div className="listpost__body">
          {/* left */}
          <LeftMenuType />
          {/* end : left  pannel */}
          {/* right pannel */}
          <div className="right">
            {!isLoading && (
              <div className="list-donate-itemss">
                {featuredPost.map((item, ind) => {
                  if (
                    item.type === type ||
                    item.owner === type ||
                    type === "all"
                  ) {
                    return <ItemHomePage {...item} isLoading={isLoading} />;
                  }
                })}
              </div>
            )}
            {isLoading && (
              <div className="list-donate-itemss">
                {new Array(4).fill(0).map((item, ind) => {
                  return <ItemHomePage {...item} isLoading={isLoading} />;
                })}
              </div>
            )}
          </div>
          {/* end: right pannel */}
        </div>
      </div>
    </div>
  );
};
