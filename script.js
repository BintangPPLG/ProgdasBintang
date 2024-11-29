let productList = [];

function saveForm() {
    const kodeProduk = document.getElementById('kodeproduk').value;
    const namaProduk = document.getElementById('nameproduk').value;
    const hargaProduk = document.getElementById('harga').value;
    const satuan = document.getElementById('satuan').value;
    const kategori = document.getElementById('kategori').value;
    const urlImage = document.getElementById('urlimage').value;
    const quantity = document.getElementById('quantity').value;

    if (!namaProduk || !hargaProduk || !kategori || !quantity) {
        alert("Mohon lengkapi semua field!");
        return;
    }


    const product = {
        kode: kodeProduk,
        nama: namaProduk,
        harga: hargaProduk,
        satuan: satuan,
        kategori: kategori,
        url: urlImage,
        quantity: quantity
    };

    productList.push(product);

    document.getElementById('biodataform').reset();

    updateTable();
}

function updateTable() {
    const tableBody = document.querySelector('.product-table tbody');
    tableBody.innerHTML = ""; 

    productList.forEach((product, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.kode}</td>
            <td>${product.nama}</td>
            <td>${product.kategori}</td>
            <td>Rp ${product.harga}</td>
            <td><img src="${product.url}" value="${product.url}" alt="${product.nama}" style="width: 50px; height: 50px;"></td>
            <td>${product.quantity}</td>
            <td>
                <button onclick="deleteProduct(${index})">Hapus</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteProduct(index) {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
        productList.splice(index, 1);
        updateTable();
    }
}