async function summarizeNotes() {
  const notes = document.getElementById('notes').value;
  const summaryDiv = document.getElementById('summary');

  // Display loading message
  summaryDiv.innerHTML = 'Summarizing... Please wait.';

  // Call the OpenAI API to summarize notes
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY', // Replace with your API key
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      prompt: `Summarize these study notes into easy-to-understand bullet points: \n\n${notes}`,
      max_tokens: 1000
    })
  });

  const data = await response.json();
  
  // Display the summarized text
  summaryDiv.innerHTML = data.choices[0].text;
}