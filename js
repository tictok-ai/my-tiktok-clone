<script src="tictok.js"></script>
document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("uploadVideo");
    const uploadButton = document.getElementById("uploadButton");
    const videoFeed = document.getElementById("videoFeed");

    // Function to handle video upload
    function uploadVideo() {
        if (uploadInput.files.length === 0) return;

        const file = uploadInput.files[0];
        const url = URL.createObjectURL(file);

        // Create video container
        const container = document.createElement("div");
        container.classList.add("video-container");

        // Create video element
        const video = document.createElement("video");
        video.src = url;
        video.controls = false;
        video.loop = true;
        video.muted = true;
        video.autoplay = true;

        // Create like button
        const controls = document.createElement("div");
        controls.classList.add("controls");

        const likeButton = document.createElement("button");
        likeButton.textContent = "❤️ 0";
        let likes = 0;
        likeButton.onclick = () => {
            likes++;
            likeButton.textContent = `❤️ ${likes}`;
        };

        // Append elements
        controls.appendChild(likeButton);
        container.appendChild(video);
        container.appendChild(controls);
        videoFeed.appendChild(container);
    }

    // Function to handle auto-play on scroll
    function handleScroll() {
        const videos = document.querySelectorAll("video");
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    // Add event listeners
    uploadButton.addEventListener("click", uploadVideo);
    videoFeed.addEventListener("scroll", handleScroll);
});
