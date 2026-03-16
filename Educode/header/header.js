const header = document.getElementById('header');

window.addEventListener('load', function(){
    this.document.head.insertAdjacentHTML('beforeend',
        '<link rel="stylesheet" href="../header/header.css" />')

        header.className= 'navbar topbar px-4';

        header.innerHTML = `
        <div class="container-fluid d-flex justify-content-between align-items-center">
            
            <a class="navbar-brand fw-bold" href="../../index.html">
            <img src="../logo.png" class="img-fluid logo rounded-4">
            </a>
            
            <span class="point text-white fw-semibold" onclick="window.location.href='../dashboard/dashboard.html'">
            go to dashboard
            </span>
            
            <div class="d-flex align-items-center gap-3 text-white">
            <span>Level / XP</span>
              <img id="userAvatar" width="80" class="rounded-circle">

            </div>

        </div>
        `
})