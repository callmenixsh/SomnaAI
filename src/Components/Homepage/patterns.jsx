import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const Patterns = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const useDummy = true;

  useEffect(() => {
    const dummyData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      positive: [3, 5, 7, 8],
      negative: [5, 4, 3, 2],
      neutral: [2, 3, 3, 4],
    };

    const loadData = useDummy
      ? Promise.resolve(dummyData)
      : fetch('/api/emotion-analysis').then((res) => res.json());

    loadData
      .then((data) => {
        if (chartRef.current) {
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          chartInstanceRef.current = new Chart(chartRef.current, {
            type: 'line',
            data: {
              labels: data.labels,
              datasets: [
                {
                  label: 'Positive',
                  data: data.positive,
                  borderColor: '#4ade80', // green-400
                  backgroundColor: 'rgba(74, 222, 128, 0.2)',
                  fill: true,
                  tension: 0.3,
                },
                {
                  label: 'Negative',
                  data: data.negative,
                  borderColor: '#f87171', // red-400
                  backgroundColor: 'rgba(248, 113, 113, 0.2)',
                  fill: true,
                  tension: 0.3,
                },
                {
                  label: 'Neutral',
                  data: data.neutral,
                  borderColor: '#60a5fa', // blue-400
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  fill: true,
                  tension: 0.3,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: '#d1d5db', // text-gray-300
                  },
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  suggestedMax: 10,
                  ticks: { stepSize: 2, color: '#d1d5db' },
                  grid: { color: '#2a2438' },
                },
                x: {
                  ticks: { color: '#d1d5db' },
                  grid: { color: '#2a2438' },
                },
              },
            },
          });
        }
      })
      .catch((err) => console.error('Failed to load chart data:', err));
  }, []);

  return (
    <section className="mb-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Dream Patterns & Insights</h2>
        <p className="text-lg text-gray-300">
          Discover recurring themes and emotional patterns in your subconscious.
        </p>
      </div>

      <div className="bg-[#1f1b36] rounded-xl p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Theme Frequencies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Common Themes</h3>
            <div className="space-y-4">
              {[
                { label: 'Flying Dreams', color: 'indigo-500', width: '75%', count: 12 },
                { label: 'Meeting Strangers', color: 'purple-500', width: '60%', count: 8 },
                { label: 'Lost Items', color: 'pink-500', width: '40%', count: 5 },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="font-medium mb-1">{item.label}</p>
                  <div className="w-full bg-[#2a2438] rounded-full h-2">
                    <div
                      className={`bg-${item.color} h-2 rounded-full`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Present in {item.count} of your last 30 dreams
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Emotional Trends Chart */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Emotional Trends</h3>
            <div className="relative h-64">
              <canvas ref={chartRef} className="h-full w-full" />
            </div>
            <p className="text-sm text-gray-300 mt-2">
              Emotional composition of your dreams across the last 4 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patterns;
