function runonclick(){
    var y = document.getElementById('textbox_id').value;
    query({"inputs": y}).then((response) => {
        // Storing data:
        const myJSON = JSON.stringify(response[0]);
        localStorage.setItem("testJSON", myJSON);
        // Retrieving data:
        let text = localStorage.getItem("testJSON");
        let obj = JSON.parse(text);
        document.getElementById("rep").innerHTML = obj.generated_text;
    });
}
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}