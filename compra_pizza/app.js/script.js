 /* Instruções em arquivo:
      - instruçõesJS.md (tentativa de descrever melhor forma uso do JS)
 */
 let modalQt = 1;
  const query = (e) => document.querySelector(e);
  const queryAll = (e) => document.querySelectorAll(e);
  
  // LISTAGEM DAS PIZZAS //
  pizzaJson.map((item, index) => {
    let pizzaItem = query('.models .pizza-item').cloneNode(true);
    
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
      e.preventDefault();
      let key = e.target.closest('.pizza-item').getAttribute('data-key'); //closest - ache elemento mais proximo <a>
      
      // modal info //
        modalQt = 1; 
        query('.pizzaBig img').src = pizzaJson[key].img;
        query('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        query('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        query('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        query('.pizzaInfo--size').classList.remove('selected')
        queryAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
          if(sizeIndex == 2){
            size.classList.add('selected');
          }
          size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })
        query('.pizzaInfo--qt').innerHTML = modalQt;
      
        // modal //
        query('.pizzaWindowArea').style.opacity = 0;
        query('.pizzaWindowArea').style.display = 'flex';
        setTimeout( ()=>{
          query('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    
    query('.pizza-area').append(pizzaItem);

  });

  // EVENTOS DO MODAL // 
  function closeModal(){
    query('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
      query('.pizzaWindowArea').style.display = 'none'
    }, 500)
  }
  queryAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
  })
  query('.pizzaInfo--qtmais').addEventListener('click', ()=> {
    modalQt++
    query('.pizzaInfo--qt').innerHTML = modalQt;
  })