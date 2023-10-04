
function createNameTag(name) {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.style.backgroundColor = getRandomColor(); 
    const nameContainer = document.createElement("span");
    nameContainer.textContent = "Hello, my name is : " + name;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        tag.remove();
    });

    tag.appendChild(nameContainer);
    tag.appendChild(deleteButton);

    return tag;
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generateName() {
    const nameInput = document.getElementById("nameInput");
    const tagName = nameInput.value.trim();

    if (tagName) {
        const tag = createNameTag(tagName);
        const tagsContainer = document.getElementById("tagsContainer");
        tagsContainer.appendChild(tag);
        nameInput.value = ""; 
    }
}
function clearAllTags() {
    const tagsContainer = document.getElementById("tagsContainer");
    tagsContainer.innerHTML = "";
}
document.getElementById("generateButton").addEventListener("click", generateName);
document.getElementById("clearAllButton").addEventListener("click", clearAllTags);
