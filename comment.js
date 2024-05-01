
const url = "https://jsonplaceholder.typicode.com/comments"
const tablePostId = document.querySelectorAll('.table-post-id')
const tableIdCom = document.querySelectorAll('.table-id-com')
const tableName = document.querySelectorAll('.table-name')
const tableEmail = document.querySelectorAll('.table-email')
const tableBodyCom = document.querySelectorAll('.table-body-com')

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
            <th scope="row" class="table-post-id">${data[i].postId}</th>
            <td class="table-id-com">${data[i].id}</td>
            <td class="table-name">${data[i].name}</td>
            <td class="table-email">${data[i].email}</td>
            <td class="table-body-com">${data[i].body.slice(0 , 20)}</td>`
            console.log(tr)
            tbody.append(tr)
       }
    }
})
