import ReactTimeAgo from "react-time-ago";

export default function LastAdded({ date, locale }) {
  return (
    <div>
      <ReactTimeAgo date={Date.parse(date)} locale={locale} />
    </div>
  );
}
