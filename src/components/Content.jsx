import React from "react";
import MyForm from "./UI/MyForm/MyForm";

const Content = () => {
  return (
    <div>
      <div className="galery">
        <div className="images">
          <img
            src="https://i.pinimg.com/736x/a8/4d/2a/a84d2aff61106cb27d938f7eaad65c77.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/736x/bd/f6/77/bdf677d8cc6c850a0d4a83bfea03e076.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/564x/22/d1/02/22d1023f8422a21c6f69ec91a34272ba.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="galery">
        <div className="center">
          <MyForm />
        </div>
      </div>
    </div>
  );
};

export default Content;
