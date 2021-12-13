function initDataTable() {
  $('#davil_tr1').append('<th colspan="3" class="text-center bg-secondary text-white">정보</th>')
  $('#davil_tr1').append('<th colspan="7" class="text-center bg-secondary text-white">능력치</th>')
  $('#davil_tr1').append('<th colspan="7" class="text-center bg-secondary text-white">내성</th>')
  $('#davil_tr1').append('<th colspan="11" class="text-center bg-secondary text-white">적성</th>')

  titleList.map((title, index) => {
    $('#davil_tr2').append(`<th class="text-center bg-dark text-white">${title}</th>`)
  })
  
  let devilColumns = []
  titleList.map((title, index) => {
    let tableTitle = title
    if(title.indexOf('내성') > -1) {
      tableTitle = title.slice(0,-2)
    }
    
    if(index === 2) {
      return devilColumns.push({"title": tableTitle, "data": title, 'className': 'text-left',})
    }
    devilColumns.push({"title": tableTitle, "data": title, 'className': 'text-center',})
  })

  $.fn.dataTable.enum(['약', '-', '내', '무', '반', '흡']);

  $('#devil_list-table').DataTable({
    paging: false,
    info: false,
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
