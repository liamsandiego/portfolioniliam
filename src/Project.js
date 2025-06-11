import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Recipe Cooking Site",
      description: "Just for Cooking.",
      tech: "Vanilla html",
      icon: ".😋"
    },
    {
      title: "Scheduler for Medical Appointment",
      description: "For my Mom",
      tech: "Vanilla html",
      icon: "📋"
    },
    {
      title: "Peer Quest (currently working on)",
      description: "It's a secret",
      tech: "React",
      icon: "⭐"
    }
  ];

  return (
    <section id="projects" style={{
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
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
            My Projects
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
            Some of my recent work, built to solve real-world problems and enhance user experiences.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                height: '12rem',
                backgroundColor: '#f0f4ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                borderRadius: '0.5rem'
              }}>
                <div style={{
                  fontSize: '4rem'
                }}>
                  {project.icon}
                </div>
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginTop: '1rem',
                marginBottom: '0.5rem'
              }}>
                {project.title}
              </h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#e0e7ff',
                color: '#6366f1',
                padding: '0.25rem 0.75rem',
                fontSize: '0.875rem',
                borderRadius: '9999px',
                fontWeight: '500'
              }}>
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;