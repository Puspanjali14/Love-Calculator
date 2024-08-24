function calculateLove() {
    const yourName = document.getElementById("yourName").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();

    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
        return;
    }

    const loveScore = Math.floor(Math.random() * 100) + 1;

    document.getElementById("result").innerHTML = 
        `<span style="color: #ff6b81;">${yourName}</span> and 
        <span style="color: #ff6b81;">${partnerName}</span>'s Love Score: 
        <span style="color: #ff3d6b;">${loveScore}%</span>`;
}
