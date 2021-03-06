
function openModal(context, img) {

	jsHunt("#modal").modal({
        action: "open",
        bgscreen: "#block_screen",
        boxmodel: "#modal",
        cssHeight: "490px",
        effect: "fade"
    });

	jsHunt("#h1-modal-title").html(context);
	jsHunt("#img_modal").attr("src", img);
}

function closeModal(context) {

    jsHunt("#modal").modal({
        action: "close",
        bgscreen: "#block_screen",
        boxmodel: "#modal",
        cssHeight: "490px",
        effect: "fade"
    });

	jsHunt("#h1-modal-title").html(context);
	//jsHunt("#img_modal").attr("src", "");
}

jsHunt().loaded(function() {

	// Button Open Modal
	jsHunt("#bt_open_modal").on("click", function(rsp){
		var midia = this.value || "resources/img/image1.jpg";
		openModal('Modal jsHunt Demo', midia);

		jsHunt(".page-item").removeClass("active");
		jsHunt(".page-link").nodeParent(".page-item").addClass("active", 1);
	});

	// First Item
	jsHunt("#a_previous_item_modal").on("click", function(rsp){
		if(!jsHunt(".page-item").isOn({type: "classname", value: "active"}, 1)) {
			var midia = "resources/img/image1.jpg";
			jsHunt("#img_modal").attr("src", midia).fadeIn();
			
			jsHunt('.page-item').removeClass('active');
			jsHunt(".page-link").nodeParent(".page-item").addClass("active", 1);
		}
	});

	// Current Item
	jsHunt("[a-item-modal]", {rsp: "text"}).on("click", function(index){
		if(!jsHunt(".page-item").isOn({type: "classname", value: "active"}, index)) {
			var midia = "resources/img/image"+index+".jpg";
			jsHunt("#img_modal").attr("src", midia).fadeIn();
			
			jsHunt(".page-item").removeClass("active");
			jsHunt(".page-link").nodeParent(".page-item").addClass("active", index);
		}
	});

	// Last Item
	jsHunt("#a_last_item_modal").on("click", function(rsp){
		if(!jsHunt(".page-item").isOn({type: "classname", value: "active"}, 7)) {
			var midia = "resources/img/image7.jpg";
			jsHunt("#img_modal").attr("src", midia).fadeIn();
			
			jsHunt('.page-item').removeClass('active');
			jsHunt(".page-link").nodeParent(".page-item").addClass("active", 7);
		}
	});

	// Button Close Modal [X]
	jsHunt("[a-close-modal]").on("click", function(){
		closeModal('Encerrando...');
	});

});
