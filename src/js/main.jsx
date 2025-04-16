import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4">A Warm Welcome!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi,
            in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis
            illo aspernatur vitae fugiat numquam repellat.
          </p>
          <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
        </div>
      </header>

      {/* Cards */}
      <div className="container my-5">
        <div className="row">
          {[1, 2, 3, 4].map((card) => (
            <div className="col-md-3 mb-4" key={card}>
              <div className="card h-80">
                <img src="/4geeks.ico" className="card-img-top" alt="placeholder" />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        Copyright © Your Website 2018
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
