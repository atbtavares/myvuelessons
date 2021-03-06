var app = new Vue({
   el: '#app',
   data: {
     product: 'Socks',
     image: 'socks.jpg',
     altText: 'A pair of socks',
     link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
     onSale: true,
     outStock: true,
     details: ["80% cotton", "20% poliester", "Gender-neutral"],
     variants: [
       {
         variantId:2234,
         variantColor: 'green'
       },
       {
        variantId:2235,
        variantColor: 'blue'
       }
     ],
     sizes: [
        {
          sizeId: 2239,
          sizeDescription: "Small"
        }, 
        {
          sizeId: 2236,
          sizeDescription:"Medium"
        },
        {
          sizeId: 2237,
          sizeDescription: "Large"
        }, 
        {
          sizeId: 2238,
          sizeDescription:"XL"
        }
      ]
   }
})

