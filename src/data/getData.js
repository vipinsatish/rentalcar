
var imagesMap = {};

var images = document.querySelectorAll('.product-image');

console.log(images);

images.forEach(img => {

    if(!imagesMap[img.title]) {
        imagesMap[img.title] = [];
        imagesMap[img.title].push(img.src);
    } else {
        imagesMap[img.title].push(img.src);
    }

});

for (let key in imagesMap) {

    if(imagesMap[key].length === 0) {
        delete imagesMap[key];
    }

    if(!imagesMap[key][0]) {
        imagesMap[key].splice(0,1);
    }


}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

brand
var phones = Object.keys(imagesMap).reduce((acc, key , i) => {

    if(imagesMap[key].length !== 0) {
        var newPhone = {
            
        };
        
    }

    return acc;
}, []);

console.log(JSON.stringify(phones));