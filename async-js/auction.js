const container = document.getElementById("container");

/**
 * <div class="card">
            <div class="top">
                <div class="left">
                    <span class="badge">APPROVED</span>
                    <span class="case-number">SK8ANJD</span>
                </div>
                <div class="right">
                    Mar 16, 2023 , 5:30PM
                </div>
            </div>
            <div class="bottom">
                <b>Bellandur Spike Lake</b>
                <span>Some random address in Bangalore 382920</span>
                <span class="price">$ 80</span>
            </div>
        </div>
 */

async function fetchCards() {
  let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
  const response = await fetch(url);
  const data = await response.json();
  appendData(data);
}

function appendData(cardsList) {
  cardsList.forEach((card) => {
    /**
         * {
                "status": "APPROVED",
                "caseNumber": "S230SKAN",
                "date": "Mar 24, 2023, 5:03:24 PM",
                "fromLocation": "Bellenduru spike lake",
                "toLocation": "KHB Colony, Basaveshwar Nagar, Bengaluru, Karnataka, India",
                "fare": "₹ 0"
            }
         */
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
            <div class="top">
                <div class="left">
                    <span class="badge ${card.status.toLowerCase()}">${card.status}</span>
                    <span class="case-number">${card.caseNumber}</span>
                </div>
                <div class="right">${card.date}</div>
            </div>
            <div class="bottom">
                <b>${card.fromLocation}</b>
                <span>${card.toLocation}</span>
                <span class="price">${card.fare}</span>
            </div>`;
    container.appendChild(div);
  });
}

fetchCards();