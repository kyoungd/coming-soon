import videobg from "../videos/waves.mp4";

// Themes Options, You don't have to change anything here
export const themes = {
  IMAGE_BACKGROUND_1: "Image Background 1",
  IMAGE_BACKGROUND_2: "Image Background 2",
  IMAGE_BACKGROUND_3: "Image Background 3",

  VIDEO_BACKGROUND_1: "Video Background 1",
  VIDEO_BACKGROUND_2: "Video Background 2",
  VIDEO_BACKGROUND_3: "Video Background 3",

  PARTICLES_1: "Particles 1",
  PARTICLES_2: "Particles 2",
  PARTICLES_3: "Particles 3",

  PARTICLES_SNOW_1: "Particles Snow 1",
  PARTICLES_SNOW_2: "Particles Snow 2",
  PARTICLES_SNOW_3: "Particles Snow 3",

  SLIDER_1: "Slider 1",
  SLIDER_2: "Slider 2",
  SLIDER_3: "Slider 3",

  SOLID_COLOR_LIGHT_1: "Solid Color Light 1",
  SOLID_COLOR_LIGHT_2: "Solid Color Light 2",
  SOLID_COLOR_LIGHT_3: "Solid Color Light 3",

  SOLID_COLOR_DARK_1: "Solid Color Dark 1",
  SOLID_COLOR_DARK_2: "Solid Color Dark 2",
  SOLID_COLOR_DARK_3: "Solid Color Dark 3",

  SOLID_COLOR_PRIMARY_1: "Solid Color Primary 1",
  SOLID_COLOR_PRIMARY_2: "Solid Color Primary 2",
  SOLID_COLOR_PRIMARY_3: "Solid Color Primary 3",
};

// Apply Theme Here
export const appliedTheme = themes.SLIDER_1;

// Flag to show Countdown section
export const showCountDown = false; // true/false
export const countDownEndTime = "2023/12/01"; // YYYY/MM/DD

// Video for video background theme
export const backgroundVideo = videobg;

// Images list you want to show in slider theme in background
export const sliderImages = [
  "images/intro-bg-2.jpg"
];

// Mailchimp Config (Newsletter)
const mailChimp_u = "0e2c20ecd66a032018099085f";
const mailChimp_id = "d3180cd020";

export const mailChimpUrl = `https://gmail.us1.list-manage.com/subscribe/post?u=${mailChimp_u}&amp;id=${mailChimp_id}&amp;f_id=0082f8e5f0`;

// Emailjs Config (Contact Form)
export const emailjsConfig = {
  templateId: "template_nmvpbnq",
  serviceId: "service_20v0dnk",
  userId: "MUwDoYevDFQN8UHQm",
};

// Emailjs uses PublicKey instead of userId.  I updated the contactForm2 and Form3.
