function search() {
    const searchInput = document.getElementById('searchInput');
    const searchableElements = document.querySelectorAll('.searchable');
    const searchErrorMessage = document.getElementById('searchErrorMessage');
  
    const searchText = searchInput.value.trim().toLowerCase();
  
    if (searchText) {
      const matchingElement = Array.from(searchableElements).find((element) =>
        element.textContent.toLowerCase().includes(searchText)
      );
  
      if (matchingElement) {
        matchingElement.scrollIntoView({ behavior: 'smooth' });
        hideErrorMessage();
      } else {
        showErrorMessage(`No matches found for "${searchText}"`);
      }
    }
  }
  
  function showErrorMessage(message) {
    const searchErrorMessage = document.getElementById('searchErrorMessage');
    searchErrorMessage.textContent = message;
    searchErrorMessage.classList.remove('hidden');
  }
  
  function hideErrorMessage() {
    const searchErrorMessage = document.getElementById('searchErrorMessage');
    searchErrorMessage.classList.add('hidden');
  }


// Function to handle posting a comment
function postComment() {
  const commentInput = document.getElementById("comment-input").value.trim();
  const commentList = document.getElementById("comment-list");

  if (commentInput !== "") {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.innerHTML = `<p>${commentInput}</p>`;
      commentList.appendChild(commentElement);

      // Clear comment input after posting
      document.getElementById("comment-input").value = "";
  } else {
      alert("Please enter a comment before posting.");
  }
}

// Event listener for comment button
document.getElementById("comment-button").addEventListener("click", postComment);

