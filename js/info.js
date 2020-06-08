fetch('https://api.github.com/users/rojit1')
    .then((response) => response.json())
    .then((data) => {
        git = data
        // document.getElementById('fullname').innerHTML = git.login

        return fetch('https://api.github.com/users/rojit1/repos')
    }).then((response) => response.json())
    .then((repos) => {

        // <div class="col-md-4">
        //     <div class="card">
        //         <h2 id="project-name"><a href="">Java</a></h2>
        //         <p id="project-description">This is java programs</p>
        //         <li id="project-id">c</li>
        //     </div>
        // </div>

        for (let r of repos) {
            var col = document.createElement("div");
            col.setAttribute('class', 'col-md-4')
            let card = document.createElement('div');
            card.setAttribute('class', 'card')
            let h2 = document.createElement('h2');
            h2.setAttribute("id", "project-name");
            let a = document.createElement('a')
            a.href = r.html_url
            a.target = '_blank'
            a.rel = 'nofollow'
            a.innerHTML = r.name
            h2.appendChild(a)
            let p = document.createElement('p')
            p.innerHTML = r.description
            p.setAttribute("id", "project-description");
            let li = document.createElement('li')
            li.innerHTML = r.language
            p.setAttribute("id", "project-id");
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(li)
            col.appendChild(card)
            document.querySelector('#append-project').appendChild(col)
        }
    })

