function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        //alert('Tudo OK') // teste 1 
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos.` // teste 2
        let gênero = ''
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeH.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemH.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoH.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosoH.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeM.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoM.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}