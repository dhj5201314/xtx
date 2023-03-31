let all = document.querySelector('#all')
let is = document.querySelector('.car .i')
let kss = document.querySelectorAll('.car .s_ck')
let adds = document.querySelectorAll('.add')
let reduce = document.querySelectorAll('.reduce')
let del = document.querySelectorAll('.del')
let count_c = document.querySelectorAll('.count-c input') 
let total = document.querySelectorAll('.total')
let price = document.querySelectorAll('.price')
let sums = document.querySelector('#totalPrice')
let Count = document.querySelector('#totalCount')
let carBody = document.querySelector('#carBody')
all.checked = true
for(let i = 0; i < kss.length ;i++) {
  kss[i].checked = true
}
is.innerHTML = '取消'
for(let i = 0; i < adds.length; i++) {
  total[i].innerHTML = price[i].innerHTML
  adds[i].addEventListener('click',function() {
    // alert('11')
    count_c[i].value++
    reduce[i].disabled = false
    let s = parseInt(price[i].innerHTML)
    // console.log(s)
    total[i].innerHTML = `${s * count_c[i].value}￥`
    getSum()
  })
  reduce[i].addEventListener('click',function() {
    // alert('11')
    count_c[i].value--
   if(count_c[i].value <= 1) {
    this.disabled = true
   }
    let s = parseInt(price[i].innerHTML)
    // console.log(s)
    total[i].innerHTML = `${s * count_c[i].value}￥`
    getSum()
  })

    del[i].addEventListener('click',function() {
      carBody.removeChild(del[i].parentNode.parentNode)
      getSum()
    })
}

  function getSum() {
    let count_c = document.querySelectorAll('.count-c input') 
    let total = document.querySelectorAll('.total')
    let sum = 0
    let num = 0
    for(let i = 0; i < total.length; i++) {
      sum = sum + parseInt(total[i].innerHTML)
      num = num + parseInt(count_c[i].value)
    }
    // console.log(sum)
    sums.innerHTML = sum + '￥'
    Count.innerHTML = num 
  }
  getSum()
  all.addEventListener('click',function() {
    // console.log(11)
    for(let i = 0; i < kss.length; i++) {
        kss[i].checked = this.checked
      
        
    }
    if(this.checked) {
        is.innerHTML = '取消'
    }else{
        is.innerHTML = '全选'
    }
    
  })
  for(let j = 0; j< kss.length;j++) {
    kss[j].addEventListener('click',function() {
        for(let i = 0; i < kss.length; i++) {
            if(kss[i].checked === false) {
                all.checked = false
               is.innerHTML = '全选'
                return
            }
        }
        all.checked = true
        is.innerHTML = '取消'
    })
   
}



 
