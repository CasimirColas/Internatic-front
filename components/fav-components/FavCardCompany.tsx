import Image from "next/image";

interface Props {
  title: string;
  img: string;
  isLogged: boolean;
}

function FavCardCompany({ title, img, isLogged }: Props) {
  return (
    <div className="fav">
      <h4>{title}</h4>
      <Image src={img} alt="company image" />
      {isLogged ? <button>add/remove Fav</button> : null}
    </div>
  );
}

export default FavCardCompany;
