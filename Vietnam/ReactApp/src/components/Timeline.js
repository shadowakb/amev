import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Timeline = ({ dayData, onLocationSelect, selectedLocation }) => {
  const { t, isHindi } = useLanguage();
  const [expandedActivities, setExpandedActivities] = useState(new Set());

  const toggleActivity = (timeOfDay, index) => {
    const key = `${timeOfDay}-${index}`;
    const newExpanded = new Set(expandedActivities);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedActivities(newExpanded);
  };

  const renderTimeSection = (timeOfDay, activities) => {
    if (!activities || activities.length === 0) return null;

    return (
      <div className="timeline-section">
        <div className="timeline-section-header">
          <h3 className="timeline-time-label">{t(`${timeOfDay}Label`)}</h3>
        </div>
        
        <div className="timeline-activities">
          {activities.map((activity, index) => {
            const key = `${timeOfDay}-${index}`;
            const isExpanded = expandedActivities.has(key);
            const text = isHindi ? activity.text_hi || activity.text : activity.text;
            const description = isHindi ? activity.description_hi || activity.description : activity.description;
            
            return (
              <div key={index} className="timeline-activity">
                <div className="timeline-activity-marker">
                  <div className="timeline-dot"></div>
                  {index < activities.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-activity-content">
                  <div 
                    className="timeline-activity-header"
                    onClick={() => toggleActivity(timeOfDay, index)}
                  >
                    <h4 className="timeline-activity-title">{text}</h4>
                    <button className="timeline-expand-button">
                      {isExpanded ? '−' : '+'}
                    </button>
                  </div>
                  
                  {isExpanded && description && (
                    <div className="timeline-activity-description">
                      <p>{description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2>Daily Timeline</h2>
      </div>
      
      <div className="timeline-content">
        {renderTimeSection('morning', dayData.morning)}
        {renderTimeSection('afternoon', dayData.afternoon)}
        {renderTimeSection('evening', dayData.evening)}
      </div>
    </div>
  );
};

export default Timeline;
