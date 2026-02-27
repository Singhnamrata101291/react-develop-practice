
function Resume() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="abc">Namrata Singh</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <section id="about" className="container">
      <h1 className="display-4">Namrata Singh</h1>
      <p>
        Diligent Ul /UX Developer with 10 years of experience in designing and
        developing responsive and user-friendly websites. Proficient in HTML,
        CSS, Less/Scss, JavaScript, JQuery and React.Looking to contribute
        innovative and efficient web solutions. Proficient in coordinating with
        cross-functional teams, ensuring projects are delivered on time Skilled
        in analyzing project requirements, developing schedules, and
        implementing effective strategies to achieve project goals. Having
        experience in QA manual Testing also.
      </p>
      <p>
        <strong>Skills:</strong>

        <span className="badge badge-pill badge-info">HTML</span>
        <span className="badge badge-pill badge-info">CSS</span>
        <span className="badge badge-pill badge-info">JavaScript</span>
        <span className="badge badge-pill badge-primary">React.js</span>
        <span className="badge badge-pill badge-info">Jest</span>
      </p>
    </section>
    
    <section id="education" className="container">
      <h2 className="mb-5">Education</h2>
      <ul>
        <li>
          <h6 className="text-primary">MCA / University Name 2011-2014</h6>
        </li>
        <li>
          <h6 className="text-primary">BCA 2008-2011</h6>
        </li>
        <li>
          <h6 className="text-primary">X|| 2007-2008</h6>
        </li>
      </ul>
    </section>

    <section id="experience" className="container">
      <h1>Experience</h1>
      <div className="card">
        <div
          className="card-header collapse show"
          data-toggle="collapse"
          data-target="#exp1"
        >
          <div className="row">
            <h5 className="col-md-8 mb-0">Senior Associate</h5>
            <div className="col-md-4 text-md-right">Sep 2023 - Current</div>
          </div>
        </div>
        <div className="card-block collapse" id="exp1">
          <h5>Cognizant</h5>
          <p>
            Worked as a Developer with javascript,Jquery ,Drupal CMS,HTML,CSS in
            Retail Domain.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-header" data-toggle="collapse" data-target="#exp2">
          <div className="row">
            <h5 className="col-md-8 mb-0">Senior Software Engineer</h5>
            <div className="col-md-4 text-md-right">Sep 2020 - Sep 2023</div>
          </div>
        </div>
        <div className="card-block collapse" id="exp2">
          <h5>XYZ</h5>
          <p>
            Worked as a Developer with javascript, ReactJs + Redux,HTML,CSS in
            Banking Domain. Did unit testing with Jest and enzyme.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-header" data-toggle="collapse" data-target="#exp2">
          <div className="row">
            <h5 className="col-md-8 mb-0">Senior Software Engineer</h5>
            <div className="col-md-4 text-md-right">Sep 2017 - Sep 2020</div>
          </div>
        </div>
        <div className="card-block collapse" id="exp2">
          <h5>ABC Technologies</h5>
          <p>
            Worked as a Developer with javascript, ReactJs + Redux,HTML,CSS in
            Banking Domain. Did unit testing with Jest and enzyme.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-header" data-toggle="collapse" data-target="#exp2">
          <div className="row">
            <h5 className="col-md-8 mb-0">Associate</h5>
            <div className="col-md-4 text-md-right">Sep 2015 - Sep 2017</div>
          </div>
        </div>
        <div className="card-block collapse" id="exp2">
          <h5>AccionLabs</h5>
          <p>
            Worked as a fresher and started with frontend development . Learned
            HTML,CSS,JS.
          </p>
        </div>
      </div>
    </section>
    <br />
    <section id="Skills" className="container">
      <h3>Skills proficiency----</h3>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          testing
        </div>
      </div>
      <br />
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
         style={{width: 25 + '%'}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          ReactJs
        </div>
      </div>
      <br />
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
         style={{width: 70 + '%'}}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          javascript
        </div>
      </div>
      <br />
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
         style={{width: 75 + '%'}}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          CSS/Less
        </div>
      </div>
      <br />
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
         style={{width: 100 + '%'}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          HTML
        </div>
      </div>
    </section>
    <br />
    <section className="container" id="contact">
      <h1>Contact</h1>
      <div className="row">
        <div className="col-sm-2">Phone:</div>
        <div className="col-sm-4">+91-12121212</div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-2">Email:</div>
        <div className="col-sm-4">
          <a href="mailto:nam@singhdigital.com">nam@singhdigital.com</a>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-2">LinkedIn:</div>
        <div className="col-sm-4">
          <a href="https://linkedin.com/in/abc">linkedin.com/in/bendavis78</a>
        </div>
      </div>
    </section>

    <script
      src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
      integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
      integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
      integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
      crossorigin="anonymous"
    ></script>
    
 </div>
  );
}

export default Resume;
