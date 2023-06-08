const URL_API = "http://localhost:3000/movimientos";
const tbody_movimientos = document.getElementById("tbody_movimientos");

const getMovimientos = async () => {
    const response = await axios.get(URL_API);
    const data = response.data;
    data.forEach(movimiento => {
        tbody_movimientos.innerHTML +=`
        <tr>
        <td>${movimiento.description}</td>
        <td>${movimiento.value}</td>
        <td>${movimiento.type}</td>
        <td>${movimiento.actions}</td>
        </tr>`;
    });
};

getMovimientos();



