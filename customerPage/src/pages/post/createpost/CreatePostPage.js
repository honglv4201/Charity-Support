import React, { useState } from "react";
import { Header } from "../../../components/header/Header";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./createpostpage.css";

/**
 * @author
 * @function CreatePostPage
 **/

export const CreatePostPage = (props) => {
  const [addDate, setVal] = useState("");
  const [addedDate, showData] = useState(0);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };

  return (
    <div>
      <Header type="createpost" />
      <div className="create-post-page">
        <div className="upload-form__wrapper">
          <div className="upload-form">
            <CKEditor
              className="ckeditor"
              editor={ClassicEditor}
              data={addDate}
              onChange={handleChange}
            />
            <button
              className="btn-show-demo"
              onClick={() => showData(!addedDate)}
            >
              {addedDate ? "hide data" : "show data"}
            </button>
            <div>{addedDate ? ReactHtmlParser(addDate) : ""}</div>
          </div>

          <div className="modal__wrapper">
            <div className="modal">
              <div className="modal__header">hong</div>
              <div className="modal__body">
                <div className="modal__body__container">
                  <p>hong</p>
                  <h3>lam</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
