const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Quitar active a todos los botones y secciones
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Activar botón y sección correspondiente
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});
