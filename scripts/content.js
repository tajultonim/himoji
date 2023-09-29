const observeUrlChange = () => {
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver((mutations) => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
      if (document.location.href.includes("group-table")) {
        observeAll();
      }
    }
  });
  observer.observe(body, { childList: true, subtree: true });
};

function observeAll() {
  var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      let overlay = document.querySelector(".ReactModal__Overlay");
      if (overlay) {
        if (overlay.innerHTML.includes("React with premium emojis")) {
          overlay.parentElement.remove();
        }
      }
      let ico = document.querySelectorAll(".sc-cXlbRe.eSzGXv");
      if (ico.length) {
        ico.forEach((i) => {
          if (i.children.length == 2) {
            let u0 = i.children[0].src;
            let u1 = i.children[1].src;
            if (u0 != u1) {
              i.children[1].src = u0;
            }
          }
        });
      }

      let plains = document.querySelectorAll(".sc-jGyvXW.lnCyMF");
      if (plains.length) {
        if (!plains[0].classList.contains("pro")) {
          plains.forEach((plain) => {
            nel = plain.cloneNode(true);
            nel.classList.add("pro");
            nel.onclick = function (e) {
              sendEmoji(e.target.innerHTML);
            };
            plain.replaceWith(nel);
          });
        }
      }

      let list = document.querySelector(".gtmfdo");
      if (list) {
        list.style.opacity = "1";
        if (!list.lastChild.classList.contains("pro")) {
          Array.from(list.children).forEach((el) => {
            el.classList.add("pro");
            if (el.children.length == 1) {
              let nel = el.children[0].cloneNode(true);
              nel.addEventListener("click", (e) => {
                sendEmoji(e.target.src.split("/")[4].split(".")[0]);
              });
              el.appendChild(nel);
            }
            el.children[0].style.display = "none";
          });
        }
      }
    });
  });

  mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.data) {
    localStorage.setItem("roomId", message.data);
  }
});

function sendEmoji(emoji) {
  let token = localStorage.getItem("jwt");
  let roomId = localStorage.getItem("roomId");
  fetch(`https://elb.hilokal.com/group-call/${roomId}/emoji`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emoji: emoji,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("something went wrong");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Handle the JSON data here
      console.log("Data:", data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
  document.querySelector(".room-emoji-button").click();
}

window.onload = observeUrlChange;
