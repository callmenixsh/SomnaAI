import React from 'react';

const Science = () => (
  <section className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
    <h2 className="text-4xl font-bold mb-8 text-white text-center">
      The Science of Sleep
    </h2>

    <p className="mb-10 text-lg leading-relaxed text-center">
      Sleep is more than rest—it's a rhythmic, biological necessity essential for memory, healing, and mental clarity. Understanding how it works helps us harness its full power.
    </p>

    {/* Sleep Cycle Diagram */}
    <div className="mb-12 text-center">
      <img
        src="https://www.simplypsychology.org/wp-content/uploads/sleep-stages-1024x819.jpeg"
        alt="Sleep Cycle Diagram showing REM and Non-REM stages"
        className="rounded-xl shadow-xl mx-auto max-w-full"
      />
      <p className="text-sm text-gray-400 mt-2">Sleep cycles alternate between REM and Non-REM stages throughout the night.</p>
    </div>

    {/* Stage Breakdown */}
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Sleep Stages</h3>
    <p className="mb-6">
      Your sleep is structured in cycles lasting about 90–110 minutes. Each cycle passes through multiple stages:
    </p>

    <ul className="list-disc ml-6 space-y-4 mb-10">
      <li>
        <strong>Stage 1 (Light Sleep):</strong> Transition phase—your heartbeat, breathing, and eye movements slow. Lasts just a few minutes.
      </li>
      <li>
        <strong>Stage 2:</strong> Your body temperature drops, eye movement stops, and brain waves become slower with occasional bursts. Most of your sleep time is spent here.
      </li>
      <li>
        <strong>Stage 3 & 4 (Deep Sleep):</strong> Critical for recovery and regeneration. Growth hormone is released, and the body repairs tissue and strengthens the immune system.
      </li>
      <li>
        <strong>REM (Rapid Eye Movement):</strong> Brain becomes active, vivid dreams occur, and memory consolidation happens. Muscles are temporarily paralyzed.
      </li>
    </ul>

    {/* Architecture Importance */}
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Why Sleep Cycles Matter</h3>
    <p className="mb-6">
      The timing and quality of each stage matter. Cutting sleep short affects:
    </p>
    <ul className="list-disc ml-6 space-y-3 mb-10">
      <li><strong>Memory Formation:</strong> REM helps store and process emotional and procedural memories.</li>
      <li><strong>Physical Healing:</strong> Deep sleep boosts immune function and supports muscle/tissue recovery.</li>
      <li><strong>Mood Regulation:</strong> Lack of REM is linked to anxiety, irritability, and emotional instability.</li>
    </ul>

    {/* Circadian Clock */}
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">The Circadian Rhythm</h3>
    <p className="mb-10">
      Your brain has an internal 24-hour clock synced by light exposure. Disruption of this rhythm (like using screens at night or jet lag) affects hormone levels and delays REM sleep, leading to fragmented rest.
    </p>

    {/* Sleep Tips */}
    <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Optimizing Your Sleep</h3>
    <ul className="list-disc ml-6 space-y-3">
      <li>Go to bed and wake up at consistent times—even on weekends.</li>
      <li>Avoid caffeine and alcohol 4–6 hours before bed.</li>
      <li>Use blackout curtains and avoid blue light screens 1 hour before sleep.</li>
      <li>Keep your room cool (around 18–20°C), quiet, and dark.</li>
      <li>Wind down with meditation, soft music, or reading.</li>
    </ul>
  </section>
);

export default Science;
