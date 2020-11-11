

const renderApts = function () {
    $('#results').empty()
    $.ajax({
        method: 'GET',
        url: `https://randomuser.me/api/?results=100`,
        success: function (response) {
            $('#results').empty()
            let data = response.results
            let info = response.info
            console.log(data)
            const people = data.map(p => { return {firstName: p.name.first, lastName: p.name.last, email: p.email, cell: p.cell, age: p.dob.age, id: p.id.value, photo: p.picture.medium}})
            console.log(people) 
            var source = $('#store-template').html();
            var template = Handlebars.compile(source);
            const newHTML = template({people});
            $('#results').append(newHTML);
            
        },
        error: function (xhr, text, error) {
            console.log('error');
        }
    
    })
    
    
}

renderApts() 

