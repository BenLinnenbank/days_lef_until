const daysLeftContainer = document.querySelector('#days-left-container');
const gif = document.querySelector('#gif');

const calculateDaysLeft = () => {
    const date1 = new Date();
    const date2 = new Date("08/06/2021");

    const differenceInTime = date2.getTime() - date1.getTime();

    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    daysLeftContainer.innerHTML = `ONLY ${differenceInDays.toString()} DAYS LEFT!!!`;
}


const getRandomPartyGIF = async () => {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=4ioDDWCUu8WJPtzMSNtPxCdQQLlDWoff&tag=excited&rating=g');

        const randomPartyGIFObj = await response.json();

        gif.src = await randomPartyGIFObj.data.images.original.url;
    } catch (error) {
        console.error(error);
    }
}

calculateDaysLeft();
getRandomPartyGIF();
