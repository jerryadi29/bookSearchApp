
// $(".content").click(function(){
//     window.location.pathname="/bootstarp2.html";
//     console.log(window.location)
 
// })


var outputList=document.getElementById("list-output");
var bookUrl="https://www.googleapis.com/books/v1/volumes?q=";
var placeholder='<img src="https://via.placeholder.com/150">';
var searchdata;

var called=false;
var filter=false;
let container

var filter=document.getElementById("filter")
            filter.addEventListener("click",()=>{
                alert("hi")
            })

$("#search").click(function(){
    
    searchdata=$("#search-box").val();
  

    if(searchdata==="" || searchdata===null){
        alert("nothing to display");
    } 
  
    console.log(searchdata,bookUrl+searchdata)
        $.ajax({
            url:bookUrl+searchdata,
            method:'GET',
            success:function(data){
                var items=data.items;
              
                

                if(called){
                   
                     while(container.firstChild){
                         container.removeChild(container.firstChild)
                         
                     }
                
                 } 
                 console.log(items.length/2)
                  
              
                for(let item in items){

                    console.log(item)
                    
                    var details=items[item]
                 
                    var volumeInfo=details.volumeInfo
                    var subTitle=volumeInfo.subtitle;
                    var title=volumeInfo.title;
                    var imgPreview=volumeInfo.imageLinks.thumbnail;
                    var author=volumeInfo.authors;


                     container=document.getElementById("container")
                    var div=document.createElement("div")
                    div.setAttribute("class","shadow-lg p-3 mb-5 bg-white rounded ")
                    div.setAttribute("class","shadow-lg p-3 mb-5 bg-white rounded ")
                    var heading=document.createElement("h6")
                    var img=document.createElement("img")
                   
                    heading.innerText=title;

               
                    
                        div.appendChild(heading)
                        img.setAttribute("src",imgPreview)
                         div.appendChild(img)
    
                         div.style.height="300px";
                         div.style.width="180px";
                         div.style.margin="15px";
                        div.append("author  :"+`${(function(){
                           if(author.length>1) {
                               return author[0]
                           }
                           else {
                               return author;
                           }
                        })()}`)
                      
                       container.append(div)
                       called=true;
                      
                    
                }
               
                
            }
        })
    


})

