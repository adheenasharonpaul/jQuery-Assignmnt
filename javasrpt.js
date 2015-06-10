$(document).ready(function () 
{
    
var url = "https://api.github.com/users/mralexgray/repos";
    
$.get(url, function (data, status, xhr) {
        
var tab = document.getElementById("mytab");
        
for (var i = 0; i < data.length; i++)
        
{
            
$('<tr><td width="50"><div align="center"><p name="mytd' + i + '">' + data[i].name + '</p></div></td><td width="70"><div align="center"><p name="mytd' + i + '">' + data[i].full_name + '</p></div></td><td width="50"><div align="center"><p name="mytd' + i + '">' + data[i].size + '</p></div></td><td width="110"><div align="center"><p name="mytd' + i + '">' + data[i].created_at + '</p></div></td><td width="50"><div align="center"><p name="mytd' + i + '">' + data[i].has_issues + '</p></div></td><td width="50"><div align="center"><p name="mytd' + i + '">' + data[i].has_downloads + '</p></div></td><td width="50"><div align="center"><p name="mytd' + i + '">' + data[i].watchers + '</p></div></td><td width="80"><div align="center"><p name="mytd' + i + '">' + data[i].language + '</p></div></td></tr>').appendTo(tab);
        }
        
$("#loadfl").hide();
        
$("#container").show();
   
 });

});



function hglt(val)

{
    
var tablength = document.getElementById("mytab").rows.length;
    
for (var i = 0; i < tablength - 1; i++)
    
{
        
for (var t = 0; t < 8; t++)
        
{
            
document.getElementsByName("mytd" + i)[t].style.color = "black";
        }
    
}
    
for (var i = 0; i < tablength - 1; i++)
    
{
        
var lang = document.getElementsByName("mytd" + i)[7].innerHTML;
        if (lang === val)
        
{
            
for (var t = 0; t < 8; t++)
            
{
                
document.getElementsByName("mytd" + i)[t].style.color = "red";
            }
       
 }
    
}

}


function clr()
{
    
var tablength = document.getElementById("mytab").rows.length;
    
for (var i = 0; i < tablength - 1; i++)
    
{
        
for (var t = 0; t < 8; t++)
        
{
            
document.getElementsByName("mytd" + i)[t].style.color = "black";
        }
    
}


}