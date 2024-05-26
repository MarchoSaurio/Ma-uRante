document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav-item a');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const container = document.querySelector('.active');

    function showTab(menuId) {
        tabPanes.forEach(pane => {
            if (pane.id === menuId) {
                pane.classList.add('show', 'active');
                container.classList.add('active');
            } else {
                pane.classList.remove('show', 'active');
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const targetMenu = tab.id.replace('tab-', 'menu-');
            showTab(targetMenu);
        });
    });

    // Mostrar el primer menú por defecto
    showTab('menu-comida');
});


