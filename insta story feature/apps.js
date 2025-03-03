// Story Data
const stories = [
    { dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", story: "ans.jpg" },
    { dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500", story: "IMG-20250206-WA0018.jpg" },
    { dp: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500", story: "17.jpg" },
    { dp: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500", story: "1721239742904.jpg" },
    { dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500", story: "anishans_-20250108-0003.webp" },
    { dp: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=500", story: "anishans_-20250108-0001.webp" }
];

const mainStory = document.querySelector("#main-story");
const fullStory = document.querySelector("#full_story");
const closeStory = document.querySelector("#closeStory");

// Generate Story Thumbnails
let storyHTML = "";
stories.forEach((elem, idx) => {
    storyHTML += `
        <div id="storys" data-id="${idx}">
            <img src="${elem.dp}" alt="Story ${idx}" />
        </div>`;
});
mainStory.innerHTML = storyHTML;

// Show Full Story
mainStory.addEventListener("click", (event) => {
    const storyId = event.target.closest("#storys")?.getAttribute("data-id");
    if (storyId !== null) {
        fullStory.style.display = "flex";
        fullStory.style.backgroundImage = `url(${stories[storyId].story})`;

        // Auto-close after 3 seconds
        setTimeout(() => {
            fullStory.style.display = "none";
        }, 3000);
    }
});

// Close Story Manually
closeStory.addEventListener("click", () => {
    fullStory.style.display = "none";
});
