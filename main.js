const url = "https://jsonplaceholder.typicode.com/posts"
const url2 = "https://jsonplaceholder.typicode.com/comments"
const url3 = "https://jsonplaceholder.typicode.com/posts"
const url4 = "https://jsonplaceholder.typicode.com/posts"
const url5 = "https://jsonplaceholder.typicode.com/posts"
const tableIds = document.querySelectorAll('.table-id')
const tableTitles = document.querySelectorAll('.table-title')
const tableBodys = document.querySelectorAll('.table-body')
const tableUserIds = document.querySelectorAll('.table-user-id')

const request = new XMLHttpRequest()
request.open("GET", url)
request.responseType = 'json'
request.send()


request.addEventListener("load" , () => {2
    if (request.status) {
       let data = request.response.slice(0,20)
       let tbody = document.querySelector('tbody')

       for (let i = 0; i < data.length; i++) {
            console.log(data[i].userId)
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <th scope="row" class="table-user-id">${data[i].userId}</th>
                <td class="table-id">${data[i].id}</td>
                <td class="table-title">${data[i].title.slice(0 , 40)}</td>
                <td class="table-body">${data[i].body.slice(0 , 40)}</td>
            `
            console.log(tr)
            tbody.append(tr)
       }
    }
})
