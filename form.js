let ska = document.querySelector('.ska')
let res =document.querySelector('.res')
let com = document.querySelector('.com')
let housetype = document.querySelector('.housetype')
let service = document.querySelector('.service')
let duration = document.querySelector('.duration')
let total = document.querySelector('.total')
let totaldiv = document.querySelector('.totaldiv')
let phpdiv = document.querySelector('.php')
com.style.display = 'none'
res.style.display = 'none'
let form = document.querySelector('form')
let btn = document.querySelector('.btn')
let comtype = document.querySelector('.comtype')
let contact = document.querySelector('.contact')

const popUp = ()=>{
   
   contact.style.display = 'block'
	totaldiv.style.display = 'none'
	phpdiv.style.display = 'none'
}
const openup = ()=>{
       
       if (ska.value === 'residential') {
           com.style.display = 'none'
           res.style.display = 'block'
		   btn.style.display = 'block'
		   contact.style.display = 'none'

       }
       else if (ska.value === 'commercial') {
        com.style.display = 'block'
        res.style.display = 'none'
		btn.style.display = 'none'
		 contact.style.display = 'none'
		 totaldiv.style.display = 'none'
		   phpdiv.style.display = 'none'
       }
}

const over = {
    onebedsuite:{
        basic:{
            oneoff: '7,000',
            weekly: '6,300',
            biweekly: '11,200',
            monthly: '6,800',
            bimonthly: '13,300'
        },
        deep:{
            oneoff: '10,000',
            weekly: '9,000',
            biweekly: '16,000',
            monthly: '9,800',
            bimonthly: '19,000'
        },
        postconstruction:{
            oneoff: '10,000',
            weekly: '10,000',
            biweekly: '10,000',
            monthly: '10,000',
            bimonthly: '10,000'
        },
        fumigation:{
            oneoff:   '5,000',
            weekly:   '5,000',
            biweekly: '5,000',
            monthly:  '5,000',
            bimonthly: '5,000'
        }
    },
    selfcon:{
        basic:{
            oneoff: '10,000',
            weekly:'9,000',
            biweekly: '16,000',
            monthly: '9,800',
            bimonthly: '19,000'
        },
        deep:{
            oneoff: '15,000',
            weekly: '13,500',
            biweekly: '24,000',
            monthly: '14,800',
            bimonthly: '28,500'
        },
        postconstruction:{
            oneoff: '15,000',
            weekly:'15,000',
            biweekly: '15,000',
            monthly: '15,000',
            bimonthly: '15,000'
        },
        fumigation:{
            oneoff: '8,000',
            weekly: '8,000',
            biweekly: '8,000',
            monthly: '8,000',
            bimonthly: '8,000'
        }
    },
    twobed:{
        basic:{
            oneoff: '20,000',
            weekly:'18,000',
            biweekly: '32,000',
            monthly: '19,500',
            bimonthly: '38,000'
        },
        deep:{
            oneoff: '25,000',
            weekly: '22,500',
            biweekly: '40,000',
            monthly: '24,500',
            bimonthly: '47,500'
        },
        postconstruction:{
            oneoff: '25,000',
            weekly:'25,000',
            biweekly: '25,000',
            monthly: '25,000',
            bimonthly: '25,000'
        },
        fumigation:{
            oneoff: '10,000',
            weekly: '10,000',
            biweekly: '10,000',
            monthly: '10,000',
            bimonthly: '10,000'
        }
    },
    threebedflat:{
        basic:{
            oneoff: '25,000',
            weekly:'22,500',
            biweekly: '40,000',
            monthly: '24,500',
            bimonthly: '47,500'
        },
        deep:{
            oneoff: '40,000',
            weekly: '36,000',
            biweekly: '64,000',
            monthly: '39,500',
            bimonthly: '76,500'
        },
        postconstruction:{
            oneoff: '40,000',
            weekly:'40,000',
            biweekly: '40,000',
            monthly: '40,000',
            bimonthly: '40,000'
        },
        fumigation:{
            oneoff: '16,000',
            weekly: '16,000',
            biweekly: '16,000',
            monthly: '16,000',
            bimonthly: '16,000'
        }
    },
    threebedhouse:{
        basic:{
            oneoff: '35,000',
            weekly:'31,500',
            biweekly: '56,000',
            monthly: '34,500',
            bimonthly: '66,500'
        },
        deep:{
            oneoff: '50,000',
            weekly: '45,000',
            biweekly: '80,000',
            monthly: '49,500',
            bimonthly: '95,000'
        },
        postconstruction:{
            oneoff: '50,000',
            weekly:'50,000',
            biweekly: '50,000',
            monthly: '50,000',
            bimonthly: '50,000'
        },
        fumigation:{
            oneoff: '20,000',
            weekly: '20,000',
            biweekly: '20,000',
            monthly: '20,000',
            bimonthly: '20,000'
        }
    },
    fourbedflat:{
        basic:{
            oneoff: '40,000',
            weekly:'36,000',
            biweekly: '64,000',
            monthly: '39,000',
            bimonthly: '76,000'
        },
        deep:{
            oneoff: '55,000',
            weekly: '49,500',
            biweekly: '88,000',
            monthly: '54,000',
            bimonthly: '104,500'
        },
        postconstruction:{
            oneoff: '50,000',
            weekly:'50,000',
            biweekly: '50,000',
            monthly: '50,000',
            bimonthly: '50,000'
        },
        fumigation:{
            oneoff: '20,000',
            weekly: '20,000',
            biweekly: '20,000',
            monthly: '20,000',
            bimonthly: '20,000'
        }
    },
    fourbedhouse:{
        basic:{
            oneoff: '55,000',
            weekly:'49,500',
            biweekly: '88,000',
            monthly: '54,000',
            bimonthly: '104,500'
        },
        deep:{
            oneoff: '70,000',
            weekly: '63,000',
            biweekly: '112,000',
            monthly: '69,000',
            bimonthly: '133,500'
        },
        postconstruction:{
            oneoff: '70,000',
            weekly:'70,000',
            biweekly: '70,000',
            monthly: '70,000',
            bimonthly: '70,000'
        },
        fumigation:{
            oneoff: '25,000',
            weekly: '25,000',
            biweekly: '25,000',
            monthly: '25,000',
            bimonthly: '25,000'
        }
    },
    fivebedflat:{
        basic:{
            oneoff: '50,000',
            weekly:'45,000',
            biweekly: '80,000',
            monthly: '49,000',
            bimonthly: '95,000'
        },
        deep:{
            oneoff: '70,000',
            weekly: '63,000',
            biweekly: '112,000',
            monthly: '69,800',
            bimonthly: '133,500'
        },
        postconstruction:{
            oneoff: '80,000',
            weekly:'80,000',
            biweekly: '80,000',
            monthly: '80,000',
            bimonthly: '80,000'
        },
        fumigation:{
            oneoff: '30,000',
            weekly: '30,000',
            biweekly: '30,000',
            monthly: '30,000',
            bimonthly: '30,000'
        }
    },
    fivebedhouse:{
        basic:{
            oneoff: '65,000',
            weekly:'58,500',
            biweekly: '104,000',
            monthly: '64,000',
            bimonthly: '123,500'
        },
        deep:{
            oneoff: '80,000',
            weekly: '72,000',
            biweekly: '128,000',
            monthly: '79,800',
            bimonthly: '152,000'
        },
        postconstruction:{
            oneoff: '85,000',
            weekly:'85,000',
            biweekly: '85,000',
            monthly: '85,000',
            bimonthly: '85,000'
        },
        fumigation:{
            oneoff: '40,000',
            weekly: '40,000',
            biweekly: '40,000',
            monthly: '40,000',
            bimonthly: '40,000'
        }
    },
    sixbedhouse:{
        basic:{
            oneoff: '75,000',
            weekly:'67,500',
            biweekly: '120,000',
            monthly: '73,000',
            bimonthly: '142,500'
        },
        deep:{
            oneoff: '95,000',
            weekly: '85,500',
            biweekly: '152,000',
            monthly: '93,800',
            bimonthly: '180,500'
        },
        postconstruction:{
            oneoff: '100,000',
            weekly:'100,000',
            biweekly: '100,000',
            monthly: '100,000',
            bimonthly: '100,000'
        },
        fumigation:{
            oneoff: '50,000',
            weekly: '50,000',
            biweekly: '50,000',
            monthly: '50,000',
            bimonthly: '50,000'
        }
    },
    sevenbedhouse:{
        basic:{
            oneoff: '90,000',
            weekly:'81,000',
            biweekly: '144,000',
            monthly: '88,000',
            bimonthly: '171,000'
        },
        deep:{
            oneoff: '110,000',
            weekly: '99,000',
            biweekly: '176,000',
            monthly: '108,000',
            bimonthly: '209,000'
        },
        postconstruction:{
            oneoff: '110,000',
            weekly:'110,000',
            biweekly: '110,000',
            monthly: '110,000',
            bimonthly: '110,000'
        },
        fumigation:{
            oneoff: '65,000',
            weekly: '65,000',
            biweekly: '65,000',
            monthly: '65,000',
            bimonthly: '65,000'
        }
    },
    eightbedhouse:{
        basic:{
            oneoff: '110,000',
            weekly:'90,000',
            biweekly: '176,000',
            monthly: '108,000',
            bimonthly: '209,000'
        },
        deep:{
            oneoff: '140,000',
            weekly: '126,000',
            biweekly: '224,000',
            monthly: '138,000',
            bimonthly: '266,000'
        },
        postconstruction:{
            oneoff: '150,000',
            weekly:'150,000',
            biweekly: '150,000',
            monthly: '150,000',
            bimonthly: '150,000'
        },
        fumigation:{
            oneoff: '80,000',
            weekly: '80,000',
            biweekly: '80,000',
            monthly: '80,000',
            bimonthly: '80,000'
        }
    },
    ninebedhouse:{
        basic:{
            oneoff: '130,000',
            weekly:'117,000',
            biweekly: '208,000',
            monthly: '128,000',
            bimonthly: '247,000'
        },
        deep:{
            oneoff: '180,000',
            weekly: '162,000',
            biweekly: '288,000',
            monthly: '178,000',
            bimonthly: '342,000'
        },
        postconstruction:{
            oneoff: '220,000',
            weekly:'220,000',
            biweekly: '220,000',
            monthly: '220,000',
            bimonthly: '220,000'
        },
        fumigation:{
            oneoff: '95,000',
            weekly: '95,000',
            biweekly: '95,000',
            monthly: '95,000',
            bimonthly: '95,000'
        }
    },
    tenbedhouse:{
        basic:{
            oneoff: '150,000',
            weekly:'135,000',
            biweekly: '240,000',
            monthly: '148,000',
            bimonthly: '285,000'
        },
        deep:{
            oneoff: '200,000',
            weekly: '180,000',
            biweekly: '320,000',
            monthly: '198,000',
            bimonthly: '380,000'
        },
        postconstruction:{
            oneoff: '250,000',
            weekly:'250,000',
            biweekly: '250,000',
            monthly: '250,000',
            bimonthly: '250,000'
        },
        fumigation:{
            oneoff: '105,000',
            weekly: '105,000',
            biweekly: '105,000',
            monthly: '105,000',
            bimonthly: '105,000'
        }
    },
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()


    
  
    let final = over[housetype.value][service.value][duration.value]
    total.innerHTML = final;
    totaldiv.style.display='block';
    phpdiv.style.display='block';

})
