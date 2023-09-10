let card1= [
    {
        image:".webpчасы.webp",
        title:"560.00",
      
        button:"add to cart",
    },
    {
        image:"rubashki2k.jpg",
        title:"540.00",
        button:"add to cart"
    },
    {
        image:"zhenskiye-tufli.png",
        title:"595.00",
        button:"add to cart"
    },
    {
        image:"красовки.webp",
        title:"520.00",
        button:"add to cart"
    },
    {
        image:"кросс.jpeg",
        title:"550.00",
        button:"add to cart"
    },
    {
        image:"очки.jpg",
        title:"525.00",
        button:"add to cart"
    },
    {
        image:"телефон.jpg",
        title:"536.00",
        button:"add to cart"
    },
    {
        image:"утюг.webp",
        title:"560.00",
        button:"add to cart"
    }
]


let container= document.getElementById('container')



  const renderBlock =()=>{
        let fragment = new DocumentFragment();
        card1.map((el,id)=>{
            console.log(el);
    let blocks = document.createElement('div')
    blocks.className='item';
    blocks.setAttribute('block-color',id+1)
    blocks.innerHTML = `
    <img width="200px", height="140px", src="${el.image}" alt="">
    <div class="title" display:flex;>${el.title}      ____${el.title}
   </div>
   <button class="btn">${el.button}</button>
   `
    fragment.append (blocks)
        })
        return fragment
       }
       document.body.append(container);
    container.append(renderBlock());








// let container = document.createElement ('div')
// container.classList.add =('container')

// const renderBlock =()=>{
//     let fragment = new DocumentFragment();
//     data.map((el,id)=>{
//         console.log(el);
// let block = document.createElement('div')
// block.className='item';
// block.setAttribute('block-color',id+1)
// block.innerHTML = `<div text align="center",>${el.title}</div>
// <img width="160px", height="120px", src="${el.image}" alt="">
// <h1 class="text">${el.description}</h1>
// `
// fragment.append (block)
//     })
//     return fragment
//    }
//    document.body.append(container);
// container.append(renderBlock());

