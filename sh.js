// ---------------------SIDEPANEL-----------------------------------
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
  load_nav()
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// ---------------------SIDEBAR--------------------------------------
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function OpenNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function CloseNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//----------------------------------------------------------

function logout(){
  alert("You have been successfully logged out !")
}

// ---------------------CART FUNCTIONS---------------------------------

  var total_amt = 0;

  function clearcart()
  {
    localStorage.clear();
    load_nav();
  }

  function add_gold_earing_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 125;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Golden coloured Earings')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_necklace_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 459;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Golden Butterfly necklace')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_watch_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 2999;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : D19 Smart Watch')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_lady_bad_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 329;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Lady Bag')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_bracelete_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 559;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Bracelets for women')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_kids_shoe_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 150;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Kids Girl Ballerinas')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_campus_shoe_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 390;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : CAMPUS shoe')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_women_heels_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 470;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Women Heels BATA')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_comfort_slippers_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 290;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Comfort slippers')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_sandal_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 450;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Women sandal')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }

  function add_men_tshirt_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 350;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Men-Tshirt')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()

  }
  function add_girl_tshirt_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 399;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Girls Fashinable Tshirt')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()

  }
  function add_women_kurta_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 699;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Women Cotton KURTA')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()

  }
  function add_Boys_wear_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 375;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Hopscotch Boys wear')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()

  }
  function add_girls_wear_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 270;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : OMLI Girls wear')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()

  }
  function add_mop_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 650;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : MOP')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_broom_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 79;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Floor cleaning Broom')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_sofa_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 1270;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Classic sofa')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_bedsheet_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 1599;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : 3D printed Bedsheet')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_fan_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 999;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Fan')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_GallonWaterBottle_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 899;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Gallon Water Bottle')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_Philips_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 850;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Philips Trimmer')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_Dinner_Plates_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 1254;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Dinner Plates')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_teaSet_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 999;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Tea Set')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }
  function add_Floor_Wiper_to_cart()
  {
    var total_amt = JSON.parse(localStorage.getItem('total_am')) || 0;
    total_amt += 299;
    var existing = JSON.parse(localStorage.getItem('items')) || [];
    existing.push('<br>Item : Floor Wiper')
    localStorage.setItem('items' , JSON.stringify( existing));
    localStorage.setItem('total_am' , total_amt)
    load_nav()
  }

  function load_nav()
  { var items
     items = JSON.parse(localStorage.getItem("items"));
     document.getElementById('total').innerHTML = JSON.parse(localStorage.getItem("total_am"));;
    document.getElementById('display').innerHTML = items;
  }



  