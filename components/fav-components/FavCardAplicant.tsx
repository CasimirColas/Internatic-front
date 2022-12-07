import Image from "next/image";

interface Props {
  title: string;
  img: string;
  desc: string;
}

function FavCardAplicant({ title, img, desc }: Props) {
  return (
    <div className="fav">
      <h4>{title}</h4>
      <Image src={img} alt="employee image" />
      <p>{desc}</p>
      <button>add/remove Fav</button>
    </div>
  );
}

export default FavCardAplicant;
