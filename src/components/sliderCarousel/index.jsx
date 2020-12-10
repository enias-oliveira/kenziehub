import "antd/dist/antd.css";
import { Carousel } from "antd";

const contentStyle = {};

const image1 = () => {
  return (
    <img
      src="https://i.postimg.cc/GdJm2XWC/banner-oficial01.jpg"
      height="100%"
      width="100%"
      alt="oi"
    />
  );
};
const image2 = () => {
  return (
    <img
      src="https://i.postimg.cc/w9qTshzs/banner-oficial02.jpg"
      height="100%"
      width="100%"
      alt="oi"
    />
  );
};
const image3 = () => {
  return (
    <img
      src="https://i.postimg.cc/CwcMCzMr/banner-oficial03.jpg"
      height="100%"
      width="100%"
      alt="oi"
    />
  );
};
const image4 = () => {
  return (
    <img
      src="https://i.postimg.cc/YpjrdMhr/banner-oficial04.jpg"
      height="100%"
      width="100%"
      alt="oi"
    />
  );
};

const CarouselSlider = () => {
  return (
    <Carousel effect="fade" dots={false} autoplay={true}>
      <div style={contentStyle}>{image1()}</div>
      <div style={contentStyle}>{image2()}</div>
      <div style={contentStyle}>{image3()}</div>
      <div style={contentStyle}>{image4()}</div>
    </Carousel>
  );
};
export default CarouselSlider
