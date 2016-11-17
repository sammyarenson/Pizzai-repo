class pizza{
  //type constructor below
  constructor(s,mt,vt){
    this.size=s;
    this.meatToppings=mt;
    this.veggieToppings=vt;
    var size=["S","M","L","XL"];
    var meatToppings=[];
    var veggieToppings=[];
  }
sizeCost(){
  if(this.size[0]){
    return=7.99;

  }
  if(this.size[1]){
    return=9.99;

  }
  if(this.size[2]){
    return=12.99
  }
  if(this.size[3]){
    return=15.99
  }
}

  //type instance functions below



  //type class functions below


}
