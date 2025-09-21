function loadData() {
  const table = document.getElementById("data-table");
  table.innerHTML = "";

  const dataRef = ref(db, "trading");
  onValue(dataRef, (snapshot) => {
    const dataObj = snapshot.val();
    let totalProfit = 0;
    let no = 1;

    for (const key in dataObj) {
      const data = dataObj[key];
      const keuntungan = ((data.profit / data.modal) * 100).toFixed(2);
      totalProfit += data.profit;

      const row = `
        <tr>
          <td>${no++}</td>
          <td>${data.tanggal}</td>
          <td>Rp${data.modal.toLocaleString()}</td>
          <td>Rp${data.profit.toLocaleString()}</td>
          <td>${keuntungan}%</td>
        </tr>
      `;
      table.innerHTML += row;
    }

    document.getElementById("total-profit").innerText = `Total Profit: Rp${totalProfit.toLocaleString()}`;
  });
}
