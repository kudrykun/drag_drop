$(document).ready(function(){
	var _URL = window.URL || window.webkitURL;
	/*dragenter - событие, которое срабатывает при перемещении чего либо в дропзону*/
	$("#myDropzone").on('dragenter', function(ev) {
      	$("#myDropzone").addClass("highlightDropArea");
  	});

	/*dragenter - событие, которое срабатывает при покидании файлом дропзоны*/
  	$("#myDropzone").on('dragleave', function(ev) {
    	$("#myDropzone").removeClass("highlightDropArea");
  	});

  	$("#myDropzone").on('drop', function(ev) {
	    //Отключает дефолтные события, но это точно предотвращает открытие картинки в браузере
	    ev.preventDefault();
	    ev.stopPropagation();

	    // итерация через фзагружаемые файлы
	    if(ev.originalEvent.dataTransfer){
	    	if(ev.originalEvent.dataTransfer.files.length) {
		        var droppedFiles = ev.originalEvent.dataTransfer.files;
		        for(var i = 0; i < droppedFiles.length; i++)
		        {
		          	console.log(droppedFiles[i]);
		          	var image = new Image();
		          	image.onload = function () {
			            $("#droppedImages .row").append(
			            	'<div class="col-xs-12 col-sm-6 col-md-3">' +
				            	'<div class="dz-image">' +
	                  				'<div class="dz-preview-btn">' +
	                  				'</div>' +
	                  				'<div class="dz-delete-btn">' +
	                  				'</div>' +
	                  			'</div>' +
	                  		'</div>'
                  		);
			            $("#droppedImages > .row > div > .dz-image").last().append(this);
			            $(this).addClass("img-responsive");
			        }
			        image.src = _URL.createObjectURL(droppedFiles[i]);
		          // Upload droppedFiles[i] to server
		          // $.post(); to upload file to server
		        }
	      	}
	    }
		$("#myDropzone").addClass("dz-started");
    	$("#myDropzone").removeClass("highlightDropArea");
    	return false;
  	});

  	$("#myDropzone").on('dragover', function(ev) {
    	ev.preventDefault();
  	});

  	$("#dzHiddenInput").on('click', function(ev) {
	    //Отключает дефолтные события, но это точно предотвращает открытие картинки в браузере
	    ev.preventDefault();
	    ev.stopPropagation();

	    // итерация через фзагружаемые файлы
	    if(ev.originalEvent.dataTransfer){
	    	if(ev.originalEvent.dataTransfer.files.length) {
		        var droppedFiles = ev.originalEvent.dataTransfer.files;
		        for(var i = 0; i < droppedFiles.length; i++)
		        {
		          	console.log(droppedFiles[i]);
		          	var image = new Image();
		          	image.onload = function () {
			            $("#droppedImages .row").append(
			            	'<div class="col-xs-12 col-sm-6 col-md-3">' +
				            	'<div class="dz-image">' +
	                  				'<div class="dz-preview-btn">' +
	                  				'</div>' +
	                  				'<div class="dz-delete-btn">' +
	                  				'</div>' +
	                  			'</div>' +
	                  		'</div>'
                  		);
			            $("#droppedImages > .row > div > .dz-image").last().append(this);
			            $(this).addClass("img-responsive");
			        }
			        image.src = _URL.createObjectURL(droppedFiles[i]);
		          // Upload droppedFiles[i] to server
		          // $.post(); to upload file to server
		        }
	      	}
	    }
		$("#myDropzone").addClass("dz-started");
    	$("#myDropzone").removeClass("highlightDropArea");
    	return false;
  	});
});

