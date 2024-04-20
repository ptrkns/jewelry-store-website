function createFooter() {
    var footer = document.createElement('footer');

    footer.innerHTML = `
        <div>
            <img src="../assets/logo-2.png">
            <p>Mangata & Gallo &#169; 2024</p>
        </div>
    `;

    return footer;
}

export function footerInit() {
    var footer = createFooter();
    document.body.appendChild(footer);
}