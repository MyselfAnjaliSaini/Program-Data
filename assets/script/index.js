document.body.onload = function () {
    appendChild(0);
}

function myFunction() {
    let child = $('.outer_div .main').length;
    $('#output').html(function(i, val) { return val*1+1 });

    if ( child<myObject.length) {
        appendChild(child);
    }
    else
    {
        alert("No more people!");
    }
};


function appendChild(child) {
    let object = myObject[child];
    let childDiv = ` <div class="main">
                        <div class="left">
                            <p class="text_3">${child + 1}</p>
                        </div>
                        <div class="right">
                            <div class="inner in_top">
                                <span class="text_2">Name: &nbsp;</span>
                                <p class="text_2 text_4"> ${object.name}</p>
                            </div>
                            <div class="inner in_bottom">
                                <span class="text_2">Location: &nbsp;</span>
                                <p class="text_2 text_4"> ${object.location}</p>
                            </div>
                        </div>
                        </div>
                    `;
    $('.outer_div').append(childDiv);
}

var myObject =
    [
        {
            "name": "John Smith",
            "location": "New York, NY"
        },
        {
            "name": "Jane Doe",
            "location": "Los Angeles, CA"
        },
        {
            "name": "Bob Johnson",
            "location": "Chicago, IL"
        },
        {
            "name": "Emily Davis",
            "location": "Houston, TX"
        },
        {
            "name": "Michael Brown",
            "location": "Phoenix, AZ"
        },
        {
            "name": "Sarah Miller",
            "location": "Philadelphia, PA"
        },
        {
            "name": "David Garcia",
            "location": "San Antonio, TX"
        },
        {
            "name": "Jessica Rodriguez",
            "location": "San Diego, CA"
        },
        {
            "name": "Mark Wilson",
            "location": "Dallas, TX"
        },
        {
            "name": "Elizabeth Martinez",
            "location": "San Jose, CA"
        },
        {
            "name": "Joshua Hernandez",
            "location": "Austin, TX"
        },
        {
            "name": "Karen Moore",
            "location": "Jacksonville, FL"
        },
        {
            "name": "Brian Jackson",
            "location": "Fort Worth, TX"
        },
        {
            "name": "Heather Anderson",
            "location": "Columbus, OH"
        },
        {
            "name": "Teresa Thomas",
            "location": "Charlotte, NC"
        },
        {
            "name": "Dennis Mitchell",
            "location": "Indianapolis, IN"
        },
        {
            "name": "Cynthia Lee",
            "location": "Seattle, WA"
        },
        {
            "name": "Adam Hall",
            "location": "Denver, CO"
        },
        {
            "name": "Nancy Allen",
            "location": "El Paso, TX"
        },
        {
            "name": "Lisa King",
            "location": "Washington, DC"
        },
        {
            "name": "William Wright",
            "location": "Boston, MA"
        },
        {
            "name": "Mary Scott",
            "location": "Nashville, TN"
        },
        {
            "name": "Kathryn Green",
            "location": "Portland, OR"
        },
        {
            "name": "Gerald Baker",
            "location": "Vancouver, BC"
        },
        {
            "name": "Eric Cooper",
            "location": "Sacramento, CA"
        },
        {
            "name": "Stephanie Gomez",
            "location": "Oklahoma City, OK"
        },
        {
            "name": "Edward Kelly",
            "location": "Tulsa, OK"
        },
        {
            "name": "Ashley Sanders",
            "location": "Winnipeg, MB"
        }
    ] 
