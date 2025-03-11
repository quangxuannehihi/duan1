console.log("o");

function renderRow(product){
    return`
    <tr>
     <td>${product.id}</td>
     <td>${product.title}</td>
     <td><img src="${product.imageUrl}" width="50px"></td>
     <td>${product.quantity}</td>
     <td>${product.category}</td>
      <td>
     <button class="btn btn-primary" onclick= deleteProduct(${product.id})>DELETE</button>
     </td>
     <th>
     <a href="./add.html?id=${product.id}">
     <button class="btn btn-primary">EDIT</button>
     </a>
     </th>
    </tr>
    
    `;
    
}
async function getProducts() {
    try {
        const res = await axios.get("http://localhost:3000/products");
        const htmlContent = res.data.map(renderRow).join("");
        document.getElementById("list").innerHTML = htmlContent;
    } catch (error) {
        alert(error.message);
    }
}
getProducts();
async function deleteProduct(id) {
    if(confirm("xoa")){
        try {
            await axios.get(`http://localhost:3000/products/${id}`);
            alert("xoa ok");
        } catch (error) {
            alert(error.message);
        }
    }
}