export const Portfolio = {
    loadPortfolio(parent) {
        let portfolioContainer = document.createElement('div');
        portfolioContainer.className = 'portfolio-container';

        let portfolioHeading = document.createElement('h1')
        portfolioHeading.textContent = 'Portfolio'
        portfolioContainer.appendChild(portfolioHeading);
    
        parent.appendChild(portfolioContainer);
    }
}