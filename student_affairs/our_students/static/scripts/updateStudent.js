function confirmDelete() {
    if (confirm("Are you sure you want to delete this student? This action can not be undone!")) {
      document.getElementsByClassName("delete-button").submit();
    }
  }