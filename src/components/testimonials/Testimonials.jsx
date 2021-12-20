import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "STI College",
      title: "Information Technology",
      img:
        "assets/sticollege.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "STI College (formerly known as Systems Technology Institute) is the largest network of for-profit information technology based colleges in the Philippines. ",
    },
    {
      id: 2,
      name: "Robertson College",
      title: "Full Stack Developer",
      img:
        "assets/robertsoncollege.png?auto=compress&cs=tinysrgb&dpr=2&w=800",
      icon: "assets/youtube.png",
      desc:
        "Robertson College is a private Canadian career training institution headquartered in Winnipeg, Canada. Robertson has campus locations in Winnipeg in Manitoba and Edmonton and Calgary in Alberta.",
      featured: true,
    },
    {
      id: 3,
      name: "La Verdad College",
      title: "High School Diploma",
      img:
        "assets/laverdad.png?auto=compress&cs=tinysrgb&dpr=2&w=800",
      icon: "assets/linkedin.png",
      desc:
        "The La Verdad Christian College or LVCC is a private non-stock, non-sectarian educational institution established in Apalit, Pampanga, Philippines.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}