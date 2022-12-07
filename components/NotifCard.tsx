interface Props {
  title: string;
  msg: string;
  time: string;
}

function NotifCard({ title, msg, time }: Props) {
  return (
    <div className="notif">
      <h4>{title}</h4>
      <p>{msg}</p>
      <time>{time}</time>
      <button>Delete</button>
    </div>
  );
}

export default NotifCard;
