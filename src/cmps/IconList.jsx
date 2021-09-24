import IconPreview from "./IconPreview";

export function IconList() {
  const icons = [
    {
      txttxt: "Graphics & Design",
      url: "http://wwwGraphics & Design.google.com",
      iconImgUrl:
        "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
    },
  ];
  return (
    <section className="content-container">
      <h2 className="content-container">Explore the marketplace</h2>
      <div className="content-container">
        {icons.map((icon, idx) => (
          <IconPreview key={idx} {...icon} />
        ))}
      </div>
    </section>
  );
}

export default IconList;
