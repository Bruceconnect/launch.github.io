function currentcalc(event){
    let id = event.target.id;
    if (id == 'doldir'){
        const dor = document.getElementById('doldir').value;
        document.getElementById('dirdol').value = 3.66 * dor;
        }
    
    else if (id == 'dirdol'){
        const dir = document.getElementById('dirdol').value;
        document.getElementById('doldir').value = (1/3.66) * dir;
    }

    else if (id == 'dolfr'){
        const dol = document.getElementById('dolfr').value;
        document.getElementById('frdol').value = 1230 * dol;
        }
    
    else if (id == 'frdol'){
        const fr = document.getElementById('frdol').value;
        document.getElementById('dolfr').value = (1/1230) * fr;
    }

    else if (id == 'dirfr'){
        const dfr = document.getElementById('dirfr').value;
        document.getElementById('frdir').value = (1230/3.66)* dfr;
        }
    
    else if (id == 'frdir'){
        const fdr = document.getElementById('frdir').value;
        document.getElementById('dirfr').value = (3.66/1230) * fdr;
    }
        
    };
    

function sizeadjuste(){
    const w = window.innerWidth;
    const h = window.innerHeight;
    document.getElementById('demo').style.height = h;
    console.log(h)
    document.getElementById('demo').innerHTML = 'hello'
}
   
sizeadjuste()