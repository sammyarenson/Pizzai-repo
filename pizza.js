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
  //type instance functions below
  sizeCost(){
    if(this.size[0]){
      price=7.99;
      return price

    }
    if(this.size[1]){
      price=9.99
      return price

    }
    if(this.size[2]){
      price=12.99
      return price
    }
    if(this.size[3]){
      price=15.99
      return price
    }
  }
toppingcost(top){
  if(top=veggieToppings[]){
    veggie=veggieToppings[]*0.5;
    return veggie
  }
  if(top=meatToppings[]){
    meat=meatToppings[]*0.99;
    return meat
  }
  price()
  totalcost=price+meat+veggie;
    return totalcost
  //type class functions below
  static.promotionalDeal(pizza,percent){
  totalcost=pizza*percent/100;
  return totalcost
  }
}
