export interface Cart {
    count:number,
    price:number,
    product:InnerProduct
  
  
  }
  interface InnerProduct{
    title:string,
    imageCover:string,
    id:string,
    category:Category
  
  }
  interface Category{
    name:string
  }
  

