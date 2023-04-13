export const Portfolio = {
    loadPortfolio(parent) {
        let portfolioContainer = document.createElement('div');
        portfolioContainer.className = 'portfolio-container';
        portfolioContainer.textContent = 'Portfolio';
    
        parent.appendChild(portfolioContainer);
    }
}