// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация приложения
    initApp();
});

// Основная функция инициализации
function initApp() {
    const app = document.getElementById('app');
    
    // Пример динамического контента
    const content = document.createElement('div');
    content.className = 'dynamic-content';
    content.innerHTML = `
        <p>Это пример динамического контента, загруженного через JavaScript.</p>
        <button id="actionButton" class="action-button">Нажми меня</button>
    `;
    
    app.appendChild(content);

    // Добавляем обработчик события для кнопки
    const actionButton = document.getElementById('actionButton');
    actionButton.addEventListener('click', handleButtonClick);
}

// Обработчик клика по кнопке
function handleButtonClick(event) {
    const button = event.target;
    button.textContent = 'Кнопка нажата!';
    button.style.backgroundColor = '#27ae60';
    
    // Возвращаем исходное состояние через 2 секунды
    setTimeout(() => {
        button.textContent = 'Нажми меня';
        button.style.backgroundColor = '';
    }, 2000);
}

// Функция для работы с API (пример)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return null;
    }
}
