function bgColor (color){
	document.body.style.background = color
}

function styleDiv (height, color){
	document.getElementById('div1').style.background = color
	document.getElementById('div1').style.height = height
}

function insertText (text){
	document.getElementById('pt1').innerHTML = text
}

function addListItem(item){
	let listItem = document.createElement('li')
	let textnode = document.createTextNode(item)
	listItem.appendChild(textnode)
	document.getElementById('list').appendChild(listItem)
}

let firstArr = [1,2,3,4,5]

let secondArr = [
{name:'one', type:'num'},
{name:'a', type:'alpha'},
{name:'four', type:'num'},
{name:'fifteen', type:'num'},
{name:'b', type:'alpha'}
]

let mmaped = firstArr.map((x) => x * x)

console.log(mmaped)

let mfiltered = secondArr.filter((x)=> x.type ==='num')

console.log(mfiltered)

let books = [
{author: 'Thomas Pynchon', tittle: 'Bleeding Edge'},
{author: 'Haruki Murakami', tittle: '1Q84'},
{author: 'John D. MacDonald', tittle: 'Nightmare in Pink'},
{author: 'Nicholas Zakas', tittle: 'Understanding Ecmascript 6'}
]

function authSearch(){
	let aName = document.getElementById('authorSearch').value
	let name = books.filter((x) => x.author === aName)
	try{
		document.getElementById('result').innerHTML = 'Yes, we have at least one book by ' + name[0].author
	}
	catch(err){
		document.getElementById('result').innerHTML = 'Sorry, no books by ' + aName
	}
}

function addBook(){
	//function to add books -> Homework

	let bName = document.getElementById('addBook').value
	let aName = document.getElementById('addAuthor').value

	if(bName.trim() === "" || bName === undefined || aName.trim() === "" || aName === undefined){

		document.getElementById('add').innerHTML = 'Please, insert a book name and an author name'
		document.getElementById('addBook').value = ''
		document.getElementById('addAuthor').value = ''
		
	}

	else{
		books.push({author: aName, title: bName})
		document.getElementById('add').innerHTML = 'Book ' + bName + ' by ' + aName + ' added successfully'
		document.getElementById('addBook').value = ''
		document.getElementById('addAuthor').value = ''
	}

}

function showAllBooks(){
	let listItem = document.createElement('li')
	let textnode = document.createTextNode('a book')
	listItem.appendChild(textnode)
	document.getElementById('allTheBooks').appendChild(listItem)
}