import React, { FC } from 'react';
import './Button.scss';
import pptxgen from "pptxgenjs";
import html2canvas from "html2canvas";

interface ButtonProps {}

const onButtonClick = () => {
    console.log("passed");
    const content: HTMLElement | null = document.querySelector(".Content");

    if (content) {
        const pres = new pptxgen();
        const slide = pres.addSlide();
        html2canvas(content).then(canvas => {
            const imageOptions: pptxgen.ImageProps = {
                data: canvas.toDataURL("image/jpeg").split('data:')[1]
            }

            console.log(imageOptions);

            slide.addImage(imageOptions);
            pres.writeFile();
        });
    }

}

const Button: FC<ButtonProps> = () => (
  <button className="Button" onClick={onButtonClick}>
    Button Component
  </button>
);

export default Button;
