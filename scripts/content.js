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

      let modal = document.querySelector(".modal");
      if (!modal) {
        let mdl = document.createElement("div");
        mdl.innerHTML = `
        
        <style>
            .ovlay {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: black;
                opacity: 0.3;
                z-index: 9999999999999;
            }
    
            .mwraper {
                display: flex;
                width: 100%;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                margin-top: 200px;
                z-index: 99999999999999;
            }
    
            .mbox {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 300px;
                padding: 30px;
                border-radius: 5px;
                background: rgb(32, 35, 45);
            }
    
            .minput {
                width: 100%;
                height: 30px;
                border-radius: 30px;
                border: none;
                padding-left: 10px;
                padding-right: 10px;
                box-sizing: border-box;
            }
    
            .mbtn {
                height: 30px;
                border-radius: 30px;
                margin-top: 10px;
                background-color: #0362fc;
                color: white;
                padding-left: 10px;
                padding-right: 10px;
                border: none;
                cursor: pointer;
            }

            .hide {
              display: none;
            }
        </style>
        <div class="awrap hide">
        <div class="ovlay"></div>
        <div class="mwraper">
            <div class="mbox">
                <input placeholder="Enter custom emoji" class="minput">
                <button class="mbtn">Send</button>
            </div>
        </div>
        </div>
    `;
        mdl.className = "modal";
        document.body.appendChild(mdl);
        let btn = document.querySelector(".mbtn");
        let inp = document.querySelector(".minput");
        let ovl = document.querySelector(".ovlay");
        ovl.onclick = function () {
          toggleModal();
        };
        inp.addEventListener("keyup", ({ key }) => {
          if (key === "Enter") {
            if (inp.value) {
              sendEmoji(inp.value, true);
              inp.value = "";
              toggleModal();
            } else {
              alert("Bolod! Enter something to send");
            }
          }
        });
        btn.onclick = function () {
          if (inp.value) {
            sendEmoji(inp.value, true);
            inp.value = "";
            toggleModal();
          } else {
            alert("Bolod! Enter something to send");
          }
        };
      }

      let ewrp = document.querySelector(".sc-gyKfoT.bHvSNG");

      if (ewrp) {
        let ebtn = document.querySelector(".c-emoji");
        if (!ebtn) {
          let nel = document.createElement("div");
          nel.onclick = function () {
            toggleModal();
          };
          nel.style.transform = "rotate(180deg)";
          nel.className = "sc-gvSjmx eSYusR c-emoji";
          nel.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="sc-jmQrGM bSEXLr room-emoji-icon" color="#FFFFFF" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: rgb(255, 255, 255);"><path d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"></path></svg>`;
          ewrp.prepend(nel);
        }
      }

      let bel = document.querySelector(".sc-fctJkW.aJDuY");
      if (bel) {
        if (bel.innerHTML.includes("beans") && !bel.classList.contains("pro")) {
          bel.innerHTML = "You have unlimited beans. Have fun.";
          let btn = document.querySelector(
            ".sc-dkdnUF.sc-bhVIhj.dLqREj.iOwMxc"
          );
          let nbtn = btn.cloneNode(true);
          nbtn.style.justifyContent = "center";
          nbtn.classList.remove("iOwMxc");
          nbtn.disabled = false;
          let sldr = document.querySelector(".sc-fIavCj.btUdMd");
          let txt = document.querySelector(".sc-kYWVYA.gnIcBI");
          let isan = document.querySelector("#support-anonymously");
          nbtn.onclick = function () {
            sendBean(sldr.value, txt.value, isan.value);
            sldr.value = 25;
            (txt.value = ""), (isan.value = false);
          };
          btn.replaceWith(nbtn);
          let ico = document.querySelector(".room-bean-button");
          ico.addEventListener("click", function () {
            toogleBean();
          });
          bel.classList.add("pro");
        }
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

      let stl = document.querySelector(".stl");
      if (!stl) {
        let nstl = document.createElement("style");
        nstl.innerHTML = `.hide{display:none;}`;
        nstl.classList.add("stl");
        document.body.appendChild(nstl);
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

function sendEmoji(emoji, b) {
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
  });

  if (!b) {
    document.querySelector(".room-emoji-button").click();
  }
}

function sendBean(n, txt, isan) {
  let token = localStorage.getItem("jwt");
  let roomId = localStorage.getItem("roomId");
  fetch(`https://elb.hilokal.com/group-call/${roomId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: JSON.stringify({
        amount: n,
        isAnonymous: isan,
        message: txt,
      }),
      type: "bean",
      parentId: null,
      image: null,
    }),
  });
  toogleBean();
}

function toogleBean() {
  let d = document.querySelector(".sc-dsQDmV.hTONuU");
  if (d) {
    d.parentElement.parentElement.classList.toggle("hide");
  }
}

function toggleModal() {
  let d = document.querySelector(".awrap");
  if (d) {
    d.classList.toggle("hide");
  }
}

window.onload = observeUrlChange;
