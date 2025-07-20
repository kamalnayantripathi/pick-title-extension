const button = document.querySelector(".popup-button");
const titleElement = document.querySelector(".title");

button.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const [injectionResult] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: returnTitle,
        })
    console.log(injectionResult)
    titleElement.textContent=injectionResult.result
})

const returnTitle = () => {
    return document.title
}