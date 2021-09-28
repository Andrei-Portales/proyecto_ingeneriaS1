import moment from "moment";

const RenderDate = (props) => {
  var todayDate = new Date().setHours(0, 0, 0, 0);
  var dateSaved = new Date(parseInt(props.date)).setHours(0, 0, 0, 0);

  // Today
  if (todayDate === dateSaved) {
    return (
      <p className="uil-schedule-text">
        <span>
          <i class="uil uil-calender"></i>
        </span>
        Hoy
      </p>
    );
  }

  // Yesterday
  if (todayDate - dateSaved === 86400000) {
    return (
      <p className="uil-schedule-text">
        <span>
          <i class="uil uil-calender"></i>
        </span>
        Ayer
      </p>
    );
  }

  // Any date
  if (todayDate - dateSaved > 86400000) {
    return (
      <p className="uil-schedule-text">
        <span>
          <i class="uil uil-calender"></i>
        </span>
        {moment.unix(props.date / 1000).format("MMM DD")}{" "}
      </p>
    );
  }

  // Default
  return (
    <p className="uil-schedule-text">
      {" "}
      {moment.unix(props.due / 1000).format("MMM DD")}{" "}
    </p>
  );
};

export default RenderDate;
