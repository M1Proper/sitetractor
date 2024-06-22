document.querySelectorAll('.product-button').forEach(function(button) {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target')
        const content = document.getElementById(targetId)

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'flex'
            this.textContent = 'Показать меньше '
        } else {
            content.style.display = 'none'

            this.textContent = 'Показать больше '
        }
    })
})