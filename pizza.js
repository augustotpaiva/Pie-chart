$(document).ready(function(){
	//pegando canvas
	var grafic = document.getElementById('grafic');

	//atribuindo contexto 2d
	var pizza  = grafic.getContext('2d');
	
	//setando centro do círculo
	var center_x	= 250;
	var center_y	= 250;
	
	//setando dimensão do círculo
	var raio		= 200;

	//area total do arco
	var total_arc	= 2;
	
	//ao clicar
	$('#draw').on('click', function(){
		
		var inputs_num = $('.input_dados').length;//pegando quantidade de inputs
		
		var dados = new Array();//array novo para receber os dados
		var count = 0;//var para contagem e incremento
		var total = 0;//iniciando var para armazenar o total de amostragem de dados
		$('.input_dados').each(function(){//criando array com os dados
			dados[count] = $(this).val();
			if(dados[count] == ''){//se tiver vazio atribui zero
				dados[count] = 0;
			}
			total += parseFloat(dados[count]);//soma os dados como total os convertendo para numero
			count++;
		})
		
		//porcentagens de area dos dados
		//Exemplo:
			//A = total	= 100
			//C = item	= 23
			//B = total_area = 2
			//X = porcentagem entre item e total da area
			//Estabelecendo que A está para B então podemos calcular o valor de X quando C está para X
				// A --> B
				// C --> X
				//multiplicando em cruz (regra de 3)
					// X = ( C * B ) / A;
		
		//gerando array com a area de cada dado
		var area = new Array();//novo array para as areas
		count = 0;//resetando var para contagem e incremento
		while(count < inputs_num){//nao uso <= pois devemos considerar o zero como primeiro parametro
			area[count]	= ((dados[count] * total_arc) / total);
			count++;
		}
		
		//gerando grafico
		count		= 0;//resetando var para contagem e incremento
		var start	= 0;//ponto de inicio do dado no circulo
		var end		= 0;//ponto de fim do dado no circulo
		while(count < inputs_num){
			
			end += area[count];//fim do dado atual
			
			var red		= Math.round(Math.random()*255);//randomizando numero entre 0 e 255
			var green	= Math.round(Math.random()*255);//randomizando numero entre 0 e 255
			var blue	= Math.round(Math.random()*255);//randomizando numero entre 0 e 255
			
			pizza.beginPath();//iniciando forma
				pizza.fillStyle = 'rgb('+red+', '+green+', '+blue+')';//cor para o preenchimento RGB
				
				pizza.arc(center_x, center_y, raio, start*Math.PI, end*Math.PI, false);//gerando arco
				pizza.lineTo(center_x, center_y);//linha para o centro
				
				pizza.fill();//gerando preenchimento
			pizza.closePath();//fechando forma
			
			start += area[count];//inicio do proximo dado
			
			count++;
		}
	})
	
	//resetando canvas e campos
	$('#reset').on('click', function(){
		//reseta canvas
		grafic.width = grafic.width;
		
		//reseta campos
		$('.input_dados').each(function(){
			if($(this).parent().attr("rel") >= 2 ){
				$(this).parent().remove();
			}
		})
	})
})