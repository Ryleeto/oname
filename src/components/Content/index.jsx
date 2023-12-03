import React from "react";
import Form from "../UI/Form";
import cl from './Content.module.css'

const Content = () => {
  return (
    <div>
      <div className={cl.galery}>
        <div className={cl.images}>
          <img
            src="https://i.pinimg.com/736x/a8/4d/2a/a84d2aff61106cb27d938f7eaad65c77.jpg"
            alt="1"
          />
          <img
            src="https://i.pinimg.com/736x/bd/f6/77/bdf677d8cc6c850a0d4a83bfea03e076.jpg"
            alt="2"
          />
          <img
            src="https://i.pinimg.com/564x/22/d1/02/22d1023f8422a21c6f69ec91a34272ba.jpg"
            alt="3"
          />
        </div>
      </div>
      <div className={cl.galery}>
        <div className="center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Content;
