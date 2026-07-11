import React from 'react'

const NavigationBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Campus Placement</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">AddRegistration</a>
        <a class="nav-link" href="/search">SearchRegistration</a>
        <a class="nav-link" href="/delete">DeleteRegistration</a>
        <a class="nav-link" href="/view">ViewAllRegistrations</a>
      </div>
    </div>
  </div>
</nav>
        </div>
  )
}

export default NavigationBar