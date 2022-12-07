import FavCardAplicant from "./fav-components/FavCardAplicant";
import FavCardCompany from "./fav-components/FavCardCompany";

interface Props {
  isCompany: boolean;
  favList: { name: string; img: string; desc: string }[];
}

function FavContainer({ isCompany, favList }: Props) {
  return (
    <div className="fav-space">
      <div className="fav-space-top">
        <h3>{isCompany ? "Favorite Applicants" : "Favorite Offers"}</h3>
      </div>
      <div className="fav-container">
        {isCompany
          ? favList.map((e, index) => (
              <FavCardCompany
                key={index}
                title={e.name}
                img={e.img}
                isLogged={true}
              />
            ))
          : favList.map((e, index) => (
              <FavCardAplicant
                key={index}
                title={e.name}
                img={e.img}
                desc={e.desc}
              />
            ))}
      </div>
    </div>
  );
}

export default FavContainer;
