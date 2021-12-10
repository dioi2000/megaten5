function initDataTable() {
  let devilColumns = []
  titleList.map((title, index) => {
    if(index === 2) {
      return devilColumns.push({"title": title, "data": title, 'className': 'text-left',})
    }
    devilColumns.push({"title": title, "data": title, 'className': 'text-center',})
  })

  $.fn.dataTable.enum(['약', '-', '내', '무', '반', '흡']);

  $('#devil_list-table').DataTable({
    paging: false,
    info: false,
    searching: false,
    scrollCollapse: true,
      order: [[ 1, "desc" ]],
      data: getData(),
      columns: devilColumns,
      // [
      //   {"title": titleList[0], "data": titleList[0]},
      //   {"title": titleList[1], "data": titleList[1]},
      //   {"title": titleList[2], "data": titleList[2]},
      //   // {"data": "id",
      //   //     render: function (data, type, row) {
      //   //         return `<button class="btnType02 btnS" onclick="downloadQr(${data});">다운로드</button>`
      //   //     }
      //   // },
      // ],
      drawCallback: function( settings ) {
        $("#product_list_total").text(`전체 : ${settings._iRecordsTotal}개`)
      },
  });
}
