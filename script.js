const PRODUCTS = [
{id:1,name:'Aster Noir',style:'Sculpted Rectangle',price:4990,priceLabel:'₹4,990',image:'https://images.pexels.com/photos/36824973/pexels-photo-36824973.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'black',badge:'New'},
{id:2,name:'Solace Gold',style:'Slim Metal Oval',price:5490,priceLabel:'₹5,490',image:'https://images.pexels.com/photos/7858516/pexels-photo-7858516.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'gold',badge:'Best Seller'},
{id:3,name:'Mira Tortoise',style:'Soft Cat-Eye',price:4690,priceLabel:'₹4,690',image:'https://images.pexels.com/photos/29538705/pexels-photo-29538705.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'brown',badge:'Editorial'},
{id:4,name:'Halo Smoke',style:'Round Polarized',price:5990,priceLabel:'₹5,990',image:'https://images.pexels.com/photos/29854185/pexels-photo-29854185.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'smoke',badge:'New'},
{id:5,name:'Vela Black',style:'Sharp Aviator',price:6490,priceLabel:'₹6,490',image:'https://images.pexels.com/photos/19141261/pexels-photo-19141261.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'black',badge:'Limited'},
{id:6,name:'Sora Amber',style:'Amber Oval',price:4390,priceLabel:'₹4,390',image:'https://images.pexels.com/photos/9759713/pexels-photo-9759713.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'amber',badge:'New'},
{id:7,name:'Noir Muse',style:'Oversized Square',price:5790,priceLabel:'₹5,790',image:'https://images.pexels.com/photos/33142573/pexels-photo-33142573.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'black',badge:'Best Seller'},
{id:8,name:'Arc Pearl',style:'Pearl Frame',price:6190,priceLabel:'₹6,190',image:'https://images.pexels.com/photos/27902336/pexels-photo-27902336.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'cream',badge:'Limited'},
{id:9,name:'Luma Rose',style:'Rose Tint',price:4790,priceLabel:'₹4,790',image:'https://images.pexels.com/photos/27066071/pexels-photo-27066071.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'rose',badge:'New'},
{id:10,name:'Axis Smoke',style:'Urban Shield',price:5290,priceLabel:'₹5,290',image:'https://images.pexels.com/photos/36043560/pexels-photo-36043560.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'smoke',badge:'Core'},
{id:11,name:'Cove Brown',style:'Tortoise Classic',price:4590,priceLabel:'₹4,590',image:'https://images.pexels.com/photos/28761951/pexels-photo-28761951.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'brown',badge:'Core'},
{id:12,name:'Nexa Clear',style:'Clear Geometry',price:5190,priceLabel:'₹5,190',image:'https://images.pexels.com/photos/37067026/pexels-photo-37067026.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'clear',badge:'New'},
{id:13,name:'Vanta Ink',style:'Ink Wrap',price:6290,priceLabel:'₹6,290',image:'https://images.pexels.com/photos/19141264/pexels-photo-19141264.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'black',badge:'Limited'},
{id:14,name:'Aero Sand',style:'Sandstone Pilot',price:5390,priceLabel:'₹5,390',image:'https://images.pexels.com/photos/21956677/pexels-photo-21956677.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'sand',badge:'New'},
{id:15,name:'Muse Gold',style:'Gold Frame Oval',price:6590,priceLabel:'₹6,590',image:'https://images.pexels.com/photos/20818056/pexels-photo-20818056.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'gold',badge:'Editorial'},
{id:16,name:'Lumen Mono',style:'Monochrome Square',price:4890,priceLabel:'₹4,890',image:'https://images.pexels.com/photos/19274497/pexels-photo-19274497.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'black',badge:'Core'},
{id:17,name:'Sable Club',style:'Clubmaster Dark',price:5690,priceLabel:'₹5,690',image:'https://images.pexels.com/photos/18669741/pexels-photo-18669741.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'brown',badge:'Best Seller'},
{id:18,name:'Orbit Chrome',style:'Chrome Aviator',price:6890,priceLabel:'₹6,890',image:'https://images.pexels.com/photos/18857640/pexels-photo-18857640.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'silver',badge:'Limited'},
{id:19,name:'Vivid Edit',style:'Graphic Frame',price:4990,priceLabel:'₹4,990',image:'https://images.pexels.com/photos/31259705/pexels-photo-31259705.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'clear',badge:'New'},
{id:20,name:'Dune Frame',style:'Dune Rectangle',price:5490,priceLabel:'₹5,490',image:'https://images.pexels.com/photos/20689005/pexels-photo-20689005.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'sand',badge:'Editorial'},
{id:21,name:'Astra Glass',style:'Glossy Black',price:5790,priceLabel:'₹5,790',image:'https://images.pexels.com/photos/10194883/pexels-photo-10194883.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'black',badge:'Core'},
{id:22,name:'Lido Green',style:'Green Lens Round',price:4690,priceLabel:'₹4,690',image:'https://images.pexels.com/photos/5583998/pexels-photo-5583998.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'green',badge:'New'},
{id:23,name:'Coastline Blue',style:'Ocean Lens',price:5990,priceLabel:'₹5,990',image:'https://images.pexels.com/photos/31259706/pexels-photo-31259706.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'blue',badge:'Limited'},
{id:24,name:'Studio White',style:'White Minimal',price:4490,priceLabel:'₹4,490',image:'https://images.pexels.com/photos/8360292/pexels-photo-8360292.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'white',badge:'Core'},
{id:25,name:'Sol Pink',style:'Pink Resort',price:4790,priceLabel:'₹4,790',image:'https://images.pexels.com/photos/9748518/pexels-photo-9748518.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'rose',badge:'New'},
{id:26,name:'Aurelia',style:'Aureate Cat-Eye',price:6990,priceLabel:'₹6,990',image:'https://images.pexels.com/photos/37074671/pexels-photo-37074671.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'gold',badge:'Editorial'},
{id:27,name:'North Sea',style:'Blue Mirror',price:5790,priceLabel:'₹5,790',image:'https://images.pexels.com/photos/13012096/pexels-photo-13012096.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'blue',badge:'New'},
{id:28,name:'Mono Leaf',style:'Black + Green',price:4990,priceLabel:'₹4,990',image:'https://images.pexels.com/photos/31259697/pexels-photo-31259697.jpeg?auto=compress&cs=tinysrgb&w=2200',tone:'green',badge:'Core'}
];
const FALLBACK='assets/sunglasses-fallback.svg';
const money=n=>'₹'+Number(n).toLocaleString('en-IN');
const CART_KEY='solara-cart-v2';
function safeImage(src){return src.replaceAll('"','&quot;')}
function imgTag(src,alt,cls=''){return `<img class="${cls}" src="${safeImage(src)}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK}'">`}
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch{return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCount()}
function updateCartCount(){const n=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=n)}
function addToCart(id){const p=PRODUCTS.find(x=>x.id===Number(id));if(!p)return;const c=getCart();const item=c.find(x=>x.id===p.id);item?item.qty++:c.push({...p,qty:1});saveCart(c);renderCart();openCart()}
function changeQty(id,d){const c=getCart();const i=c.find(x=>x.id===Number(id));if(!i)return;i.qty+=d;if(i.qty<=0)c.splice(c.indexOf(i),1);saveCart(c);renderCart()}
function removeItem(id){saveCart(getCart().filter(x=>x.id!==Number(id)));renderCart()}
function renderCart(){const box=document.querySelector('#cartItems');if(!box)return;const c=getCart();box.innerHTML=c.length?c.map(i=>`<div class="cart-item">${imgTag(i.image,i.name)}<div><h4>${i.name}</h4><small>${money(i.price)} · ${i.style}</small><div class="qty"><button onclick="changeQty(${i.id},-1)">−</button><b>${i.qty}</b><button onclick="changeQty(${i.id},1)">+</button></div><button class="remove" onclick="removeItem(${i.id})">Remove</button></div><strong>${money(i.price*i.qty)}</strong></div>`).join(''):'<div class="empty"><strong>Your edit is waiting.</strong><br><span>Add a frame and build your look.</span></div>';const total=c.reduce((s,i)=>s+i.price*i.qty,0);const totalEl=document.querySelector('#cartTotal');if(totalEl)totalEl.textContent=money(total)}
function openCart(){document.querySelector('.cart-drawer')?.classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){document.querySelector('.cart-drawer')?.classList.remove('open');document.body.style.overflow=''}
function renderProducts(target='#productsGrid',limit=null){const grid=document.querySelector(target);if(!grid)return;const arr=limit?PRODUCTS.slice(0,limit):PRODUCTS;grid.innerHTML=arr.map(p=>`<article class="product-card reveal" data-tone="${p.tone}"><div class="product-media">${imgTag(p.image,p.name)}<span class="badge">${p.badge}</span><button class="quick" aria-label="Add ${p.name}" onclick="addToCart(${p.id})">+</button></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.style}</p></div><span class="price">${p.priceLabel}</span></div></article>`).join('');observeReveals()}
function observeReveals(){const els=document.querySelectorAll('.reveal:not(.visible)');if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('visible'));return}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}
function setupFilters(){document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const tone=btn.dataset.filter;document.querySelectorAll('#productsGrid .product-card').forEach(card=>{card.style.display=tone==='all'||card.dataset.tone===tone?'':'none'})}))}
function setupNav(){const h=document.querySelector('.hamb'),links=document.querySelector('.navlinks');h?.addEventListener('click',()=>links?.classList.toggle('mobile-open'));document.querySelectorAll('[data-open-cart]').forEach(b=>b.addEventListener('click',openCart));document.querySelectorAll('[data-close-cart]').forEach(b=>b.addEventListener('click',closeCart))}
function setupCursor(){if(matchMedia('(pointer:fine)').matches){const g=document.createElement('div');g.className='cursor-glow';document.body.appendChild(g);window.addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'})}}
function setupHero(){const art=document.querySelector('.hero-art'),img=document.querySelector('.hero-image');if(!art||!img||!matchMedia('(pointer:fine)').matches)return;art.addEventListener('pointermove',e=>{const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;img.style.transform=`rotate(${3+x*5}deg) translate(${x*12}px,${y*12}px) scale(1.035)`});art.addEventListener('pointerleave',()=>img.style.transform='rotate(3deg)')}
function setupScrollMotion(){const els=document.querySelectorAll('[data-parallax]');if(!els.length||matchMedia('(prefers-reduced-motion:reduce)').matches)return;addEventListener('scroll',()=>{const y=scrollY;els.forEach(el=>{const speed=Number(el.dataset.speed||.08);const rect=el.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight)el.style.transform=`translate3d(0,${(innerHeight/2-(rect.top+rect.height/2))*speed}px,0)`})},{passive:true})}
function init(){updateCartCount();renderCart();setupNav();setupCursor();setupHero();setupScrollMotion();observeReveals();renderProducts('#homeProducts',8);renderProducts('#productsGrid');setupFilters()}
function setupLensResponse(){
  const wrap=document.querySelector('#lensResponse');
  if(!wrap)return;
  const status=document.querySelector('#responseStatus');
  const labels={clear:'CLEAR / EVERYDAY LIGHT',smoke:'SMOKE / GLARE CONTROL',amber:'AMBER / WARM CONTRAST',rose:'ROSE / SOFT TINT'};
  document.querySelectorAll('[data-lens]').forEach(btn=>btn.addEventListener('click',()=>{
    const tone=btn.dataset.lens;
    wrap.dataset.tone=tone;
    document.querySelectorAll('[data-lens]').forEach(b=>b.classList.toggle('active',b===btn));
    if(status)status.textContent=labels[tone]||labels.clear;
  }));
}
function setupTopButton(){
  document.querySelectorAll('[data-top]').forEach(btn=>btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})));
}
const _initSolara=init;
init=function(){_initSolara();setupLensResponse();setupTopButton()};

document.addEventListener('DOMContentLoaded',init);
