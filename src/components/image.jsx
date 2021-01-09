import React, { useState, useEffect } from 'react';

//Used React Hooks because it's a more straightforward approach to handling state
const LazyImage = ({ thumbnail, src, ...props }) => {
    //Setting the default state to the thumbnail
    const [imgSrc, setImgSrc] = useState(thumbnail);
    //I use the useEffect hook to defer the loading of the src image
    useEffect(() => {
        if (imgSrc === thumbnail) {
            async function fetchImg() {
                const response = await fetch(src);
                //I'm going to convert the src url into binary data 
                const myBlob = await response.blob();
                //I create a FileReader object to read the contents of the blob
                const file = new FileReader(myBlob);
                //Once read successfully I set the state as the blob's contents
                file.onload = function () {
                    setImgSrc(this.result)
                };
                //result turns into new data url
                file.readAsDataURL(myBlob)
            }
            fetchImg(src);
        }
    }, [imgSrc, src, thumbnail])
    //return image element with new data url
    return <img alt={props.alt || 'Nike shoes'} {...{ src: imgSrc, ...props }} />;
}

export default LazyImage;