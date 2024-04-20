function createHeader() {
    var header = document.createElement('header');
    header.innerHTML = `
        <div>
            <img src="../assets/logo-1.png" >
            <nav>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
        </div>
    `;
    return header;
}

export function  headerInit() {
    var header = createHeader();
    document.body.insertBefore(header, document.body.firstChild);
}