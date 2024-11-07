import "../../../App.css";

export default function SectionOne() { 
  return (
    <section className="content">
      <div className="text-content">
        <h4 className="textH4">No more waste</h4>
        <h1 className="textH1">Pick the Sun</h1>
        <h3 className="textH3">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar
          <br />
          purus maecenas quam a. Erat prottitor pharetra sed in mauris elementum sollicitudin.
        </h3>
      </div>
      <div className="image-content">
        <img src="/public/images/tl.png" alt="Solar energy" className="central-image" />
        <div className="circle left-circle"></div>
        <div className="circle right-circle"></div>
      </div>
    </section>
  );
}


