// ===============================================================================
// DATA
// Array data that will hold friends
// Initially we just set it equal to a "dumb" friend.
// But you could have it be an empty array as well.
// ===============================================================================


var friendsData = [{
        name: "Donald",
        photo: "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
        scores: [5, 2, 4, 1, 5, 2, 1, 1, 5, 3]
    },
    {
        name: "Melania",
        photo: "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/flotus.png",
        scores: [1, 2, 3, 4, 5, 3, 3, 3, 3, 4]
    },
    {
        name: "Steve",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/1024px-Steve_Jobs_Headshot_2010-CROP.jpg",
        scores: [2, 4, 4, 2, 1, 1, 2, 4, 4, 2]
    },
    {
        name: "The Woz",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Steve_Wozniak.jpg/800px-Steve_Wozniak.jpg",
        scores: [4, 5, 4, 4, 2, 4, 2, 2, 2, 1]
    },
    {
        name: "Chris",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chris_Hardwick_by_Gage_Skidmore_2.jpg/800px-Chris_Hardwick_by_Gage_Skidmore_2.jpg",
        scores: [5, 4, 3, 3, 1, 4, 5, 2, 4, 1]
    },
    {
        name: "Negan",
        photo: "http://images.amcnetworks.com/amc.com/wp-content/uploads/2016/09/the-walking-dead-season-7-negan-morgan-gallery-700.jpg",
        scores: [5, 5, 5, 5, 5, 4, 4, 4, 4, 5]
    },
    {
        name: "Rick",
        photo: "http://images.amcnetworks.com/amc.com/wp-content/uploads/2016/09/the-walking-dead-season-7-rick-lincoln-gallery-700.jpg",
        scores: [5, 5, 1, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "The Flash",
        photo: "https://upload.wikimedia.org/wikipedia/en/a/a4/Barry_Allen_Flash.jpg",
        scores: [2, 3, 4, 5, 1, 2, 5, 2, 4, 5]
    }
]

//Export array to make it available using require
module.exports = friendsData;