
export default {
    cloudinaryUrlRegex,
}


// cloudinary-url-regex
// https://regexr.com/3d83n EXAMPLE AND EXPLAIN

function cloudinaryUrlRegex(url) {
    const CLOUDINARY_REGEX = /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video)\/)?(?:(upload|fetch)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;
    // const url = 'http://res.cloudinary.com/oz/image/upload/v1454951830/moments/musicreach/f3432155-1be9-4510-9c3a-c1672c21fc89/f5de39a0-7ad0-48de-b53b-1d148856bcb8_540_pv.jpg';
    const matches = CLOUDINARY_REGEX.exec(url);
    // console.log(matches);
}