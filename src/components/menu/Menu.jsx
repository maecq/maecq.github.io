import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">About Me</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Experience</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Education</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">GitHub Projects</a>
        </li>
      </ul>
    </div>
  );
}