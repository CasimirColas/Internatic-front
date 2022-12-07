import NotifCard from "./NotifCard";

interface Props {
  notifList: { title: string; msg: string; time: string }[];
}

function NotifContainer({ notifList }: Props) {
  return (
    <div className="notif-space">
      <div className="notif-space-top">
        <h3>Notifications</h3>
      </div>
      <div className="notif-container">
        {notifList.map((e, index) => (
          <NotifCard key={index} title={e.title} msg={e.msg} time={e.time} />
        ))}
      </div>
    </div>
  );
}

export default NotifContainer;
