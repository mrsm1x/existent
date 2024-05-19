// Simulate a loading delay
window.onload = function() {
    setTimeout(showPage, 3000);
};

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "flex";
}

function generateRandomString(length) {
    const characters = 'abcdef0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateLink() {
    const link = "https://example.com/" + generateRandomString(10);
    navigator.clipboard.writeText(link).then(() => {
        alert("скопировано: " + link);
    });
}

function generateCode() {
    const code = generateRandomString(24);
    navigator.clipboard.writeText(code).then(() => {
        alert("скопировано: " + code);
    });
}
