const commentInput = document.getElementById('commentInput');
    const addCommentButton = document.getElementById('addComment');
    const todoList = document.getElementById('todoList');

    // Ajouter une tâche à la liste
    addCommentButton.addEventListener('click', () => {
      const taskText = commentInput.value.trim();
      if (taskText) {
        const li = document.createElement('li');
        li.className = 'comment-item';
        li.innerHTML = `
          <span>${taskText}</span>
          <button onclick="this.parentElement.remove()">❌</button>
        `;
        todoList.appendChild(li);
        commentInput.value = '';
      }
    });

    // Optionnel : permettre d'ajouter avec Entrée
    commentInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addCommentButton.click();
      }
    });