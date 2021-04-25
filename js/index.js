var hoverlinksdata = {
  shopall: {
    img: 'images/baby-photo-2.png',
    dek: 'High Tech baby products'
  },
  seats: {
    img: 'images/baby-photo.png',
    dek: 'Comfotarble Seats for infants that offer a Variaty of features like motions and articulations.'
  },
  playards: {
    img: 'images/baby-thing-2.png',
    dek: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  feeding: {
    img: 'images/baby-photo.png',
    dek: 'Rem, sint repellat eligendi iste voluptatibus veritatis ut cupiditate sit'
  },
  bassinets: {
    img: 'images/baby-photo-2.png',
    dek: 'voluptatum ex odio quisquam sequi eius vitae, itaque sapiente quia in quibusdam.'
  },
  bath: {
    img: 'images/baby-thing-2.png',
    dek: 'Example 1'
  },
  mobile: {
    img: 'images/baby-photo.png',
    dek: 'Example 2'
  },
  accessories: {
    img: 'images/baby-thing-2.png',
    dek: 'Example 3'
  },
  spareparts: {
    img: 'images/baby-photo-2.png',
    dek: 'Example 4'
  }
}

function createHoverLinksShopDetails() {
  var sidebar = document.getElementById('sidebar');
  var sidebarLinks =  sidebar.childNodes;

  sidebarLinks.forEach(link => {
    if (link.text) {      
      var linkdata = hoverlinksdata[link.text.toLowerCase().replace(/\s/g, '')];
      if (linkdata) {
        link.onmouseover = function (){
          var shopdetails = document.getElementById('shop-details');
          shopdetails.style.display = 'block';
          var shopdetailsimg = document.getElementsByClassName('shop-details-image')[0];
          shopdetailsimg.src = linkdata.img;
          var shopdetailsdek = document.getElementsByClassName('shop-details-dek')[0];      
          shopdetailsdek.innerHTML = linkdata.dek;
        }

        link.onmouseout = function (){
          var shopdetails = document.getElementById('shop-details');
          shopdetails.style.display = 'none';
        }
      }
    }
  });
}

function checkSidebar() {
  var sidebar = document.getElementById('sidebar');
  var menuButton = document.getElementById('menu-button');

  if (sidebar.classList.contains('open')) {
    sidebar.style.left = "-230px";
    sidebar.classList.remove('open');
    menuButton.innerText = 'menu';
  }
  else {
    sidebar.style.left = "0";
    sidebar.classList.add('open');
    menuButton.innerText = 'close';
  }
}

function openSearchbar() {
  var searchbar = document.getElementById('searchbar');

  if (!searchbar.classList.contains('open')) {
    searchbar.style.display = "block";
    searchbar.style.opacity = "1";
    searchbar.classList.add('open');
  }
}

function closeSearchbar() {
  var searchbar = document.getElementById('searchbar');

  if (searchbar.classList.contains('open')) {
    searchbar.style.display = "none";
    searchbar.style.opacity = "0";
    searchbar.classList.remove('open');
  }
}

function checkLocations() {
  var locations = document.getElementById('locations');
  var locationButton = document.getElementById('location-button');

  if (locations.classList.contains('open')) {
    locations.style.display = "none";
    locations.classList.remove('open');
    locationButton.innerHTML = '<i class="material-icons">place</i> United States';
  }
  else {
    locations.style.display = "block";
    locations.classList.add('open');
    locationButton.innerHTML = '<i class="material-icons">close</i>';
  }
}

createHoverLinksShopDetails();
