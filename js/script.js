document.addEventListener("DOMContentLoaded", () => {
    // 1. Mensagem de boas-vindas
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Bem-vindo à Dance Academy!");
        sessionStorage.setItem("welcomeShown", "true");
    }

    // 2. Contador de visitas com LocalStorage
    const visitCounterElem = document.getElementById("visit-counter");
    if (visitCounterElem) {
        let visits = parseInt(localStorage.getItem("pageVisits") || "0", 10) + 1;
        localStorage.setItem("pageVisits", visits);
        visitCounterElem.textContent = `Você já visitou esta página ${visits} vez(es).`;
    }


    const btnTheme = document.getElementById("btn-theme");
    if (btnTheme) {
        // Restaurar preferência anterior
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            btnTheme.textContent = "Modo Claro";
        }

        btnTheme.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            btnTheme.textContent = isDark ? "Modo Claro" : "Modo Escuro";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }
});