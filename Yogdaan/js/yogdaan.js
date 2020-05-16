const QueryList = document.querySelector('#query-list');
const form = document.querySelector('#add-query');

// create element and render cafe
function renderCafe(doc){
    let tr = document.createElement('tr');
    let State = document.createElement('td');
    let City = document.createElement('td');
    let Day = document.createElement('td');
    let Request = document.createElement('td');
    let cross = document.createElement('Button');
    let green = document.createElement('Button');
    let blue = document.createElement('Button');

    cross.setAttribute("id", "cross1");
    green.setAttribute("id", "cross2");
    blue.setAttribute("id", "cross3");

    tr.setAttribute('data-id', doc.id);
    State.textContent = doc.data().State;
    City.textContent = doc.data().City;
    Day.textContent = doc.data().Day;
    Request.textContent = doc.data().Request;
    cross.textContent = '';
    green.textContent = '';
    blue.textContent = '';

    tr.appendChild(State);
    tr.appendChild(City);
    tr.appendChild(Day);
    tr.appendChild(Request);
    tr.appendChild(cross);
    tr.appendChild(blue);
    tr.appendChild(green);

    QueryList.appendChild(tr);

    // Delete Data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('User').doc(id).delete();
    })

    
}
/*
// getting Data
db.collection('User').orderBy('Day').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
})
*/
// saving Data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('User').add({
        State: form.State.value,
        City: form.City.value,
        Day: form.Day.value,
        Request: form.Request.value
    });
    form.State.value = '';
    form.City.value = '';
    form.Day.value = '';
    form.Request.value = '';
})

// Real time listener
db.collection('User').orderBy('Day').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);
        } else if (change.type == 'removed'){
            let tr = QueryList.querySelector('[data-id=' + change.doc.id + ']');
            QueryList.removeChild(tr);
        }
    });
});