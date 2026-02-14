import React, { useState, useEffect, useRef } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function generateContributions() {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const weeks = [];
  const date = new Date(oneYearAgo);
  date.setDate(date.getDate() - date.getDay());

  let totalContributions = 0;

  while (date <= today) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const count = Math.random() < 0.4
        ? 0
        : Math.floor(Math.pow(Math.random(), 1.5) * 12);
      totalContributions += count;
      week.push({
        date: new Date(date),
        count,
        level: count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4,
      });
      date.setDate(date.getDate() + 1);
    }
    weeks.push(week);
  }

  return { weeks, totalContributions };
}

function ContributionGraph({ username }) {
  const [data, setData] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    setData(generateContributions());
  }, [username]);

  const handleCellMouseEnter = (e, cell) => {
    const rect = e.target.getBoundingClientRect();
    const dateStr = cell.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const label = cell.count === 0
      ? `No contributions on ${dateStr}`
      : `${cell.count} contribution${cell.count > 1 ? 's' : ''} on ${dateStr}`;

    setTooltip({
      text: label,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  const handleCellMouseLeave = () => {
    setTooltip(null);
  };

  if (!data) return <div style={{ color: 'var(--text-muted)', padding: '16px' }}>Loading graph...</div>;

  const { weeks, totalContributions } = data;

  const monthLabels = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstDay = week[0];
    if (firstDay && firstDay.date.getMonth() !== lastMonth) {
      monthLabels.push({ index: wi, label: MONTHS[firstDay.date.getMonth()] });
      lastMonth = firstDay.date.getMonth();
    }
  });

  return (
    <div className="contribution-section">
      <div className="contribution-header">
        <span className="contribution-title">
          <span className="contribution-count">{totalContributions.toLocaleString()} contributions</span> in the last year
        </span>
        <button style={{ background: 'none', border: 'none', fontSize: 12, color: 'var(--accent-blue)', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }} onClick={() => {}}>View activity</button>
      </div>

      <div className="contribution-graph-wrap">
        <div className="heatmap-container">
          <div className="heatmap-months">
            {monthLabels.map((m, i) => (
              <div
                key={i}
                className="heatmap-month-label"
                style={{ marginLeft: i === 0 ? `${m.index * 12}px` : undefined }}
              >
                {m.label}
              </div>
            ))}
          </div>

          <div className="heatmap-body">
            <div className="heatmap-days-col">
              {DAYS.map((d, i) => (
                <div key={i} className="heatmap-day-label">{d}</div>
              ))}
            </div>

            <div className="heatmap-weeks">
              {weeks.map((week, wi) => (
                <div key={wi} className="heatmap-week">
                  {week.map((cell, di) => (
                    <div
                      key={di}
                      className="heatmap-cell"
                      data-level={cell.level}
                      onMouseEnter={(e) => handleCellMouseEnter(e, cell)}
                      onMouseLeave={handleCellMouseLeave}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="heatmap-legend">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map(l => (
              <div
                key={l}
                className="heatmap-legend-cell"
                style={{
                  backgroundColor: l === 0
                    ? 'var(--contribution-0)'
                    : l === 1 ? 'var(--contribution-1)'
                    : l === 2 ? 'var(--contribution-2)'
                    : l === 3 ? 'var(--contribution-3)'
                    : 'var(--contribution-4)'
                }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      {tooltip && (
        <div
          ref={tooltipRef}
          className="heatmap-tooltip"
          style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -100%)' }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

export default ContributionGraph;
