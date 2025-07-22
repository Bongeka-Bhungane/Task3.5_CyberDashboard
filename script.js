// User Access Bar Chart
const ctx1 = document.getElementById("userAccessChart").getContext("2d");
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Admins", "Active Users", "Guests"],
    datasets: [
      {
        label: "Users",
        data: [2, 10, 4],
        backgroundColor: ["#00ffff", "#00e676", "#ffea00"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// Backup Status Doughnut Chart
const ctx2 = document.getElementById("backupChart").getContext("2d");
new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Successful", "Failed", "Pending"],
    datasets: [
      {
        label: "Backups",
        data: [8, 2, 1],
        backgroundColor: ["#00e676", "#ff3d00", "#ffea00"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
