// =================== Carrossel infinito ===================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("cardsTrack");
  if (track) {
    track.innerHTML += track.innerHTML; // duplica para looping infinito
  }
});

// =================== Animação Vantagens ===================
document.addEventListener("DOMContentLoaded", () => {
  const vantagens = document.querySelectorAll(".vantagem-row");

  if (vantagens.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");   // aparece com animação
        } else {
          entry.target.classList.remove("show"); // reseta quando sai
        }
      });
    }, { threshold: 0.2 }); // 20% visível já dispara

    vantagens.forEach(v => observer.observe(v));
  }
});

// =================== Menu Mobile ===================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");

  if (toggle && menu) {
    const links = menu.querySelectorAll("a");

    // Abre/fecha o menu ao clicar no botão
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    // Fecha o menu ao clicar em um link
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
      });
    });
  }
});
