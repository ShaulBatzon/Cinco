import IconPreview from "./IconPreview";
import img from "../assets/img/a2.svg";
export function IconList() {
  const icons = [
    {
      txt: "Graphics & Design",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
    },
    {
      txt: "Digital Marketing",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
    },
    {
      txt: "Writing & Translation",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
    },
    {
      txt: "Video & Animation",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
    },
    {
      txt: "Programming & Tech",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
    },
    {
      txt: "Music & Audio",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
    },
    {
      txt: "Business",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
    },
    {
      txt: "Lifestyle",
      url: "/explore",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
    },
    {
      txt: "Data",
      url: "/explore",
      iconImgUrl: img,
    },
  ];
  return (
    <section className="content-container cards-list">
      <h2 className="content-container  ">Explore the marketplace</h2>
      <div className="content-container icon-continer">
        {icons.map((icon, idx) => (
          <IconPreview key={idx} {...icon} />
        ))}
      </div>
    </section>
  );
}

export default IconList;
