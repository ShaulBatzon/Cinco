import IconPreview from "./IconPreview";

export function IconList() {
  const icons = [
    {
      txt: "Graphics & Design",
      url: "http://www.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
    },
    {
      txt: "Digital Marketing",
      url: "http://www.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
    },
    {
      txt: "Writing & Translation",
      url: "http://www.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
    },
    {
      txt: "Video & Animation",
      url: "http://www.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
    },
    {
      txt: "Programming & Tech",
      url: "http://www.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
    },
    {
      txt: "Music & Audio",
      url: "http://www.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
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
