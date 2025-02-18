import React from "react"

function Navbar() {

    return (
       <>
        {/* navbar */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-xl">
            <a href="#intro" className="navbar-brand">
              <span className="fw-bold text-light">Start Bootstrap</span>
            </a>
            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* navbar links */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#reviews" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#pricing" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default Navbar;