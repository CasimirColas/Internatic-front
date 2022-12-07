import Image from "next/image";

interface Props {
  title: string;
  img: string;
  tags: string[];
  desc: string;
  loc: string;
}

function ViewCard({ title, img, tags, desc, loc }: Props) {
  return (
    <div className="viewcard">
      <button>add/remove Fav</button>
      <h3>{title}</h3>
      <div className="view-content">
        <Image
          loader={() => img}
          src={img}
          alt="front image"
          width={640}
          height={480}
          unoptimized={true}
        />
        <ul className="tagsList">
          {tags.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <p>{desc}</p>
        <address>{loc}</address>
      </div>
    </div>
  );
}

export default ViewCard;
