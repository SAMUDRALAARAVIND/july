const apiKey = "AIzaSyC0lDc68z2wZ19AT7_ST7RQ2833ZIm1IyE" ;
const baseUrl = `https://www.googleapis.com/youtube/v3`;

async function fetchChannelDetails(channelId = "UCwlt7XMFAYUkqw84XPhZxUg"){
    let url = `${baseUrl}/channels?key=${apiKey}&part=snippet,statistics&id=${channelId}`
    const response = await fetch(url);
    const result = await response.json();
    return result ;
}

async function fetchVideoDetails(videoId = "28ewOqp-5ds") {
    let url = `${baseUrl}/videos?key=${apiKey}&part=snippet,contentDetails,statistics&id=${videoId}`;

    const response = await fetch(url, {method: "GET"}); 
    const videoInfo = await response.json();
    const channelDetails = await fetchChannelDetails(videoInfo.items[0].snippet.channelId);
    addDeatailsOntoDOM(videoInfo, channelDetails)
}

function addDeatailsOntoDOM(videoInfo, channelDetails) {
    /*
        <div id="container">
        <div id="video">

        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae.</p>
        <div class="statistics">
            <div class="left">
                576,969 views . Oct 8, 2021
            </div>
            <div class="right">
                <div>
                    <span class="material-icons">
                        thumb_up
                    </span>
                    <span>1.7K</span>
                </div>
                <div>
                    <span class="material-icons">
                        thumb_down
                    </span>
                    <span>2.8K</span>
                </div>
            </div>
        </div>
        <div class="channel-container">
            <div class="left">
                <img src="https://i.ytimg.com/vi/ER9SspLe4Hg/default.jpg" alt="">
                <div>
                    <span>Marcus Levin</span>
                    <span style="color: #AAA">1.2M subscribers</span>
                </div>
            </div>
            <button class="right">Subscribe</button>
        </div>
    </div>
    */
   const container = document.createElement("div");
   container.id = "container"; 

   container.innerHTML = `
   <div id="video">

   </div>
   <p>${videoInfo.items[0].snippet.title}</p>
   <div class="statistics">
       <div class="left">
           ${videoInfo.items[0].statistics.viewCount}
       </div>
       <div class="right">
           <div>
               <span class="material-icons">
                   thumb_up
               </span>
               <span>${videoInfo.items[0].statistics.likeCount}</span>
           </div>
           <div>
               <span class="material-icons">
                   thumb_down
               </span>
               <span>${"NA"}</span>
           </div>
       </div>
   </div>
   <div class="channel-container">
       <div class="left">
           <img src="${channelDetails.items[0].snippet.thumbnails.high.url}" alt="">
           <div>
               <span>${channelDetails.items[0].snippet.title}</span>
               <span style="color: #AAA">${channelDetails.items[0].statistics.subscriberCount}</span>
           </div>
       </div>
       <button class="right">Subscribe</button>
   </div>
   `

   document.body.appendChild(container)
}

fetchVideoDetails();