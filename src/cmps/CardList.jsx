import CardPreview from "./CardPreview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function CardList() {
  const cards = [
    {
      subTitle: "Bulid your barnd",
      title: "Logo Design",
      url: "/explore/?filterBy=logo",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
    },
    {
      subTitle: "Customize your site",
      title: "WordPress",
      url: "/explore/?filterBy=wordpress",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
    },
    {
      subTitle: "Share your message",
      title: "Voice Over",
      url: "/explore/?filterBy=voiceover",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
    },
    {
      subTitle: "Engage your audience",
      title: "Video Explainer",
      url: "/explore/?filterBy=videoexplainer",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
    },
    {
      subTitle: "Reach more customers",
      title: "Social Media",
      url: "/explore/?filterBy=socialmedia",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
    },
    {
      subTitle: "Color your dreams",
      title: "Illustration",
      url: "/explore",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
    },
    {
      subTitle: "Unlock growth online",
      title: "SEO",
      url: "/explore",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
    },
    {
      subTitle: "Go global",
      title: "Translation",
      url: "/explore",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
    },
    {
      subTitle: "Learn your business",
      title: "Data Entry",
      url: "/explore",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png",
    },
    {
      subTitle: "Showcase your story",
      title: "Book Covers",
      url: "/explore",
      backgroundImgUrl:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png",
    },
  ];
  return (
    <section className="cards-list content-container">
      <h2>Popular professional services</h2>
      <div className="cards-continer">
        <Carousel
          additionalTransfrom={0}
          arrows
          // autoPlay
          autoPlaySpeed={1500}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 5,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 5,
            },
          }}
          //   showDots
          sliderClass=""
          slidesToSlide={5}
          swipeable
        >
          {cards.map((card, idx) => (
            <CardPreview key={idx} {...card} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default CardList;
