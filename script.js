let c = (el)=> document.querySelector(el);
let cs = (el)=> document.querySelectorAll(el);

cs('.botoes-de-medida').forEach(element => {
    element.addEventListener('click', (e)=>{



        function removerBotaoAtual() {
            c('.comprimento').classList.remove('botao-atual');
            c('.area').classList.remove('botao-atual');
            c('.volume').classList.remove('botao-atual');
        }
    
        let botaoAtual = e.target;
        function denominandoBotaoAtual() {
            removerBotaoAtual();
            botaoAtual.classList.add('botao-atual');
        }

        denominandoBotaoAtual();

        let verificarEspacoConversor = c('main .espaco-conversor');
    
        if (verificarEspacoConversor == null) {
            let espacoConversor = c('.espaco-conversor').cloneNode(true);
            c('main').append(espacoConversor);
    
            botaoAtivo = c('main .botao-atual'); 

            if (botaoAtivo.classList.contains('comprimento') == true) {
                c('.indicador').innerHTML = 'Comprimento';
    
                let listaDeMedidas = [
                    {value:'milimetro', classList:'opcoes', text:'Milimetro'},
                    {value:'centimetro', classList:'opcoes', text:'Centimetro'},
                    {value:'decimetro', classList:'opcoes', text:'Decimetro'},
                    {value:'metro', classList:'opcoes', text:'Metro'},
                    {value:'quilometro', classList:'opcoes', text:'Quilometro'}
                ];
    
                criarSelect(listaDeMedidas);
        
                c('.espaco-conversor').style.opacity = 0;
                c('.espaco-conversor').style.display = 'flex';
                setTimeout(()=>{
                    c('.espaco-conversor').style.opacity = 1;
                }, 200);
        
            } else if (botaoAtivo.classList.contains('area') == true) {
                c('.indicador').innerHTML = 'Área';
    
                let listaDeMedidas = [
                    {value:'milimetro', classList:'opcoes', text:'Milimetro quadrado (mm²)'},
                    {value:'centimetro', classList:'opcoes', text:'Centimetro quadrado (cm²)'},
                    {value:'decimetro', classList:'opcoes', text:'Decimetro quadrado (dm²)'},
                    {value:'metro', classList:'opcoes', text:'Metro quadrado (m²)'},
                    {value:'quilometro', classList:'opcoes', text:'Quilometro quadrado (km²)'}
                ];
    
                criarSelect(listaDeMedidas);
        
                c('.espaco-conversor').style.opacity = 0;
                c('.espaco-conversor').style.display = 'flex';
                setTimeout(()=>{
                    c('.espaco-conversor').style.opacity = 1;
                }, 200);
        
            } else if (botaoAtivo.classList.contains('volume') == true) {
                c('.indicador').innerHTML = 'Volume';
    
                let listaDeMedidas = [
                    {value:'milimetro', classList:'opcoes', text:'Milimetro cúbico (mm³)'},
                    {value:'centimetro', classList:'opcoes', text:'Centimetro cúbico (cm³)'},
                    {value:'decimetro', classList:'opcoes', text:'Decimetro cúbico (dm³)'},
                    {value:'metro', classList:'opcoes', text:'Metro cúbico (m³)'},
                    {value:'quilometro', classList:'opcoes', text:'Quilometro cúbico (km³)'}
                ];
    
                criarSelect(listaDeMedidas);
        
                c('.espaco-conversor').style.opacity = 0;
                c('.espaco-conversor').style.display = 'flex';
                setTimeout(()=>{
                    c('.espaco-conversor').style.opacity = 1;
                }, 200);
        
            }

            var inputEntrada = c('main .imput-a-converter');
            var inputSaida = c('main .imput-convertido');
            var selectEntrada = c('main .entrada');
            var selectSaida = c('main .saida');

            if (botaoAtivo.classList.contains('comprimento') == true) {
                inputEntrada.addEventListener('keyup', resultadoComprimento);
                inputSaida.addEventListener('keyup', resultadoComprimento);
                selectEntrada.addEventListener('change', resultadoComprimento);
                selectSaida.addEventListener('change', resultadoComprimento);
            } else if (botaoAtivo.classList.contains('area') == true) {
                inputEntrada.addEventListener('keyup', resultadoArea);
                inputSaida.addEventListener('keyup', resultadoArea);
                selectEntrada.addEventListener('change', resultadoArea);
                selectSaida.addEventListener('change', resultadoArea);
            } else if (botaoAtivo.classList.contains('volume') == true) {
                inputEntrada.addEventListener('keyup', resultadoVolume);
                inputSaida.addEventListener('keyup', resultadoVolume);
                selectEntrada.addEventListener('change', resultadoVolume);
                selectSaida.addEventListener('change', resultadoVolume);
            }



        } else {
            removerEspaco();
            removerBotaoAtual();
        }   
    
        function resultadoComprimento() {
            if(selectEntrada.value == 'milimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value} mm`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value/10} cm`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value/100} dm`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/1000} m`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/1000000} km`;

            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*10} mm`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value} cm`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value/10} dm`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/100} m`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/100000} km`;

            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*100} mm`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*10} cm`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value} dm`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/10} m`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/10000} km`;

            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000} mm`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*100} cm`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value*10} dm`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value} m`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/1000} km`;

            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000000} mm`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*100000} cm`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value*10000} dm`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value*1000} m`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value} km`;
            }
    
        }
    
        function resultadoArea() {
            if(selectEntrada.value == 'milimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value} mm²`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value/100} cm²`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value/10000} dm²`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/1000000} m²`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/1000000000000} km²`;
 
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*100} mm²`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value} cm²`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value/100} dm²`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/10000} m²`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/10000000000} km²`;

            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*10000} mm²`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*100} cm²`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value} dm²`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/100} m²`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/10000000} km²`;

            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000000} mm²`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*10000} cm²`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value*100} dm²`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value} m²`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/1000000} km²`;

            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000000000000} mm²`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*10000000000} cm²`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value*100000000} dm²`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value*1000000} m²`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value} km²`;
            }

        }

        function resultadoVolume() {
            if(selectEntrada.value == 'milimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value} mm³`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value/1000} cm³`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value/1000000} dm³`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/100000000} m³`;
            } else if (selectEntrada.value == 'milimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/100000000000000000} km³`;

            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000} mm³`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value} cm³`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value/100} dm³`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/1000000} m³`;
            } else if (selectEntrada.value == 'centimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/100000000000000} km³`;

            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000000} mm³`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*1000} cm³`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value} dm³`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value/1000} m³`;
            } else if (selectEntrada.value == 'decimetro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/100000000000} km³`;

            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000000000} mm³`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*1000000} cm³`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value*1000} dm³`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value} m³`;
            } else if (selectEntrada.value == 'metro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value/100000000} km³`;

            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'milimetro') {
                inputSaida.value = `${inputEntrada.value*1000000000000000000} mm³`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'centimetro') {
                inputSaida.value = `${inputEntrada.value*1000000000000000} cm³`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'decimetro') {
                inputSaida.value = `${inputEntrada.value*1000000000000} dm³`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'metro') {
                inputSaida.value = `${inputEntrada.value*1000000000} m³`;
            } else if (selectEntrada.value == 'quilometro' && selectSaida.value == 'quilometro') {
                inputSaida.value = `${inputEntrada.value} km³`;
            }
        }

        c('.botao-voltar').addEventListener('click', ()=>{
            removerEspaco();
            removerBotaoAtual();
        });
 
    });
});

function criarSelect(lista) {
    lista.map((item)=>{
        let option = document.createElement('option');
        option.value = item.value;
        option.classList = item.classList;
        option.text = item.text;
        c('.entrada').append(option);

        option = document.createElement('option');
        option.value = item.value;
        option.classList = item.classList;
        option.text = item.text;
        c('.saida').append(option);
    });
}

function removerEspaco() {
    c('.espaco-conversor').style.opacity = 0;
    setTimeout(()=>{
        c('.espaco-conversor').remove();
    }, 200);
}