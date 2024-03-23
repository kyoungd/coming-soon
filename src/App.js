import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageBackground1 from "./templates/image-background/ImageBackground1";
import ImageBackground2 from "./templates/image-background/ImageBackground2";
import ImageBackground3 from "./templates/image-background/ImageBackground3";
import SolidColorLight1 from "./templates/solid-color-light/SolidColorLight1";
import SolidColorLight2 from "./templates/solid-color-light/SolidColorLight2";
import SolidColorLight3 from "./templates/solid-color-light/SolidColorLight3";
import SolidColorDark1 from "./templates/solid-color-dark/SolidColorDark1";
import SolidColorDark2 from "./templates/solid-color-dark/SolidColorDark2";
import SolidColorDark3 from "./templates/solid-color-dark/SolidColorDark3";
import SolidColorPrimary1 from "./templates/solid-color-primary/SolidColorPrimary1";
import SolidColorPrimary2 from "./templates/solid-color-primary/SolidColorPrimary2";
import SolidColorPrimary3 from "./templates/solid-color-primary/SolidColorPrimary3";
import Particles1 from "./templates/particles/Particles1";
import Particles2 from "./templates/particles/Particles2";
import Particles3 from "./templates/particles/Particles3";
import ParticlesSnow1 from "./templates/particles-snow/ParticlesSnow1";
import ParticlesSnow2 from "./templates/particles-snow/ParticlesSnow2";
import ParticlesSnow3 from "./templates/particles-snow/ParticlesSnow3";
import VideoBackground1 from "./templates/video-background/VideoBackground1";
import VideoBackground2 from "./templates/video-background/VideoBackground2";
import VideoBackground3 from "./templates/video-background/VideoBackground3";
import { appliedTheme, themes } from "./config/themeConfig";
import Slider1 from "./templates/slider/Slider1";
import Slider2 from "./templates/slider/Slider2";
import Slider3 from "./templates/slider/Slider3";
import { ToastContainer } from "react-toastify";

function App() {
  const applyTheme = () => {
    if (appliedTheme === themes.SOLID_COLOR_LIGHT_1) {
      return <SolidColorLight1></SolidColorLight1>;
    } else if (appliedTheme === themes.SOLID_COLOR_LIGHT_2) {
      return <SolidColorLight2></SolidColorLight2>;
    } else if (appliedTheme === themes.SOLID_COLOR_LIGHT_3) {
      return <SolidColorLight3></SolidColorLight3>;
    } else if (appliedTheme === themes.SOLID_COLOR_DARK_1) {
      return <SolidColorDark1></SolidColorDark1>;
    } else if (appliedTheme === themes.SOLID_COLOR_DARK_2) {
      return <SolidColorDark2></SolidColorDark2>;
    } else if (appliedTheme === themes.SOLID_COLOR_DARK_3) {
      return <SolidColorDark3></SolidColorDark3>;
    } else if (appliedTheme === themes.SOLID_COLOR_PRIMARY_1) {
      return <SolidColorPrimary1></SolidColorPrimary1>;
    } else if (appliedTheme === themes.SOLID_COLOR_PRIMARY_2) {
      return <SolidColorPrimary2></SolidColorPrimary2>;
    } else if (appliedTheme === themes.SOLID_COLOR_PRIMARY_3) {
      return <SolidColorPrimary3></SolidColorPrimary3>;
    } else if (appliedTheme === themes.IMAGE_BACKGROUND_1) {
      return <ImageBackground1></ImageBackground1>;
    } else if (appliedTheme === themes.IMAGE_BACKGROUND_2) {
      return <ImageBackground2></ImageBackground2>;
    } else if (appliedTheme === themes.IMAGE_BACKGROUND_3) {
      return <ImageBackground3></ImageBackground3>;
    } else if (appliedTheme === themes.PARTICLES_1) {
      return <Particles1></Particles1>;
    } else if (appliedTheme === themes.PARTICLES_2) {
      return <Particles2></Particles2>;
    } else if (appliedTheme === themes.PARTICLES_3) {
      return <Particles3></Particles3>;
    } else if (appliedTheme === themes.PARTICLES_SNOW_1) {
      return <ParticlesSnow1></ParticlesSnow1>;
    } else if (appliedTheme === themes.PARTICLES_SNOW_2) {
      return <ParticlesSnow2></ParticlesSnow2>;
    } else if (appliedTheme === themes.PARTICLES_SNOW_3) {
      return <ParticlesSnow3></ParticlesSnow3>;
    } else if (appliedTheme === themes.SLIDER_1) {
      return <Slider1></Slider1>;
    } else if (appliedTheme === themes.SLIDER_2) {
      return <Slider2></Slider2>;
    } else if (appliedTheme === themes.SLIDER_3) {
      return <Slider3></Slider3>;
    } else if (appliedTheme === themes.VIDEO_BACKGROUND_1) {
      return <VideoBackground1></VideoBackground1>;
    } else if (appliedTheme === themes.VIDEO_BACKGROUND_2) {
      return <VideoBackground2></VideoBackground2>;
    } else if (appliedTheme === themes.VIDEO_BACKGROUND_3) {
      return <VideoBackground3></VideoBackground3>;
    }
  };

  return (
    <>
      {applyTheme()} <ToastContainer />
    </>
  );
}

export default App;
