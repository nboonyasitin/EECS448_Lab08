

function validatePassword(){
    var word1 = document.getElementById("password1").value;
    var word2 = document.getElementById("password2").value;

    if((word1 == word2) && (word1.length >= 8) && (word2.length >= 8))
    {
        console.log(word1);
        console.log(word2);
        alert("Password is verified!");
    }
    else if((word1 != word2))
    {
        console.log(word1);
        console.log(word2);
        alert("Password unverified: Passwords do not match. Please refresh page to try again.");

    }
    else if((word1.length < 8) || (word2.length < 8))
    {
        console.log(word1);
        console.log(word2);
        alert("Password unverified: Passwords must be greater than 8 characters. Please refresh page to try again.");
    }
    
    
}