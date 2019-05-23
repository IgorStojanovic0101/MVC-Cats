var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'slike/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'slike/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'slike/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'slike/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'slike/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};

var octopus={
          getCats:function()
          {
              return model.cats;
          },
          init: function()
          {
            // set our current cat to the first one in the list
             model.currentCat = model.cats[0];

            // tell our views to initialize
             view.init();
            listview.init();
    },
    getName:function()
    {
        return model.currentCat.name;
    },
    UpdateCurentCat:function(cat)
    {
        model.currentCat=cat;
    },
    getCurrentCat:function()
    {
        return model.currentCat;
    },
    getImg:function()
    {
      return model.currentCat.imgSrc;  
    },
    IncrementCat:function()
    {
      model.currentCat.clickCount++;  
       view.render();
    }
};

var view={
    init: function()
    {
     this.host=document.getElementById("main");
     this.selectPart=document.createElement("div");
     this.selectPart.className="SelectCat";
                 this.host.appendChild(this.selectPart);
     this.name=document.createElement("label");
     this.name.className="ime";
                this.host.appendChild(this.name);
     this.clicks=document.createElement("label");
     this.className="clicks";
                this.host.appendChild(this.clicks);
     this.img=document.createElement("img");
     this.img.className="img";
                this.host.appendChild(this.img);
     this.render();
    },
    render: function()
    {
        var current=octopus.getCurrentCat();
      this.name.innerHTML=current.name;
      this.clicks.innerHTML=current.clickCount;
      this.img.src=current.imgSrc;
      this.img.onclick=function()
      {
          octopus.IncrementCat();
        
      };
        
        
    }
    
};

var listview={
    init:function()
    {
        this.cats=octopus.getCats();
        this.selectPart=document.querySelector(".SelectCat");
       this.render();
    },
    render:function()
    {
         for(var i=0;i<this.cats.length;i++)
        {
            var cat=document.createElement("img");
            cat.className="ikonica";
            cat.src=this.cats[i].imgSrc;
            cat.ref=this.cats[i];
            cat.onclick=function()
            {
           var b=this.ref;
           //alert(b);
           octopus.UpdateCurentCat(b);
           view.render();
            };
            this.selectPart.appendChild(cat);
        }
    }
};


