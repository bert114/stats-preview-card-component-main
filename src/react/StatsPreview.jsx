import mainImgMobile from "../assets/images/image-header-mobile.jpg";
import mainImgDesktop from "../assets/images/image-header-desktop.jpg";

function StatsPreview() {
  return (
    <div className="container">
      <picture>
        <source media="(min-width: 600px)" srcset={mainImgDesktop} />
        <img src={mainImgMobile} alt="" />
      </picture>
      <article>
        <div>
          <h1>
            Get
            <span> insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div>
          <div className="col">
            <h2>10k+ </h2>
            <div>companies</div>
          </div>
          <div className="col">
            <h2>314 </h2>
            <div>templates</div>
          </div>
          <div className="col">
            <h2>12m+ </h2>
            <div>queries</div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default StatsPreview;
