document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 1000; // Number of snowflakes to generate

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random size between 2px and 10px
        const size = Math.random() * 10 + 1 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;

        // Random horizontal position across the width of the viewport
        snowflake.style.left = Math.random() * 600 + 'vw';

        // Random delay for starting the animation (0s ensures immediate start)
        snowflake.style.animationDuration = Math.random() * 25 + 2 + 's';
        snowflake.style.animationDelay = '0s'; // Start immediately

        // Append snowflake to the container
        snowflakesContainer.appendChild(snowflake);
    }
});