document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. Shared Location Data (Accessible globally in main.js)
     ========================================================================== */
  const mapLocations = [
    {
      id: "perth",
      title: "Perth, Australia",
      coords: [-31.9505, 115.8605],
      description: "PhD Research & Data Science Work",
      image: "./images/perth.jpg",
      details: "Detailed field analysis, data collection, and gait tracking research conducted at the lab.",
      images: [
        "./images/perth1.jpg",
        "./images/perth2.jpg"
      ]
    },
    {
      id: "tokyo",
      title: "Tokyo, Japan",
      coords: [35.6762, 139.6503],
      description: "Conference & Gait Analysis Presentation",
      image: "./images/profile.png",
      details: "Presented computer vision model findings for human motion tracking.",
      images: [
        "./images/profile.png"
      ]
    },
    {
      id: "sydney",
      title: "Sydney, Australia",
      coords: [-33.8688, 151.2093],
      description: "Seminar Presentation",
      image: "./images/profile.png",
      details: "Presented computer vision model findings for human motion tracking.",
      images: [
        "./images/profile.png"
      ]
    },
    {
      id: "canada",
      title: "Toronto, Canada",
      coords: [43.6532, -79.3832],
      description: "Research Collaboration & Seminar",
      image: "./images/canada.jpg",
      details: "Presented findings on medical AI and computer vision models for human motion tracking.",
      images: [
        "./images/canada1.jpg",
        "./images/canada2.jpg"
      ]
    }
  ];

  /* ==========================================================================
     2. Navigation Setup
     ========================================================================== */
  const topbarToggle = document.querySelector(".topbar__toggle");
  const sidebar = document.querySelector(".sidebar");

  if (topbarToggle && sidebar) {
    topbarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
    });
  }

  /* ==========================================================================
     3. Leaflet Map Setup
     ========================================================================== */
  const mapElement = document.getElementById("world-map");

  if (mapElement) {
    const map = L.map("world-map").setView([20, 0], 2);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
      minZoom: 2
    }).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    const customIcon = L.divIcon({
      className: "custom-map-pin",
      html: `<div class="pin-dot"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    mapLocations.forEach((loc) => {
      if (!loc.coords || loc.coords.length !== 2) return;

      const marker = L.marker(loc.coords, { icon: customIcon }).addTo(map);

      const imageHtml = loc.image
        ? `<img src="${loc.image}" alt="${loc.title}" style="width:100%; height:110px; object-fit:cover; border-radius:4px; display:block; margin-bottom:8px;">`
        : "";

      const popupContent = `
        <div class="map-popup">
          ${imageHtml}
          <strong style="display:block; font-size:0.9rem;">${loc.title}</strong>
          <p style="margin:4px 0 0; font-size:0.78rem; line-height:1.3;">${loc.description}</p>
          <span class="map-popup-btn" data-location="${loc.id}">View Details</span>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 220,
        minWidth: 180,
        autoPan: true
      });
    });
  }

  /* ==========================================================================
     4. Modal Event Listener (Simplified direct properties)
     ========================================================================== */
  const modal = document.getElementById("gallery-modal");
  const modalCloseBtn = document.querySelector(".modal__close");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalGrid = document.getElementById("modal-grid");

  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("map-popup-btn")) {
      const locationId = e.target.getAttribute("data-location");
      const locationData = mapLocations.find((item) => item.id === locationId);

      if (locationData && modal) {
        // Set Title
        if (modalTitle) {
          modalTitle.textContent = locationData.title;
        }

        // Set Details Text
        if (modalDetails) {
          modalDetails.textContent = locationData.details || locationData.description || "";
        }

        // Render Images Grid
        if (modalGrid) {
          modalGrid.innerHTML = "";
          const imageList = locationData.images || [];

          if (imageList.length > 0) {
            imageList.forEach((imgSrc) => {
              const img = document.createElement("img");
              img.src = imgSrc;
              img.alt = locationData.title;
              modalGrid.appendChild(img);
            });
          } else {
            modalGrid.innerHTML = "<p style='font-size:0.85rem; color:var(--paper-dim);'>No photos available.</p>";
          }
        }

        // Show Modal
        modal.classList.add("is-active");
      }
    }
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("is-active");
      }
    });
  }
});