import CardPreview from "./CardPreview";

export function CardList() {
  const cards = [
    {
      subTitle: "Bulid your barnd",
      title: "Logo Design",
      url: "http://www.google.com",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
    },
    {
      subTitle: "Customize your site",
      title: "WordPress",
      url: "http://www.google.com",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
    },
    {
      subTitle: "Share your message",
      title: "Voice Over",
      url: "http://www.google.com",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
    },
    {
      subTitle: "Engage your audience",
      title: "Video Explainer",
      url: "http://www.google.com",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
    },
    {
      subTitle: "Reach more customers",
      title: "Social Media",
      url: "http://www.google.com",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
    },
  ];
  return (
    <section className="cards-list content-container">
      <h2>Popular professional services</h2>
      <div className="cards-continer">
        {cards.map((card, idx) => (
          <CardPreview key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}

export default CardList;
