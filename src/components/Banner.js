import React from "react";
import "./Banner.css";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://www.fusioninformatics.com/images/famous-app/netflix-banner.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {truncate(
              ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestias autem vitae excepturi, illo id beatae rem reprehenderit ad
            maxime veritatis, ex aut, similique ipsam qui cum sint corrupti eum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            consequatur maiores ea voluptate in perferendis, illum asperiores
            eum necessitatibus nesciunt, nobis doloribus voluptatibus quo. Neque
            sunt quisquam delectus velit minima. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur quisquam reiciendis est
            totam animi, rerum minus! Autem animi, blanditiis velit aliquam enim
            sunt fuga consequatur. Harum officiis totam doloremque quae.`,
              150
            )}
          </h1>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
