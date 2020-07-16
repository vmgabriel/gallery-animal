// $('.modal_ID').modal( 'hide' ).data( 'bs.modal', null );
$('.modal').on('hidden.bs.modal', function (e) {
    console.log("Cerrando - ", e.target.id);
    $(`#${e.target.id} iframe`).attr("src", $(`#${e.target.id} iframe`).attr("src"));
});

function data(data) {
    console.log("data - ", data);
}
