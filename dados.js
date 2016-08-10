$(document).ready(function(){
	
	//adicionando campo para dados
	$('#add').on('click', function(){
		var num = $('#inputs').children().last().attr("rel");//pega rel do ultimo li
		num++;//incrementa
		$('#inputs').append('<li rel="'+num+'"><span id="num_input_dados">'+num+'&ordm; dado: </span><input type="text" size="30" name="dados[]" class="input_dados" placeholder="Digite os dados" /><div id="del"></div></li>');//adiciona campo
	})
	
	//removendo campos para dados
	$('body').delegate('#del', 'click', function(){
		$(this).parent().remove();//removendo linha pelo elemento pai
	})
})