var app = new Vue({
   el: '#app',
   data: {
     product: 'Socks',
     image: 'socks.jpg',
     link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
     inStock: true,
     details: ["80% cotton", "20% poliester", "Gender-neutral"],
     variants: [
       {
         variantId:2234,
         variantColor: 'green',
         variantImage:  './socks.jpg'
       },
       {
        variantId:2235,
        variantColor: 'blue',
        variantImage: './socks-blue.jpg'
       }
     ],
     cart: 0
   },
   methods: {
    addToCart: function(){
      this.cart += 1
    },
    rmFromCart: function(){
      if (this.cart != 0)
        this.cart -= 1
    },
    updateProductImage: function(variantImage){
      this.image = variantImage
    }
  }
})

