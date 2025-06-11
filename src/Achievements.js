import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: "VPA's List",
      description: "Maintained high academic performance throughout my Computer Engineering studies.",
      year: "2022-2023",
      icon: "🏆",
      category: "Academic"
    },
    {
      title: "Roblox Game Development",
      description: "Recognized for creating an innovative game ideas with exceptional user experience.",
      year: "2021",
      icon: "💻",
      category: "Project"
    },
    {
      title: "With High Honors",
      description: "Reached High Honors during Senior Highschool.",
      year: "2021",
      icon: "🥇",
      category: "Awards"
    },
    {
      title: "Community Service Award",
      description: "Volunteered to for brigada and fixed and cleaned computers.",
      year: "2025",
      icon: "🤝",
      category: "Service"
    },
    {
      title: "Roblox Developers Reliable Co-developers",
      description: "Helped developers make their game unique in their own way.",
      year: "2024",
      icon: "🎮",
      category: "Games"
    },
    {
      title: "Making my Mom proud",
      description: "Developed a unique medical appointment scheduling system that improved clinic efficiency.",
      year: "2023",
      icon: "💡",
      category: "Innovation"
    }
  ];

  const categories = [...new Set(achievements.map(achievement => achievement.category))];

  return (
    <section id="achievements" style={{
      padding: '5rem 0',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            Achievements
          </h2>
          <div style={{
            marginTop: '0.5rem',
            height: '4px',
            width: '6rem',
            backgroundColor: '#6366f1',
            margin: '0.5rem auto 1rem'
          }}></div>
          <p style={{
            marginTop: '1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '1rem auto 0',
            fontSize: '1.1rem'
          }}>
            Recognition and milestones that highlight my journey in technology and personal growth.
          </p>
        </div>

        {/* Achievement Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '0.75rem',
                padding: '2rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #e5e7eb'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                e.currentTarget.style.backgroundColor = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  lineHeight: '1',
                  flexShrink: 0
                }}>
                  {achievement.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: 0
                    }}>
                      {achievement.title}
                    </h3>
                    <span style={{
                      backgroundColor: '#6366f1',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem',
                      borderRadius: '9999px',
                      fontWeight: '500'
                    }}>
                      {achievement.year}
                    </span>
                  </div>
                  <p style={{
                    color: '#6b7280',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {achievement.description}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#e0e7ff',
                    color: '#6366f1',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    borderRadius: '9999px',
                    fontWeight: '500'
                  }}>
                    {achievement.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div style={{
          backgroundColor: '#f0f4ff',
          borderRadius: '0.75rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '2rem'
          }}>
            Achievement Summary
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem'
          }}>
            {categories.map((category) => {
              const count = achievements.filter(a => a.category === category).length;
              return (
                <div key={category}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#6366f1',
                    marginBottom: '0.5rem'
                  }}>
                    {count}
                  </div>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {category} {count === 1 ? 'Achievement' : 'Achievements'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;