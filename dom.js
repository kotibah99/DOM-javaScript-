var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
































//console.log(document.title);
//console.log(document.URL);
/*****************GET ELEMENT BY  ID******************* */
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header")
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//.innerHTML = '<h3> Hello  </h3>'
//header.style.borderBottom = 'solid 3px #000';

/*      Get Element By className  
var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent= 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
//Gives Error
//items.style.backgroundColor = '#f4f4f4';
for(var i =0 ; i<items.length ; i++)
{
    items[i].style.backgroundColor = '#f4f4f4';
}
*/

/*      Get Element By TagName  
var li = document.getElementsByTagName('li');
console.log(li[1]);
li[1].textContent= 'Hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
//Gives Error
//items.style.backgroundColor = '#f4f4f4';
for(var i =0 ; i<li.length ; i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
}

/*Query Selector */
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 3px red';
 //var input = document.querySelector('input');
// input.value = 'Hello World'

 //var submit = document.querySelector('input[type ="submit"]');
 //submit.value = 'SEND'
/*Query Selector */

/* QuerySelector All
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0 ; i<odd.length ; ++i)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
*/ 
/* travising THE DOM*/ 
//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
///itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

/*parentElement*/
//var itemList = document.querySelector('#items');
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement);

/*childNodes */
//console.log(itemList.childNodes);

/**********************************************************************************/ 
//Create Element

//Create a  DIV
//var newDiv = document.createElement('div');
//Add class
//newDiv.className = 'Hello';
//Add Id
//newDiv.id = 'hello1';
//Add attr
//newDiv.setAttribute('title','Hello Div');
//create textNode
//var newDivText = document.createTextNode('Hello World');
//Add text to Div
//newDiv.appendChild(newDivText);
//console.log(newDiv);

/************************EVENT****************************** */
/*
function buttonClick()
{
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = 'red';
}*/
