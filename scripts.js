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

  	/*drop - событие, срабатывающее при "опускании" файла в дропзону*/
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
		          	/*Важно*/
		          	image.onload = function () {
		          		/*Добавляем шаблон контейнера для изображения*/
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
                  		/*Добавялем изображение в шаблон*/
			            $("#droppedImages > .row > div > .dz-image").last().append(this);
			            $(this).addClass("img-responsive");
			        }
			        image.src = _URL.createObjectURL(droppedFiles[i]);
		          // Upload droppedFiles[i] to server
		          // $.post(); to upload file to server
		        }
	      	}
	    }
	    /*Добавляем класс, скрывающий caption*/
		$("#myDropzone").addClass("dz-started");
    	$("#myDropzone").removeClass("highlightDropArea");
    	return false;
  	});

  	$("#myDropzone").on('dragover', function(ev) {
    	ev.preventDefault();
  	});


	/*клик на дрозоне*/
  	$("#myDropzone").on('click', function(ev) {
  		ev.preventDefault();
	    ev.stopPropagation();

	    /*Вызов клика по файловому полю*/
	    $('input[type=file]').click();

	    /*Функция обработки клика*/
	    $('input[type=file]').click(function(e){
	    	e.stopPropagation();
			alert('click handler');
		});
  	});

  	/*Здесь возможно будет функция обработки файлов*/
	$('input[type=file]').change(function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    if ($(this).get(0).files.length > 0) {
	    	var droppedFiles = $(this).get(0).files;
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
			          // Upload droppedFiles[i] to server
			          // $.post(); to upload file to server
			    }
			    image.src = _URL.createObjectURL(droppedFiles[i]);
		    }
		    $("#myDropzone").addClass("dz-started");
	    }
	    $("#myDropzone").removeClass("highlightDropArea");
	});
});

