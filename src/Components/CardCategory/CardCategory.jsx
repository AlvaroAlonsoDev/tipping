import React from 'react'

export const CardCategory = () => {
    return (
        <div className="category-section">
            {/* mapeo de las distintas categorias */}
            <article class="category-container">
                <div class="image-section-container">
                    <img src="https://www.circalasvegas.com/wp-content/uploads/2021/01/MegaBar-72dpi.jpg" alt="imagen" class="rounded-image" />
                    <div class="text-overlay">
                        <h3 class="overlay">Restaurant</h3>
                    </div>
                </div>
            </article>
            <article class="category-container">
                <div class="image-section-container">
                    <img src="https://revistayoung.es/wp-content/uploads/2023/01/casino-en-linea.jpg" alt="imagen" class="rounded-image" />
                    <div class="text-overlay">
                        <h3 class="overlay">Online Casino</h3>
                    </div>
                </div>
            </article>
            <article class="category-container">
                <div class="image-section-container">
                    <img src="https://www.analyticsinsight.net/wp-content/uploads/2022/05/Online-Casino.jpg" alt="imagen" class="rounded-image" />
                    <div class="text-overlay">
                        <h3 class="overlay">Promotions</h3>
                    </div>
                </div>
            </article>
            <article class="category-container">
                <div class="image-section-container">
                    <img src="https://www.gamblingsites.com/app/uploads/2019/01/Support-for-Problem-Gambling-1200x771.png" alt="imagen" class="rounded-image" />
                    <div class="text-overlay">
                        <h3 class="overlay">Support</h3>
                    </div>
                </div>
            </article>
        </div>
    )
}
