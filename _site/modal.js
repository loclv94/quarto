// Modal functionality for Reveal.js presentations
document.addEventListener("DOMContentLoaded", function () {
  // Create modal overlay if it doesn't exist
  if (!document.getElementById("presentation-modal")) {
    const modalHTML = `
            <div id="presentation-modal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" onclick="closeModal()" aria-label="Close modal">×</button>
                    <iframe id="modal-iframe" class="modal-iframe" src="" title="Presentation" scrolling="no"></iframe>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  // Add event listeners to all presentation buttons
  const presentationButtons = document.querySelectorAll("[data-presentation]");
  presentationButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const presentationUrl = this.getAttribute("data-presentation");
      openModal(presentationUrl);
    });
  });

  // Close modal when clicking outside the iframe
  document
    .getElementById("presentation-modal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Handle window resize to adjust modal content
  window.addEventListener("resize", function () {
    const modal = document.getElementById("presentation-modal");
    if (modal && modal.classList.contains("active")) {
      // Trigger a resize event in the iframe if possible
      const iframe = document.getElementById("modal-iframe");
      if (iframe && iframe.contentWindow) {
        try {
          iframe.contentWindow.dispatchEvent(new Event("resize"));
        } catch (e) {
          // Cross-origin restrictions may prevent this
        }
      }
    }
  });
});

function openModal(presentationUrl) {
  const modal = document.getElementById("presentation-modal");
  const iframe = document.getElementById("modal-iframe");

  // Set the iframe source
  iframe.src = presentationUrl;

  // Show modal with animation
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);

  // Prevent body scrolling
  document.body.style.overflow = "hidden";

  // Handle iframe load to ensure proper scaling
  iframe.onload = function () {
    try {
      // Add responsive meta tag to iframe content if needed
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      let viewport = iframeDoc.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = iframeDoc.createElement("meta");
        viewport.name = "viewport";
        viewport.content =
          "width=device-width, initial-scale=1.0, user-scalable=yes";
        iframeDoc.head.appendChild(viewport);
      }
    } catch (e) {
      // Cross-origin restrictions may prevent this, which is fine
      console.log("Cross-origin iframe - cannot modify content");
    }
  };
}

function closeModal() {
  const modal = document.getElementById("presentation-modal");
  const iframe = document.getElementById("modal-iframe");

  // Hide modal with animation
  modal.classList.remove("active");

  setTimeout(() => {
    modal.style.display = "none";
    iframe.src = ""; // Clear iframe to stop any running presentation
  }, 300);

  // Restore body scrolling
  document.body.style.overflow = "";
}

// Global functions for inline onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
