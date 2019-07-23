
export default {
    getImgCloudinary, isNotMobile
}

function isNotMobile() {
    if (
      /Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return false;
    } else {
      return true;
    }
}

function getImgCloudinary (cloudName,sourceImage, placeholder = 'https://bulma.io/images/placeholders/128x128.png',settings = '', uploadPreset = 'upload') {
    const imageUrl = _cloudinaryUrlRegex(sourceImage);
    if (!imageUrl) return sourceImage || placeholder
    const imageName = [imageUrl[5], ".", imageUrl[6]].join(""); // RESULT EXAMPLE : 'Yacths/The%20Blue%20Wave/5_onguhp.jpg'
    const newImageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${settings}/${imageName}`;
    return newImageUrl;
    // OUTPUT EXAMPLE :
    // https://res.cloudinary.com/ocean-yachts/image/upload/v1563712228/Yacths/The%20Blue%20Wave/5_onguhp.jpg
}



// cloudinary-url-regex
// https://regexr.com/3d83n EXAMPLE AND EXPLAIN
function _cloudinaryUrlRegex(url) {
    // EXAMPLE :
    // const url = 'http://res.cloudinary.com/oz/image/upload/v1454951830/moments/musicreach/f3432155-1be9-4510-9c3a-c1672c21fc89/f5de39a0-7ad0-48de-b53b-1d148856bcb8_540_pv.jpg';

    const CLOUDINARY_REGEX = /^.+\.cloudinary\.com(?:\/([-,a-zA-Z0-9]{0,})\/)?(?:(image|video)\/)?(?:(upload|fetch)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;
    const matches = CLOUDINARY_REGEX.exec(url);
    // console.log(matches, 'from utill');
    return matches  // return the publicId for the vue addon
}
