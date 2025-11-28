import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: "IoT-Based Smart Walking Stick with Position Tracking and Posture Monitoring for the Visual Impaired",
      description: "Aplikasi mobile berbasis Flutter digunakan untuk memantau lokasi dan postur pengguna secara real-time dari tongkat pintar. Aplikasi ini menampilkan peta lokasi, data sensor, serta memberikan notifikasi darurat jika terjadi kondisi berbahaya.",
      tech: ["Flutter", "Dart", "Node-Red", "Rest API"],
      image: "./gps.jpeg",
      demo: "#",
      github: "https://github.com/FransL1/gps_tracker_app"
    },
    {
      title: "(CYBERFOX)-Chatbot keamanan cyber yang ramah untuk anak dan remaja",
      description: "Chatbot ini adalah Asisten Obrolan Berbasis Aturan (Rule-Based Chat Assistant) yang dibangun menggunakan teknologi Node.js, Express.js untuk backend, dan HTML, CSS, JavaScript murni untuk frontend interaktif. Desain antarmuka penggunanya sangat terinspirasi dari interface modern chatbot populer seperti ChatGPT, berfokus pada pengalaman pengguna (UX) yang bersih dan fungsional.",
      tech: ["HTML", "CSS" , "JavaScript", "Node.js", "Express.js", "CORS", "Docker"],
      image: "./chatbot.png",
      demo: "#",
      github: "https://github.com/FransL1/Chatbot"
    },
    {
      title: "Distributed & Event-Driven E-Commerce Platform with Kafka, MongoDB, and Express  ",
      description: "Menerapkan sistem e-commerce dengan docker untuk kemudahan integrasi antar laptop dalam menjalankan tugas dan layanan masing-masing. Saling terhubung antara beberapa Device dalam jaringan local dan MongoDB sebagai pusat data. ",
      tech: ["React", "Dockerfile", "Microservis", "Express.js", "MongoDB", "Kafka"],
      image: "./docker.png",
      demo: "https://github.com/FransL1/Sistem-terdistribusi",
      github: "https://github.com/FransL1/Sistem-terdistribusi"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 78 },
    { name: "Node.js", level: 77 },
    { name: "HTML/CSS", level: 95 },
    { name: "Bootstrap", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 85 },
    { name: "Wordpress", level:89 }
  ];

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" 
        rel="stylesheet" 
      />
      
      <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        
        {/* Navbar */}
        <nav className={`navbar navbar-expand-lg sticky-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm`}>
          <div className="container">
            <a className="navbar-brand fw-bold fs-3" href="#home">
              <span className="text-primary">FRANCISKO</span> Lumbantoruan
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto me-3">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
              
              <button 
                className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}
                onClick={toggleTheme}
              >
                <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="py-5">
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6">
                <div className="mb-4">
                  <h1 className="display-4 fw-bold mb-3">
                    Hi, I'm <span className="text-primary">Francisko Lumbantoruan</span>
                  </h1>
                  <h2 className="h3 mb-4 text-muted">Full Stack Developer</h2>
                  <p className="lead mb-4">
                    Passionate developer dengan expertise dalam JavaScript, React.js, dan teknologi web modern. 
                    Saya menciptakan solusi digital yang inovatif dan user-friendly.
                  </p>
                  <div className="d-flex gap-3 mb-4">
                    <a href="#contact" className="btn btn-primary btn-lg px-4">
                      <i className="bi bi-envelope me-2"></i>Get In Touch
                    </a>
                    <a href="#projects" className="btn btn-outline-primary btn-lg px-4">
                      <i className="bi bi-folder me-2"></i>View Work
                    </a>
                  </div>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/FransL1" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}>
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/francisko-lumbantoruan-46862a302/" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/fransss_l/" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}>
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="position-relative">
                  <div className={`rounded-circle p-4 ${darkMode ? 'bg-secondary' : 'bg-primary'} bg-opacity-10 d-inline-block`}>
                    <img 
                      src="/francisko.jpg" 
                      alt="Francisko" 
                      className="rounded-circle img-fluid shadow-lg"
                      style={{width: '500px', height: '500px', objectFit: 'cover'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-5 ${darkMode ? 'bg-secondary bg-opacity-10' : 'bg-primary bg-opacity-5'}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">About Me</h2>
                <p className="lead">
                  Saya adalah seorang Full Stack Developer dengan pengalaman lebih dari 1 tahun dalam 
                  pengembangan aplikasi web. Memiliki passion yang kuat dalam teknologi dan selalu 
                  eager untuk mempelajari hal-hal baru.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow`}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary text-white rounded-circle p-3 me-3">
                        <i className="bi bi-code-slash fs-4"></i>
                      </div>
                      <h4 className="mb-0">Frontend Development</h4>
                    </div>
                    <p className="mb-0">
                      Expertise dalam React.js, JavaScript , HTML5 , CSS , dan Bootstrap. 
                      Fokus pada user experience dan responsive design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow`}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success text-white rounded-circle p-3 me-3">
                        <i className="bi bi-server fs-4"></i>
                      </div>
                      <h4 className="mb-0">Backend Development</h4>
                    </div>
                    <p className="mb-0">
                      Berpengalaman dengan Node.js, Express.js, database management (MongoDB, MySQL, PostgreSQL), 
                      dan RESTful API development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Skills & Technologies</h2>
                <p className="lead">
                  Teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital yang berkualitas.
                </p>
              </div>
            </div>
            <div className="row">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow-sm`}>
                    <div className="card-body text-center p-4">
                      <h5 className="card-title mb-3">{skill.name}</h5>
                      <div className="progress mb-3" style={{height: '8px'}}>
                        <div 
                          className="progress-bar bg-primary" 
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-5 ${darkMode ? 'bg-secondary bg-opacity-10' : 'bg-primary bg-opacity-5'}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Featured Projects</h2>
                <p className="lead">
                  Beberapa project yang telah saya kerjakan dengan berbagai teknologi dan kompleksitas.
                </p>
              </div>
            </div>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow`}>
                    <img src={project.image} className="card-img-top" alt={project.title} style={{height: '200px', objectFit: 'cover'}} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text flex-grow-1">{project.description}</p>
                      <div className="mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="badge bg-primary me-1 mb-1">{tech}</span>
                        ))}
                      </div>
                      <div className="d-flex gap-2">
                        <a href={project.demo} className="btn btn-primary btn-sm flex-fill">
                          <i className="bi bi-eye me-1"></i>Demo
                        </a>
                        <a href={project.github} className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm flex-fill`}>
                          <i className="bi bi-github me-1"></i>Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
                <p className="lead">
                  Tertarik untuk berkolaborasi atau memiliki project yang ingin dikerjakan? 
                  Jangan ragu untuk menghubungi saya!
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow text-center`}>
                  <div className="card-body p-4">
                    <div className="bg-primary text-white rounded-circle p-3 d-inline-block mb-3">
                      <i className="bi bi-envelope fs-4"></i>
                    </div>
                    <h5>Email</h5>
                    <p className="text-muted">sihombingfransisco0@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow text-center`}>
                  <div className="card-body p-4">
                    <div className="bg-success text-white rounded-circle p-3 d-inline-block mb-3">
                      <i className="bi bi-phone fs-4"></i>
                    </div>
                    <h5>Phone</h5>
                    <p className="text-muted">+62 852-6190-2187</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`card h-100 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow text-center`}>
                  <div className="card-body p-4">
                    <div className="bg-info text-white rounded-circle p-3 d-inline-block mb-3">
                      <i className="bi bi-geo-alt fs-4"></i>
                    </div>
                    <h5>Location</h5>
                    <p className="text-muted">Siborong-borong, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-8 mx-auto">
                <div className={`card ${darkMode ? 'bg-dark border-secondary' : 'bg-white'} shadow`}>
                  <div className="card-body p-4">
                    <div>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Name</label>
                          <input type="text" className={`form-control ${darkMode ? 'bg-dark border-secondary text-light' : ''}`} />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input type="email" className={`form-control ${darkMode ? 'bg-dark border-secondary text-light' : ''}`} />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Subject</label>
                          <input type="text" className={`form-control ${darkMode ? 'bg-dark border-secondary text-light' : ''}`} />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea className={`form-control ${darkMode ? 'bg-dark border-secondary text-light' : ''}`} rows="4"></textarea>
                        </div>
                        <div className="col-12">
                          <button type="button" className="btn btn-primary btn-lg px-4">
                            <i className="bi bi-send me-2"></i>Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-4 ${darkMode ? 'bg-dark border-top border-secondary' : 'bg-white border-top'}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="mb-0">© 2025 Francisko Lumbantoruan. All rights reserved.</p>
              </div>
              <div className="col-md-6 text-end">
                <div className="d-flex justify-content-end gap-3">
                  <a href="https://github.com/FransL1" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}>
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/francisko-lumbantoruan-46862a302/" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/fransss_l/" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}>
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Portfolio;
