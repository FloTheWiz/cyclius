function updateCyclius() {
    const now = Date.now() / 1000; // Current time in seconds
  
    // Periods in seconds
    const threeHours = 60 * 60 * 3;
    const twelveHours = 60 * 60 * 12;
    const twentyFourHours = 60 * 60 * 24;
  
    // Calculate x, y, z values
    const x = Math.sin((now / threeHours) * Math.PI * 2) * 0.15;
    const y = Math.sin((now / twelveHours) * Math.PI * 2) * 0.15;
    const z = Math.sin((now / twentyFourHours) * Math.PI * 2) * 0.15;
  
    // Calculate a, b, c values for slope (cosine)
    const a = Math.cos((now / threeHours) * Math.PI * 2);
    const b = Math.cos((now / twelveHours) * Math.PI * 2);
    const c = Math.cos((now / twentyFourHours) * Math.PI * 2);
  
    // Update each output
    updateOutput('diamond', x, a);
    updateOutput('ruby', y, b);
    updateOutput('jade', z, c);
  }
  
  function updateOutput(id, value, slope) {
    const element = document.getElementById(id);
    const percentage = (value * 100).toFixed(2) + "%";
    const status = slope < 0 ? "decreasing" : slope > 0 ? "increasing" : "extreme edge taste orz";
    const statusClass = slope < 0 ? "decreasing" : slope > 0 ? "increasing" : "edge";
  
    element.innerHTML = `
      <p><strong>${id.charAt(0).toUpperCase() + id.slice(1)}</strong>: ${percentage}</p>
      <p class="${statusClass}">${status}</p>
    `;
  }
  
  // Initial update and interval to refresh every second
  updateCyclius();
  setInterval(updateCyclius, 1000);
  
