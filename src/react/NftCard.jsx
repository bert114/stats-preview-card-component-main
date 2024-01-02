import cube from "../assets/images/image-equilibrium.jpg";
import userProfile from "../assets/images/image-avatar.png";

export default function NftCard() {
  return (
    <div className="container">
      <picture>
        <img src={cube} alt="" />
      </picture>
      <article>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex">
          <div>
            <div className="icon"></div>0.041 ETH
          </div>
          <div>
            <div className="icon"></div>3 days left
          </div>
        </div>
        <div className="flex row3">
          <div>
            <img src={userProfile} alt="profile" />
          </div>
          <div>
            <span>Creation of</span> <div className="name">Jules Wyvern</div>
          </div>
        </div>
      </article>
    </div>
  );
}
